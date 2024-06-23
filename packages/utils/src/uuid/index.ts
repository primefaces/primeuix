const lastIds: { [key: string]: number } = {};

export function UUID(prefix: string = 'pui_id_'): string {
    if (!lastIds.hasOwnProperty(prefix)) {
        lastIds[prefix] = 0;
    }

    lastIds[prefix]++;

    return `${prefix}${lastIds[prefix]}`;
}
