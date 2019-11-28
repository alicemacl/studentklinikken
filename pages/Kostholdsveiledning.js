const Kostholdsveiledning = {
    template: `
    <div>
        <header-component /> 
        <div class="content-container">
            <div class="white-bg text-align-center">
                <img class="kostholdsveiledning-logo" src="../assets/kostholdveiledning-logo.png">
                <h1 class="main-header margin-tb-2">Kostholds- veiledning</h1>
                <p class="margin-tb-2">
                Veiledningen passer ypperlig for deg som ønsker å 
                forebyge sykdom, gå ned eller opp i vekt, spise 
                optimalt med tanke på trening og presentasjon, 
                har allergier eller intoleranser som krever 
                tilpasning av kosten eller ønsker å ha et generelt 
                sunt kosthold. </p>

                <router-link to="/bestille">
                    <button class="action-btn btn-primary btn-width-90 margin-bottom-2 margin-top-1">Bestill time</button>
                </router-link>              
            </div>
            <div class="article-image image">
                <img src="../assets/img-kostholdsveiledning.png">
            </div>
            <div class="white-bg over-image padding-top-4">
                <div class="big-quote">
                    <div class="big-quote-bg big-quote-kost">
                        <div class="big-quote-text">
                            Kostveiledningen gjøres av avgangsstudenter 
                            som tar en bachelorgrad i ernæring under veiledning av autoriserte kliniske 
                            ernæringsfysiologer.
                        </div>
                    </div>
                </div>
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
    `
}

export default Kostholdsveiledning; 