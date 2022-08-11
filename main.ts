Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    sprite.change(LedSpriteProperty.X, 1)
    sprite.ifOnEdgeBounce()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    sprite.change(LedSpriteProperty.Y, 1)
    sprite.ifOnEdgeBounce()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    sprite.change(LedSpriteProperty.X, -1)
    sprite.ifOnEdgeBounce()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    sprite.change(LedSpriteProperty.Y, -1)
    sprite.ifOnEdgeBounce()
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
