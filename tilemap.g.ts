// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "map_0_0":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010100000000000000020202020202020202020000000000000202020202020202020202020200000002020202020202020202020202020200020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "map_1_0":
            case "level4":return tiles.createTilemap(hex`160011000000000000000000000000000000000000000000000000010101010101010101010101010101010101010100000101010101010101010101010101010101010101000300000000010101010101010101010101010101010003000000000000010101010101010101010101010100030000000000000000000101010101010101010101000300000200000000000000000101010101010101010003000000000000000000000000000000000000010100000100000000000200000000000000000000000000040001010100000000000000000000000000000000000400010101010100000000000000000000000000000004000101010101010100000000020000000000000000040001010101010101010100000000000000000000000400010101010101010101010101000000000000020004000101010101010101010101010101010100000000040001010101010101010101010101010101010101010000000000000000000000000000000000000000000000`, img`
2222222222222222222222
2222222222222222222222
2222222222222222222222
.....22222222222222222
.......222222222222222
..........222222222222
............2222222222
...................222
22....................
2222..................
222222................
22222222..............
2222222222............
2222222222222.........
22222222222222222.....
2222222222222222222222
2222222222222222222222
`, [myTiles.transparency8,myTiles.tile5,myTiles.tile8,myTiles.tile10,myTiles.tile9], TileScale.Eight);
            case "map_2_0":
            case "level5":return tiles.createTilemap(hex`160011000000000000000000000000000000000000000000000000020202020202020202020202020202020202020200000202020202020202020000000000000000020202000100000000000000000000000000000000000000000001000000000000000000000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000000000000000000001000003000000000000000000000000030000000000010000000000000000000000000000000000000000000100000000000000030000000000000000000002020000020202020000000000000000000000000202020200000202020202020200000000000202020202020202000002020202020202020000000202020202020202020000020202020202020202040002020202020202020200000202020202020202020403000202020202020202000002020202020202020204000002020202020202020000000000000000000000040000000000000000000000`, img`
2222222222222222222222
2222222222222222222222
2222222222........2222
......................
......................
......................
......................
......................
......................
...................222
22222............22222
22222222.....222222222
222222222...2222222222
2222222222..2222222222
2222222222...222222222
2222222222...222222222
2222222222...222222222
`, [myTiles.transparency8,myTiles.tile10,myTiles.tile5,myTiles.tile8,myTiles.tile7], TileScale.Eight);
            case "map_0_1":
            case "level2":return tiles.createTilemap(hex`160011000000000000000000000000000000000000000000000000010101010101010101010101010101010101010100000100000000000000010101010101010101010101000001000000000000000001010101010101010101010000000000000000000000000001010101010101010100000000000000000000000000000000010101010101000000000000000000000000000000000000000101010000000000000000000000000000000000000000010100000000000000000000000000000000000000000101000000000200000000000000000000000000000000010000000000000000000002000000000200000000000003000000000000000000000000000000000000000000030001010101010101010000000000000000000002000300010101010101010101010101010101010000000003000101010101010101010101010101010101000000030001010101010101010101010101010101010101010000000000000000000000000000000000000000000000`, img`
2222222222222222222222
2222222222222222222222
22.......2222222222222
22........222222222222
2...........2222222222
2..............2222222
2.................2222
2..................222
2..................222
2...................22
2.....................
2.....................
222222222.............
22222222222222222.....
222222222222222222....
2222222222222222222222
2222222222222222222222
`, [myTiles.transparency8,myTiles.tile5,myTiles.tile8,myTiles.tile9], TileScale.Eight);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "grass_top":
            case "tile2":return tile2;
            case "dirt":
            case "tile3":return tile3;
            case "transparency8":return transparency8;
            case "rock":
            case "tile5":return tile5;
            case "torch":
            case "tile8":return tile8;
            case "to_right_map":
            case "tile9":return tile9;
            case "to_left_map":
            case "tile10":return tile10;
            case "ladder":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
