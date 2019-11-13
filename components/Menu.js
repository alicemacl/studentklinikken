const Menu = Vue.component("menu-component", {
  template: `

    <div  scroll="no" class="menu">
<<<<<<< HEAD
        <div class="popup d-flex flex-column">
          <div class="first-box">
            <h2 class="items"><router-link to='/'>Startsiden</router-link></h2>
            <h2 class="items"><router-link to='/behandlinger'>Behandlinger</router-link></h2> 
            <h2 class="items">Om Oss</h2>
          </div>
          <div class="second-box fixed-bottom">
            <h2 class="items">Ny bruker</h2>
            <h2 class="items">Logg inn</h2>  
            <h2 class="items"><router-link to='/timebestilling'>Bestille time</router-link></h2> 
          </div>
=======
      <div class="popup d-flex flex-column">
        <div class="first-box margin-top-5">
          <div class="menu-item"><router-link to='/'>Startsiden</router-link></div>
          <div class="menu-item"><router-link to='/behandlinger'>Behandlinger</router-link></div>
          <div class="menu-item">Om Oss</div>
        </div>
        <div class="second-box fixed-bottom">
          <div class="menu-item">Ny bruker</div>
          <div class="menu-item">Logg inn</div>  
          <div class="menu-item">Bestill time</div> 
>>>>>>> 1f4b66e5d12c6672d78303234ace16b4bfb999fb
        </div>
      </div>
    </div>
    `
});

export default Menu;
