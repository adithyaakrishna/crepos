// Used to wait for ms seconds before sending a new request
export const requestSleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}