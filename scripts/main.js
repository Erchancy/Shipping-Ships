import { DockList } from "./Docks.js"
import { HaulerList } from "./Haulers.js"
import { CargoShipList } from "./Cargoship.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Cargo Ships</h2>
        ${CargoShipList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML