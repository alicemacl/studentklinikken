const Menu = Vue.component("menu-component", {
    template: `
    <div  scroll="no" class="menu">
      <div class="popup d-flex flex-column">
        <div class="first-box margin-top-5">
          <div class="menu-item"><router-link to='/'>Startsiden</router-link></div>
          <div class="menu-item"><router-link to='/behandlinger'>Behandlinger</router-link></div>
          <div class="menu-item">Kontakt oss</div>
        </div>
        <div class="second-box fixed-bottom">
          <div class="menu-item">Ny bruker</div>
          <div class="menu-item"><router-link to='/logg-inn'>Logg inn</router-link></div>  
          <div class="menu-item">Bestill time</div>
        </div>
      </div>
    </div>
    `
});

export default Menu;