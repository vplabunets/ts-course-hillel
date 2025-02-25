"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hw_6_2_1 = require("./hw-6.2");
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
describe('handleAction function', () => {
    afterEach(() => {
        consoleSpy.mockClear();
    });
    afterAll(() => {
        consoleSpy.mockRestore();
    });
    test('log CREATE_USER action', () => {
        (0, hw_6_2_1.handleAction)({ type: 'CREATE_USER', payload: { name: 'Monica Belucci', age: 50 } });
        expect(consoleSpy).toHaveBeenCalledWith('name:', 'Monica Belucci', 'age:', 50);
    });
    test('log DELETE_USER action', () => {
        (0, hw_6_2_1.handleAction)({ type: 'DELETE_USER', payload: { userId: 11111 } });
        expect(consoleSpy).toHaveBeenCalledWith('User with id 11111 was deleted');
    });
    test('log UPDATE_USER action with both name and age', () => {
        (0, hw_6_2_1.handleAction)({ type: 'UPDATE_USER', payload: { userId: 11111, name: 'Vensan Cassel', age: 51 } });
        expect(consoleSpy).toHaveBeenCalledWith('name: Vensan Cassel', 'age: 51');
    });
    test('log UPDATE_USER action with only name', () => {
        (0, hw_6_2_1.handleAction)({ type: 'UPDATE_USER', payload: { userId: 11111, name: 'Vensan Cassel' } });
        expect(consoleSpy).toHaveBeenCalledWith('name: Vensan Cassel', undefined);
    });
    test('log UPDATE_USER action with only age', () => {
        (0, hw_6_2_1.handleAction)({ type: 'UPDATE_USER', payload: { userId: 11111, age: 51 } });
        expect(consoleSpy).toHaveBeenCalledWith(undefined, 'age: 51');
    });
    test('log BLOCK_USER action', () => {
        (0, hw_6_2_1.handleAction)({ type: 'BLOCK_USER', payload: { userId: 11111, reason: 'Regular spamming' } });
        expect(consoleSpy).toHaveBeenCalledWith('User with id 11111 was blocked due to Regular spamming');
    });
});
