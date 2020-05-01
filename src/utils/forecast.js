const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=fc3a03f4fd4899598c0476366a2b666f&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `It is current${body.current.temperature} degress out. There is a ${body.current.precip} % chance of rain.`)
        }
    })
}

module.exports = forecast