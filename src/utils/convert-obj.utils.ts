export async function converToObj(data: any) {
    const obj = JSON.parse(data);
    delete obj.cvv
    return obj;
}