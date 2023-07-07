controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jump_character()
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite_player.isHittingTile(CollisionDirection.Bottom)) {
        player_jumping = false
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            spriteutils.jumpImpulse(sprite, tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth) + 2)
        }
    }
})
function jump_character () {
    if (!(player_jumping)) {
        spriteutils.jumpImpulse(sprite_player, 18)
        player_jumping = true
    }
}
function make_character () {
    sprite_player = sprites.create(assets.image`player_image`, SpriteKind.Player)
    sprite_player.ay = GRAVITY
    enable_controls(true)
}
function enable_controls (en: boolean) {
    if (en) {
        controller.moveSprite(sprite_player, MOVE_SPEED, 0)
    } else {
        controller.moveSprite(sprite_player, 0, 0)
    }
}
let player_jumping = false
let sprite_player: Sprite = null
let GRAVITY = 0
let MOVE_SPEED = 0
stats.turnStats(true)
MOVE_SPEED = 100
GRAVITY = 500
let tilemap_map = [[tileUtil.createSmallMap(tilemap`level2`)]]
make_character()
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap_map[0][0])
