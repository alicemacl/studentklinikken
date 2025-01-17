import Home from "./pages/Home.js";
import KontaktOss from "./pages/KontaktOss.js";
import Behandlinger from "./pages/Behandlinger.js";
import Osteopati from "./pages/Osteopati.js";
import Gjennomgang from "./pages/Gjennomgang.js";
import Akupunktur from "./pages/Akupunktur.js";
import Kostholdsveiledning from "./pages/Kostholdsveiledning.js";

import Bekreftelse from "./pages/Bekreftelse.js";
import Logginn from "./pages/Logg-inn.js";
import Password from "./pages/Password.js";
import Smscode from "./pages/Sms-code.js";
import Dashboard from "./pages/Dashboard.js";
import DashboardMS from "./pages/DashboardMS.js";

import FysiologiskTestLab from "./pages/FysiologiskTestLab.js";


import AdminKalender from "./pages/AnsatteDesktop/AdminKalender.js";
import AnsatteBehandlere from "./pages/AnsatteDesktop/AnsatteBehandlere.js";
import AnsatteForside from "./pages/AnsatteDesktop/AnsatteForside.js";
import AnsatteInnlogging from "./pages/AnsatteDesktop/AnsatteInnlogging.js";
import AnsatteKunder from "./pages/AnsatteDesktop/AnsatteKunder.js";
import AnsatteTimeplaner from "./pages/AnsatteDesktop/AnsatteTimeplaner.js";
import Behandlere from './pages/AnsatteDesktop/Behandlere.js';
import Kunder from './pages/AnsatteDesktop/Kunder.js';
import Bestille from "./pages/Bestille.js";

const router = new VueRouter({

    mode: "history",
    routes: [
      {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/logg-inn",
            name: "logg-inn",
            component: Logginn
        },
        {
          path: "/kontakt-oss",
          name: "kontakt-oss",
          component: KontaktOss
        },
        {
            path: "/password",
            name: "password",
            component: Password
        },
        {
            path: "/sms-code",
            name: "sms-code",
            component: Smscode
        },
        {
            path: "/dashboardms",
            name: "dashboardms",
            component: DashboardMS
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard
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
            path: "/bestille",
            name: "bestille",
            component: Bestille
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
        },

        {
            path: "/behandlinger/fysiologisktestlab",
            name: "fysiologisktestlab",
            component: FysiologiskTestLab
        },
        {

            path: "/ansatte/innlogging",
            name: "innlogging",
            component: AnsatteInnlogging

        },

        {

            path: "/ansatte/behandlere",
            name: "ansattebehandlere",
            component: AnsatteBehandlere

        },
        {
            path: '/behandlere/:id',
            name: 'behandlere',
            component: Behandlere,
            props: true
        },
        {
            path: '/kunder/:id',
            name: 'kunder',
            component: Kunder,
            props: true
        },
        {

            path: "/ansatte/forside",
            name: "forside",
            component: AnsatteForside
        },
        {
            path: '/ansatte/kalender',
            name: 'adminkalender',
            component: AdminKalender
        },
        {
            path: "/ansatte/timeplaner",
            name: "timeplaner",
            component: AnsatteTimeplaner
        },
        {
            path: "/ansatte/kunder",
            name: "kunder",
            component: AnsatteKunder
        },
    ]

});

export default router; 
