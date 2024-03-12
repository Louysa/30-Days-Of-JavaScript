localStorage.clear();


const personObject = [ 
    {
        "firstName": "John",
        "lastName": "Doe",
        "incomes": [1000, 2000, 3000],
        "expenses": [500, 1000, 1500],
        totalIncome: function() {
            return this.incomes.reduce((a, b) => a + b, 0);
        },
        totalExpense: function(){
            return this.expenses.reduce((a, b) => a + b, 0);
        },
        accountInfo: function(){
            return `Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}`;
        },
        addIncome: function(income){
            this.incomes.push(income);
        },
        addExpense: function(expense){
            this.expenses.push(expense);
        },
        accountBalance: function(){
            return this.totalIncome() - this.totalExpense();
        }
    }
]

const personText = JSON.stringify(personObject);
localStorage.setItem('person', personText);