let bước = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(bước)
})
input.onButtonPressed(Button.B, function () {
    bước = 0
})
input.onGesture(Gesture.Shake, function () {
    bước += 1
})
