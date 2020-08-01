const searchTerm = document.querySelector('#s-form')
const Newsdata = document.querySelector('.data')
const search = document.querySelector('.search-field')
const Newsdata2 = document.querySelector('.data')
const loding = document.querySelector('#loding')
Newsdata.style = 'text-align:center'
Newsdata2.innerHTML = '<img src="loding.gif" alt="Loding4654654">'


//Search reasult 
searchTerm.addEventListener('submit', (e) => {
    loding.innerHTML = ''
    Newsdata.style = 'text-align:center'
    Newsdata.innerHTML = '<img src="loding.gif" alt="Loding4654654">'
    e.preventDefault()
    const searchTerm = search.value.toString()
    console.log(searchTerm)
    fetch('/news?search=' + searchTerm + '').then((responce) => {
        responce.json().then((data) => {
            if (data.error) {
                Newsdata.style = 'text-align:left'
                Newsdata2.innerHTML = data.error
                console.log(data.error)
            } else {
                loding.textContent = searchTerm + ` related search`
                loding.innerHTML += `</br><span class="production-name" id="search-count">About ${data.data.articles.length} reasult</span>`
                var news = data.data.articles;
                var newsData = "";
                var i;
                for (i = 0; i < news.length; i++) {
                    newsData += `<div class="card news-card">
                        <div class="main-body">
                            <table>
                                <tr>
                                    <td><img src="${data.data.articles[i].urlToImage}" class="circle-logo-img news-img" alt=""></td>
                                    <td><span class="news-title">${data.data.articles[i].title}</span> <br><span class="production-name">${data.data.articles[i].author}</span>
                                    </td>
                                </tr>
                            </table>
                            <p class="news-desc">
                            ${data.data.articles[i].description}
                                <a href="${data.data.articles[i].url}" class="link-more">more</a>
                            </p>
                        </div>
                    </div>`
                }
                Newsdata.style = 'text-align:left'
                Newsdata.innerHTML = newsData
            }
        })
    })
})

fetch('/homepage').then((responce) => {
    responce.json().then((data) => {
        console.log(data.data.articles.length)
        if (data.error) {
            console.log(data.error)
            Newsdata2.innerHTML = data.error
        } else {
            var news = data.data.articles;
            var newsData = "";
            var i;
            const titles = ''
            for (i = 0; i < news.length; i++) {
                newsData += `<div class="card news-card">
                        <div class="main-body">
                            <table>
                                <tr>
                                    <td><img src="${data.data.articles[i].urlToImage}" class="circle-logo-img news-img" alt=""></td>
                                    <td><span class="news-title">${data.data.articles[i].title}</span> <br><span class="production-name">${data.data.articles[i].author}</span>
                                    </td>
                                </tr>
                            </table>
                            <p class="news-desc">
                            ${data.data.articles[i].description}
                                <a href="${data.data.articles[i].url}">more</a>
                            </p>
                        </div>
                    </div>`
            }
            Newsdata.style = 'text-align:left'
            Newsdata2.innerHTML = newsData
        }
    })
})

const active = document.querySelector('#data-A')
const conform = document.querySelector('#data-C')
const death = document.querySelector('#data-D')
const recover = document.querySelector('#data-R')
const updateDate = document.querySelector('#data-update-date')

active.textContent = 'loding..'
conform.textContent = 'loding..'
death.textContent = 'loding..'
recover.textContent = 'loding..'
updateDate.textContent = 'loding..'

fetch('/covidData').then((responce) => {
    responce.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            active.textContent = data.data.active_cases
            conform.textContent = data.data.confirmed_cases
            death.textContent = data.data.death_cases
            recover.textContent = data.data.recovered_cases
            updateDate.textContent = data.data.last_updated
        }
    })
})



const catagory_search = function(search, callback) {
    Newsdata.innerHTML = ''
    loding.style = 'text-align:center'
    loding.innerHTML = '<img src="loding.gif" alt="Loding4654654">'
    const searchterm = search.toLowerCase()
    fetch('/catagory?catagory=' + searchterm + '').then((responce) => {
        responce.json().then((data) => {
            if (data.error) {
                callback(console.log(data.error), undefined, search)
            } else {
                callback(undefined, data, search)
                console.log(data)
            }
        })
    })
}


document.querySelector('#h-catagory').addEventListener('click', function() {
    catagory_search('Health', (error, data, search) => {
        return printCatagoryData(error, data, search)
    })
})

document.querySelector('#e-catagory').addEventListener('click', function() {
    catagory_search('Entertainment', (error, data, search) => {
        return printCatagoryData(error, data, search)
    })
})

document.querySelector('#g-catagory').addEventListener('click', function() {
    catagory_search('General', (error, data, search) => {
        return printCatagoryData(error, data, search)
    })
})

document.querySelector('#sci-catagory').addEventListener('click', function() {
    catagory_search('Science', (error, data, search) => {
        return printCatagoryData(error, data, search)
    })
})

document.querySelector('#sp-catagory').addEventListener('click', function() {
    catagory_search('Sports', (error, data, search) => {
        return printCatagoryData(error, data, search)
    })
})

document.querySelector('#t-catagory').addEventListener('click', function() {
    catagory_search('Technology', (error, data, search) => {
        return printCatagoryData(error, data, search)
    })
})

const printCatagoryData = function(error, data, search) {
    var news = data.data.articles;
    var newsData = "";
    var i;
    for (i = 0; i < news.length; i++) {
        newsData += `<div class="card news-card">
                <div class="main-body">
                    <table>
                        <tr>
                            <td><img src="${data.data.articles[i].urlToImage}" class="circle-logo-img news-img" alt=""></td>
                            <td><span class="news-title">${data.data.articles[i].title}</span> <br><span class="production-name">${data.data.articles[i].author}</span>
                            </td>
                        </tr>
                    </table>
                    <p class="news-desc">
                    ${data.data.articles[i].description}
                        <a href="${data.data.articles[i].url}" class="link-more">more</a>
                    </p>
                </div>
            </div>`
    }
    loding.style = 'text-align:left'
    loding.innerHTML = ` <p>${search } </p><span class="production-name" id="search-count">About ${data.data.articles.length} results</span>`
    Newsdata.style = 'text-align:left'
    Newsdata.innerHTML = newsData
    console.log(data)
}