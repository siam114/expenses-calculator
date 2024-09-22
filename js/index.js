// assistent tab funtionality
// calculate button 

document.getElementById('calculate').addEventListener('click', function(){
    const income =  parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const course = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    // validation 
    if(income <= 0 || isNaN(income)){
      document.getElementById('income-error').classList.remove('hidden');
      return;
    }
    if(software <= 0 || isNaN(software)){
      document.getElementById('software-error').classList.remove('hidden');
      return;
    }
    if(course <= 0 || isNaN(course)){
      document.getElementById('courses-error').classList.remove('hidden');
      return;
    }
    if(internet <= 0 || isNaN(internet)){
      document.getElementById('internet-error').classList.remove('hidden');
      return;
    }

    const totalExpenses = software + course + internet;
    const balance = income - totalExpenses;

    if(totalExpenses > income){
      document.getElementById('logic-error').classList.remove('hidden');
      return;
    }

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');

    // expenses history
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
    const saving = parseFloat(document.getElementById('savings').value);
    const income =  parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const course = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    if(saving <= 0 || isNaN(income)){
      document.getElementById('savings-error').classList.remove('hidden');
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
   historyTab.addEventListener('click', function(){
       historyTab.classList.add(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
      );
    historyTab.classList.remove( 'text-gray-600',)

    assistantTab.classList.remove(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
      );
    assistantTab.classList.add( 'text-gray-600');
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden')

    })





    // again come assistent tab
    assistantTab.addEventListener('click', function(){
      assistantTab.classList.add(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
      )
    historyTab.classList.remove(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
    )
    historyTab.classList.add('text-gray-600')

    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden')
    });



    // live validation for input.
  
    document.getElementById('income').addEventListener('input', function(){
      const inputValue = parseFloat(document.getElementById('income').value);
        
          if(income <= 0 || isNaN(inputValue)){
            document.getElementById('income-error').classList.remove('hidden');
            return;
          }
    });

    document.getElementById('software').addEventListener('input', function(){
      const inputValue = parseFloat(document.getElementById('software').value);
        
      if(software <= 0 || isNaN(inputValue)){
        document.getElementById('software-error').classList.remove('hidden');
        return;
      }
    });

    document.getElementById('courses').addEventListener('input', function(){
      const inputValue = parseFloat(document.getElementById('courses').value);
        
      if(courses <= 0 || isNaN(inputValue)){
      document.getElementById('courses-error').classList.remove('hidden');
      return;
    }
    });

    document.getElementById('internet').addEventListener('input', function(){
      const inputValue = parseFloat(document.getElementById('internet').value);
        
      if(internet <= 0 || isNaN(inputValue)){
      document.getElementById('internet-error').classList.remove('hidden');
      return;
    }
    });

    document.getElementById('savings').addEventListener('input', function(){
      const inputValue = parseFloat(document.getElementById('savings').value);
        
      if(savings <= 0 || isNaN(inputValue)){
      document.getElementById('savings-error').classList.remove('hidden');
      return;
    }
    });
