import redisClient from "database/redis.database";
import Card from "../models/card.model";
import { generateRandomCode } from "utils/generate-code.utils";
import { converToObj } from "utils/convert-obj.utils";
export async function registerTokens(event: any) {
    const e = JSON.parse(event.body || '{}');
    const paramToken = new Card(e.email, e.card_number, e.expiration_year, e.expiration_month, e.cvv).return();
    const uniqueRandomCode = generateRandomCode(16);
    await redisClient.setex(uniqueRandomCode, 900, JSON.stringify(paramToken));
    return uniqueRandomCode
}

export async function getTokens(event: any) {
    const e = JSON.parse(event.body || '{}');
    const resultGetToken = await redisClient.get(e.token);
    if (resultGetToken) {
        const result = await converToObj(resultGetToken);
        return result
    } else {
        return ''
    }
}

