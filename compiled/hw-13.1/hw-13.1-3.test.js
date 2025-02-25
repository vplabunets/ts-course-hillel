"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hw_13_1_3_1 = require("./hw-13.1-3");
describe('UpgradedFootballTeam2 Tests with Decorators', () => {
    let upgradedTeam2;
    beforeEach(() => {
        upgradedTeam2 = new hw_13_1_3_1.UpgradedFootballTeam2('Dreamers', 'coach@dream.com');
    });
    test('should throw error if teamName is less than minLength', () => {
        expect(() => {
            upgradedTeam2.teamName = 'FC G';
        }).toThrow('teamName must have at least 5 characters.');
    });
    test('should throw error if teamName is more than maxLength', () => {
        expect(() => {
            upgradedTeam2.teamName = 'SuperDreamerFCwithVeryLongName';
        }).toThrow('teamName must have at most 20 characters.');
    });
    test('should set teamName correctly when within valid length', () => {
        upgradedTeam2.teamName = 'Dreamers FC';
        expect(upgradedTeam2.teamName).toBe('Dreamers FC');
    });
    test('should throw error if coachEmail is invalid format', () => {
        expect(() => {
            upgradedTeam2.coachEmail = 'wrong@stickerpenalty';
        }).toThrow('Invalid email format for coachEmail.');
    });
    test('should set coachEmail correctly when valid', () => {
        upgradedTeam2.coachEmail = 'newcoach@dreamers.com';
        expect(upgradedTeam2.coachEmail).toBe('newcoach@dreamers.com');
    });
    test('should throw error if both minLength and maxLength validations are violated for teamName', () => {
        expect(() => {
            upgradedTeam2.teamName = 'Dreamers1234567890123456789';
        }).toThrow('teamName must have at most 20 characters.');
    });
    test('should not throw error if both minLength and maxLength validations are respected', () => {
        upgradedTeam2.teamName = 'Dreamers FC';
    });
    test('should allow multiple decorators to be used together (teamName and coachEmail)', () => {
        upgradedTeam2.teamName = 'Valid Team';
        upgradedTeam2.coachEmail = 'coach@valid.com';
        expect(upgradedTeam2.teamName).toBe('Valid Team');
        expect(upgradedTeam2.coachEmail).toBe('coach@valid.com');
    });
});
