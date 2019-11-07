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
});

export default router; 