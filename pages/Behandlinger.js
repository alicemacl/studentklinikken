const Behandlinger = {
    template: `
    <div>
        <header-component />
        <div class="behandlinger d-flex flex-column">
            <div class="text-center"> 
                <h1 class="main-header margin-tb-2">Behandlinger</h1>
                <p class="body-text">Vi behandler akutte og langvarige plager / ubehag, 
                men kan også hjelpe  til med forebyggende tiltak.
                Du kan forvente en individuell samtale, undersøkelse, 
                behandling og råd rettet mot dine behov.</p>

                <p class="small-text">Studentene har selv ansvar for konsultasjonene, 
                men har alltid en erfaren veileder tilgjengelig.</p>
        
                <p class="small-text">Du trenger ikke henvisning fra lege.</p>
            </div>
            <div class="d-flex flex-column">
                <div class="margin-tb-1">
                <router-link to='/behandlinger/osteopati'>
                    <div class="two-line-btn">
                        <p>Muskel- og/eller skjelettsmerter?</p>
                        <button class="action-btn btn-clean btn-width-100">Osteopati</button>
                    </div>
                    </router-link>
                    <router-link to="/behandlinger/akupunktur">
                    <div class="two-line-btn">
                        <p>Kroniske smerter eller stress?</p>
                        <button class="action-btn btn-clean btn-width-100">Akupunktur</button>
                    </div>
                    </router-link>
                    <div class="two-line-btn">
                        <p>Vil du spise riktig?</p>
                        <button class="action-btn btn-clean btn-width-100">Kostholdsveiledning</button>
                    </div>
                    <div class="two-line-btn">
                        <p>Teste din fysiske tilstand?</p>
                        <button class="action-btn btn-clean btn-width-100">Fysiologisk Testlab</button>
                    </div>
                </div>
            </div>
            <div class="info-container d-flex flex-column align-self-start">
                <h3>Priser</h3>
                <div class="info-bokser">
                    <p>Første behandling</p>
                    <p>300,- / 150,-*</p>
                </div>

                <div class="info-bokser">
                    <p>Oppfølgende behandling</p>
                    <p>220,- / 100,-*</p>
                </div>

                <div class="info-bokser">
                    <p>Kostholdveiledning</p>
                    <p>Gratis!</p>
                </div>

                <p class="info">* Rabatten gjelder: Honnør over 60 år, ungdom
                under 18 år, studenter og HK ansatte.</p>
                <p class="info">Sommerklinikken for akupunktur og osteopati har egen priser.</p>
            
                <h3>Åpningstider</h3>
                <div class="info-bokser">
                    <p>Mandag - torsdag</p>
                    <p>Kl. 07.30 - 19.00</p>
                </div>
                <div class="info-bokser">
                    <p>Fredag</p>
                    <p>Kl. 08.00 - 16.00</p>
                </div>

                <h3>Dine rettigheter som pasient</h3>
                <p>
                Vi forholder oss til en rekke lover og regler 
                som ivaretar dine pasientrettigheter. 
                Våre studenter må samtykke til å følge dette 
                lovverket før de starter sin kliniske 
                praksisperiode.</p>

                <p>Under følger en oversikt over de mest 
                relevante bestemmelsen for deg som pasient 
                ved Studentklinikken tilhørende Institutt 
                for Helsevitenskap.
                </p>

                <button class="action-btn btn-clean btn-width-100 margin-tb-1">Les mer om pasientrettigheter</button>
                <button class="action-btn btn-clean btn-width-100 margin-tb-1">Skjema for tilbakemelding</button>
                <button class="action-btn btn-clean btn-width-100 margin-tb-1">Skjema for klager</button>
            </div>

        </div>
        <footer-component />
    </div>
    `,
};

export default Behandlinger; 