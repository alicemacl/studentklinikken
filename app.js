import router from "./router.js";
import * as components from "./components/index.js";

new Vue({
    el: "#app",
    router: router
})

new Vue({
    el: "#admin",
    router: router
})