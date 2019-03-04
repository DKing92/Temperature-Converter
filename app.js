const celsius = document.querySelector('.celsius'),
       farenheit = document.querySelector('.farenheit'),
       results = document.querySelector('.results'),
       temperature = document.getElementById('temperature');
      

// celsius.addEventListener('click', function(e){
//     // Set the entered number to a variable
//     number = parseFloat(document.getElementById('temperature').value)
    
//     //Check if number
//     if(isNaN(number)) {
//         alert('Please enter a valid number');
//     } else {
//     // Convert to Farenheit
//     const celsiusConverted = ((number-32)*5/9).toFixed(2);
//     results.innerHTML = `${celsiusConverted} °C`
//     }
//     document.getElementById('form').reset()
//    e.preventDefault()
// });

// farenheit.addEventListener('click', function(e){
//     // Set the entered number to a variable
//     number = parseFloat(document.getElementById('temperature').value)
//     //Check if number
//     if(isNaN(number)) {
//         alert('Please enter a valid number');
//     } else {
//     // Convert to Farenheit
//     const fahrenheitConverted = (number*(9/5)+32).toFixed(2);
//     results.innerHTML = `${fahrenheitConverted} °F`
//     }
//     document.getElementById('form').reset()
// e.preventDefault()
// });

temperature.onkeyup = function(){
    number = parseFloat(document.getElementById('temperature').value)
    const option = document.querySelector('#temp-type').selectedIndex 
    if (isNaN(number)){
        results.innerHTML = ""
    } else if (option == 0) {
        //number = parseFloat(document.getElementById('temperature').value)
        //Convert to Farenheit
        const celsiusConverted = ((number-32)*5/9).toFixed(2);
        results.innerHTML = `${celsiusConverted} °C`
    } else {
        const fahrenheitConverted = (number*(9/5)+32).toFixed(2);
        results.innerHTML = `${fahrenheitConverted} °F`
    }
};

//temperature.onkeyup = converter();
