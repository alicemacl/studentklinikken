const BestillTime = {
    template: `
    <div>
        <header-component />
        <div class="bestilltime d-flex flex-column white-bg">
            <div class="bestill-time"> 

                <h1 class="main-header"> Bestill time  </h1>
            </div>

            <div class="bestill-time-box">
                <h2 class="bestill-time-header">Hva ønsker du time til?</h2>
                <button class="action-btn btn-order">Osteopati</button> 
                <button class="action-btn btn-order">Akupunktur</button>
                <button class="action-btn btn-order">kostholdsveiledning</button>
                <button class="action-btn btn-order">fysiologisk Testlab</button>
            
            </div>
        </div>
     </div>
    `
};
export default BestillTime;