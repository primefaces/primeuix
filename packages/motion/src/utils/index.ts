import { getHiddenElementDimensions, isPrefersReducedMotion, setCSSProperty, toMs } from '@primeuix/utils';
import type { MotionClassNamesWithPhase, MotionHooksWithPhase, MotionMetadata, MotionOptions, MotionPhase, MotionState, MotionType } from '../../types';

export const ANIMATION = 'animation';
export const TRANSITION = 'transition';
export const DATA_ATTRS = ['data-enter-phase', 'data-enter-from', 'data-enter-to', 'data-enter-active', 'data-leave-phase', 'data-leave-from', 'data-leave-to', 'data-leave-active'] as const;

/**
 * Determines whether motion effects should be skipped based on the provided options.
 * @param options - The motion options to evaluate.
 * @returns A boolean indicating whether motion should be skipped.
 */
export function shouldSkipMotion(options: MotionOptions | undefined): boolean {
    if (!options) {
        return false;
    }

    return options.disabled || !!(options.safe && isPrefersReducedMotion());
}

/**
 * Merges the provided motion options with the default options.
 * @param inOptions - The motion options to merge.
 * @param defaultOptions - The default motion options.
 * @returns The merged motion options.
 */
export function mergeOptions(inOptions: MotionOptions | undefined, defaultOptions: MotionOptions): MotionOptions {
    if (!inOptions) {
        return defaultOptions;
    }

    return {
        ...inOptions,
        ...(Object.entries(defaultOptions).reduce((acc: Record<string, unknown>, [key, value]) => {
            acc[key] = (inOptions as Record<string, unknown>)[key] ?? value;

            return acc;
        }, {}) as MotionOptions)
    };
}

/**
 * Resolves class names for motion phases based on the provided options.
 * @param options - The motion options containing class names and base name.
 * @returns The resolved class names organized by motion phase.
 */
export function resolveClassNames(options: MotionOptions | undefined): MotionClassNamesWithPhase {
    const { name, enterClass, leaveClass } = options || {};

    return {
        enter: {
            from: enterClass?.from || `${name}-enter-from`,
            to: enterClass?.to || `${name}-enter-to`,
            active: enterClass?.active || `${name}-enter-active`
        },
        leave: {
            from: leaveClass?.from || `${name}-leave-from`,
            to: leaveClass?.to || `${name}-leave-to`,
            active: leaveClass?.active || `${name}-leave-active`
        }
    };
}

/**
 * Retrieves the motion hooks organized by phase based on the provided options.
 * @param options - The motion options containing hooks.
 * @returns The motion hooks organized by phase.
 */
export function getMotionHooks(options: MotionOptions | undefined): MotionHooksWithPhase {
    return {
        enter: {
            onBefore: options?.onBeforeEnter,
            onStart: options?.onEnter,
            onAfter: options?.onAfterEnter,
            onCancelled: options?.onEnterCancelled
        },
        leave: {
            onBefore: options?.onBeforeLeave,
            onStart: options?.onLeave,
            onAfter: options?.onAfterLeave,
            onCancelled: options?.onLeaveCancelled
        }
    };
}

/**
 * Retrieves motion metadata including type, timeout, and count for the given element.
 * @param element - The target element to retrieve motion metadata from.
 * @param expectedType - The expected type of motion ('transition' or 'animation').
 * @returns The motion metadata including type, timeout, and count.
 */
export function getMotionMetadata(element: Element, expectedType?: MotionMetadata['type']): MotionMetadata {
    const styles = window.getComputedStyle(element);

    const getDelaysAndDurations = (type: MotionType): [number[], number[]] => {
        const delays = styles[`${type}Delay`];
        const durations = styles[`${type}Duration`];

        return [delays.split(', ').map(toMs), durations.split(', ').map(toMs)];
    };

    const [transitionDelays, transitionDurations] = getDelaysAndDurations(TRANSITION);
    const [animationDelays, animationDurations] = getDelaysAndDurations(ANIMATION);

    const transitionTimeout = Math.max(...transitionDurations.map((d, i) => d + transitionDelays[i]));
    const animationTimeout = Math.max(...animationDurations.map((d, i) => d + animationDelays[i]));

    let type: MotionMetadata['type'] = undefined;
    let timeout = 0;
    let count = 0;

    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            count = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            count = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? (transitionTimeout > animationTimeout ? TRANSITION : ANIMATION) : undefined;
        count = type ? (type === TRANSITION ? transitionDurations.length : animationDurations.length) : 0;
    }

    return {
        type,
        timeout,
        count
    };
}

