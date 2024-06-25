const lastIds: { [key: string]: number } = {};

export function uuid(prefix: string = 'pui_id_'): string {
    if (!lastIds.hasOwnProperty(prefix)) {
        lastIds[prefix] = 0;
    }

    lastIds[prefix]++;

    return `${prefix}${lastIds[prefix]}`;
}
