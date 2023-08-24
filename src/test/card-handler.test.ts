import { handler } from '../handler/card-handler';

describe('API Handler', () => {
    it('should handle valid token and register card', async () => {
        // Simulate the event object
        const event = {
            path: '/tokens',
            httpMethod: 'POST',
            // Add other necessary properties
        };

        // Mock the functions and classes as needed
        // For example:
        const isValidApiKey = jest.fn().mockReturnValue(true);
        const registerCard = jest.fn().mockResolvedValue('Card data');
        const Message = jest.fn();

        // Call the handler function
        const response = await handler(event);

        // Assertions
        expect(isValidApiKey).toHaveBeenCalledWith(event);
        expect(registerCard).toHaveBeenCalledWith(event);
        expect(Message).toHaveBeenCalledWith(200, 'Tarjeta registrada', 'Card data');
        // Add more assertions as needed
    });

    // Add more test cases for different scenarios
});