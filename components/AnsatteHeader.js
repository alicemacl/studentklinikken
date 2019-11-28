const AnsatteHeader = Vue.component("ansatte-header-component", {
    template: `
    <div class="ansatte-header d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
            <img class="ansatte-logo" src="../assets/logoSort.png">
            <div>
                <h1 class="row">Studentklinikken</h1> 
                <h2 class="row">Av Høyskolen Kristiania </h2>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <router-link to='/ansatte/kalender'>
                <h3 class="ansatte-link">Timeplan</h3>
            </router-link>
            <router-link to='/ansatte/behandlere'>
                <h3 class="ansatte-link">Behandlere</h3>
            </router-link>
            <router-link to='/ansatte/kunder'>
                <h3 class="ansatte-link">Kundeoversikt</h3>
            </router-link>
        </div>
        <div class="d-flex flex-row align-items-center">
            <div>
            <h4 class="row login-header">Logget inn som: Tone</h4>
            <h4 class="row login-header justify-content-end"><router-link to='/'>Logg ut</router-link></h4>
            </div>
        </div>
    </div>
    `
});

export default AnsatteHeader;
