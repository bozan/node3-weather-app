

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne =  document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageHumidity = document.querySelector('#message-h')
const messagePressure = document.querySelector('#message-p')
const messageCoordinates = document.querySelector('#message-c')
const messageUnit = document.querySelector('#message-u')


//messageOne.textContent = 'from javascript'
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageUnit.textContent = ''
    messageHumidity.textContent = ''
    messagePressure.textContent = ''
    messageCoordinates.textContent = '' 
    fetch('/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if (data.error){
                messageOne.textContent = data.error
                messageTwo.textContent = ''
                messageUnit.textContent = ''
                messageHumidity.textContent = ''
                messagePressure.textContent = ''
                messageCoordinates.textContent = '' 
            } else {
                console.log(data.forecast)
                messageOne.textContent = data.address
                messageTwo.textContent = data.forecast.description + '. The temperature is '+data.forecast.degree + ' degree out. It feels like ' + data.forecast.feelslike + ' degree out.'
                messageHumidity.textContent = 'Humidity: ' + data.forecast.humidity
                messagePressure.textContent = 'Pressure: ' + data.forecast.pressure
                messageCoordinates.textContent = ' (Latitude: '+ data.coordinates.latitude + ', Longitude: '+ data.coordinates.longitude +')'
                messageUnit.textContent = 'Temperature unit (°C) '
            }
        })
    })  
})