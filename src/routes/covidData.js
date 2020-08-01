const request = require('request')
const covidData = (callback) => {
    const url = 'https://covid-19india-api.herokuapp.com/v2.0/country_data'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('unable to connect News api', undefined)
        } else if (body.error) {
            callback('Unable to find search term', undefined)
        } else {
            const covidData = body
            callback(undefined, covidData[1])
        }
    })
}

module.exports = covidData