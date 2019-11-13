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
              
<<<<<<< HEAD
            <router-link to='/ansatte'>
            <button class="homepage-btn row">
              <p class="hompage-btn-text col-10">Sjekk dine timer</p>
              <img class="align-self-center col-1" src="../assets/arrow-right.png">
=======
            
            <button class="action-btn btn-clean btn-width-90">
              Sjekk dine timer
>>>>>>> 5e0c766118a350431821b40f08253f76665ffb78
            </button> 
            </router-link>

          </div>
        </div>
        <footer-component></footer-component>
    </div> 
    `,

};

export default Home;