control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
    let Distance: number[] = []
    let Temps: number[] = []
    Fente += 1
    Temps[0] = input.runningTimeMicros() / 1000000
    Distance[1] = Fente / 20 * 9.6 / 100
    serial.writeString("" + Temps.length + "," + (Temps.length - 1))
    serial.writeLine("")
})
let Fente = 0
let liste = [0, 1]
Fente = 0
