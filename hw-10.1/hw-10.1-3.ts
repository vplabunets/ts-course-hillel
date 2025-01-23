// Завдання #3: DeepRequireReadonly
// Створіть тип DeepRequireReadonly, який робитиме доступними тільки для читання навіть властивості вкладених об'єктів, а також робитиме їх обов'язковими.
interface IDeepPlayer3 {
  name: { firstName: string; secondName: string };
  position?: string;
}

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

const playerDeepRequireReadonly: DeepRequireReadonly<IDeepPlayer3> = {
  name: { firstName: 'Bill', secondName: 'Gates' },
  // position: 'Defender',
}; //Property 'position' is missing in type '{ name: { firstName: string; secondName: string; }; }'
//  but required in type 'DeepRequireReadonly<IDeepPlayer>'.ts(2741)

playerDeepRequireReadonly.name.firstName = 'Antonio';
