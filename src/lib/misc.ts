export function Capitalize(str: string): string {
    if (typeof str !== 'string' || str.trim() === '') {
        throw new Error('Input must be a non-empty string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().replace(/-/g, " ");
}
