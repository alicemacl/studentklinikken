const Footer = Vue.component('footer-component', {
    template: `
        <div class="footer">

            <div class="text">

                <div class="title">

                    <div class="logo">
                        <img id="logoSrc" src="assets/logo-svarthvit.png">
                    </div>

                    <div class="schoolName">
                        <p id="schoolName1">Studentklinikken</p>
                        <p id="schoolName2">Av Høyskolen kristiania</p>
                    </div>

                </div> 

                <div class="infoText">
                    <p id="info1">Ring oss</p>
                    <p id="info2">971 17 690</p>
                </div>

                <div class="infoText">
                    <p id="info1">E-post</p>
                    <p id="info2">studentklinikken@kristiania.no</p>
                </div>

                <div class="infoText">
                    <p id="info1">Besøk oss</p>
                    <p id="info2">Prinsens gate 9</p>
                    <p id="info2">0153 Oslo</p>
                    <p id="info3">Henvend deg i Besøksresepsjonen</p>
                </div>

                <button class="button">
                    <p id="buttonText">Bestill time</p>
                    <div id="buttonArrow"></div>
                </button>
                
            </div>
        </div>
    
    `
});

export default Footer;