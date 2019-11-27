const AnsatteInnlogging = {
    template: `
    <div>
        <div class="innlogging-ansatte d-flex flex-column justify-content-center">
            <img class="logo align-self-center" src="../assets/logoSort.png">
            <div class=" d-flex justify-content-center">
                    <h1 class="main-header">Innlogging ansatte</h1>
            </div>
            <div class="d-flex flex-column">
                <input type="text" class="input align-self-center" placeholder="E-post/telefonnummer">
                <input type="text" class="input align-self-center" placeholder="Passord">
                <button class="btn action-btn btn-primary logg-inn-btn align-self-center">Logg inn</button>
            </div>

            <div class="">
                <div class="d-flex justify-content-center">
                    <input class="align-self-center" type="checkbox"> Husk meg
                </div>
                <div class="d-flex justify-content-center">
                    <router-link to="/password">
                        <h3>Glemt passord?</h3>
                    </router-link>
                </div>     
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