"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_account_1 = require("./bank_account");
describe('Banking System', () => {
    let bank;
    let client;
    let account1;
    let account2;
    beforeEach(() => {
        bank = bank_account_1.Bank.getInstance();
        client = new bank_account_1.Client('Johnny', 'Depp');
        bank.addClient(client);
        account1 = bank.createAccount(client, 1000);
        account2 = bank.createAccount(client, 500);
    });
    test('should create accounts for a client', () => {
        expect(account1).toBeDefined();
        expect(account2).toBeDefined();
        expect(account1.owner).toBe(client);
        expect(account2.owner).toBe(client);
    });
    test('should deposit money into an account', () => {
        bank.deposit(account1.accountNumber, 200);
        expect(account1.balance).toBe(1200);
        expect(bank['transactionHistory'].transactions).toHaveLength(4);
        expect(bank['transactionHistory'].transactions[0].type).toBe('deposit');
    });
    test('should withdraw money from an account', () => {
        bank.withdraw(account2.accountNumber, 100);
        expect(account2.balance).toBe(400);
        expect(bank['transactionHistory'].transactions).toHaveLength(5);
        expect(bank['transactionHistory'].transactions[0].type).toBe('deposit');
    });
    test('should replay last transaction', () => {
        bank.deposit(account1.accountNumber, 200);
        expect(account1.balance).toBe(1200);
        bank.replayLastTransaction();
        expect(account1.balance).toBe(1400);
    });
    test('should cancel last transaction', () => {
        bank.deposit(account1.accountNumber, 200);
        expect(account1.balance).toBe(1200);
        bank.cancelLastTransaction();
        expect(account1.balance).toBe(1200);
    });
    test('should handle invalid account number for deposit', () => {
        const spy = jest.spyOn(console, 'warn').mockImplementation();
        bank.deposit('INVALID-123', 200);
        expect(spy).toHaveBeenCalledWith('Account not found.');
        spy.mockRestore();
    });
    test('should handle invalid account number for withdraw', () => {
        const spy = jest.spyOn(console, 'warn').mockImplementation();
        bank.withdraw('INVALID-123', 100);
        expect(spy).toHaveBeenCalledWith('Account not found.');
        spy.mockRestore();
    });
    test('should add transaction to history', () => {
        bank.deposit(account1.accountNumber, 200);
        const transactions = bank['transactionHistory'].transactions;
        expect(transactions).toHaveLength(9);
        expect(transactions[0].type).toBe('deposit');
        expect(transactions[0].amount).toBe(200);
    });
    test('should handle replay with no transactions in the queue', () => {
        const spy = jest.spyOn(console, 'warn').mockImplementation();
        bank.replayLastTransaction();
        expect(spy).toHaveBeenCalledWith('Account not found.');
        spy.mockRestore();
    });
});
