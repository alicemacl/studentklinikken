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
                        <img class="forside-btn-logo" src="../../assets/t-ansatte.png">
                        Timeplan
                        <img src="../../assets/arrow-right.png">
                    </button>
                    <button class="btn d-flex justify-content-between align-items-center">
                        <img class="forside-btn-logo" src="../../assets/b-ansatte.png">
                        Behandlere
                        <img src="../../assets/arrow-right.png">
                    </button>
                    <button class="btn d-flex justify-content-between align-items-center">
                        <img class="forside-btn-logo" src="../../assets/k-ansatte.png">
                        Kundeoversikt
                        <img src="../../assets/arrow-right.png">
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
};

export default AnsatteForside;