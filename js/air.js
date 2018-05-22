const airApi = "http://opendata2.epa.gov.tw/AQI.json";
const test = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=7"

let airInfo = [''];

fetch(airApi, { method: 'get', mode: 'cors', header: { 'accept': 'application/jsonp' } }).then(data => data.json()).then(data => airInfo = data)

const select_box = document.querySelector('#select_box')
const sectionInfo = document.querySelector('.info_list');

function filterCity(city) {
    let data = [];
    city.forEach(element => {
        data.push(element.County)
    });

    let result = new Set([...data])
    let arr = Array.from(result);

    let html = arr.map(place => {
        return `
            <option name="${place}">${place}</option>
        `
    }).join('')
    select_box.innerHTML = html;
}

function findMatches(findMatches, infos) {
    return infos.filter(place => {
        let regex = new RegExp(findMatches, 'gi')
        return place.County.match(regex)
    })
}

function displayMathes() {
    let arr = findMatches(select_box.value, airInfo);
    let html = arr.map(place => {
        return `
            <li class="box">
                <span>${place.PublishTime}</span>
                <h3>${place.SiteName}</h3>
                <h4>${place.Pollutant}</h4>
                <h5>${place.Status}</h5>
                <p>風速: ${place.WindSpeed}<br>空氣品質指數: ${place.AQI}</p>
            </li>
        `
    }).join('')
    sectionInfo.innerHTML = html;
}

setTimeout(() => {
    filterCity(airInfo);
    displayMathes();
}, 500);

select_box.addEventListener('change', displayMathes)