type CreateUserAction = { type: 'CREATE_USER'; payload: { name: string; age: number } };
type DeleteUserAction = { type: 'DELETE_USER'; payload: { userId: number } };
type UpdateUserAction = { type: 'UPDATE_USER'; payload: { userId: number; name?: string; age?: number } };
type BlockUserAction = { type: 'BLOCK_USER'; payload: { userId: number; reason: string } };

type Action = CreateUserAction | DeleteUserAction | UpdateUserAction | BlockUserAction;

function handleAction(action: Action): void | never {
  switch (action.type) {
    case 'CREATE_USER':
      console.log('name:', action.payload.name, 'age:', action.payload.age);
      break;
    case 'DELETE_USER':
      console.log(`User with id ${action.payload.userId} was deleted`);
      break;
    case 'UPDATE_USER':
      console.log(
        action.payload.name && `name: ${action.payload.name}`,
        action.payload.age && `age: ${action.payload.age}`
      );
      break;
    case 'BLOCK_USER':
      console.log(`User with id ${action.payload.userId} was blocked due to ${action.payload.reason}`);
      break;

    default:
      throw Error('Action type is not correct');
  }
}

handleAction({ type: 'CREATE_USER', payload: { name: 'Monica Belucci', age: 50 } });
handleAction({ type: 'DELETE_USER', payload: { userId: 11111 } });
handleAction({ type: 'UPDATE_USER', payload: { userId: 11111, name: 'Vensan Cassel', age: 51 } });
handleAction({ type: 'BLOCK_USER', payload: { userId: 11111, reason: 'Regular spamming' } });