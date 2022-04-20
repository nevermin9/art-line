export function isEmptyObject(obj: {}): boolean {
    return JSON.stringify(obj) === "{}";
}
