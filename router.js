import Home from "./pages/Home.js";
import Behandlinger from "./pages/Behandlinger.js";
import Osteopati from "./pages/Osteopati.js";
import Timebestilling from "./pages/Timebestilling.js";
import Gjennomgang from "./pages/Gjennomgang.js";
import Akupunktur from "./pages/Akupunktur.js";
import Kostholdsveiledning from "./pages/Kostholdsveiledning.js";
import BestillTime from "./pages/BestillTime.js";

const router = new VueRouter({
    mode: "history",
    routes: [

        {
            path: "/",
            name: "bestilltime",
            component: BestillTime
        },
        /*     {
                path: "/",
                name: "home",
                component: Home
            }, */

        {

            path: "/behandlinger",
            name: "behandlinger",
            component: Behandlinger

        },

        {
            path: "/behandlinger/osteopati",
            name: "osteopati",
            component: Osteopati
        },

        {
            path: "/",
            name: "timebestilling",
            component: Timebestilling
        },

        {
            path: "/gjennomgang",
            name: "gjennomgang",
            component: Gjennomgang
        },

        {
            path: "/timebestilling",
            name: "timebestilling",
            component: Timebestilling
        },

        {
            path: "/behandlinger/akupunktur",
            name: "akupunktur",
            component: Akupunktur
        },
        {
            path: "/behandlinger/kostholdsveiledning",
            name: "kostholdsveiledning",
            component: Kostholdsveiledning
        },
        /*{
            path: "/bestilltime",
            name: "bestilltime",
            component: BestillTime
        }*/

    ],

});

export default router;