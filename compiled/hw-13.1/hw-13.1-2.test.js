"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hw_13_1_2_1 = require("./hw-13.1-2");
describe('UpgradedFootballTeam Tests with MinLength, MaxLength, and Email Decorators', () => {
    let team;
    beforeEach(() => {
        team = new hw_13_1_2_1.UpgradedFootballTeam('Dreamers', 'coach@dream.com');
    });
    test('should throw error if teamName is shorter than minLength', () => {
        try {
            team.teamName = 'FC G';
        }
        catch (error) {
            expect(error).toEqual(new Error('teamName must have at least 5 characters.'));
        }
    });
    test('should throw error if teamName is longer than maxLength', () => {
        try {
            team.teamName = 'ThisIsAVeryLongTeamName';
        }
        catch (error) {
            expect(error).toEqual(new Error('teamName must have maximum 20 characters.'));
        }
    });
    test('should set teamName correctly within allowed length range', () => {
        team.teamName = 'Dream Team';
        expect(team.teamName).toBe('Dream Team');
    });
    test('should set coachEmail correctly with valid email format', () => {
        team.coachEmail = 'newcoach@dreamers.com';
        expect(team.coachEmail).toBe('newcoach@dreamers.com');
    });
    test('should throw error if coachEmail is empty or null', () => {
        try {
            team.coachEmail = '';
        }
        catch (error) {
            expect(error).toEqual(new Error('Invalid email format for coachEmail.'));
        }
    });
});
