<div>
    

    /* Search menu */
    <div>
        <div>
            <p>Søk ansatte</p>
            <input type="text" placeholder="navn, studentnummer eller telefon" />
        </div>
        <div>
            <div>
                <checkbox></checkbox>
                <p>Gjeldende semester</p>
            </div>
            <div>
                <checkbox></checkbox>
                <p>Alle</p>
            </div>
        </div>
        <div>
            <div>
                <checkbox></checkbox>
                <p>Osteopati</p>
            </div>
            <div>
                <checkbox></checkbox>
                <p>Akupunktur</p>
            </div>
            <div>
                <checkbox></checkbox>
                <p>Kostholdsveiledning</p>
            </div>
            <div>
                <checkbox></checkbox>
                <p>Fysiologisk Testlab</p>
            </div>
            <div>
                <button>Legg til ny behandler</button>
            </div>
        </div>
    </div>

    /* Search result */
    <div>
        <div>
            <p>Resultat</p>
        </div>
        <div>
            <p>Vis resultat av søk dynamisk</p>
        </div>
    </div>

    /* Show info picked serach result / empty if create new */
    <div>
        <div>
            <p>Navn: </p>
            <input type="text" placeholder="Navn behandler" />
        </div>
        <div>
            <p>Studentnummer: </p>
            <input type="text" placeholder="Studentnummer" />
        </div>
        <div>
            <p>Behandler innen: </p>
            <select name="" id="">
                <option value="">Velg behandling</option>
                <option value="">Osteopati</option>
                <option value="">Akupunktur</option>
                <option value="">Kostholdsveiledning</option>
                <option value="">Fysiologisk Testlab</option>
            </select>
        </div>
        <div>
            <p>Telefonnummer: </p>
            <input type="text" placeholder="Telefonnummer" />
        </div>
        <div>
            <p>E-post: </p>
            <input type="text" placeholder="E-post" />
        </div>
        <div>
            <p>Adresse: </p>
            <input type="text" placeholder="Skriv inn adresse" />
        </div>
        <div>
            <p>Postnummer: </p>
            <input type="text" placeholder="Postnummer" />
            <p>Sted: </p>
            <input type="text" placeholder="Sted" />
        </div>
        <div>
            <p>Fødtselsdato: </p>
            Calendar-component
            </div>
        <button>Lagre</button>
    </div>
</div>
`,