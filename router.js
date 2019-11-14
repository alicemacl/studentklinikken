import Home from "./pages/Home.js";
import Behandlinger from "./pages/Behandlinger.js";
import Osteopati from "./pages/Osteopati.js"; 
import Timebestilling from "./pages/Timebestilling.js";
import Gjennomgang from "./pages/Gjennomgang.js";
import Akupunktur from "./pages/Akupunktur.js";
import Kostholdsveiledning from "./pages/Kostholdsveiledning.js";
import Bekreftelse from "./pages/Bekreftelse.js";
import Logginn from "./pages/Logg-inn.js";

const router = new VueRouter({
  mode: "history",
  routes: [

    {
      path: "/home",
      name: "home",
      component: Home
    },

    {
      path: "/logg-inn",
      name: "logg-inn",
      component: Logginn
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
      path: "/timebestilling",
      name: "timebestilling",
      component: Timebestilling
    },

    {
      path: "/gjennomgang",
      name: "gjennomgang",
      component: Gjennomgang
    },

    {
      path: "/bekreftelse",
      name: "bekreftelse",
      component: Bekreftelse
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
    }
    
  ],

});

export default router;