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

                <div class="inputfields-2">
                    <input type="number" class="input-2" placeholder="Kode fra SMS">
                </div>
                
                <router-link to='/'>
                    <button class="btn-2 action-btn btn-primary btn-width-100">Logg inn</button>
                </router-link>

                <div class="text-2" id="not-received-code">
                   <p>Ikke fått kode?</p>                       
                </div>               
                
                <button class="btn-2 action-btn btn-secondary btn-width-100">Send på nytt</button>

            </div>
        <footer-component />
    </div>
    `
  };

  

  export default Smscode;