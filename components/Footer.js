const Footer = Vue.component('footer-component', {
    template: `
        <footer class="footer">

                <div class="footer-logo">
                    <img src="./assets/logo-hvit-stor.png" />
                </div>

                <div class="info-text">
                    <p id="info1">Ring oss</p>
                    <p id="info2">971 17 690</p>
                </div>

                <div class="info-text">
                    <p id="info1">E-post</p>
                    <p id="info2">studentklinikken@kristiania.no</p>
                </div>

                <div class="info-text">
                    <p id="info1">Besøk oss</p>
                    <p id="info2">Prinsens gate 9</p>
                    <p id="info2">0153 Oslo</p>
                    <p id="info3">Henvend deg i Besøksresepsjonen</p>
                </div>

                <button class="action-btn btn-primary margin-top-5 margin-bottom-3 btn-width-100">
                    Bestill time
                <button/>
                
            </div>
        </footer>,
    
    `
});

export default Footer;