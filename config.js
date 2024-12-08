// Make sure these go to the right directory 
import Settings from "../Amaterasu/core/Settings"
import DefaultConfig from "../Amaterasu/core/DefaultConfig"
const config = new DefaultConfig("LsRadius", "data/settings.json")

config
.addSwitch({
    category: "Main",
    configName: "enabled",
    title: "Main Toggle",
    description: "Toggle the module"
})
.addSwitch({
    category: "Main",
    configName: "visualizeRadius",
    title: "Visualize Lootshare Radius",
    description: "Visualizes a 30 block wide sphere around the mob"
})
.addSwitch({
    category: "Mobs",
    subcategory: "Crimson Isle",
    configName: "visualizeThunder",
    title: "Visualize Thunder Lootshare radius",
    description: "Visualizes a 30 block wide sphere around Thunder"
})
.addSwitch({
    category: "Mobs",
    subcategory: "Crimson Isle",
    configName: "visualizeJawbus",
    title: "Visualize Lord Jawbus Lootshare radius",
    description: "Visualizes a 30 block wide sphere around Lord Jawbus"
})
.addSwitch({
    category: "Mobs",
    subcategory: "Winter Island",
    configName: "visualizeYeti",
    title: "Visualize Yeti Lootshare radius",
    description: "Visualizes a 30 block wide sphere around Yeti"
})
.addSwitch({
    category: "Mobs",
    subcategory: "Winter Island",
    configName: "visualizeReindrake",
    title: "Visualize Reindrake Lootshare radius",
    description: "Visualizes a 30 block wide sphere around Reindrake"
})

const setting = new Settings("LsRadius", config, "data/scheme-nwjn.json") // make sure to set your command with [.setCommand("commandname")]

export default () => setting.settings