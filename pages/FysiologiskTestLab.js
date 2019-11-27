const FysiologiskTestLab = {
  template: `
    <div>
        <header-component /> 
        <div class="content-container">
            <div class="white-bg">
                <div class="text-align-center">
                    <img class="osteopati-logo" src="../assets/fysiologisktestlab-logo.png">
                    <h1 class="main-header margin-tb-2">Fysiolgisk testlab</h1>
                    <p class="margin-tb-2">En osteopat undersøker og behandler muskel- og 
                    skjelettsmerter med manuelle behandlingsteknikker på 
                    benk.</p>
                    <button class="action-btn btn-primary btn-width-100 margin-bottom-2 margin-top-1">Bestill time</button>
                </div> 
                </div>
                <div class="article-image image">
                    <img src="../assets/img-fysiologisk.png">   
                </div>
            
            <div class="white-bg over-image padding-top-4">
                <p class="margin-bottom-2">Testing av egen helse er samtidig både 
                motiverende og gir verdifull informasjon for mange andre. Derfor tilbyr 
                vi tester til deg som ønsker å teste din fysiske tilstand og 
                prestasjonsevne. </p>

                <p class="margin-bottom-6">På testlaboratoriet finner vi ut hva status er nå, måler fremgang 
                og gir deg videre råd og tilpasning av mosjon og trening. </p>
            </div>
            <div class="blue-bg">
                <h2 class="second-header">Vi tilbyr</h2>
                
                <h3 class="medium-font small-header-margin-bottom">Test av maksimalt oksygenopptak</h3>
                <div class="row">
                    <div class="col-3 letter-img"><img src="../assets/t-fysiologisk.png"></div>
                    <p class="col-9 margin-bottom-6">Basistesten for utholdenhetsutøvere
                    Testen forteller hvor stor kroppsmotor man har – også kalt oksygenopptak. 
                    Det maksimale oksygenopptaket er med på å bestemme din aerobe kapasitet, 
                    og brukes til å vurdere om treningen gir resultater.</p>
                </div>

                <h3 class="medium-font small-header-margin-bottom">Arbeids-EKG, inkludert blodtrykksmåling</h3>
                <div class="row">
                    <div class="col-3 letter-img"><img src="../assets/a-fysiologisk.png"></div>
                    <p class="col-9 margin-bottom-6">Et arbeids-EKG brukes først og fremst til å fremskaffe kunnskap 
                    om det foreligger tegn til hjerte- og karsykdom under fysiske anstrengelser.
                    Arbeids-EKGen utføres på sykkel under økende belastning, og sammen med måling 
                    av blodtrykk får testpersonen festet elektroder på kroppen som måler 
                    hjerteaktiviteten under testen.
                    Etter avsluttet test gjennomgås testresultatene med lege/testpersonell som 
                    igangsetter tiltak, hvis behov.</p>
                </div>

                <h3 class="medium-font small-header-margin-bottom">Laktatprofil</h3>
                <div class="row">
                    <div class="col-3 letter-img"><img src="../assets/l-fysiologisk.png"></div>
                    <p class="col-9 margin-bottom-6">Laktatprofiltesten brukes for å finne egnede intensitetssoner 
                    på trening. Denne testen ble tidligere kalt anaerob terskel og gjennomføres 
                    på tredemølle eller sykkel.
                    Her arbeides det med konstant belastning i fem minutter, så tas det en 
                    blodprøve og belastningen økes. Dette fortsetter til det er endel laktat 
                    i blodet, og belastningen oppleves som moderat hard til hard.
                    I tillegg til blodlaktat måler vi hjertefrekvens og oksygenopptak.</p>
                </div>
            </div>
            <div class="white-bg padding-top-4">
                <button class="action-btn btn-primary btn-width-100 margin-top-1">Bestill time</button>
                <button class="action-btn btn-secondary btn-width-100 margin-bottom-2 margin-top-1">Se behandlinger</button>

            </div>
        </div>
        <footer-component /> 
    </div>
    `
};

export default FysiologiskTestLab;
