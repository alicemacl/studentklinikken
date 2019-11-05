const Footer = Vue.component('footer-component', {
    template: `
        <div class="footer">
            <img id="logo" src="assets/logo-svarthvit.png">
            <div class="ringOss">
                <p>Ring oss</p>
                <p>+47 12345678</p>
            </div>
            <div class="e-post">
                <p>E-post</p>
                <p>studentklinikken@kristiania.no</p>
            </div>
            
            <button class="button">Bestill time<button/>
        </div>,
    
    `
});

export default Footer;