// Завдання #2: MinLength, MaxLength, Email

// Створіть декоратори для полів MinLength, MaxLength та Email.

function MinLength(minLength: number) {
  return function <T>(originalMethod: (value: string) => void, context: ClassSetterDecoratorContext<T, string>) {
    if (context.kind !== 'setter') throw new Error('Setter-only decorator');

    function replacementMethod(this: T, value: string): void {
      if (value.length < minLength) {
        throw new Error(`${String(context.name)} must have at least ${minLength} characters.`);
      }
      originalMethod.apply(this, [value]);
    }

    return replacementMethod;
  };
}

function MaxLength(maxLength: number) {
  return function <T>(originalMethod: (value: string) => void, context: ClassSetterDecoratorContext<T, string>) {
    if (context.kind !== 'setter') throw new Error('Setter-only decorator');

    function replacementMethod(this: T, value: string): void {
      if (value.length > maxLength) {
        throw new Error(`${String(context.name)} must have maximum ${maxLength} characters.`);
      }
      originalMethod.apply(this, [value]);
    }

    return replacementMethod;
  };
}

function Email<T>(originalMethod: (value: string) => void, context: ClassSetterDecoratorContext<T, string>) {
  if (context.kind !== 'setter') throw new Error('Setter-only decorator');

  function replacementMethod(this: T, value: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      throw new Error(`Invalid email format for ${String(context.name)}.`);
    }
    originalMethod.apply(this, [value]);
  }

  return replacementMethod;
}

class UpgradedFootballTeam {
  private _teamName: string = '';
  private _coachEmail: string = '';

  constructor(teamName: string, coachEmail: string) {
    this.teamName = teamName;
    this.coachEmail = coachEmail;
  }

  @MinLength(5)
  @MaxLength(20)
  set teamName(value: string) {
    this._teamName = value;
  }

  get teamName(): string {
    return this._teamName;
  }

  @Email
  set coachEmail(value: string) {
    this._coachEmail = value;
  }

  get coachEmail(): string {
    return this._coachEmail;
  }
}

const upgradedTeam = new UpgradedFootballTeam('Dreamers', 'coach@dream.com');

try {
  upgradedTeam.teamName = 'FC G';
  console.log(upgradedTeam.teamName);
} catch (error) {
  console.error(error);
}

try {
  upgradedTeam.coachEmail = 'wrong@sticker.penalty';
  console.log(upgradedTeam.coachEmail);
} catch (error) {
  console.error(error);
}

upgradedTeam.teamName = 'New Dreamer FC';
console.log(upgradedTeam.teamName);

upgradedTeam.coachEmail = 'newcoach@dreamers.com';
console.log(upgradedTeam.coachEmail);
