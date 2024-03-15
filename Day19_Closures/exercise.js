function PersonAccount(){
    let firstName = "John";
    let lastName = "Doe";
    let incomes = [1000, 2000, 3000];
    let expenses = [100, 200, 300];
        function totalIncome(){
            return incomes.reduce((a, b) => a + b, 0);
        }
        function totalExpense(){
            return expenses.reduce((a, b) => a + b, 0);
        }
        function accountInfo(){
            return `First Name: ${firstName}, Last Name: ${lastName}, Incomes: ${incomes}, Expenses: ${expenses}`;
        }
        function addIncome(income){
            incomes.push(income);
            console.log(incomes);
        }
        function addExpense(expense){
            expenses.push(expense);
            console.log(expenses);
        }
        function accountBalance(){
            return totalIncome() - totalExpense();
        }
        return {
            totalIncome: totalIncome,
            totalExpense: totalExpense,
            accountInfo: accountInfo,
            addIncome: addIncome,
            addExpense: addExpense,
            accountBalance: accountBalance
        }

}
const personAccount = PersonAccount();
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome(400));
console.log(personAccount.addExpense(400));
console.log(personAccount.accountBalance());

