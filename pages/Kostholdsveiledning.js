const Kostholdsveiledning = {
    template: `
    <div>
        <header-component /> 
        <div class="kostholdsveiledning">
            <div class="logo-header">
                <img class="kostholdsveiledning-logo" src="../assets/kostholdveiledning-logo.png">
                <h1>Kostholds- veiledning</h1>
                <p class="logo-header-info">
                Veiledningen passer ypperlig for deg som ønsker å 
                forebyge sykdom, gå ned eller opp i vekt, spise 
                optimalt med tanke på trening og presentasjon, 
                har allergier eller intoleranser som krever 
                tilpasning av kosten eller ønsker å ha et generelt 
                sunt kosthold. </p>

                <button class="action-btn btn-primary btn-width-90 btn">Bestill time</button>
            </div>

            <img class="img" src="../assets/img-kostholdsveiledning.png">

            <div class="kostholdsveiledning last-box">
                <p class="kostholdsveiledning-info">Kostveiledningen gjøres av avgangsstudenter 
                som tar en bachelorgrad i ernæring under veiledning av autoriserte kliniske 
                ernæringsfysiologer.</p>
            
                <button class="action-btn btn-primary btn-width-90 btn">Bestill time</button>
                <router-link to='/behandlinger'>
                    <button class="action-btn btn-secondary btn-width-90 btn">Se behandlinger</button>
                </router-link>
            </div> 
        <footer-component />
    </div>
    `
}

export default Kostholdsveiledning; 