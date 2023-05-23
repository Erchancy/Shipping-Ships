import { getShips, getHaulingShips } from "./database.js"


export const CargoShipList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        // Convert each dock object to an <li> and append to the docksHTML string
        shipsHTML += `<li data-type="cargo"
                    data-haulerId="${ship.haulerId}"
                    data-name="${ship.name}"
                    >${ship.name}
                </li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "cargo") {
            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haulerid
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
    
            // Iterate the array of hauler objects
            const haulers = getHaulingShips()
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(haulerId) === hauler.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip.name = hauler.name
                }
                
            }
    
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
            
        }


    }
)