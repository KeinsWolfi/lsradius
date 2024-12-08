import RenderLibV2 from "../RenderLibV2";
import Settings from "./config";
import getEntities from "./data/mobs";

register("command", () => {
    Settings().getConfig().openGui()
}).setName("lsradius").setAliases("ls")

let visualizedEntities = [];

register("tick", () => {
    if(!Settings().enabled) return;

    const entities = World.getAllEntitiesOfType(net.minecraft.entity.item.EntityArmorStand)

    let mobs = [];
    entities.forEach((entity) => {
        const name = entity?.getName();
        const plainName = name?.removeFormatting();

        if (plainName.includes("❤") && getEntities().some(m => plainName.includes(m.name))) {
            if(mobs.includes(entity)) return;
            mobs.push(entity);
        }
    })

    visualizedEntities = mobs;
})

register("worldUnload", () => {
    visualizedEntities = [];
})

register("renderWorld", () => {
    if(!Settings().enabled) return;

    visualizedEntities.forEach((entity) => {
        RenderLibV2.drawSphere(entity.getX(), entity.getY(), entity.getZ(), 30, 30, 30, 0, 0, 0, 0.1, 1, 0.1, 0.5, false, false);
    })
})