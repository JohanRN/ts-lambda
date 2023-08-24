export function isValidApiKey(event: any): void {
    const apiKey = event.headers.Authorization
    if (apiKey !== 'Bearer pk_test_LsRb12fdsvdew21') {
        throw new Error('El token header es invalido');
    }
}

