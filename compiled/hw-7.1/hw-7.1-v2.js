"use strict";
class User {
    constructor(username, password) {
        this.username = '';
        this.password = '';
        this.username = username;
        this.password = password;
    }
    static isUser(user) {
        return user instanceof User && !(user instanceof Admin);
    }
}
class Guest {
    constructor(sessionId) {
        this.sessionId = '';
        this.sessionId = sessionId;
    }
    static isGuest(user) {
        return user instanceof Guest;
    }
}
class Admin extends User {
    constructor(admin, username, password) {
        super(username, password);
        this.role = 'admin';
        this.role = admin;
    }
    static isAdmin(user) {
        return user instanceof Admin && user.role === 'admin';
    }
}
class ExternalUser {
    constructor(oauthToken) {
        this.oauthToken = oauthToken;
    }
    static isExternalUser(user) {
        return user instanceof ExternalUser;
    }
}
class OnlineCinema {
    constructor(initialUsers = [], initialGuestSessions = []) {
        this.users = initialUsers;
        this.guestSessions = initialGuestSessions;
    }
    login(user) {
        if (User.isUser(user)) {
            console.log(`User ${user.username} was authorized`);
        }
        else if (Guest.isGuest(user)) {
            console.log(`Guest with session ID ${user.sessionId} was authorized`);
        }
        else if (Admin.isAdmin(user)) {
            console.log(`Admin ${user.username} was authorized`);
        }
        else if (ExternalUser.isExternalUser(user)) {
            console.log(`External user with token ${user.oauthToken} was authorized`);
        }
        else {
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
