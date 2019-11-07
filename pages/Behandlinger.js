const Behandlinger = {
    template: `
    <div>
        <div>
            <header-component />
            <div class="behandlinger d-flex flex-column align-items-center">
                <div class="text-center">
                    <h1 class="headline">Behandlinger</h1>
                    <p class="text">Vi behandler akutte og langvarige <br> plager / ubehag, 
                    men kan også hjelpe <br> til med forebyggende tiltak. <br>
                    Du kan forvente en individuell <br> samtale, undersøkelse, 
                    behandling <br> og råd rettet mot dine behov.</p>

                    <p class="text">Studentene har selv ansvar for <br> konsultasjonene, 
                    men har alltid en erfaren <br> veileder tilgjengelig.</p>
            
                    <p class="text">Du trenger ikke henvisning fra lege.</p>
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <Button class="btn">
                        <p>Muskel- og/eller skjelettsmerter?</p>
                        <h2>Osteopati</h2>
                    </Button>
                    <Button class="btn">
                        <p>Kroniske smerter eller stress?</p>
                        <h2>Akupunktur</h2>
                    </Button>
                    <Button class="btn">
                        <p>Vil du spise riktig?</p>
                        <h2>Kostholdveiledning</h2>
                    </Button>
                    <Button class="btn">
                        <p>Teste din fysiske tilstand?</p>
                        <h2>Fysiologisk Testlab</h2>
                    </Button>
                </div>
                <div class="info-container d-flex flex-column align-self-start">
                    <h3>Priser</h3>
                    <div class="info-bokser">
                        <h4>Første behandling</h4>
                        <p class="info">300,- / 150,-*</p>
                    </div>

                    <div class="info-bokser">
                        <h4>Oppfølgende behandling</h4>
                        <p class="info">220,- / 100,-*</p>
                    </div>

                    <div class="info-bokser">
                        <h4>Kostholdveiledning</h4>
                        <p class="info">Gratis!</p>
                    </div>

                    <p class="info">* Rabatten gjelder: Honnør over 60 år, ungdom <br>
                    under 18 år, studenter og HK ansatte.</p>
                    <p class="info">Sommerklinikken for akupunktur og osteopati <br> har egen priser.</p>
                
                    <h3>Åpningstider</h3>
                    <div class="info-bokser">
                        <h4>Mandag - torsdag</h4>
                        <p class="info">Kl. 07.30 - 19.00</p>
                    </div>
                    <div class="info-bokser">
                        <h4>Fredag</h4>
                        <p class="info">Kl. 08.00 - 16.00</p>
                    </div>

                    <h3>Dine rettigheter som pasient</h3>
                    <p class="info">
                    Vi forholder oss til en rekke lover og regler 
                    som ivaretar dine pasientrettigheter. 
                    Våre studenter må samtykke til å følge dette 
                    lovverket før de starter sin kliniske 
                    praksisperiode.</p>

                    <p class="info">Under følger en oversikt over de mest 
                    relevante bestemmelsen for deg som pasient 
                    ved Studentklinikken tilhørende Institutt 
                    for Helsevitenskap.
                    </p>
                </div>

            </div>
            <footer-component />
        </div>
    </div>
    `,
};

export default Behandlinger; 