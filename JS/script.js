function handleSearch(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    let inputValue = document.getElementById("search").value, // Obtém o valor inserido no campo de entrada da cidade
        data = document.querySelector(".result .data"), // Seleciona o elemento HTML onde a data será exibida
        cidade = document.querySelector(".result .cidade"), // Seleciona o elemento HTML onde o nome da cidade será exibido
        temperatura = document.querySelector(".result .temperatura"), // Seleciona o elemento HTML onde a temperatura será exibida
        condicao = document.querySelector(".result .condicao"); // Seleciona o elemento HTML onde a descrição do clima será exibida


    const key = '871d125ee860db1237e1a338d4d543dc'; // Chave de acesso à API do OpenWeatherMap

    // Faz uma requisição à API do OpenWeatherMap usando o nome da cidade como parâmetro
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`)
        .then(response => {
            console.log((response.data.main.temp - 273.15).toFixed(0)); // Exibe os dados de resposta da requisição no console (testado valor de temperatura obs.: vindo em kelvin)
        });
}
