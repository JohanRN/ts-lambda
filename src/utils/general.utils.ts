export async function converToObj(data: any) {
    const obj = JSON.parse(data);
    delete obj.cvv
    return obj;
}

export function generateRandomCode(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }

    return code;
}

export function isValidApiKey(event: any): boolean {
    const expectedApiKey = 'Bearer pk_test_LsRb12fdsvdew21';
    const apiKey = event.headers.Authorization;
    return apiKey === expectedApiKey;
}