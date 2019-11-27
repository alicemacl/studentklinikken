const AnsatteForside = {
    template: `
    <div>
        <ansatte-header-component />
        <div class="ansatte-container">
            <div class="ansatte-forside">
                <h2 class="headline">God morgen,  !</h2>
                <h3 class="second-headline">Hva ønsker du å gjøre i dag? </h3>
                <div class="buttons d-flex">
                    <button class="btn d-flex justify-content-between align-items-center">
                        <img class="forside-btn-logo" src="../../assets/t-ellipse-ansatte.png">
                        <h4>Timeplan</h4>
                        <p class="forside-btn-info">Sjekk dagens timeplan <br/> eller legg til booking</p>
                    </button>
                    <button class="btn d-flex justify-content-between align-items-center">
                        <img class="forside-btn-logo" src="../../assets/b-ellipse-ansatte.png">
                        <h4>Behandlere</h4>
                        <p class="forside-btn-info">Oversikt og informasjon<br/>om behandlere</p>
                    </button>
                    <button class="btn d-flex justify-content-between align-items-center">
                        <img class="forside-btn-logo" src="../../assets/k-ellipse-ansatte.png">
                        <h4>Kundeoversikt</h4>
                        <p class="forside-btn-info">Oversikt og informasjon<br/>om kunder</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
};

export default AnsatteForside;