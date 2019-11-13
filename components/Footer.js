const Footer = Vue.component('footer-component', {
    template: `
        <footer class="footer">
            <div class="footer-logo">
                    <img src="./assets/logo-hvit-stor.png" />
                </div>

                <div class="info-text">
                    <p class="info-title">Ring oss</p>
                    <p class="info-body">971 17 690</p>
                </div>

                <div class="info-text">
                    <p class="info-title">E-post</p>
                    <p class="info-body">studentklinikken@kristiania.no</p>
                </div>

                <div class="info-text">
                    <p class="info-title">Besøk oss</p>
                    <p class="info-body">Prinsens gate 9</p>
                    <p class="info-body">0153 Oslo</p>
                    <p class="info-body-small">Henvend deg i Besøksresepsjonen</p>
                </div>

                <button class="action-btn btn-primary btn-width-100 margin-tb-2">
                    Bestill time
                <button/>
                
            </div>
        </footer>,
    
    `
});

export default Footer;