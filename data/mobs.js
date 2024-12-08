import Settings from "../config";

let Entities = [];

if(Settings().visualizeThunder) {
    Entities.push(
        {
            name: "Thunder"
        }
    )
}

if(Settings().visualizeJawbus) {
    Entities.push(
        {
            name: "Lord Jawbus"
        }
    )
}

if(Settings().visualizeYeti) {
    Entities.push(
        {
            name: "Yeti"
        }
    )
}

if(Settings().visualizeReindrake) {
    Entities.push(
        {
            name: "Reindrake"
        }
    )
}

//Entities.push(
//    {
//        name: "Magma Slug"
//    }
//)

export default Entities;