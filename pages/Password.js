const Password = {
    template: `
    <div>
        <header-component />
            <div class="pwd">

                <div class="headline-1">
                    <h1 class="main-header">Glemt passord</h1>
                </div>

                <div class="flexbox-1">

                    <div class="new-user-1">
                        <p>Ny bruker?</p>
                    </div>
                    <div class="registrer-1">
                        <a href="#">Registrer deg</a>
                    </div>
                        
                </div>

                <div class="inputfields-1">
                    <input type="number" class="input-1" placeholder="Telefonnummer">
                </div>
                
                <router-link to="/sms-code">
                    <button class="btn-1 action-btn btn-primary btn-width-100">Få kode på SMS</button>
                </router-link>
                
                
            </div>
        <footer-component />
    </div>
    `
  };
  
  export default Password;