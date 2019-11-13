import Home from "./pages/Home.js"
import Behandlinger from "./pages/Behandlinger.js"
import Timebestilling from "./pages/Timebestilling.js"

const router = new VueRouter ({
    mode: 'history', 
    routes: [

        {
            path: '/', 
            name: 'timebestilling', 
            component: Timebestilling
        }
        /*{
            path: '/', 
            name: 'home', 
            component: Home
        },
        {
            path: '/behandlinger', 
            name: 'behandlinger', 
            component: Behandlinger
        },
        */
    ]
});

export default router; 