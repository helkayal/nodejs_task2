const forecast = (latitude, longtitude, callback) => {

    const request = require("request")

    const url = "http://api.weatherapi.com/v1/current.json?key=893b3e7507d745afb16151120241907&q=" + latitude + "," + longtitude
    request({ url, json: true }, (error, response) => {

        if (error) {
            callback("Unable to connect to weather api service", undefined)
        } else if (response.body.error) {
            callback(response.body.error.message, undefined)
        }
        else {
            callback(undefined, response.body.location.name
                + " it is " + response.body.current.condition.text
                + " and tempreture is " + response.body.current.temp_c
            )

        }
    })
}

module.exports = forecast