/**
 * Resolves the duration for a given animation phase.
 * @param duration - The duration can be a number or an object with `enter` and `leave` properties.
 * @param phase - The phase of the transition/animation, either 'enter' or 'leave'.
 * @returns The resolved duration in milliseconds or null if not specified.
 */
export function resolveDuration(duration: MotionOptions['duration'], phase: MotionPhase): number | null {
    if (typeof duration === 'number') {
        return duration;
    } else if (typeof duration === 'object' && duration[phase] != null) {
        return duration[phase];
    }

    return null;
}

/**
 * Resolves the CSS variable name based on the provided prefix and variable name.
 * @param prefix - An optional prefix for the CSS variable.
 * @param name - The base name of the CSS variable.
 * @returns The resolved CSS variable name in the format '--prefix-name' or '--name' if no prefix is provided.
 */
function resolveCSSVarName(prefix: string | undefined, name: string): string {
    return prefix ? `--${prefix}-${name}` : `--${name}`;
}

/**
 * Sets CSS custom properties for height and/or width on the given element based on the motion options.
 * @param element - The target HTML element.
 * @param options - The motion options.
 * @param value - The value to set for the CSS variables. Can be a string for both or an object with `height` and `width` properties.
 */
export function setDimensionVariables(element: HTMLElement, options: MotionOptions, value: string | { height: string; width: string }): void {
    const { autoHeight, autoWidth, cssVarPrefix } = options;
    const isObject = typeof value === 'object';

    if (autoHeight) {
        setCSSProperty(element, resolveCSSVarName(cssVarPrefix, 'height'), isObject ? value.height : value);
    }

    if (autoWidth) {
        setCSSProperty(element, resolveCSSVarName(cssVarPrefix, 'width'), isObject ? value.width : value);
    }
}

/**
 * Sets CSS custom properties for auto height and/or width on the given element using the element's scroll dimensions.
 * @param element - The target HTML element.
 * @param options - The motion options.
 */
export function setAutoDimensionVariables(element: HTMLElement, options: MotionOptions): void {
    if (!options.autoHeight && !options.autoWidth) return;

    const dimensions = getHiddenElementDimensions(element);

    setDimensionVariables(element, options, {
        height: (element.scrollHeight || dimensions.height) + 'px',
        width: (element.scrollWidth || dimensions.width) + 'px'
    });
}

/**
 * Sets the current motion phase on the given element.
 * @param element - The target HTML element.
 * @param phase - The current motion phase.
 */
export function setMotionPhase(element: HTMLElement, phase: MotionPhase): void {
    element.setAttribute(`data-${phase}-phase`, '');
}

/**
 * Sets the current motion state on the given element.
 * @param element - The target HTML element.
 * @param phase - The current motion phase.
 * @param state - The current motion state.
 */
export function setMotionState(element: HTMLElement, phase: MotionPhase, state: MotionState): void {
    element.removeAttribute('data-enter-from');
    element.removeAttribute('data-enter-to');
    element.removeAttribute('data-leave-from');
    element.removeAttribute('data-leave-to');

    element.setAttribute(`data-${phase}-${state}`, '');
    element.setAttribute(`data-${phase}-active`, '');
}

/**
 * Removes the motion phase attribute from the given element.
 * @param element - The target HTML element.
 */
export function removeMotionPhase(element: HTMLElement): void {
    element.removeAttribute('data-enter-phase');
    element.removeAttribute('data-leave-phase');
}

/**
 * Removes the motion state attributes from the given element.
 * @param element - The target HTML element.
 */
export function removeMotionState(element: HTMLElement): void {
    DATA_ATTRS.forEach((attr) => element.removeAttribute(attr));
}
