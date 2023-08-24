import redisClient from "../database/redis.database";
import Card from "../models/card.model";
import { generateRandomCode } from "../utils/generate-code.utils";
import { converToObj } from "../utils/convert-obj.utils";
import { NotFoundError } from "../utils/errorHandler";

export async function registerCard(event: any) {
    try {
        if (redisClient.status === 'end') {
            await redisClient.connect();
        }
        const e = JSON.parse(event.body || '{}');
        const paramCard = new Card(e.email, e.card_number, e.expiration_year, e.expiration_month, e.cvv).return();
        const uniqueRandomCode = generateRandomCode(16);
        await redisClient.setex(uniqueRandomCode, 900, JSON.stringify(paramCard));
        return uniqueRandomCode
    } catch (error: any) {
        throw new NotFoundError(error);
    } finally {
        await redisClient.quit();
    }

}

export async function getCard(event: any) {
    try {
        if (redisClient.status === 'end') {
            await redisClient.connect();
        }
        const e = JSON.parse(event.body || '{}');
        const resultGetCard = await redisClient.get(e.token);
        if (resultGetCard) {
            const result = await converToObj(resultGetCard);
            return result
        } else {
            return ''
        }
    } catch (error: any) {
        throw new NotFoundError(error);
    } finally {
        await redisClient.quit();
    }
}

