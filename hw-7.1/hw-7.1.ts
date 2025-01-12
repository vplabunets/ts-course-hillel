class User {
  username = '';
  password = '';

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  static login(user: User): void {
    console.log(`User ${user.username} was authorized`);
  }
}

class Guest {
  sessionId = '';

  constructor(sessionId: string) {
    this.sessionId = sessionId;
  }
  static login(): void {
    console.log('User was authorized as a guest');
  }
}

class Admin extends User {
  role = 'admin';
  constructor(admin: 'admin', username: string, password: string) {
    super(username, password);
    this.role = admin;
  }

  static login(admin: Admin): void | never {
    if (admin instanceof Admin && admin.role === 'admin') {
      console.log(`User ${admin.username} was authorized as Admin`);
    } else {
      throw new Error('Unauthorized login attempt');
    }
  }
}

class ExternalUser {
  oauthToken: string;

  constructor(oauthToken: string) {
    this.oauthToken = oauthToken;
  }

  static login(): void {
    console.log(`External user was authorized`);
  }
}

class OnlineCinema {
  private users: User[];
  private guestSessions: Guest[];

  constructor(initialUsers: User[] = [], initialGuestSessions: Guest[] = []) {
    this.users = initialUsers;
    this.guestSessions = initialGuestSessions;
  }
  isAdmin(user: Admin): user is Admin {
    return user instanceof Admin && user.role === 'admin';
  }

  isUser(user: User): user is User {
    return user instanceof User && !(user instanceof Admin);
  }

  isGuest(user: Guest): user is Guest {
    return user instanceof Guest;
  }

  isExternalUser(user: ExternalUser): user is ExternalUser {
    return user instanceof ExternalUser;
  }

  login(user: User | Guest | Admin | ExternalUser): void | never {
    if (user instanceof User && this.isUser(user)) {
      User.login(user);
    } else if (user instanceof Guest && this.isGuest(user)) {
      Guest.login();
    } else if (user instanceof Admin && this.isAdmin(user)) {
      Admin.login(user);
    } else if (user instanceof ExternalUser && this.isExternalUser(user)) {
      ExternalUser.login();
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

// type User = {
//   username: string;
//   password: string;
// };

// type Guest = {
//   sessionId: string;
// };

// type Admin = User & {
//   role: 'admin';
// };

// type ExternalUser = {
//   oauthToken: string;
// };
