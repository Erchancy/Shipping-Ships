import { getDocks, getHaulingShips } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = `<ul>`

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li
                    data-type="dock"
                    data-dockId="${dock.id}"
                    data-location="${dock.location}"
                    >${dock.location} can hold ${dock.volume} tons of cargo
                </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock") {

            const dockId = itemClicked.dataset.dockid

            let shipCounter = 0

            let haulingShip = { name: "" }
            
            let haulers = getHaulingShips()
            for (const hauler of haulers) {
                if (parseInt(dockId) === hauler.dockId) {
                    shipCounter++
                    if (shipCounter === 1) {
                        haulingShip.name = hauler.name
                    } else if (shipCounter > 1) {
                        haulingShip.name += `, ${hauler.name}`
                    }
                }
            }
            if (shipCounter === 1) {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${haulingShip.name}`)
            } else if (shipCounter > 1) {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${haulingShip.name}`)
            } else {window.alert(`The ${itemClicked.dataset.location} dock is currently unloading nothing`)}
        }
    }
)