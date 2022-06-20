const express = require('express')
let drivers = require('./static/drivers.json')

const app = express()
const port = 5000

let places = [...Array(21).keys()]

drivers.forEach(element => {
    element.imgUrl = `./static/${element.code.toLowerCase()}.png`

    placeIndex = Math.floor(Math.random() * places.length)
    element.place = places[placeIndex] + 1
    places.splice(placeIndex, 1)
});

app.get('/api/drivers', (_, res) => {
    res.json(drivers)
})

app.post('/api/drivers/:driverId/overtake', (req, res) => {
    const driverId = parseInt(req.params.driverId)

    let driverOvertaking = drivers.find(driver => {
        return driver.id === driverId
    })

    if (driverOvertaking.place === 1) {
        res.json(drivers)
    }

    let driverOvertaken = drivers.find(driver => {
        return driver.place === driverOvertaking.place - 1
    })

    driverOvertaking.place -= 1
    driverOvertaken.place += 1

    res.json(drivers)
})

app.listen(port, () => `Server running on port ${port}`)