// tests go here; this will not be compiled when this package is used as a library
let temperature = 0
let humidity = 0
let pressure = 0
basic.forever(() => {
    pressure = BME280.pressure()
    temperature = BME280.temperature()
    humidity = BME280.hunidity()
    serial.writeValue("P", pressure)
    serial.writeValue("T", temperature)
    serial.writeValue("H", humidity)
    basic.pause(1000)
})
