const Home = {
  template: `
    <div>
        <header-component />
        <div class="wrapper">
          <div class="intro-text">
            <h1 class="home-text"> Du kan forvente behandling av høy kvalitet, 
            hvor ditt behov står sentralt.</h1>
          </div>
          <div class="wrap-btn d-flex flex-column align-items-center">
          
            <button class="action-btn btn-primary btn-width-90">
              Bestill time
            </button>

            <router-link to='/behandlinger'>
              <button class="action-btn btn-primary btn-width-90">
                Se behandlinger
              </button>
            </router-link>
              
            
            <button class="action-btn btn-primary btn-width-90">
              Sjekk dine timer
              
            </button> 
          </div>
        </div>
        <footer-component></footer-component>
    </div> 
    `,

};

export default Home;
