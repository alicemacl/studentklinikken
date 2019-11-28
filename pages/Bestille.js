const Bestille = {
    template: `
        <div class="bestille">

            <div class="order">
            
                <div id="headline-1">
                    <h1 class="main-header">Bestille time</h1>
                </div>

                <div class="main-box-intro">

                    <div class="knappevalg">

                        <h2 id="headline-6">Hva ønsker du time til?</h2>

                        <button class="intro-btn action-btn btn-primary btn-width-100">Osteopati</button>               
                        <button class="intro-btn action-btn btn-primary btn-width-100">Akupunktur</button>
                        <button class="intro-btn action-btn btn-primary btn-width-100">Kostholdsveiledning</button>
                        <button class="intro-btn action-btn btn-primary btn-width-100">Fysiologisk Testlab</button>

                    </div>
                                
                </div>

                <div class="main-box-info">

                    <div class="info">

                        <h2 id="headline-2">Personopplysninger</h2>

                        <div class="info-main-box">
                            <input type="text" class="info-info" placeholder="Fornavn">
                        </div>

                        <div class="info-main-box">
                            <input type="text" class="info-info" placeholder="Etternavn">
                        </div>

                        <div class="info-main-box">
                            <input type="number" class="info-info" placeholder="Fødselsdato (DDMMYY)">
                        </div>

                        <div class="info-main-box">
                            <input type="text" class="info-info" placeholder="Gateadresse">
                        </div>

                        <div class="info-post-box">
                            <div class="info-box1">
                                <input type="number" class="info-info" placeholder="Postnr.">
                            </div>

                            <div class="info-box2">
                                <input type="text" class="info-info" placeholder="Poststed">
                            </div>
                        </div>

                        <div class="info-main-box">
                            <input type="number" class="info-info" placeholder="Mobilnummer">
                        </div>

                        <div class="info-main-box">
                            <input type="text" class="info-info" placeholder="E-post">
                        </div>

                        <button class="info-btn action-btn btn-primary btn-width-100">Bekreft</button>

                    </div>

                </div>

                <div class="main-box-gjennomgang">
                
                    <div class="gjennomgang">

                        <h2 id="headline-3">Gjennomgang</h2>

                        
                        <div class="gjennomgang-big-box">

                            <div class="gjennomgang-info-box">
                                <div class="gjennomgang-info-1">
                                    <p>Behandlingstype</p>
                                    <p>Behandler</p>
                                    <p>Tid</p>
                                </div>
                                <div class="gjennomgang-info-2">
                                    <p>Osteopati</p>
                                    <p>Kari Nordmann</p>
                                    <p>09.30</p>
                                </div>
                            </div>
                            
                        </div>

                        <div class="gjennomgang-big-box">

                            <div class="gjennomgang-info-box">
                                <div class="gjennomgang-info-1">
                                    <p>Dine opplysninger</p>
                                </div>
                            </div>

                            <div class="gjennomgang-info-box">
                                <div class="gjennomgang-info-1">
                                    <p>Navn</p>
                                    <p>Fødselsdato</p>
                                    <p>Adresse</p>
                                    <p>Postnr og Sted</p>
                                    <p>Mobilnummer</p>
                                    <p>E-post</p>
                                </div>
                                <div class="gjennomgang-info-2">
                                    <p>Kari Nordmann</p>
                                    <p>24/01-94</p>
                                    <p>Storgata 11</p>
                                    <p>1104 Oslo</p>
                                    <p>12345678</p>
                                    <p>hk@gmail.com</p>
                            </div>
                        </div>

                        <button class="gjennomgang-btn action-btn btn-primary btn-width-100">Bekreft og bestill</button>

                    </div>
                </div>
                
                </div>

                <div class="main-box-last">

                    <div class="bekreftelse">

                        <h2 id="headline-4">Takk!</h2>
                    
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
                    
                </div>
            
            </div>
            <footer-component />           
        </div>
    `
  };
  
  export default Bestille;