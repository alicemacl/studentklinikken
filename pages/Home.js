const Home = {
  template: `
    <div>
        <header-component />
        <div>
          <h1 class="home-text"> Du kan forvente behandling av høy kvalitet, 
          hvor ditt behov står sentralt.</h1>
          <div class="wrap-btn d-flex flex-column align-items-center">
          
            <button class="homepage-btn row">
              <p class="hompage-btn-text col-10">Bestill time </p>
              <img class="col-1 align-self-center" src="../assets/arrow-right.png">
              
            </button>
            <button class="homepage-btn row">
              <p class="hompage-btn-text col-10">Se behandlinger</p>
              <img class="col-1 align-self-center" src="../assets/arrow-right.png">
              
            </button>
            <button class="homepage-btn row">
              <p class="hompage-btn-text col-10">Sjekk dine timer</p>
              <img class="align-self-center col-1" src="../assets/arrow-right.png">
              
            </button> 
          </div>
        </div>
    </div> 
    `,

};

export default Home;
