function location_index (loc_in_list: tiles.Location[], locs: any[]) {
    for (let index = 0; index <= locs.length - 1; index++) {
        if (loc_in_list[0].column == locs[index].column && loc_in_list[0].row == locs[index].row) {
            return index
        }
    }
    return -1
}
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
function load_map () {
    tiles.setCurrentTilemap(game_map[map_y][map_x])
    tiles.placeOnRandomTile(sprite_player, assets.tile`spawn_in_tile`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`to_right_map`, function (sprite, location) {
    local_overlap_index = location_index([location], tiles.getTilesByType(assets.tile`to_right_map`))
    map_x += 1
    load_map()
    tiles.placeOnTile(sprite, tiles.getTilesByType(assets.tile`to_left_map`)[local_overlap_index])
    sprite.x += tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth)
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`to_left_map`, function (sprite, location) {
    local_overlap_index = location_index([location], tiles.getTilesByType(assets.tile`to_left_map`))
    map_x += -1
    load_map()
    tiles.placeOnTile(sprite, tiles.getTilesByType(assets.tile`to_right_map`)[local_overlap_index])
    sprite.x += tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth) * -1
})
let local_overlap_index = 0
let player_jumping = false
let sprite_player: Sprite = null
let map_y = 0
let map_x = 0
let game_map: tiles.TileMapData[][] = []
let GRAVITY = 0
let MOVE_SPEED = 0
stats.turnStats(true)
MOVE_SPEED = 100
GRAVITY = 500
game_map = [[tileUtil.createSmallMap(tilemap`level2`), tileUtil.createSmallMap(tilemap`level4`)]]
map_x = 0
map_y = 0
make_character()
scene.setBackgroundColor(12)
load_map()
scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth), scene.cameraProperty(CameraProperty.Y) + tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth))
