import Message from "models/message.model";
import { getCard, registerCard } from "../services/card.services";
import { CustomError } from "../utils/error-handler.utils";

export const routeRequest = async (event: any): Promise<any> => {
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
            throw new CustomError(404, 'Ruta de API no válida');
    }
    return new Message(statusCode, message, resultData || '').response();
};