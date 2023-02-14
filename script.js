//get longitude and latitude. This is built into JS, so can find it easily:
window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation) {


        navigator.geolocation.getCurrentPosition(position => {

            long = position.coords.longitude;
            lat = position.coords.latitude;
            const APIKEY = `dcca6217d502d06d3044e5aed5fbd010`;
            const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`;

            // Promise Chain
            fetch(url)
                .then((response) => {
                    // console.log(`response`, response);
                    return response.json();
                })
                .then((data) => {      
                    console.log(data);           
                    const { temp } = data.main;
                    // ^ object destructuring 

                    //set DOM elements from API:
                    document.querySelector(".temperature-degree").textContent = temp;
                    temperatureDescription.textContent = data.weather[0].description;
                    locationTimezone.textContent = data.sys.country
                });
            
            // async function fetchApiData(url) {
            //     const response = await fetch(url);
            //     // console.log(response);
            //     const data = await response.json();
            //     // console.log(data);
            //     return data;
            // };

            // console.log(apiData);
            // const { temp } = apiData.main;
            // document.querySelector(".temperature-degree").textContent = apiData.main.temp;

            // I I F E 
            // Immediately Invoked Function Execution


            // (async () => {
            //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`);
            //     const data = await response.json();
            //     document.querySelector(".temperature-degree").textContent = data.main.temp;
            // })();
        })

    } else {
        h1.textContent = "You need to turn on geolocation to use this function"
    }

    function setIcons(icon, iconId) {
        const skycons = new skycons({color: "white"});
        const currentIcon = 
    }
});