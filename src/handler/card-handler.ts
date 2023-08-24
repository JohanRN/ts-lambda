import { getCard, registerCard } from "../services/card.services";
import Message from "../models/message.model";
import { CustomError } from "../utils/error-handler.utils";
import { validateToken } from "../helpers/validators.helper";
import { routeRequest } from "../routers/card.router";

export const handler = async (event: any): Promise<any> => {
  try {
    validateToken(event);
    const response = await routeRequest(event);
    return response;
  } catch (error: any) {
    if (error instanceof CustomError) {
      return new Message(error.status, error.message, '').response();
    } else {
      return new Message(500, 'Ha ocurrido un error interno.', '').response();
    }
  }
};