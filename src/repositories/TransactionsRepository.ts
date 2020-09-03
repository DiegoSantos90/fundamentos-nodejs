import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const incomeTransactions = this.transactions.filter(transaction => {
      return transaction.type === 'income';
    });

    const totalIncomesTransactions = incomeTransactions.reduce(
      (totalIncome, item) => {
        return totalIncome + item.value;
      },
      0,
    );

    const outcomeTransactions = this.transactions.filter(transaction => {
      return transaction.type === 'outcome';
    });

    const totalOutcomesTransactions = outcomeTransactions.reduce(
      (totalIncome, item) => {
        return totalIncome + item.value;
      },
      0,
    );

    return {
      income: totalIncomesTransactions,
      outcome: totalOutcomesTransactions,
      total: totalIncomesTransactions - totalOutcomesTransactions,
    };
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
