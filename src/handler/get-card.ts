import { getTokens } from "functions/card.functions";
import Message from "../models/message.model";
import { isValidApiKey } from "services/validatetoken.service";
export const handler = async (event: any): Promise<any> => {
    try {
        isValidApiKey(event)
        const resultTokenFunction = await getTokens(event)
        if (resultTokenFunction == '') {
            return new Message(404, 'Token no encontrado o expirado', '').response()
        } else {
            return new Message(200, 'Token econtrado', resultTokenFunction).response()
        }
    } catch (error: any) {
        return new Message(500, error.message, []).response()
    }
}