//get longitude and latitude. This is built into JS, so can find it easily:
window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";

            const api =`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dcca6217d502d06d3044e5aed5fbd010`;

            fetch(api)
            .then((response) => {
                return response.json
            })
            .then((data) => {
                console.log(data)
            })
        })

    } else {
        h1.textContent = "You need to turn on geolocation to use this function"
    }
});