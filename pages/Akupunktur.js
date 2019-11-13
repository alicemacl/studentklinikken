const Akupunktur = {
    template: `
<div>
    <header-component />
    <div class="akupunktur">

        <div class="logo-header">
            <img class="akupunktur-logo" src="../assets/akupunktur-logo.png">
            <h1>Akupunktur</h1>
            <p class="logo-header-info">Akupunktur er en persontilpasset 
            behandling der diagnostikk, behandling 
            og oppfølging er skreddersydd for 
            hver pasient med sine unike særtrekk 
            og behov under hvert trinn av behandlingen.</p> 
            <button class="action-btn btn-primary btn-width-90 btn">Bestill time</button>
        </div>

        <img class="img" src="../assets/img-akupunktur.png">
<!-- Alice fiks her --> 
        <div class="akupunktur-box">
            <h2>Hva kan en akupunktør hjelpe med? </h2> 
            <div class="når-akupunktur d-flex justify-self-center">
                <div class="row">
                    <p class="col-6">Kronisk smerte</p>
                    <p class="col-1">Migrene og hodepine</p>
                </div>
                <div class="row">
                    <p class="col-6">Lettere angst og depresjon</p>
                    <p class="col-1">Stress</p>
                </div>
                <div class="row">
                    <p class="col-6">Allergi</p>
                    <p class="col-1">Kvinnehelse</p>
                </div>
                <div class="row">
                    <p class="col-6">Fordøyelsesproblematikk</p>
                    <p class="col-1">Søvnproblemer</p>
                </div>
            </div>
<!-- Til her --> 
            <div class="akupunktur-box-last">
                <p class="akupunktur-box-last-info">
                Enkelt fortalt virker akupunktur ved å stimulere perifere 
                nerver og bindevev som frigjør signalstoffer som har en effekt 
                på det sentrale nervesystemet. Disse signalstoffene regulerer 
                områder i hjernen som blant annet påvirker det autonome 
                nervesystemet. </p>
                <p class="akupunktur-box-last-info">
                Akupunktøren vil i førstegangskonsultasjon ha fokus på å få 
                oversikt over symptomer og årsaksforhold. I behandlingen settes 
                tynne nåler i spesifikke punkter på kroppen. I tillegg kan det 
                gis annen behandling, for eksempel kopping-massasje eller varmende 
                behandling. Det gis veiledning om kosthold og fysisk aktivitet når 
                dette er aktuelt. </p>

                <button class="action-btn btn-primary btn-width-90 btn">Bestill time</button>
                <button class="action-btn btn-secondary btn-width-90 btn">Se behandlinger</button>
            </div>
        </div> 
        <footer-component />

    </div>
    </div>
    `,
}

export default Akupunktur; 