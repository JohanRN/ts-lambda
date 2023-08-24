import { cardRegistrationController, cardGetController } from '../controllers/card.controllers';
import { CustomError, UnauthorizedError } from '../utils/error-handler.utils';

export const routeRequest = async (event: any): Promise<any> => {
    if (event.httpMethod !== 'POST') throw new UnauthorizedError('No found');
    const path = event.path;
    switch (path) {
        case '/tokens':
            return await cardRegistrationController(event);
        case '/gettokens':
            return await cardGetController(event);
        default:
            throw new CustomError(404, 'Invalid API route');
    }
};