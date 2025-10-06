export type LoggerItem = [conditionOrMessage?: boolean | string, messageOrArg?: string, ...args: any[]];
export type LoggerItems = LoggerItem | LoggerItem[] | LoggerItem[][];

export interface Logger {
    log: (...items: LoggerItems) => void;
    warn: (...items: LoggerItems) => void;
    error: (...items: LoggerItems) => void;
    info: (...items: LoggerItems) => void;
    success: (...items: LoggerItems) => void;
    clearCache: () => void;
}
