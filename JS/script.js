function handleSearch(event) {
    event.preventDefault();

    let inputValue = document.getElementById("search").value,
        data = document.querySelector(".result .data"),
        cidade = document.querySelector(".result .cidade"),
        temperatura = document.querySelector(".result .temperatura"),
        condicao = document.querySelector(".result .condicao");


    const key = '871d125ee860db1237e1a338d4d543dc';

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`)
        .then(response => {
            console.log((response.data.main.temp - 273.15).toFixed(0))
        })
}
