import type { TimelineDesignTokens, TimelineTokenSections } from '@primeuix/themes/types/timeline';

export const event: TimelineTokenSections.Event = {
    minHeight: '5rem'
};

export const horizontal: TimelineTokenSections.Horizontal = {
    eventContent: {
        padding: '1rem 0'
    }
};

export const vertical: TimelineTokenSections.Vertical = {
    eventContent: {
        padding: '0 1rem'
    }
};

export const eventMarker: TimelineTokenSections.EventMarker = {
    size: '1.5rem',
    borderRadius: '50%',
    borderWidth: '2px',
    background: '{primary.color}',
    borderColor: 'light-dark({surface.0}, {surface.900})',
    content: {
        borderRadius: '50%',
        size: '0',
        background: '{primary.color}',
        insetShadow: 'none'
    }
};

export const eventConnector: TimelineTokenSections.EventConnector = {
    color: '{content.border.color}',
    size: '2px'
};

export const css: TimelineTokenSections.CSS = /*css*/ ``;

export default {
    event,
    horizontal,
    vertical,
    eventMarker,
    eventConnector,
    css
} satisfies TimelineDesignTokens;
