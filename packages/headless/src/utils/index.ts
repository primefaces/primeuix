import type { Logger, LoggerItem, LoggerItems } from './type';

export function createReactiveInstance<T extends object>(obj: T): T {
    const proxy = new Proxy(obj, {
        get(target, prop: string) {
            const val = (target as any)[prop];

            if (typeof val === 'function') {
                return function (...args: any[]) {
                    return val.apply(proxy, args);
                };
            }

            return val;
        }
    });

    return proxy;
}

export function mergeAssign<T extends object>(target: T, ...sources: (Partial<T> | undefined)[]): T {
    return Object.assign(target, Object.assign({}, ...sources));
}

/**
 * Logger utility with different log levels (warn, error, info, success).
 *
 * Usage:
 * logger.warn([condition, message, ...args]);
 * logger.error([[condition1, message1, ...args1], [condition2, message2, ...args2], ...]);
 * logger.info(condition, message, ...args);
 * logger.success(message, ...args);
 *
 * If condition is true, the message will be logged. If condition is omitted, the message will always be logged.
 * If multiple items are provided as an array, each will be processed individually.
 *
 * Example:
 * logger.warn(true, 'This is a warning message');
 * logger.error([false, 'This error will not be logged'], [true, 'This error will be logged', { errorCode: 123 }]);
 * logger.info('This info message will always be logged');
 * logger.success('This success message will always be logged', { data: 'sample' });
 */
export const logger: Logger & { [key: string]: any } = {
    _printedMessages: new Set<string>(),
    _log(type: 'log' | 'warn' | 'error' | 'info' | 'success', ...items: LoggerItems) {
        const list = Array.isArray(items[0]) && Array.isArray((items[0] as any)[0]) ? (items as LoggerItem[][]).flat() : Array.isArray(items[0]) ? (items as LoggerItem[]) : [items as LoggerItem];

        list.forEach(([condOrMsg, msg, ...args]) => {
            const condition = typeof condOrMsg === 'boolean' ? condOrMsg : true;
            const message = typeof condOrMsg === 'string' ? condOrMsg : msg!;
            const key = `${type}:${message}`;

            if (!condition || this._printedMessages.has(key)) return;

            logger._printedMessages.add(key);

            switch (type) {
                case 'log':
                    console.log(message, ...args);
                    break;
                case 'warn':
                    console.warn(`⚠️ [PRIME_WARN] ${message}`, ...args);
                    break;
                case 'error':
                    console.error(`❌ [PRIME_ERROR] ${message}`, ...args);
                    break;
                case 'info':
                    console.info(`ℹ️ [PRIME_INFO] ${message}`, ...args);
                    break;
                case 'success':
                    console.log(`✅ [PRIME_SUCCESS] ${message}`, ...args);
                    break;
            }
        });
    },
    log(...items: LoggerItems) {
        logger._log('log', ...items);
    },
    warn(...items: LoggerItems) {
        logger._log('warn', ...items);
    },
    error(...items: LoggerItems) {
        logger._log('error', ...items);
    },
    info(...items: LoggerItems) {
        logger._log('info', ...items);
    },
    success(...items: LoggerItems) {
        logger._log('success', ...items);
    },
    clearCache() {
        logger._printedMessages.clear();
    }
};

// @todo - move to @primeuix/utils

export function toCamelCase(str: string): string {
    return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

export function toKebabCase(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function nextFrame(): Promise<void> {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(resolve as () => void);
        });
    });
}
