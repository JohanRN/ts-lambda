import { getCard, registerCard } from "../services/card.services";
import Message from "../models/message.model";
import { CustomError, UnauthorizedError } from "../utils/errorHandler.utils";
import { isValidApiKey } from "utils/general.utils";

export const handler = async (event: any): Promise<any> => {
  try {
    const isValidToken = isValidApiKey(event);

    if (!isValidToken) {
      throw new UnauthorizedError('Token de encabezado inválido o faltante');
    }

    let resultData: any;
    let statusCode = 0;
    let message = '';

    switch (`${event.path}-${event.httpMethod}`) {
      case '/tokens-POST':
        resultData = await registerCard(event);
        statusCode = 200;
        message = 'Tarjeta registrada';
        break;
      case '/gettokens-POST':
        resultData = await getCard(event);
        statusCode = resultData ? 200 : 404;
        message = resultData ? 'Token encontrado' : 'Token no encontrado o expirado';
        break;
      default:
        throw new CustomError(400, 'Ruta de API no válida');
    }

    return new Message(statusCode, message, resultData || '').response();
  } catch (error: any) {
    if (error instanceof CustomError) {
      return new Message(error.status, error.message, '').response();
    } else {
      return new Message(500, 'Ha ocurrido un error interno.', '').response();
    }
  }
};