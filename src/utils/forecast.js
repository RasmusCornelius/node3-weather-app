const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f3638f03f5f209124142549c9988787b&query=' + latitude + ',' + longitude 

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is' + body.current.observation_time +' and ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ', but it feels like '+ body.current.feelslike)       
        }
        
    })
}

module.exports = forecast