let entfernung = 0
basic.forever(function () {
    entfernung = grove.measureInCentimeters(DigitalPin.C16)
    if (entfernung <= 2) {
        music.ringTone(523)
        basic.showIcon(IconNames.No)
    } else {
        if (entfernung < 120) {
            music.playTone(262, music.beat(BeatFraction.Eighth))
            basic.pause(entfernung * 5)
            basic.clearScreen()
            for (let Index = 0; Index <= 4 - Math.round(entfernung / 120 * 5); Index++) {
                led.plot(0, Index)
            }
        }
    }
})
