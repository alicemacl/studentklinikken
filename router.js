import Home from "./pages/Home.js";
import Behandlinger from "./pages/Behandlinger.js";
import Osteopati from "./pages/Osteopati.js"; 
import Akupunktur from "./pages/Akupunktur.js";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "osteopati",
      component: Osteopati
      /*
      path: "/",
      name: "home",
      component: Home
      */
    }, /*
    {
      
      path: "/behandlinger",
      name: "behandlinger",
      component: Behandlinger
      
    }, 
    {
      path: "/behandlinger/osteopati",
      name: "osteopati",
      component: Osteopati
    }, */
    {
      path: "/behandlinger/akupunktur",
      name: "akupunktur",
      component: Akupunktur
    }
  ],

});

export default router;
