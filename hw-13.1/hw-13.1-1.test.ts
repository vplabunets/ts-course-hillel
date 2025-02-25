import { FootballTeam } from './hw-13.1-1';
describe('FootballTeam Tests with DeprecatedMethod Decorator', () => {
  let team: FootballTeam;

  beforeEach(() => {
    team = new FootballTeam('FC Dreamer', ['Illia Zabarnyi', 'Andrii Lunin', 'Volodymyr Brazhko']);
  });

  test('should warn when calling deprecated oldTactic method', () => {
    console.warn = jest.fn();

    team.oldTactic();

    expect(console.warn).toHaveBeenCalledWith(
      'oldTactic is deprecated and will be removed in a future version. Reason: This tactic is outdated. Use newTactic instead.'
    );
  });

  test('should warn when calling deprecated oldPlayerStats method', () => {
    console.warn = jest.fn();
    team.oldPlayerStats('Diego Maradona');

    expect(console.warn).toHaveBeenCalledWith(
      'oldPlayerStats is deprecated and will be removed in a future version. Reason: This stats method is no longer accurate. Use newPlayerStats instead.'
    );
  });

  test('should call newTactic without any warning', () => {
    console.warn = jest.fn();

    team.newTactic();

    expect(console.warn).not.toHaveBeenCalled();
    expect(team.teamName).toBe('FC Dreamer');
  });

  test('should call newPlayerStats without any warning', () => {
    console.warn = jest.fn();

    team.newPlayerStats('Illia Zabarnyi');

    expect(console.warn).not.toHaveBeenCalled();
  });

  test('should handle player not found in newPlayerStats without warning', () => {
    console.warn = jest.fn();
    team.newPlayerStats('John Doe');

    expect(console.warn).not.toHaveBeenCalled();
    expect(team.players.includes('John Doe')).toBe(false);
  });
});
