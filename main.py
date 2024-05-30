def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(otherSprite)
    sprites.destroy(bala)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

enemigo: Sprite = None
bala: Sprite = None
scene.set_background_color(15)
jugador = sprites.create(assets.image("""
    jugador
"""), SpriteKind.player)
jugador.set_position(68, 53)

def on_on_update():
    controller.move_sprite(jugador, 100, 100)
game.on_update(on_on_update)

def on_update_interval():
    global bala, enemigo
    bala = sprites.create_projectile_from_sprite(assets.image("""
        bullet
    """), jugador, 0, -200)
    enemigo = sprites.create(assets.image("""
        ene
    """), SpriteKind.enemy)
    enemigo.set_position(76, 0)
    enemigo.set_velocity(0, 25)
game.on_update_interval(1000, on_update_interval)
