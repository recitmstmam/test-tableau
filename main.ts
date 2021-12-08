control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
    Fente += 1
    Distance.push(Fente / 20 * 9.6 / 100)
    Temps.push(input.runningTimeMicros() / 1000000)
    Variation_distance = Distance[Distance.length - 2] - Distance[Distance.length - 1]
    Variation_temps = Temps[Temps.length - 2] - Temps[Temps.length - 1]
    VItesse = Variation_distance / Variation_temps
    serial.writeString("" + (VItesse))
    serial.writeLine("")
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallDiamond)
    control.reset()
})
let VItesse = 0
let Variation_temps = 0
let Variation_distance = 0
let Fente = 0
let Temps: number[] = []
let Distance: number[] = []
basic.showIcon(IconNames.Yes)
Distance = []
Temps = []
Fente = 0
