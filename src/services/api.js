const key = '01d8843152236560a1e4fc5c22b14128';

const fetchData = async (city) => {
    const url = `
    https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key} `;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    console.log(fetchResponse);

    return data;
};

export default fetchData;
