import { getCard, registerCard } from "services/card.services";
import Message from "../models/message.model";
import { isValidApiKey } from "utils/validate-token.util";
import { CustomError, UnauthorizedError } from "utils/errorHandler";

export const handler = async (event: any): Promise<any> => {
  try {
    const isValidToken = isValidApiKey(event);
    if (!isValidToken) {
      throw new UnauthorizedError('Token de encabezado inválido o faltante');
    }

    let responseMessage: Message;
    let resultData: any;
    if (event.path === '/tokens' && event.httpMethod === 'POST') {
      resultData = await registerCard(event);
      responseMessage = new Message(200, 'Tarjeta registrada', resultData);
    } else if (event.path === '/gettokens' && event.httpMethod === 'POST') {
      resultData = await getCard(event);
      if (resultData === '') {
        responseMessage = new Message(404, 'Token no encontrado o expirado', '');
      } else {
        responseMessage = new Message(200, 'Token encontrado', resultData);
      }
    } else {
      throw new CustomError(400, 'Ruta de API no válida');
    }

    return responseMessage.response();
  } catch (error: any) {
    if (error instanceof CustomError) {
      return new Message(error.status, error.message, '').response();
    } else {
      return new Message(500, 'Ha ocurrido un error interno.', '').response();
    }
  }
};