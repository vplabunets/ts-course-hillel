"use strict";
class User1 {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
class Guest1 {
    constructor(sessionId) {
        this.sessionId = sessionId;
    }
}
class Admin1 extends User1 {
    constructor(username, password) {
        super(username, password);
        this.role = 'admin';
    }
}
class ExternalUser1 {
    constructor(oauthToken) {
        this.oauthToken = oauthToken;
    }
}
function isUser(user) {
    return user instanceof User1 && !(user instanceof Admin1);
}
function isGuest(user) {
    return user instanceof Guest1;
}
function isAdmin(user) {
    return user instanceof Admin1 && user.role === 'admin';
}
function isExternalUser(user) {
    return user instanceof ExternalUser1;
}
class OnlineCinema1 {
    constructor(initialUsers = [], initialGuestSessions = []) {
        this.users = initialUsers;
        this.guestSessions = initialGuestSessions;
    }
    login(user) {
        if (isUser(user)) {
            console.log(`User ${user.username} was authorized`);
        }
        else if (isGuest(user)) {
            console.log(`Guest with session ID ${user.sessionId} was authorized`);
        }
        else if (isAdmin(user)) {
            console.log(`Admin ${user.username} was authorized`);
        }
        else if (isExternalUser(user)) {
            console.log(`External user with token ${user.oauthToken} was authorized`);
        }
        else {
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
