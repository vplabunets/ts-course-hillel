import { handleAction } from './hw-6.2';

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('handleAction function', () => {
  afterEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  test('log CREATE_USER action', () => {
    handleAction({ type: 'CREATE_USER', payload: { name: 'Monica Belucci', age: 50 } });
    expect(consoleSpy).toHaveBeenCalledWith('name:', 'Monica Belucci', 'age:', 50);
  });

  test('log DELETE_USER action', () => {
    handleAction({ type: 'DELETE_USER', payload: { userId: 11111 } });
    expect(consoleSpy).toHaveBeenCalledWith('User with id 11111 was deleted');
  });

  test('log UPDATE_USER action with both name and age', () => {
    handleAction({ type: 'UPDATE_USER', payload: { userId: 11111, name: 'Vensan Cassel', age: 51 } });
    expect(consoleSpy).toHaveBeenCalledWith('name: Vensan Cassel', 'age: 51');
  });

  test('log UPDATE_USER action with only name', () => {
    handleAction({ type: 'UPDATE_USER', payload: { userId: 11111, name: 'Vensan Cassel' } });
    expect(consoleSpy).toHaveBeenCalledWith('name: Vensan Cassel', undefined);
  });

  test('log UPDATE_USER action with only age', () => {
    handleAction({ type: 'UPDATE_USER', payload: { userId: 11111, age: 51 } });
    expect(consoleSpy).toHaveBeenCalledWith(undefined, 'age: 51');
  });

  test('log BLOCK_USER action', () => {
    handleAction({ type: 'BLOCK_USER', payload: { userId: 11111, reason: 'Regular spamming' } });
    expect(consoleSpy).toHaveBeenCalledWith('User with id 11111 was blocked due to Regular spamming');
  });
});
