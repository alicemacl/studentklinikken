import Home from "./pages/Home.js";
import Behandlinger from "./pages/Behandlinger.js";
import Osteopati from "./pages/Osteopati.js"; 
import Akupunktur from "./pages/Akupunktur.js";
import Kostholdsveiledning from "./pages/Kostholdsveiledning.js";

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