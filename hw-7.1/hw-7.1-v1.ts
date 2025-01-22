type UnionUserType = User1 | Guest1 | Admin1 | ExternalUser1;
class User1 {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

class Guest1 {
  sessionId: string;

  constructor(sessionId: string) {
    this.sessionId = sessionId;
  }
}

class Admin1 extends User1 {
  readonly role = 'admin' as const;

  constructor(username: string, password: string) {
    super(username, password);
  }
}

class ExternalUser1 {
  oauthToken: string;

  constructor(oauthToken: string) {
    this.oauthToken = oauthToken;
  }
}

function isUser(user: UnionUserType): user is User1 {
  return user instanceof User1 && !(user instanceof Admin1);
}

function isGuest(user: UnionUserType): user is Guest1 {
  return user instanceof Guest1;
}

function isAdmin(user: UnionUserType): user is Admin1 {
  return user instanceof Admin1 && user.role === 'admin';
}

function isExternalUser(user: UnionUserType): user is ExternalUser1 {
  return user instanceof ExternalUser1;
}

class OnlineCinema1 {
  private users: User1[];
  private guestSessions: Guest1[];

  constructor(initialUsers: User1[] = [], initialGuestSessions: Guest1[] = []) {
    this.users = initialUsers;
    this.guestSessions = initialGuestSessions;
  }

  login(user: UnionUserType): void | never {
    if (isUser(user)) {
      console.log(`User ${user.username} was authorized`);
    } else if (isGuest(user)) {
      console.log(`Guest with session ID ${user.sessionId} was authorized`);
    } else if (isAdmin(user)) {
      console.log(`Admin ${user.username} was authorized`);
    } else if (isExternalUser(user)) {
      console.log(`External user with token ${user.oauthToken} was authorized`);
    } else {
      throw new Error('User was not authorized');
    }
  }
}

const cinema = new OnlineCinema1();

const user = new User1('Dua Lipa', 'password123');
const guest = new Guest1('guest4566');
const admin = new Admin1('Rita Ora', 'adminPass');
const externalUser = new ExternalUser1('oauthToken123');

cinema.login(user);
cinema.login(guest);
cinema.login(admin);
cinema.login(externalUser);
