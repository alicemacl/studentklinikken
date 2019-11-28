const Bekreftelse = {
    template: `
    <div class="bekreftelse">

        <header-component />

        <div class="confirmation">

            <img class="bekreftelse-picture" src="../assets/takk-bilde.png">

            <div class="bekreftelse-headline">
                <p>Takk for din<br>bestilling!</p>
            </div>

            <div class="bekreftelse-paragraf">
                <p>Informasjon om din timebestilling har blitt sendt til deg på e-post og SMS.</p>
            </div>

            <div class="bekreftelse-paragraf">
                <p>Du får en påminnelse på SMS, 24 timer før timen. Du kan også sjekke dine timer på dine sider.</p>
            </div>

            <div class="bekreftelse-paragraf">
                <p>Husk at du må avbestille timen innen klokken 10 dagen før. Dette kan gjøres over telefon eller på dine sider. </p>
            </div>

            <div class="bekreftelse-last-paragraf">
                <p>Velkommen til oss!</p>
            </div>

        </div>

        <footer-component />

    </div> 
    `
  };
  
  export default Bekreftelse;