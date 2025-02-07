// Завдання #3: Experimental decorators

// Використайте попередню версію декораторів, переробіть MinLength, MaxLength та Email так, щоб їх можна було використовувати разом.

function ValidateParameters({
  minLength,
  maxLength,
  email,
}: {
  minLength?: number;
  maxLength?: number;
  email?: boolean;
}) {
  return function <T>(originalMethod: (value: string) => void, context: ClassSetterDecoratorContext<T, string>) {
    if (context.kind !== 'setter') throw new Error('Setter-only decorator');

    function replacementMethod(this: T, value: string): void {
      if (minLength !== undefined && value.length < minLength) {
        throw new Error(`${String(context.name)} must have at least ${minLength} characters.`);
      }

      if (maxLength !== undefined && value.length > maxLength) {
        throw new Error(`${String(context.name)} must have at most ${maxLength} characters.`);
      }

      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          throw new Error(`Invalid email format for ${String(context.name)}.`);
        }
      }

      originalMethod.apply(this, [value]);
    }

    return replacementMethod;
  };
}

class UpgradedFootballTeam2 {
  private _teamName: string = '';
  private _coachEmail: string = '';

  constructor(teamName: string, coachEmail: string) {
    this.teamName = teamName;
    this.coachEmail = coachEmail;
  }

  @ValidateParameters({ minLength: 5, maxLength: 20 })
  set teamName(value: string) {
    this._teamName = value;
  }

  get teamName(): string {
    return this._teamName;
  }

  @ValidateParameters({ email: true })
  set coachEmail(value: string) {
    this._coachEmail = value;
  }

  get coachEmail(): string {
    return this._coachEmail;
  }
}

const upgradedTeam2 = new UpgradedFootballTeam2('Dreamers', 'coach@dream.com');

try {
  upgradedTeam2.teamName = 'FC G';
} catch (error) {
  console.error(error);
}

try {
  upgradedTeam2.coachEmail = 'wrong@sticker.penalty';
} catch (error) {
  console.error(error);
}

upgradedTeam2.teamName = 'New Dreamer FC';
console.log(upgradedTeam2.teamName);

upgradedTeam2.coachEmail = 'newcoach@dreamers.com';
console.log(upgradedTeam2.coachEmail);
