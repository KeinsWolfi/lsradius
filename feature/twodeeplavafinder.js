import Settings from "../config";
import RenderLibV2 from "../../RenderLibV2";

let visualizedBlocks = [];
let blocksToCheck = [];

register("step", () => {
    if(!Settings().enabled || !Settings().lavaFinder) return;

    visualizedBlocks = [];

    let playerOriginBlockPos = new BlockPos(Player.getX(), Player.getY(), Player.getZ());
    blocksToCheck = getBlocksAroundPlayer(playerOriginBlockPos, parseInt(Settings().lavaFinderRadius));

    blocksToCheck.forEach((block) => {
        if(block.type.getName().toLowerCase() === "lava") {
            const blockAbove = World.getBlockAt(block.getX(), block.getY() + 1, block.getZ());
            //ChatLib.chat("Block above lava block: " + blockAbove.type.getName());
            if(blockAbove.type.getName().toLowerCase() === "tile.air.name") {
                //ChatLib.chat("Air block found above lava block");
                const blockBelow = World.getBlockAt(block.getX(), block.getY() - 1, block.getZ());
                //ChatLib.chat("Block below lava block: " + blockBelow.type.getName());
                if(blockBelow.type.getName().toLowerCase() === "lava") {
                    //ChatLib.chat("Lava block found below lava block");
                    const blockBelowBelow = World.getBlockAt(block.getX(), block.getY() - 2, block.getZ());
                    if(!(blockBelowBelow.type.getName().toLowerCase() === "lava")) {
                        if(!visualizedBlocks.includes(block)) {
                            visualizedBlocks.push(block);
                        }
                    }
                }
            }
        }
    });
}).setFps(1);

register("renderWorld", () => {
    if(!Settings().enabled || !Settings().lavaFinder) return;

    visualizedBlocks.forEach((block) => {
        //RenderLibV2.drawEspBox(block.getX() + 0.5, block.getY(), block.getZ() + 0.5, 1, 1, 0.5, 0, 0, 0.4, false);
        RenderLibV2.drawInnerEspBoxV2(block.getX() + 0.5, block.getY(), block.getZ() + 0.5, 1, 1, 1, 0.7, 0.1, 0.1, 0.5, false);

    });
})

function getBlocksAroundPlayer(playerBlockPos, radius) {
    const blocks = [];
    for (let x = -radius; x <= radius; x++) {
        for (let y = -radius; y <= radius; y++) {
            for (let z = -radius; z <= radius; z++) {
                blocks.push(World.getBlockAt(playerBlockPos.add(x, y, z)));
            }
        }
    }
    return blocks;
}

register("worldUnload", () => {
    visualizedBlocks = [];
    blocksToCheck = [];
})