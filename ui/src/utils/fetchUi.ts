import { isEnvBrowser } from "./misc";

/**
 * Simple wrapper around fetch API tailored for CEF/NUI use. This abstraction
 * can be extended to include AbortController if needed or if the response isn't
 * JSON. Tailor it to your needs.
 *
 * @param eventName - The endpoint eventname to target
 * @param data - Data you wish to send to the client
 * @param mockData - Mock data to be returned if in the browser
 *
 * @return returnData - A promise for the data sent back by the NuiCallbacks CB argument
 */
export async function fetchUi<T = any>(
    eventName: string,
    data?: unknown,
    mockData?: T,
): Promise<T> {
    if (isEnvBrowser() && mockData) return mockData;

    return new Promise((resolve) => {
        // HELIX hEvent(eventName, data, callback)
        console.log("hevent", (window as any).hEvent);
        if ((window as any).hEvent) {
            (window as any).hEvent(eventName, data, (result: T) => {
                resolve(result);
            });
        } else {
            // If hEvent is not available (e.g. browser without mockData), we resolve with undefined or mockData if provided
            resolve(mockData as T);
        }
    });
}
