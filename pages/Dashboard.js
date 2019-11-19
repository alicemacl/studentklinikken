const Dashboard = {
    template: `
        <div>
          <header-component />
            <div class="dashboard">
              <div class="headline">
                <h1 class="main-header">God kveld, ..!</h1>
              </div>
              <div class="text">
                <p>Hva ønsker du å gjøre</p>
              </div>
              <route-link>
                <button class="btn action-btn btn-primary btn-width-100">Se dine timer</button>
              </route-link>
              <route-link>
                <button class="btn action-btn btn-primary btn-width-100">Bestill time</button>
              </route-link>
              <route-link>
                <button class="btn action-btn btn-primary btn-width-100">Endre instillinger</button>
              </route-link>

              <route-link>
                <button class="btn-2 action-btn btn-secondary btn-width-100">Logg ut</button>
              </route-link>

            </div>
          <footer-component></footer-component>
        </div> 
      `,
  
  };
  
  export default Dashboard;