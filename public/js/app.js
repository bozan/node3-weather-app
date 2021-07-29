console.log('Client side JavaScript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne =  document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageUnit = document.querySelector('#message-3')


//messageOne.textContent = 'from javascript'
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageUnit.textContent = ''
    
    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if (data.error){
                messageOne.textContent = data.error
                messageTwo.textContent = ''
                messageUnit.textContent = ''
            } else {
                console.log(data.forecast)
                messageOne.textContent = data.address
                messageTwo.textContent = data.forecast.description + '. The temperature is '+data.forecast.degree + ' degree out. It feels like ' + data.forecast.feelslike + ' degree out.'
                messageUnit.textContent = 'Temperature unit (°C) '
            }
        })
    })  
})