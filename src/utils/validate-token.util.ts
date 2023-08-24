export function isValidApiKey(event: any): boolean {
    const expectedApiKey = 'Bearer pk_test_LsRb12fdsvdew21';
    const apiKey = event.headers.Authorization;
    return apiKey === expectedApiKey;
}