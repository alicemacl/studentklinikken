import Home from "./pages/Home.js";
import Behandlinger from "./pages/Behandlinger.js";
import Osteopati from "./pages/Osteopati.js"; 
import Timebestilling from "./pages/Timebestilling.js";

const router = new VueRouter({
  mode: "history",
  routes: [

    {
        path: "/",
        name: "timeliste",
        component: Timebestilling
    }

    /*{
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
    }
    */
    
  ],

});

export default router;
