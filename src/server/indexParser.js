const unirest = require('unirest');
const cheerio = require('cheerio');



unirest.get(`https://rsport.ria.ru/20200611/1572831059.html`).end(data=> {
    const body = data.body
    const $ = cheerio.load(body)
    const title = $('.HWi5Y').text()
    const image = $('._1pKD0').data('-source-sid')
    console.log(image)
})