const DashboardMS = {
    template: `
    <div>
        <header-component />
            <div class="dashboardms">
                <div class="headline">
                    <h1 class="main-header">Dine timer</h1>
                </div>

                <div class="menu-2">
                    <h2 id="line-1">Aktive</h2>
                    <h2 id="line-2">Historikk</h2>
                </div>

                <div class="info-container">
                    
                    <div class="treatment">

                    <div class="dboard">
                        <p class="info">Oppfølging<br><b>12/12-19, kl 12.00</b></p>
                        <img class="arrow" src="../assets/arrow-right.png">
                    </div>

                        <div class="big-box">

                            <div class="box-1">
                                <p class="info">Behandling:<br><b>Akupunktur</b></p>
                            </div>
                            <div class="box-2">
                                <p class="info">Behandler:<br><b>Kari Nordmann</b></p>
                            </div>
                    
                        </div>
                    
                        <div class="big-box">

                            <div class="box-1">
                                <a href="">Endre time</a>
                            </div>

                            <div class="box-2">
                                <a href="">Avbestill</a>
                            </div>
                    
                        </div>
                    
                    </div>

                </div>

                <div class="info-container">                  

                <div class="treatment">

                    <div class="dboard">
                        <p class="info">Oppfølging<br><b>23/12-19, kl 14.00</b></p>
                        <img class="arrow" src="../assets/arrow-right.png">
                    </div>

                    <div class="big-box">

                        <div class="box-1">
                            <p class="info">Behandling:<br><b>Osteopatin</b></p>
                        </div>
                        <div class="box-2">
                            <p class="info">Behandler:<br><b>Astrid Haugen</b></p>
                        </div>
                    
                    </div>
                    
                    <div class="big-box">

                        <div class="box-1">
                            <a href="">Endre time</a>
                        </div>

                        <div class="box-2">
                            <a href="">Avbestill</a>
                        </div>
                    
                    </div>
                    
                </div>
                    
                </div>
            
            </div>
        <footer-component></footer-component>
    </div>
    `,
    data: {
        
    }
};

export default DashboardMS;

/*
                    
                   <p>Click on the buttons inside the tabbed menu:</p>

                    <div class="tab">
                        <button class="tablinks" onclick="openCity(event, 'Akrive')">Akrive</button>
                        <button class="tablinks" onclick="openCity(event, 'Paris')">Historikk</button>
                    </div>

                    <div id="Aktive" class="tabcontent">
                        <h3>Akrtive</h3>
                        <p>Aktive timer</p>
                    </div>

                    <div id="Historikk" class="tabcontent">
                        <h3>Historikk</h3>
                        <p>Historikk timer</p> 
                    </div> 
                    
                    */