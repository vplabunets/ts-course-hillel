class User {
  username = '';
  password = '';

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  static isUser(user: unknown): user is User {
    return user instanceof User && !(user instanceof Admin);
  }
}

class Guest {
  sessionId = '';

  constructor(sessionId: string) {
    this.sessionId = sessionId;
  }

  static isGuest(user: unknown): user is Guest {
    return user instanceof Guest;
  }
}

class Admin extends User {
  role = 'admin';

  constructor(admin: 'admin', username: string, password: string) {
    super(username, password);
    this.role = admin;
  }

  static isAdmin(user: unknown): user is Admin {
    return user instanceof Admin && user.role === 'admin';
  }
}

class ExternalUser {
  oauthToken: string;

  constructor(oauthToken: string) {
    this.oauthToken = oauthToken;
  }

  static isExternalUser(user: unknown): user is ExternalUser {
    return user instanceof ExternalUser;
  }
}

class OnlineCinema {
  private users: User[];
  private guestSessions: Guest[];

  constructor(initialUsers: User[] = [], initialGuestSessions: Guest[] = []) {
    this.users = initialUsers;
    this.guestSessions = initialGuestSessions;
  }

  login(user: User | Guest | Admin | ExternalUser): void | never {
    if (User.isUser(user)) {
      console.log(`User ${user.username} was authorized`);
    } else if (Guest.isGuest(user)) {
      console.log(`Guest with session ID ${user.sessionId} was authorized`);
    } else if (Admin.isAdmin(user)) {
      console.log(`Admin ${user.username} was authorized`);
    } else if (ExternalUser.isExternalUser(user)) {
      console.log(`External user with token ${user.oauthToken} was authorized`);
    } else {
      throw Error('User was not authorized');
    }
  }
}

const Cinemateka = new OnlineCinema();

const PylypOrlyk = new User('Pylyp Orlyk', 'qwerty');
const GuestUser = new Guest('11111');
const AdminPetroDoroshenko = new Admin('admin', 'Petro Doroshenko', 'qwerty');
const UnknownExternalUser = new ExternalUser('11111');

Cinemateka.login(PylypOrlyk);
Cinemateka.login(GuestUser);
Cinemateka.login(AdminPetroDoroshenko);
Cinemateka.login(UnknownExternalUser);
