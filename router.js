<<<<<<< HEAD
import Home from "./pages/Home.js"
import Behandlinger from "./pages/Behandlinger.js"
import AnsatteHjem from "./pages/AnsatteHjem.js"

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
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
            path: '/ansatte',
            name: 'ansatte',
            component: AnsatteHjem
        }
    ]
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

>>>>>>> bd614c904dff417fe6e42981ae74ed919304ec14
});

export default router;
