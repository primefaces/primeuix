const lastIds = {};

export default function UUID(prefix = 'pui_id_') {
    if (!lastIds.hasOwnProperty(prefix)) {
        lastIds[prefix] = 0;
    }

    lastIds[prefix]++;

    return `${prefix}${lastIds[prefix]}`;
}
