import Settings from "../config";

function getEntities() {
    const settings = Settings();
    const entities = [];

    if (settings.visualizeThunder) {
        entities.push({ name: "Thunder" });
    }

    if (settings.visualizeJawbus) {
        entities.push({ name: "Lord Jawbus" });
    }

    if (settings.visualizeYeti) {
        entities.push({ name: "Yeti" });
    }

    if (settings.visualizeReindrake) {
        entities.push({ name: "Reindrake" });
    }

    //entities.push({ name: "Magma Slug" });
    
    return entities;
}

export default getEntities;
