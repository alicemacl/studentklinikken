const Behandlinger = {
    template: `
    <div>
        <div>
            <header-component />
            <div class="container-behandlinger d-flex flex-column align-items-center">
                <div class="text-center">
                    <h1 class="behandlinger-headline">Behandlinger</h1>
                    <p class="behandlinger-text">Vi behandler akutte og langvarige <br> plager / ubehag, 
                    men kan også hjelpe <br> til med forebyggende tiltak. <br>
                    Du kan forvente en individuell <br> samtale, undersøkelse, 
                    behandling <br> og råd rettet mot dine behov.</p>

                    <p class="behandlinger-text">Studentene har selv ansvar for <br> konsultasjonene, 
                    men har alltid en erfaren <br> veileder tilgjengelig.</p>
            
                    <p class="behandlinger-text">Du trenger ikke henvisning fra lege.</p>
                </div>
                <div>
                    <Button class="behandlinger-btn">
                        <p>Muskel- og/eller skjelettsmerter?</p>
                        <h2>Osteopati</h2>
                    </Button>
                    <Button class="behandlinger-btn">
                        <p>Kroniske smerter eller stress?</p>
                        <h2>Akupunktur</h2>
                    </Button>
                    <Button class="behandlinger-btn">
                        <p>Vil du spise riktig?</p>
                        <h2>Kostholdveiledning</h2>
                    </Button>
                    <Button class="behandlinger-btn">
                        <p>Teste din fysiske tilstand?</p>
                        <h2>Fysiologisk Testlab</h2>
                    </Button>
                </div>
                <div class="d-flex flex-column">
                    <h3>Priser</h3>
                    <h4>Første behandling</h4>
                    <p>300,- / 150,-*</p>

                    <h4>Oppfølgende behandling</h4>
                    <p>220,- / 100,-*</p>

                    <h4>Kostholdveiledning</h4>
                    <p>Gratis!</p>
                </div>
            </div>
        </div>
    </div>
    `,
};

export default Behandlinger; 