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
    if (tiles.getTilesByType(assets.tile`spawn_point`).length > 0) {
        tiles.placeOnRandomTile(sprite_player, assets.tile`spawn_point`)
        tileUtil.replaceAllTiles(assets.tile`spawn_point`, assets.tile`transparency8`)
        sprite_player.y += tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth) / 2
        sprite_player.vx = 1
        timer.after(0, function () {
            sprite_player.vx = 0
        })
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`to_right_map`, function (sprite, location) {
    timer.throttle("map_change", 100, function () {
        local_overlap_index = location_index([location], tiles.getTilesByType(assets.tile`to_right_map`))
        map_x += 1
        load_map()
        tiles.placeOnTile(sprite, tiles.getTilesByType(assets.tile`to_left_map`)[local_overlap_index])
        sprite.x += tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth)
        sprite.y += tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth) / 2
    })
})
function make_character () {
    sprite_player = sprites.create(assets.image`player_image`, SpriteKind.Player)
    enable_controls(true)
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_walk_right`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    sprite_player,
    [assets.animation`player_walk_right`[1]],
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_walk_left`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    sprite_player,
    [assets.animation`player_walk_left`[1]],
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
}
function enable_controls (en: boolean) {
    en_controls = en
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`to_left_map`, function (sprite, location) {
    timer.throttle("map_change", 100, function () {
        local_overlap_index = location_index([location], tiles.getTilesByType(assets.tile`to_left_map`))
        map_x += -1
        load_map()
        tiles.placeOnTile(sprite, tiles.getTilesByType(assets.tile`to_right_map`)[local_overlap_index])
        sprite.x += tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth) * -1
        sprite.y += tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth) / 2
    })
})
let en_controls = false
let local_overlap_index = 0
let player_jumping = false
let sprite_player: Sprite = null
let map_y = 0
let map_x = 0
let game_map: tiles.TileMapData[][] = []
stats.turnStats(true)
let MOVE_SPEED = 100
let GRAVITY = 500
game_map = [[tileUtil.createSmallMap(tilemap`map_0_1`), tileUtil.createSmallMap(tilemap`map_1_0`), tileUtil.createSmallMap(tilemap`map_2_0`)]]
map_x = 0
map_y = 0
make_character()
scene.setBackgroundColor(12)
load_map()
scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth), scene.cameraProperty(CameraProperty.Y) + tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth))
game.onUpdate(function () {
    if (en_controls) {
        if (sprite_player.tileKindAt(TileDirection.Center, assets.tile`ladder`) || (sprite_player.tileKindAt(TileDirection.Bottom, assets.tile`ladder`) || sprite_player.tileKindAt(TileDirection.Top, assets.tile`ladder`) || (sprite_player.tileKindAt(TileDirection.Left, assets.tile`ladder`) || sprite_player.tileKindAt(TileDirection.Right, assets.tile`ladder`)))) {
            controller.moveSprite(sprite_player, MOVE_SPEED, MOVE_SPEED)
            sprite_player.ay = 0
            sprite_player.vy = 0
        } else {
            controller.moveSprite(sprite_player, MOVE_SPEED, 0)
            sprite_player.ay = GRAVITY
        }
    } else {
        controller.moveSprite(sprite_player, 0, 0)
    }
})
