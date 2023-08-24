import { registerTokens } from "functions/card.functions";
import Message from "../models/message.model";
import { isValidApiKey } from "services/validatetoken.service";

export const handler = async (event: any): Promise<any> => {
  try {
    isValidApiKey(event)
    const resultTokenFunction = await registerTokens(event)
    return new Message(200, 'Token registrado', resultTokenFunction).response()
  } catch (error: any) {
    return new Message(500, error.message, []).response()
  }
}