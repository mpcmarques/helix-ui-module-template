// Will return whether the current environment is in a regular browser
export const isEnvBrowser = (): boolean => !(window as any).hEvent;

// Basic no operation function
export const noop = () => {};
