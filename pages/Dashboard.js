const Dashboard = {
    template: `
        <div>
          <header-component />
            <div class="dashboard">
              <div class="headline">
                <h1 class="main-header">God kveld!</h1>
              </div>
              <div class="text">
                <p>Hva ønsker du å gjøre</p>
              </div>
              <router-link to="/dashboardms">
                <button class="btn action-btn btn-primary btn-width-100">Se dine timer</button>
              </router-link>
              <router-link to="/bestille">
                <button class="btn action-btn btn-primary btn-width-100">Bestill time</button>
              </router-link>
              <router-link to=""> 
                <button class="btn action-btn btn-primary btn-width-100">Endre instillinger</button>
              </router-link>

              <route-link to="/">
                <button class="btn-2 action-btn btn-secondary btn-width-100">Logg ut</button>
              </route-link>

            </div>
          <footer-component></footer-component>
        </div> 
      `,
  
  };
  
  export default Dashboard;