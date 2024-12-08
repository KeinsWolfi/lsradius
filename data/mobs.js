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

//Entities.push(
//    {
//        name: "Magma Slug"
//    }
//)

export default Entities;