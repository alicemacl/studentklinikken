const Menu = Vue.component("menu-component", {
  template: `
    <div  scroll="no" class="menu">
        <div class="popup d-flex flex-column">
          <div class="first-box">
            <h2 class="items"><router-link to='/'>Startsiden</router-link></h2>
            <h2 class="items"><router-link to='/behandlinger'>Behandlinger</router-link></h2> 
            <h2 class="items">Om Oss</h2>
          </div>
          <div class="second-box fixed-bottom">
            <h2 class="items">Ny bruker</h2>
            <h2 class="items">Logg inn</h2>  
            <h2 class="items">Bestill time</h2> 
          </div>
        </div>
    </div>
    `
});

export default Menu;
