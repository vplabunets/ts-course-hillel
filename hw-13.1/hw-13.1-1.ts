// Завдання #1: DeprecatedMethod

// Створіть декоратор DeprecatedMethod і навчіть його працювати з об'єктом,
//  який може приймати причину, через яку метод не варто використовувати,
// а також назву методу, яким його можна замінити, якщо це можливо.

function DeprecatedMethod(reason?: string, replacement?: string) {
  return function <T extends object, A extends unknown[], R>(
    originalMethod: (...args: A) => R,
    context: ClassMethodDecoratorContext<T, (...args: A) => R>
  ) {
    if (context.kind !== 'method') throw new Error('Method-only decorator');

    function replacementMethod(this: T, ...args: A): R {
      console.warn(
        `${String(context.name)} is deprecated and will be removed in a future version.` +
          (reason ? ` Reason: ${reason}.` : '') +
          (replacement ? ` Use ${replacement} instead.` : '')
      );
      return originalMethod.apply(this, args);
    }

    return replacementMethod;
  };
}

class FootballTeam {
  teamName: string;
  players: string[];

  constructor(teamName: string, players: string[]) {
    this.teamName = teamName;
    this.players = players;
  }

  @DeprecatedMethod('This tactic is outdated', 'newTactic')
  oldTactic() {
    console.log(`Using the old tactic for team ${this.teamName}.`);
  }

  newTactic() {
    console.log(`Using the new, more efficient tactic for team ${this.teamName}.`);
  }

  @DeprecatedMethod('This stats method is no longer accurate', 'newPlayerStats')
  oldPlayerStats(player: string) {
    if (!this.players.includes(player)) {
      console.error(`Player ${player} not found in the team ${this.teamName}.`);
      return;
    }

    console.log(`Showing old stats for player ${player}.`);
  }

  newPlayerStats(player: string) {
    if (!this.players.includes(player)) {
      console.error(`Player ${player} not found in the team ${this.teamName}.`);
      return;
    }

    console.log(`Showing new, detailed stats for player ${player}.`);
  }
}

const team = new FootballTeam('FC Dreamer', ['Illia Zabarnyi', 'Andrii Lunin', 'Volodymyr Brazhko']);

team.oldTactic(); // oldTactic is deprecated and will be removed in a future version.
// Reason: This tactic is outdated. Use newTactic instead.
team.oldPlayerStats('Diego Maradona'); //oldPlayerStats is deprecated and will be removed in a future version. Reason: This stats method is no longer accurate. Use newPlayerStats instead.
//Player Diego Maradona not found in the team FC Dreamer.

team.newTactic(); // Using the new, more efficient tactic for team FC Dreamer.
team.newPlayerStats('John Doe'); // Player John Doe not found in the team FC Dreamer..
team.newPlayerStats('Illia Zabarnyi'); // Showing new, detailed stats for player Illia Zabarnyi.
