const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then (data => displayCountries (data))
} 
loadCountries();
const displayCountries = (counties) => {
    /*  for (const country of counties) {
         console.log(country);
     } */
    const countriesDiv = document.getElementById('country');
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('countries');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    })
};
const loadCountryByName = name => {
    const url
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data))
};
const displayCountryDetail = country => {
    console.log(country);
}