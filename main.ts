let zahl1 = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    zahl1 = 0
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        zahl1 += -1
    } else if (input.buttonIsPressed(Button.B)) {
        zahl1 += 1
    } else if (input.buttonIsPressed(Button.AB)) {
    	
    }
    basic.clearScreen()
    basic.showString("" + (zahl1))
})
