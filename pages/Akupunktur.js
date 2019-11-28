const Akupunktur = {
    template: `
<div>
    <header-component />
        <div class="content-container">
            <div class="white-bg">
                <div class="text-align-center">
                    <img class="akupunktur-logo" src="../assets/akupunktur-logo.png">
                    <h1 class="main-header margin-tb-2">Akupunktur</h1>
                    <p class="margin-tb-2">Akupunktur er en persontilpasset 
                    behandling der diagnostikk, behandling 
                    og oppfølging er skreddersydd for 
                    hver pasient med sine unike særtrekk 
                    og behov under hvert trinn av behandlingen.</p>
                    <router-link to="/bestille">
                        <button class="action-btn btn-primary btn-width-90 margin-tb-2">Bestill time</button>
                    </router-link>
                </div>
            </div>
            <div class="article-image image">
                <img src="../assets/img-akupunktur.png">
            </div>
            <div class="blue-bg over-image padding-top-4">
                <h2 class="second-header text-align-center">Hva kan en akupunktør hjelpe med? </h2> 
                <div class="d-flex justify-content-center text-align-center">
                    <ul class="symptoms">
                        <li class="item">Kronisk smerte</li>
                        <li class="item">Migrene og hodepine</li>
                        <li class="item">Lettere angst og depresjon</li>
                        <li class="item">Stress</li>
                    </ul>
                    <ul class="symptoms">
                        <li class="item">Allergi</li>
                        <li class="item">Kvinnehelse</li>
                        <li class="item word-break-all">Fordøyelsesproblematikk</li>
                        <li class="item">Søvnproblemer</li>
                    </ul>
                </div>
            </div>
            <div class="white-bg">
                <p class="margin-tb-2">
                Enkelt fortalt virker akupunktur ved å stimulere perifere 
                nerver og bindevev som frigjør signalstoffer som har en effekt 
                på det sentrale nervesystemet. Disse signalstoffene regulerer 
                områder i hjernen som blant annet påvirker det autonome 
                nervesystemet. </p>
                <p class="margin-bottom-2">
                Akupunktøren vil i førstegangskonsultasjon ha fokus på å få 
                oversikt over symptomer og årsaksforhold. I behandlingen settes 
                tynne nåler i spesifikke punkter på kroppen. I tillegg kan det 
                gis annen behandling, for eksempel kopping-massasje eller varmende 
                behandling. Det gis veiledning om kosthold og fysisk aktivitet når 
                dette er aktuelt. </p>

                <router-link to="/bestille">
                    <button class="action-btn btn-primary btn-width-90 margin-tb-1">Bestill time</button>
                </router-link>               
                <router-link to='/behandlinger'>
                    <button class="action-btn btn-secondary btn-width-90 margin-bottom-2">Se behandlinger</button>
                </router-link>
            </div>
        </div> 
        <footer-component />

    </div>
    </div>
    `,
}

export default Akupunktur; 