const Home = {
  template: `
    <div>
        <header-component />
        <div class="home-page">
          <div class="home-text"> Du kan forvente behandling av høy kvalitet, 
          hvor ditt behov står sentralt.</div>
          <div class="wrap-btn d-flex flex-column align-items-center">
<<<<<<< HEAD
          
          <router-link to='/timebestilling'>
            <button class="homepage-btn row">
              <p class="hompage-btn-text col-10">Bestill time </p>
              <img class="col-1 align-self-center" src="../assets/arrow-right.png">
            </button>
            </router-link>
=======
>>>>>>> 1f4b66e5d12c6672d78303234ace16b4bfb999fb

          <router-link to='/bestilltime'>
            <button class="action-btn btn-primary btn-width-90">
             Bestill time
            </button>
            </router-link>
                <router-link to='/behandlinger'>
              <button class="action-btn btn-secondary btn-width-90">
                Se behandlinger
              </button>
            </router-link>
              
            
            <button class="action-btn btn-secondary btn-width-90">
              Sjekk dine timer
            </button> 
            </router-link>

          </div>
        </div>
        <footer-component></footer-component>
    </div> 
    `,

};

export default Home;