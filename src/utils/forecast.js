const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a7848356d1d5d4d2d5dd7ab6bf9ae6de&query='+ longitude + ',' + latitude + '&units=m'

    request({url, json: true}, (error, response) => { // just write url instead of url:url

        const {body} = response // added destructuring 
        const {current, error: bodyError} =  body // added destructuring 
 
        if (error) {
            callback('Unable to connect weather services!', undefined)
        } else if (bodyError) {
            callback('Unable to find coordinates. Try another search', undefined)
        } else {
            callback(undefined, {
                description: current.weather_descriptions[0],
                degree: current.temperature,
                feelslike: current.feelslike
            })
        }
    })
}
module.exports = forecast