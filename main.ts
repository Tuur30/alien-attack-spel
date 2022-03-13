let Astronaut: game.LedSprite = null
let spelBezig = false
let alien0: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    if (Astronaut.get(LedSpriteProperty.X) > 0) {
        Astronaut.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Astronaut.get(LedSpriteProperty.X) < 4) {
        Astronaut.change(LedSpriteProperty.X, 1)
    }
})
basic.forever(function () {
    game.setScore(0)
    Astronaut = game.createSprite(2, 4)
    spelBezig = true
    while (spelBezig == true) {
        basic.pause(100)
    }
    game.addScore(1)
    game.gameOver()
})
basic.forever(function () {
    basic.pause(100)
    if (spelBezig == true) {
        alien0 = game.createSprite(0, 0)
    }
    basic.pause(randint(0, 5000))
    while (spelBezig == true) {
        if (alien0.get(LedSpriteProperty.Y) == 4) {
            if (alien0.isTouching(Astronaut)) {
            	
            }
        }
    }
})
