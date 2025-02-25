export interface IBankAccount {
  readonly accountNumber: string;
  readonly balance: number;
  owner: Client;
  deposit(amount: number): void;
  withdraw(amount: number): void;
}

export type TransactionType = 'deposit' | 'withdraw';

export class BankAccount implements IBankAccount {
  private _balance: number;
  private _owner: Client;

  public readonly accountNumber = this.generateAccountNumber();

  public get balance(): number {
    return this._balance;
  }

  public get owner(): Client {
    return this._owner;
  }

  public set owner(value: Client) {
    this._owner = value;
  }

  constructor(owner: Client, balance: number) {
    this._balance = balance;
    this._owner = owner;
  }

  public deposit(amount: number): void {
    this._balance += amount;
    console.info(`Operation: Deposit. Balance: ${this.balance}`);
  }

  public withdraw(amount: number): void {
    this._balance -= amount;
    console.info(`Operation: Withdraw. Balance: ${this.balance}`);
  }

  private generateAccountNumber(): string {
    return `BASIC-${Math.floor(Math.random() * 1000)}`;
  }
}

export class Client {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly accounts = new Map<string, IBankAccount>();

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public addAccount(account: IBankAccount): void {
    this.accounts.set(account.accountNumber, account);
  }

  public getAccounts(): IBankAccount[] {
    return Array.from(this.accounts.values());
  }
}

export class Transaction {
  public readonly amount: number;
  public readonly date = Date.now();
  public readonly id: number;
  public readonly type: TransactionType;
  public readonly accountNumber: string;

  constructor(type: TransactionType, amount: number, id: number, accountNumber: string) {
    this.amount = amount;
    this.id = id;
    this.type = type;
    this.accountNumber = accountNumber;
  }
}

export class TransactionHistory {
  private readonly _transactions: Transaction[] = [];

  public get transactions(): ReadonlyArray<Transaction> {
    return this._transactions;
  }

  public addTransaction(type: TransactionType, amount: number, accountNumber: string): void {
    const id = Date.now();
    this._transactions.push(new Transaction(type, amount, id, accountNumber));
  }
}

export class Bank {
  private static instance: Bank;
  private readonly clients: Map<string, Client> = new Map();
  private readonly transactionHistory = new TransactionHistory();
  private readonly transactionQueue: (() => void)[] = [];

  private constructor() {}

  public static getInstance(): Bank {
    if (!Bank.instance) {
      Bank.instance = new Bank();
    }
    return Bank.instance;
  }

  public addClient(client: Client): void {
    this.clients.set(client.fullName, client);
  }

  public createAccount(owner: Client, balance: number): IBankAccount {
    const newAccount = new BankAccount(owner, balance);
    owner.addAccount(newAccount);
    console.log(`Account ${newAccount.accountNumber} created for ${owner.fullName}.`);
    return newAccount;
  }

  public deposit(accountNumber: string, amount: number): void {
    const account = this.findAccount(accountNumber);
    if (account) {
      account.deposit(amount);
      this.transactionHistory.addTransaction('deposit', amount, accountNumber);
      this.enqueueTransaction(() => this.deposit(accountNumber, amount));
    }
  }

  public withdraw(accountNumber: string, amount: number): void {
    const account = this.findAccount(accountNumber);
    if (account) {
      account.withdraw(amount);
      this.transactionHistory.addTransaction('withdraw', amount, accountNumber);
      this.enqueueTransaction(() => this.withdraw(accountNumber, amount));
    }
  }

  private findAccount(accountNumber: string): IBankAccount | undefined {
    for (let client of this.clients.values()) {
      const account = client.getAccounts().find((acc) => acc.accountNumber === accountNumber);
      if (account) {
        return account;
      }
    }
    console.warn('Account not found.');
    return undefined;
  }

  private enqueueTransaction(transaction: () => void): void {
    this.transactionQueue.push(transaction);
  }

  public replayLastTransaction(): void {
    const lastTransaction = this.transactionQueue.pop();
    if (lastTransaction) {
      lastTransaction();
    } else {
      console.warn('No transactions to replay.');
    }
  }

  public cancelLastTransaction(): void {
    this.transactionQueue.pop();
  }
}

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
