<<<<<<< HEAD
import Home from "./pages/Home.js"
import Behandlinger from "./pages/Behandlinger.js"
import BestillTime from "./pages/BestillTime.js"

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/behandlinger',
            name: 'behandlinger',
            component: Behandlinger
        },
        {
            path: '/bestilltime',
            name: 'bestilltime',
            component: BestillTime
        }
    ]
});

export default router;
=======
import Home from "./pages/Home.js";
import Behandlinger from "./pages/Behandlinger.js";
import Osteopati from "./pages/Osteopati.js"; 

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
    }
  ],

});

export default router;
>>>>>>> bd614c904dff417fe6e42981ae74ed919304ec14
