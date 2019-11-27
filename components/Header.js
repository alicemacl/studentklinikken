const Header = Vue.component("header-component", {
    template: `
  <div class="header">
    <div class="row" id="menu-row-content"> 
      <div class="col-sm-3 d-flex justify-content-center align-items-center">
      <img class="button display-none" src="../assets/menu-button.png"></div>
      <div class="col-sm-6 d-flex justify-content-center align-items-center">
          <router-link to='/'><img class="logo" src="../assets/Logo-farger.png"></router-link>
      </div>
      <div class="col-sm-3 d-flex justify-content-center align-items-center">
          <button @click="toggle" >
              <img class="button" src="../assets/menu-button.png">
          </button>
      </div>
  </div>
  <div class="row" id="menu-row-spacing"></div> 
 <!-- <menu-component @close="toggle" :closable="true"></menu-component> -->
 <Menu @close="toggle" :align="align" :closable="true">
      <div v-if="open">
          <span @click="innerOpen=true">
              <menu-component></menu-component>
          </span>
          <Menu @close="innerOpen=false" :align="align" :closable="true">
              <div v-if="innerOpen">
              </div>   
          </Menu>
      </div>
 </Menu>
</div> 
     `,
    data() {
        return {
            open: false,
            innerOpen: false,
            align: "center"
        };
    },
    methods: {
        toggle() {
            this.open = !this.open
        }

    }
});

export default Header;