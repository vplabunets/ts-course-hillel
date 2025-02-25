"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = exports.TransactionHistory = exports.Transaction = exports.Client = exports.BankAccount = void 0;
class BankAccount {
    get balance() {
        return this._balance;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    constructor(owner, balance) {
        this.accountNumber = this.generateAccountNumber();
        this._balance = balance;
        this._owner = owner;
    }
    deposit(amount) {
        this._balance += amount;
        console.info(`Operation: Deposit. Balance: ${this.balance}`);
    }
    withdraw(amount) {
        this._balance -= amount;
        console.info(`Operation: Withdraw. Balance: ${this.balance}`);
    }
    generateAccountNumber() {
        return `BASIC-${Math.floor(Math.random() * 1000)}`;
    }
}
exports.BankAccount = BankAccount;
class Client {
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName, lastName) {
        this.accounts = new Map();
        this.firstName = firstName;
        this.lastName = lastName;
    }
    addAccount(account) {
        this.accounts.set(account.accountNumber, account);
    }
    getAccounts() {
        return Array.from(this.accounts.values());
    }
}
exports.Client = Client;
class Transaction {
    constructor(type, amount, id, accountNumber) {
        this.date = Date.now();
        this.amount = amount;
        this.id = id;
        this.type = type;
        this.accountNumber = accountNumber;
    }
}
exports.Transaction = Transaction;
class TransactionHistory {
    constructor() {
        this._transactions = [];
    }
    get transactions() {
        return this._transactions;
    }
    addTransaction(type, amount, accountNumber) {
        const id = Date.now();
        this._transactions.push(new Transaction(type, amount, id, accountNumber));
    }
}
exports.TransactionHistory = TransactionHistory;
class Bank {
    constructor() {
        this.clients = new Map();
        this.transactionHistory = new TransactionHistory();
        this.transactionQueue = [];
    }
    static getInstance() {
        if (!Bank.instance) {
            Bank.instance = new Bank();
        }
        return Bank.instance;
    }
    addClient(client) {
        this.clients.set(client.fullName, client);
    }
    createAccount(owner, balance) {
        const newAccount = new BankAccount(owner, balance);
        owner.addAccount(newAccount);
        console.log(`Account ${newAccount.accountNumber} created for ${owner.fullName}.`);
        return newAccount;
    }
    deposit(accountNumber, amount) {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.deposit(amount);
            this.transactionHistory.addTransaction('deposit', amount, accountNumber);
            this.enqueueTransaction(() => this.deposit(accountNumber, amount));
        }
    }
    withdraw(accountNumber, amount) {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.withdraw(amount);
            this.transactionHistory.addTransaction('withdraw', amount, accountNumber);
            this.enqueueTransaction(() => this.withdraw(accountNumber, amount));
        }
    }
    findAccount(accountNumber) {
        for (let client of this.clients.values()) {
            const account = client.getAccounts().find((acc) => acc.accountNumber === accountNumber);
            if (account) {
                return account;
            }
        }
        console.warn('Account not found.');
        return undefined;
    }
    enqueueTransaction(transaction) {
        this.transactionQueue.push(transaction);
    }
    replayLastTransaction() {
        const lastTransaction = this.transactionQueue.pop();
        if (lastTransaction) {
            lastTransaction();
        }
        else {
            console.warn('No transactions to replay.');
        }
    }
    cancelLastTransaction() {
        this.transactionQueue.pop();
    }
}
exports.Bank = Bank;
const bank = Bank.getInstance();
const client = new Client('John', 'Doe');
bank.addClient(client);
const account1 = bank.createAccount(client, 1000);
const account2 = bank.createAccount(client, 500);
bank.deposit(account1.accountNumber, 200);
bank.withdraw(account2.accountNumber, 100);
bank.replayLastTransaction();
bank.cancelLastTransaction();
console.log(bank['transactionHistory'].transactions);
