const request = require('request')
const newsSearch = (serchTerm, callback) => {
    const url = 'http://newsapi.org/v2/everything?q=' + serchTerm + '&apiKey=c79944c7a45740a180ff59704dd8f372'

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

module.exports = newsSearch