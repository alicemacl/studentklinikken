const Timebestilling = {
  template: `
    <div>
      
      <div class="container">

        <h5 id="headline">Personopplysninger</h5>

        <div class="text-boxes">

          <div class="box">
            <input type="text" id="info" placeholder="Fornavn">
          </div>

          <div class="box">
            <input type="text" id="info" placeholder="Etternavn">
          </div>

          <div class="box">
            <input type="number" id="info" placeholder="Fødselsdato (DDMMYY)">
          </div>

          <div class="box">
            <input type="text" id="info" placeholder="Gateadresse">
          </div>

          <div class="post-box">
              <div class="box1">
                <input type="number" id="info" placeholder="Postnr.">
              </div>

              <div class="box2">
                <input type="text" id="info" placeholder="Poststed">
              </div>
          </div>

          <div class="box">
            <input type="number" id="info" placeholder="Mobilnummer">
          </div>
          <div class="box">
            <input type="text" id="info" placeholder="E-post">
          </div>
          
        </div>

        <button class="btn btn action-btn btn-primary btn-width-90">Bestill time</button>

        </div>
    <div/>
  `
};

export default Timebestilling;