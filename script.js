// Variables
// Getting the total balance
const total_balance = document.getElementById('balance');
// Getting the input value
const input_value = document.querySelector('input');
// Getting the income/expense
const value_type = document.querySelector('select');
// Add button
const additionButtonElement = document.querySelector('footer button');
// Entry list
const entryListElement = document.querySelector('section ul');


// A function to add one entry to the list of elements in the breakdown section
function addEntry(amount, operation) {
    const listEntry = document.createElement('li');
    listEntry.classList.add(operation); // adding the corresponding class to the list

    const listEntryValue = document.createElement('strong');
    listEntryValue.innerText = `${amount}$`;

    const listEntryDescription = document.createElement('em');
    listEntryDescription.innerText = 'Description';

    const listEntryOperator = document.createElement('span');
    if (operation === "expense") {
        listEntryOperator.innerText = "-";
    } else if (operation === "income") {
        listEntryOperator.innerText = "+";
    }
    
    listEntry.appendChild(listEntryDescription);
    listEntry.appendChild(listEntryOperator);
    listEntry.appendChild(listEntryValue);

    entryListElement.appendChild(listEntry);
}


// Updating the Total Balance
function updateBalance() {
    let total = 0;
    for (let item of entryListElement.children){
        const valueElement = item.querySelector('strong');
        const operationElement = item.querySelector('span');

        const current_value = parseInt(valueElement.innerText);
        const current_operation = operationElement.innerText;

        if (current_operation === "+") {
            total += current_value;
        } else if (current_operation === "-") {
            total -= current_value;
        }
    }
    
    total_balance.innerText = total + "$";

}


// Listening to the "add" event
additionButtonElement.onclick = function(){
    const amount = input_value.value;
    const operation = value_type.value;

    addEntry(amount, operation);

    input_value.value = ""; // emptying the input value in the HTML

    updateBalance();
}