// spider.js
// 抓取数据
const result = {};
const countryNames = [...document.querySelector('.tr-title').querySelectorAll('th')].slice(1).map(n => n.innerText);
[...document.querySelector('tbody').querySelectorAll('tr')].forEach(row => {
    const tds = [...row.querySelectorAll('td')];
    const year = tds.shift().innerText.replace(/[^\d]/g, '');
    result[year] =countryNames.reduce((x, y, i) => {
        x[y] = Number(tds[i].innerText) || 0;
        return x;
    }, {});
});
console.log(JSON.stringify(result));
