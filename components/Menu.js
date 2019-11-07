const Menu = Vue.component("menu-component", {
  template: `
    <div  scroll="no" class="container-menu">
        <div class="menu-popup d-flex flex-column">
          <div class="first">
            <h2 class="menu-items"><router-link to='/'>Startsiden</router-link></h2>
            <h2 class="menu-items">Behandlinger</h2> 
            <h2 class="menu-items">Om Oss</h2>
          </div>
          <div class="second fixed-bottom">
            <h2 class="menu-items">Ny bruker</h2>
            <h2 class="menu-items">Logg inn</h2>  
            <h2 class="menu-items">Bestill time</h2> 
          </div>
        </div>
    </div>
    `
});

export default Menu;
