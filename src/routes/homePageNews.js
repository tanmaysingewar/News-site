const request = require('request')
const homePageNews = (callback) => {
    const url = 'https://saurav.tech/NewsAPI/everything/cnn.json'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('unable to connect News api', undefined)
        } else if (body.error) {
            callback('Unable to find search term', undefined)
        } else {
            // const { body } = resonce
            const news = body
            callback(undefined, news)
        }
    })
}

module.exports = homePageNews