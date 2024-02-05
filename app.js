new Vue({
    el: '#app',
    data: {
        balance: 0,
        transactions: [],
        newText: '',
        newAmount: 0,
        newCategory: 'Expense',
    },
    methods: {
        addTransaction() {
            if (this.newText !== '' && this.newAmount !== 0) {
                const transaction = {
                    text: this.newText,
                    amount: parseFloat(this.newAmount),
                    category: this.newCategory,
                };

                this.transactions.push(transaction);

                if (transaction.category === 'Expense') {
                    this.balance -= transaction.amount;
                } else {
                    this.balance += transaction.amount;
                }

                this.newText = '';
                this.newAmount = 0;
                this.newCategory = 'Expense';
            }
        },
        deleteTransaction(index) {
            const transaction = this.transactions[index];

            if (transaction.category === 'Expense') {
                this.balance += transaction.amount;
            } else {
                this.balance -= transaction.amount;
            }

            this.transactions.splice(index, 1);
        },
        formatCurrency(value) {
            return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
        },
        changeCategory(category) {
            this.newCategory = category;
        },
    },
});
