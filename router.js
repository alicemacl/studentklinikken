import Home from "./pages/Home.js"

const router = new VueRouter ({
    mode: 'history', 
    routes: [
        {
            path: '/', 
            name: 'home', 
            component: Home
        }
    ]
});

export default router; 