import Home from "./pages/Home.js";
import Behandlinger from "./pages/Behandlinger.js";
import Osteopati from "./pages/Osteopati.js";
import Timebestilling from "./pages/Timebestilling.js";
import Gjennomgang from "./pages/Gjennomgang.js";
import Akupunktur from "./pages/Akupunktur.js";
import Kostholdsveiledning from "./pages/Kostholdsveiledning.js";
import FysiologiskTestLab from "./pages/FysiologiskTestLab.js";
import AnsatteBehandlere from "./pages/AnsatteDesktop/AnsatteBehandlere.js";
import AnsatteForside from "./pages/AnsatteDesktop/AnsatteForside.js";
import AnsatteInnlogging from "./pages/AnsatteDesktop/AnsatteInnlogging.js";
import AnsatteKunder from "./pages/AnsatteDesktop/AnsatteKunder.js";
import AnsatteTimeplaner from "./pages/AnsatteDesktop/AnsatteTimeplaner.js";

const router = new VueRouter({
  mode: "history",
  routes: [

    /* {

      path: "/",
      name: "home",
      component: Home

    }, */

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

      path: "/",
      name: "innlogging",
      component: AnsatteInnlogging

    },

    {

      path: "/ansatte/behandlere",
      name: "behandlere",
      component: AnsatteBehandlere

    },

    {

      path: "/ansatte/forside",
      name: "forside",
      component: AnsatteForside

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

  ],
});

export default router;