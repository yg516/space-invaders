input.onButtonPressed(Button.A, function () {
    PLAYER.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(PLAYER.get(LedSpriteProperty.X), PLAYER.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(10)
        if (ENEMY.isTouching(shoot)) {
            ENEMY.delete()
            game.addScore(1)
        }
    }
    shoot.delete()
})
input.onButtonPressed(Button.B, function () {
    PLAYER.move(1)
})
let ENEMY: game.LedSprite = null
let shoot: game.LedSprite = null
let PLAYER: game.LedSprite = null
basic.showString("WELCOME TO MY GAME!!")
music.play(music.stringPlayable("C5 E F - E F D C ", 120), music.PlaybackMode.UntilDone)
PLAYER = game.createSprite(2, 4)
basic.forever(function () {
    ENEMY = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        ENEMY.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
    basic.pause(14)
    ENEMY.delete()
})
basic.forever(function () {
    if (ENEMY.isTouching(PLAYER)) {
        PLAYER.delete()
        game.gameOver()
    }
})
