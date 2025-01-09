"use strict";
class OnlineCinema {
    constructor(initialUsers = [], initialGuestSessions = []) {
        this.users = initialUsers;
        this.guestSessions = initialGuestSessions;
    }
    login(user) {
        if ('role' in user && user.role === 'admin') {
            console.log(`User ${user.username} was authorized as Admin`);
        }
        else if ('username' in user && 'password' in user) {
            console.log(`User ${user.username} was authorized`);
        }
        else if ('sessionId' in user) {
            console.log(`User was authorized as a guest`);
        }
        else if ('oauthToken' in user) {
            console.log(`External user was authorized`);
        }
        else {
            throw Error('User was not authorized');
        }
    }
}
const Cinemateka = new OnlineCinema();
Cinemateka.login({ username: 'Pylyp Orlyk', password: 'qwerty' });
Cinemateka.login({ sessionId: '11111' });
Cinemateka.login({ role: 'admin', username: 'Petro Doroshenko', password: 'qwerty' });
Cinemateka.login({ oauthToken: '11111' });
