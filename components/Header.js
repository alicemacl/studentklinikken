const Header = Vue.component("header-component", {
  template: `
    <div class="header container">
        <div class="row align-items-center align-content-end">
            <div class="col-1 logo">
                <router-link to='/'><img src="../assets/Logo-farger.png"></router-link>
            </div>
            <div class="col-7">
                <button @click="toggle">
                    <img class="button" src="../assets/menu-button.png">
                </button>
            </div>
        </div>
        
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
