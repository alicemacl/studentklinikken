import Home from "./pages/Home.js";
import Behandlinger from "./pages/Behandlinger.js";
import Osteopati from "./pages/Osteopati.js"; 
import Timebestilling from "./pages/Timebestilling.js";
import Gjennomgang from "./pages/Gjennomgang.js";

const router = new VueRouter({
  mode: "history",
  routes: [

    {
      path: "/",
      name: "home",
      component: Home
    },

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
    }
    
  ],

});

export default router;
