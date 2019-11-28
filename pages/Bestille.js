const Bestille = {
    template: `
        <div class="bestille">

        <header-component />

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

                <div class="main-box-calendar">

                    <div class="order-calendar">

                        <h2 id="headline-7">Dato</h2>

                            <h2 class="choose-date">Velg dato</h2>

                            <div class="choose-month">
                                <img class="arrow" id="arrow-left" src="../assets/arrow-right.png">
                                <h2>Desember</h2>
                                <img class="arrow" src="../assets/arrow-right.png">
                            </div>
                            

                            <div class="c-main-box">

                                <div class="box-vertical">

                                    <div class="box-date">
                                        <p>1</p>
                                    </div>
                                    <div class="box-date">
                                        <p>7</p>
                                    </div>
                                    <div class="box-date">
                                        <p>13</p>
                                    </div>
                                    <div class="box-date">
                                        <p>19</p>
                                    </div>
                                    <div class="box-date">
                                        <p>25</p>
                                    </div>
                                    <div class="box-date">
                                        <p>31</p>
                                    </div>
                                   
                                </div>
                                <div class="box-vertical">
                                    <div class="box-date">
                                        <p>2</p>
                                    </div>
                                    <div class="box-date">
                                        <p>8</p>
                                    </div>
                                    <div class="box-date">
                                        <p>14</p>
                                    </div>
                                    <div class="box-date">
                                        <p>20</p>
                                    </div>
                                    <div class="box-date">
                                        <p>26</p>
                                    </div>
                                    
                                </div>
                                <div class="box-vertical">
                                    <div class="box-date">
                                        <p>3</p>
                                    </div>
                                    <div class="box-date">
                                        <p>9</p>
                                    </div>
                                    <div class="box-date">
                                        <p>15</p>
                                    </div>
                                    <div class="box-date">
                                        <p>21</p>
                                    </div>
                                    <div class="box-date">
                                        <p>27</p>
                                    </div>
                                    
                                </div>
                                <div class="box-vertical">
                                    <div class="box-date">
                                        <p>4</p>
                                    </div>
                                    <div class="box-date">
                                        <p>10</p>
                                    </div>
                                    <div class="box-date">
                                        <p>16</p>
                                    </div>
                                    <div class="box-date">
                                        <p>22</p>
                                    </div>
                                    <div class="box-date">
                                        <p>28</p>
                                    </div>
                                    
                                </div>
                                <div class="box-vertical">
                                    <div class="box-date">
                                        <p>5</p>
                                    </div>
                                    <div class="box-date">
                                        <p>11</p>
                                    </div>
                                    <div class="box-date">
                                        <p>17</p>
                                    </div>
                                    <div class="box-date">
                                        <p>23</p>
                                    </div>
                                    <div class="box-date">
                                        <p>29</p>
                                    </div>
                                    
                                </div>
                                <div class="box-vertical">
                                    <div class="box-date">
                                        <p>6</p>
                                    </div>
                                    <div class="box-date">
                                        <p>12</p>
                                    </div>
                                    <div class="box-date">
                                        <p>18</p>
                                    </div>
                                    <div class="box-date">
                                        <p>24</p>
                                    </div>
                                    <div class="box-date">
                                        <p>30</p>
                                    </div>
                                </div>
                                                              
                            </div>
                    </div>

                </div>

                <div class=main-box-time>

                    <div class="order-time">

                        <h2 id="headline-8">Tid</h2>

                        <h2 class="choose-time">Velg tidspunkt</h2>

                        <div class="choose-clock">
                            <img class="arrow" id="arrow-left" src="../assets/arrow-right.png">
                            <h2>24. Desember</h2>
                            <img class="arrow" src="../assets/arrow-right.png">
                        </div>

                        <div class="t-main-box">
                            <div class="t-box-vertical">

                                <div class="box-time">
                                    <p>8:30</p>
                                </div>
                                <div class="box-time">
                                    <p>11:00</p>
                                </div>
                                <div class="box-time">
                                    <p>14:00</p>
                                </div>
                            </div>

                            <div class="t-box-vertical">

                                <div class="box-time">
                                    <p>8:45</p>
                                </div>
                                <div class="box-time">
                                    <p>11:45</p>
                                </div>
                                <div class="box-time">
                                    <p>14:45</p>
                                </div>
                            </div>

                            <div class="t-box-vertical">

                                <div class="box-time">
                                    <p>9:30</p>
                                </div>
                                <div class="box-time">
                                    <p>12:30</p>
                                </div>
                                <div class="box-time">
                                    <p>15:30</p>
                                </div>
                            </div>

                            <div class="t-box-vertical">

                                <div class="box-time">
                                    <p>10:15</p>
                                </div>
                                <div class="box-time">
                                    <p>13:15</p>
                                </div>
                                <div class="box-time">
                                    <p>16:15</p>
                                </div>
                            </div>
                        </div>   
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

                        <router-link to="/bekreftelse">
                            <button class="gjennomgang-btn action-btn btn-primary btn-width-100">Bekreft og bestill</button>
                        </router-link>

                    </div>
                </div>
                
                </div>
            
            </div>
            <footer-component />           
        </div>
    `
  };
  
  export default Bestille;