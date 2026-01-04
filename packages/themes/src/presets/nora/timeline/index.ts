import type { TimelineDesignTokens, TimelineTokenSections } from '@primeuix/themes/types/timeline';

export const event: TimelineTokenSections.Event = {
    minHeight: '4.5rem'
};

export const horizontal: TimelineTokenSections.Horizontal = {
    eventContent: {
        padding: '0.875rem 0'
    }
};

export const vertical: TimelineTokenSections.Vertical = {
    eventContent: {
        padding: '0 0.875rem'
    }
};

export const eventMarker: TimelineTokenSections.EventMarker = {
    size: '1rem',
    borderRadius: '50%',
    borderWidth: '2px',
    background: '{primary.color}',
    borderColor: '{primary.color}',
    content: {
        borderRadius: '50%',
        size: '0.375rem',
        background: 'transparent',
        insetShadow: 'none'
    }
};

export const eventConnector: TimelineTokenSections.EventConnector = {
    color: '{content.border.color}',
    size: '2px'
};

export default {
    event,
    horizontal,
    vertical,
    eventMarker,
    eventConnector
} satisfies TimelineDesignTokens;
