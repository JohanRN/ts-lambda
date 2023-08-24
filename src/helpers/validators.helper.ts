import { UnauthorizedError } from "../utils/error-handler.utils";
import { isValidApiKey } from "../utils/general.utils";

export const validateToken = (event: any): boolean => {
    const isValidToken = isValidApiKey(event);
    if (!isValidToken) {
        throw new UnauthorizedError('Token de encabezado inválido o faltante');
    }
    return true;
};