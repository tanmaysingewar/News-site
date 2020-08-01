const request = require('request')
const catagoryData = (serchTerm, callback) => {
    const url = 'https://saurav.tech/NewsAPI/top-headlines/category/' + serchTerm + '/in.json'

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

module.exports = catagoryData