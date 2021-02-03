import home from "./pages/home/index.js"
import feeling from "./pages/feeling/index.js"
import movie from "./pages/movie/index.js"

const main = document.querySelector("#root");

const init = () => {

window.addEventListener("hashchange", async () => {
    main.innerHTML = ""
    const queryParamInit = window.location.hash.indexOf('?')
    const path = queryParamInit >= 0 ? window.location.hash.substring(0, queryParamInit) : window.location.hash
    switch (path){
        case "":
            main.appendChild(home());
            break;
          case "#feeling":
            main.appendChild(feeling());
            break;
          case "#movie":
            main.appendChild(await movie());
            break;
          default:
            main.appendChild(home());
    }

})

}

window.addEventListener("load", () => {

    main.appendChild(home());
    init()

 })
 