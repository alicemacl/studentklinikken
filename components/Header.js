const Header = Vue.component("header-component", {
  template: `
    <div class="container-header">
        <div class="row" id="menu-row-spacing"></div> 
        <div class="row" id="menu-row-content"> 
            <div class="col-sm-3"></div>
            <div class="col-sm-6 logo d-flex justify-content-center align-items-center">
                <img class="menu-logo" src="../assets/Logo-farger.png">
            </div>
            <div class="col-sm-3 d-flex justify-content-center align-items-center">
                <button @click="toggle" >
                    <img class="menu-button" src="../assets/menu-button.png">
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