"use strict";
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
class User {
    constructor(username, password) {
        this.username = '';
        this.password = '';
        this.username = username;
        this.password = password;
    }
    static login(user) {
        console.log(`User ${user.username} was authorized`);
    }
}
class Guest {
    constructor(sessionId) {
        this.sessionId = '';
        this.sessionId = sessionId;
    }
    static login() {
        console.log('User was authorized as a guest');
    }
}
class Admin extends User {
    constructor(admin, username, password) {
        super(username, password);
        this.role = 'admin';
        this.role = admin;
    }
    static login(admin) {
        if (admin instanceof Admin && admin.role === 'admin') {
            console.log(`User ${admin.username} was authorized as Admin`);
        }
        else {
            throw new Error('Unauthorized login attempt');
        }
    }
}
class ExternalUser {
    constructor(oauthToken) {
        this.oauthToken = oauthToken;
    }
    static login() {
        console.log(`External user was authorized`);
    }
}
class OnlineCinema {
    constructor(initialUsers = [], initialGuestSessions = []) {
        this.users = initialUsers;
        this.guestSessions = initialGuestSessions;
    }
    isAdmin(user) {
        return user instanceof Admin && user.role === 'admin';
    }
    isUser(user) {
        return user instanceof User && !(user instanceof Admin);
    }
    isGuest(user) {
        return user instanceof Guest;
    }
    isExternalUser(user) {
        return user instanceof ExternalUser;
    }
    login(user) {
        if (user instanceof User && this.isUser(user)) {
            User.login(user);
        }
        else if (user instanceof Guest && this.isGuest(user)) {
            Guest.login();
        }
        else if (user instanceof Admin && this.isAdmin(user)) {
            Admin.login(user);
        }
        else if (user instanceof ExternalUser && this.isExternalUser(user)) {
            ExternalUser.login();
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
