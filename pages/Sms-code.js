const Smscode = {
    template: `
    <div>
        <header-component />
            <div class="smscode">
                
                <div class="headline-2">
                    <h1 class="main-header">Skriv inn kode</h1>
                </div>

                <div class="text-2">
                    <p>Sjekk dine meldinger du fikk fra oss og skriv inn kode under</p> 
                </div>
                
                <div class="inputfields-2 margin-auto">
                    <input type="tel" pattern="[0-9]{3}[0-9]{2}[0-9]{3}" class="input-2" placeholder="Kode fra SMS">
                
                
                    <router-link to='/'>
                    <button class="btn-2 action-btn btn-primary btn-width-100">Logg inn</button>
                    </router-link>
                </div>

                <div class="text-2" id="not-received-code">
                  <p>Ikke fått kode?</p>                     
                </div>               
                <div class="margin-auto">
                <button class="btn-2 action-btn btn-secondary btn-width-100">Send på nytt</button>
                </div>
            </div>
        <footer-component />
    </div>
    `
};



export default Smscode;