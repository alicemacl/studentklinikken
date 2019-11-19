const Logginn = {
    template: `
    <div>
        <header-component />
            <div class="logg-inn">

                <div class="headline">
                    <h1 class="main-header">Logg inn</h1>
                </div>

                <div class="flexbox">
                    <div class="new-user">
                        <p>Ny bruker?</p>
                    </div>
                    <div class="registrer">
                        <a href="#">Registrer deg</a>
                    </div>
                        
                </div>

                <div class="inputfields">
                    <input type="text" class="input" placeholder="E-post/telefonnummer"><br>
                    <input type="text" class="input" placeholder="Passord">
                </div>

                <div class="flexbox">
                    <div class="checkbox">
                        <input type="checkbox"> Husk meg<br>
                    </div>
                    <div class="forgot-password">
                        <router-link to="/password">
                            <a href="">Glemt passord?</a>
                        </router-link>
                        
                    </div>     
                </div>
                
                <router-link>
                    <button class="btn action-btn btn-primary btn-width-100">Bestill time</button>
                </router-link>  
                
            </div>
        <footer-component />
    </div>
    `
  };
  
  export default Logginn;