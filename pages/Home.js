const Home = {
    template: `
    <div>
        <header-component />
        <div class="home-page">
          <div class="home-text"> Du kan forvente behandling av høy kvalitet, 
          hvor ditt behov står sentralt.</div>
          <div class="wrap-btn d-flex flex-column align-items-center">

          <router-link to='/bestilltime'>
            <button class="action-btn btn-primary btn-width-90 row">
             Bestill time
            </button>
            </router-link>

            <router-link to='/behandlinger'>
              <button class="action-btn btn-secondary btn-width-90">
                Se behandlinger
              </button>
            </router-link>
              
            
            <button class="action-btn btn-clean btn-width-90">
              Sjekk dine timer
            </button> 
          </div>
        </div>
        <footer-component></footer-component>
    </div> 
    `,

};

export default Home;