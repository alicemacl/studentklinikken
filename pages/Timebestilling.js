const Timebestilling = {
  template: `
    <div>
      
      <div class="container">

        <h5 id="headline">Personopplysninger</h5>

        <div class="text-boxes">

          <div class="box">
            <input type="text" class="info" placeholder="Fornavn">
          </div>

          <div class="box">
            <input type="text" class="info" placeholder="Etternavn">
          </div>

          <div class="box">
            <input type="number" class="info" placeholder="Fødselsdato (DDMMYY)">
          </div>

          <div class="box">
            <input type="text" class="info" placeholder="Gateadresse">
          </div>

          <div class="post-box">
              <div class="box1">
                <input type="number" class="info" placeholder="Postnr.">
              </div>

              <div class="box2">
                <input type="text" class="info" placeholder="Poststed">
              </div>
          </div>

          <div class="box">
            <input type="number" class="info" placeholder="Mobilnummer">
          </div>

          <div class="box">
            <input type="text" class="info" placeholder="E-post">
          </div>

          <button class="btn btn action-btn btn-primary btn-width-100">Bestill time</button>

        </div>

        </div>
    <div/>
  `
};

export default Timebestilling;