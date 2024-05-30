/**
 * <- - - Agregar bloque a la acción de disparo para hacer un "Disparo doble"
 */
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 100)
    sprites.destroy(bala)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    velocidadEnemigo += 15
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let enemigo: Sprite = null
let bala: Sprite = null
scene.setBackgroundColor(15)
let jugador = sprites.create(assets.image`jugador`, SpriteKind.Player)
let puntaje = 0
let velocidadEnemigo = 25
jugador.setPosition(68, 53)
game.onUpdate(function () {
    controller.moveSprite(jugador, 100, 100)
    jugador.setStayInScreen(true)
})
game.onUpdateInterval(2000, function () {
    enemigo = sprites.create(assets.image`ene`, SpriteKind.Enemy)
    enemigo.setPosition(randint(0, 100), -20)
    enemigo.vy = velocidadEnemigo
})
game.onUpdateInterval(1000, function () {
    bala = sprites.createProjectileFromSprite(assets.image`bullet`, jugador, 25, -200)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
