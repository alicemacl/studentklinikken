const AnsatteInnlogging = {
    template: `
    <div>
        <div class="innlogging-ansatte d-flex flex-column justify-content-center">
            <img class="logo align-self-center" src="../assets/logoSort.png">
            <div class=" d-flex justify-content-center">
                    <h1 class="main-header">Ansatte innlogging</h1>
            </div>
            <div class="d-flex flex-column">
                <input type="text" class="input align-self-center" placeholder="E-post/telefonnummer">
                <input type="text" class="input align-self-center" placeholder="Passord">
                <router-link class="align-self-center" to="/ansatte/forside">
                    <button class="btn action-btn btn-primary logg-inn-btn">Logg inn</button>
                </router-link>
            </div>
                
            <div class="d-flex justify-content-center">
                    <router-link to="/">
                        <h3><img class="arrow" src="../../assets/arrow-right.png"> Tilbake til studentklinikken </h3>
                    </router-link>
                </div>
        </div>
    </div>
    `,
};

export default AnsatteInnlogging;