const BestillTime = {
    template: `
    <div class="bestilltime">
        <header-component />
        <div class="bestill-time"> 

            <h1> Bestill time  </h1>
         </div>

        <div class="box hva-onsker-du-time-til" id="time">
            <h2> Hva ønsker du time til?</h2>
            <button class="behandling" id="Osteopati"> 
            <button class="behandling" id="Akupunktur">
            <button class="behandling" id="kostholdsveiledning">
            <button class="behandling" id="fysiologisk Testlab">
        </div>

        <div class="box velg-dato-og-tid" id="dato">
            <h2> Velg dato og tid</h2>
        </div>
        <div class="box personopplysninger" id="personopplysninger">
            <h2> Personopplysninger </h2>
        </div>
        <div class="box Gjennomgang" id="gjennomgang">
            <h2> gjennomgang </h2>
        </div>
       
     </div>
    `
};
export default BestillTime;