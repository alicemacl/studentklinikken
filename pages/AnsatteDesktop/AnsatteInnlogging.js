const AnsatteInnlogging = {
    template: `
    <div>
        <div class="innlogging-ansatte d-flex flex-column justify-content-center">
            <img class="logo" src="../assets/logoSort.png">
            <div class="">
                    <h1 class="main-header">Innlogging ansatte</h1>
            </div>
            <div class="">
                <input type="text" class="input" placeholder="E-post/telefonnummer"><br>
                <input type="text" class="input" placeholder="Passord"><br>
                <button class="btn action-btn btn-primary logg-inn-btn">Logg inn</button>
            </div>

            <div class="">
                <div class="">
                    <input type="checkbox"> Husk meg<br>
                </div>
                <div class="">
                    <router-link to="/password">
                        <a href="">Glemt passord?</a>
                    </router-link>
                </div>     
            </div>
                
            <div class="">
                    <router-link to="/home">
                        <a href=""><-- Tilbake til studentklinikken</a>
                    </router-link>
                </div>
        </div>
    </div>
    `,
};

export default AnsatteInnlogging;