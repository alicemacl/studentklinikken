const Timebestilling = {
  template: `
    <div>
      
      <div class="timebestilling">

        <h2 id="headline">Personopplysninger</h2>

          <div class="main-box">
            <input type="text" class="info" placeholder="Fornavn">
          </div>

          <div class="main-box">
            <input type="text" class="info" placeholder="Etternavn">
          </div>

          <div class="main-box">
            <input type="number" class="info" placeholder="Fødselsdato (DDMMYY)">
          </div>

          <div class="main-box">
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

          <div class="main-box">
            <input type="number" class="info" placeholder="Mobilnummer">
          </div>

          <div class="main-box">
            <input type="text" class="info" placeholder="E-post">
          </div>

          <button class="btn btn action-btn btn-primary btn-width-100">Bestill time</button>

        </div>
    </div>
  `
};

export default Timebestilling;