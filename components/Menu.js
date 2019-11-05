const Menu = Vue.component("menu-component", {
  template: `
    <div class="container">
    <div class="row" id="menu-row-spacing"></div> 
    <div class="row" id="menu-row-content"> 
        <div class="col"></div>
        <div class="col logo">
            <img class="menu-logo" src="../assets/Logo-farger.png">
        </div>
        <div class="col d-flex justify-content-end align-items-center">
            <img class="menu-button" src="../assets/menu-button.png">
        </div>
    </div>
     <div class="row" id="menu-row-spacing"></div> 


        <div class="menu-popup">
        <router-link to='/'><h2 class="menu-items">Startsiden</h2></router-link>
        <h2 class="menu-items">Behandlinger</h2> 
        <h2 class="menu-items">Om Oss</h2>

        <h2 class="menu-items">Ny bruker</h2>
        <h2 class="menu-items">Logg inn</h2>  
        <h2 class="menu-items">Bestill time</h2> 
        </div>
    </div>
    `
});

export default Menu;
