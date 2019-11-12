const Home = {
  template: `
    <div>
        <header-component />
        <div>
          <div class="home-text"> Du kan forvente behandling av høy kvalitet, 
          hvor ditt behov står sentralt.</div>
          <div class="wrap-btn d-flex flex-column align-items-center">
          
            <button class="action-btn btn-primary">
              Bestill time
            </button>
            <router-link to='/behandlinger'>
              <button class="action-btn btn-secondary">
                Se behandlinger
              </button>
            </router-link>
              
            
            <button class="action-btn btn-clean">
              Sjekk dine timer
            </button> 
          </div>
        </div>
        <footer-component></footer-component>
    </div> 
    `,

};

export default Home;