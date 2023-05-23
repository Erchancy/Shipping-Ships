const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5", partners: ""},
        { id: 2, location: "Busan, South Korea", volume: "21.6", partners: "Dorito, Frito"},
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35", partners: "Frito, Cheeto"},
        { id: 4, location: "Antwerp, Belgium", volume: "12.04", partners: ""}
    ],
    haulers: [
        {id: 1, name: "Bugle", dockId: 1},
        {id: 2, name: "Dorito", dockId: 2},
        {id: 3, name: "Frito", dockId: 3},
        {id: 4, name: "Cheeto", dockId: 3},
        {id: 5, name: "Funion", dockId: 1}
    ],
    cargoShips: [
        {id: 1, name:"Heart", haulerId: 1},
        {id: 1, name:"Diamond", haulerId: 2},
        {id: 1, name:"Club", haulerId: 3},
        {id: 1, name:"Spade", haulerId: 4},
        {id: 1, name:"Fool", haulerId: 5},
        {id: 1, name:"World", haulerId: 5}
    ]
}

export const getDocks = () => {
    // You write the code for copying the array and returning it
    return database.docks.map(docks => ({...docks})).sort((a, b) => (a.name > b.name) ? 1 : -1)
}

export const getHaulingShips = () => {
    // You write the code for copying the array and returning it
    return structuredClone(database.haulers).sort((a, b) => (a.name > b.name) ? 1 : -1)
}

export const getShips = () => {
    // You write the code for copying the array and returning it
    return database.cargoShips.map(cargoShips => ({...cargoShips})).sort((a, b) => (a.name > b.name) ? 1 : -1)
}