// function create
function getInputValueById(id){
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

function showError(id){
    document.getElementById(id).classList.remove('hidden');
}

function switchTabs(activeTab, inactiveTab) {
    // Add active styles to the active tab
    activeTab.classList.add(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
    
    // Remove active styles from the inactive tab
    inactiveTab.classList.remove(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
}




// function call
document.getElementById('calculate').addEventListener('click', function(){


    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const course = getInputValueById('courses');
    const internet = getInputValueById('internet');

    // validation
    if(income <= 0 || isNaN(income)){
        showError('income-error');
        return;
      }
    if(software <= 0 || isNaN(software)){
        showError('software-error');
        return;
      }
    if(course <= 0 || isNaN(course)){
        showError('courses-error');
        return;
      }
    if(internet <= 0 || isNaN(internet)){
        showError('internet-error');
        return;
      }
   

      const totalExpenses = software + course + internet;
      const balance = income - totalExpenses;
  
      if(totalExpenses > income){
        showError('logic-error');
        return;
      }

      const totalExpensesElement = document.getElementById('total-expenses');
      totalExpensesElement.innerText = totalExpenses.toFixed(2);

      const balanceElement = document.getElementById('balance');
      balanceElement.innerText = balance.toFixed(2);

      const result = document.getElementById('results');
      result.classList.remove('hidden');


      const historyItem = document.createElement('div');
      historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
      historyItem.innerHTML = `
       <p class="text-xs text-gray-500">${new Date().toLocaleString()}</p>
       <p class="text-xs text-gray-500">Income : ${income.toFixed(2)}</p>
       <p class="text-xs text-gray-500">Expenses : ${totalExpenses.toFixed(2)}</p>
       <p class="text-xs text-gray-500">Balance : ${balance.toFixed(2)}</p>

       `

      const historyContainer = document.getElementById('history-list');
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})



// calculate saving button
document.getElementById('calculate-savings').addEventListener('click', function(){
    const saving = getInputValueById('savings')
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const course = getInputValueById('courses');
    const internet = getInputValueById('internet');

    if(saving <= 0 || isNaN(income)){
      showError('savings-error')
      return;
    }

    const totalExpenses = software + course + internet;
    const balance = income - totalExpenses;

    const savingsAmount = (saving * balance) / 100;
    const remainingBalance = balance - savingsAmount;

    const savingsAmountElement = document.getElementById('savings-amount');
    const remainingBalanceElement = document.getElementById('remaining-balance');

    remainingBalanceElement.innerText = remainingBalance.toFixed(2);
    savingsAmountElement.innerText = savingsAmount.toFixed(2);

    
})


// history tab functionality

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');

assistantTab.addEventListener('click', function () {
    switchTabs(assistantTab, historyTab);
    historyTab.classList.add('text-gray-600')

    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
   
});

// Example usage for history tab:
historyTab.addEventListener('click', function () {
    switchTabs(historyTab, assistantTab);
    historyTab.classList.remove( 'text-gray-600',);
    assistantTab.classList.add( 'text-gray-600');
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden')
});
