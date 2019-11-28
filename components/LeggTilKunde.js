        <div>
            <div>
                <p>Søk kunde</p>
                <input type="text" placeholder="navn eller telefon"/>
            </div>
            <div>
                <button>Legg til ny kunde</button>
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
                <input type="text" placeholder="Navn kunde"/>
            </div>
            <div>
                <p>Prisgruppe: </p>
                <select name="" id="">
                    <option value="">Velg prisgruppe</option>
                    <option value="">Ordinær</option>
                    <option value="">Student</option>
                    <option value="">Honør</option>
                    <option value="">Ungdom</option>
                </select>
            </div>
            <div>
                <p>Telefonnummer: </p>
                <input type="text" placeholder="Telefonnummer"/>
            </div>
            <div>
                <p>E-post: </p>
                <input type="text" placeholder="E-post"/>
            </div>
            <div>
                <p>Adresse: </p>
                <input type="text" placeholder="Skriv inn adresse"/>
            </div>
            <div>
                <p>Postnummer: </p>
                <input type="text" placeholder="Postnummer"/>
                <p>Sted: </p>
                <input type="text" placeholder="Sted"/>
            </div>
            <div>
                <p>Fødtselsdato: </p>
                Calendar-component
            </div>
            <div>
                <button>Oppdater/opprett kunde</button>
            </div>
            <div>
                <p>Tidligere behandlinger</p>
                <p>Planlagte behandlinger</p>
                <p>Notater fra behandler</p>
            </div>
        </div>
        <date-picker />
        <date-picker-inline />