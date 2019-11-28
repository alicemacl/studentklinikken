const Home = {
    template: `
    <div>
        <header-component />
        <div class="home-page">
          <div class="home-text"> Du kan forvente behandling av høy kvalitet, 
          hvor ditt behov står sentralt.</div>
          <div class="wrap-btn d-flex flex-column align-items-center">

          <router-link to='/bestille'>
            <button class="action-btn btn-primary btn-width-90">
             Bestill time
            </button>
            </router-link>
                
            <router-link to='/behandlinger'>
              <button class="action-btn btn-primary btn-width-90">
                Se behandlinger
              </button>
            </router-link>
              
            <router-link to="/dashboard">
            <button class="action-btn btn-secondary btn-width-90">
              Mine sider
            </button> 
            </router-link>

          </div>
        </div>
        <footer-component></footer-component>
    </div> 
    `,

};

export default Home;