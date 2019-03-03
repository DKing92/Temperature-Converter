const celsius = document.querySelector('.celsius'),
      farenheit = document.querySelector('.farenheit'),
      results = document.querySelector('.results')
      

celsius.addEventListener('click', function(e){
    // Set the entered number to a variable
    number = parseFloat(document.getElementById('temperature').value)
    
    //Check if number
    if(isNaN(number)) {
        alert('Please enter a valid number');
    } else {
    // Convert to Farenheit
    const farenheitConverted = ((number-32)*5/9).toFixed(2);
    results.innerHTML = `${farenheitConverted} °C`
    }
    document.getElementById('form').reset()
   e.preventDefault()
});


farenheit.addEventListener('click', function(e){
    // Set the entered number to a variable
    number = parseFloat(document.getElementById('temperature').value)
    //Check if number
    if(isNaN(number)) {
        alert('Please enter a valid number');
    } else {
    // Convert to Farenheit
    const celsiusConverted = (number*(9/5)+32).toFixed(2);
    results.innerHTML = `${celsiusConverted} °F`
    }
    document.getElementById('form').reset()
e.preventDefault()
});

