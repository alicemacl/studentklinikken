
/*
const Database = {
  data() {
    return {
      ansatte: [
        {
          navn: "Ole Olsen",
          id: 1,
          studentnr: 345788,
          semester: 4,
          fordypning: "osteopati",
          telefon: 37242165,
          mail: "oleolsen@gmail.com",
          adresse: "Tronsheisveien 9, 0552 Oslo",
          fødselsdato: 140996
        }
      ]
    }
  }
};

export default Database;
*/
/*
import Vuex from 'vuex'; 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ansatte: [
      {
        navn: "Ole Olsen",
        id: 1,
        studentnr: 345788,
        semester: 4,
        fordypning: "osteopati",
        telefon: 37242165,
        mail: "oleolsen@gmail.com",
        adresse: "Tronsheisveien 9, 0552 Oslo",
        fødselsdato: 140996
      }
    ]
  }

}) */
/*
const Database = {
  name: 'ansatte', 
  data: function() {
  return {
    ansatte: [
         {
           navn: "Ole Olsen",
           id: 1,
           studentnr: 345788,
           semester: 4,
           fordypning: "osteopati",
           telefon: 37242165,
           mail: "oleolsen@gmail.com",
           adresse: "Tronsheisveien 9, 0552 Oslo",
           fødselsdato: 140996
         }
       ]
      }
    }
  }

export default Database; 
*/

/*
"kunder": [
  {
    "fornavn": "Henrik",
    "etternavn": "Hansen",
    "id": 1,
    "telefon": 22652671,
    "mail": "henrikhansen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Enok",
    "etternavn": "Johansen",
    "id": 2,
    "telefon": 77945700,
    "mail": "enokjohansen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Halvar",
    "etternavn": "Olsen",
    "id": 3,
    "telefon": 10728031,
    "mail": "halvarolsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Øyvin",
    "etternavn": "Larsen",
    "id": 4,
    "telefon": 78372964,
    "mail": "oeyvinlarsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Jan",
    "etternavn": "Hansen",
    "id": 5,
    "telefon": 60195371,
    "mail": "janhansen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Per",
    "etternavn": "Andersen",
    "id": 6,
    "telefon": 55884678,
    "mail": "perandersen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Bjørn",
    "etternavn": "Pedersen",
    "id": 7,
    "telefon": 56039386,
    "mail": "bjoernpedersen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Ole",
    "etternavn": "Nilsen",
    "id": 8,
    "telefon": 18189159,
    "mail": "olenilsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Kjell",
    "etternavn": "Kristiansen",
    "id": 9,
    "telefon": 16971765,
    "mail": "kjellkristiansen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Camilla",
    "etternavn": "Jensen",
    "id": 10,
    "telefon": 13738160,
    "mail": "camillajensen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Lars",
    "etternavn": "Karlsen",
    "id": 11,
    "telefon": 95868948,
    "mail": "larskarlsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Wenche",
    "etternavn": "Johnsen",
    "id": 12,
    "telefon": 85374797,
    "mail": "wenchejohnsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Arne",
    "etternavn": "Pettersen",
    "id": 13,
    "telefon": 95337352,
    "mail": "arnepettersen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Tove",
    "etternavn": "Olsen",
    "id": 14,
    "telefon": 35122800,
    "mail": "toveolsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Elin",
    "etternavn": "Larsen",
    "id": 15,
    "telefon": 51698540,
    "mail": "elinlarsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Knut",
    "etternavn": "Eriksen",
    "id": 16,
    "telefon": 72013150,
    "mail": "knuteriksen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Anita",
    "etternavn": "Berg",
    "id": 17,
    "telefon": 25551191,
    "mail": "anitaberg@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Svein",
    "etternavn": "Haugen",
    "id": 18,
    "telefon": 44832405,
    "mail": "sveinhaugen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Tone",
    "etternavn": "Hagen",
    "id": 19,
    "telefon": 92362047,
    "mail": "tonehagen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Linda",
    "etternavn": "Johannessen",
    "id": 20,
    "telefon": 52252088,
    "mail": "lindajohannessen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Hans",
    "etternavn": "Andreassen",
    "id": 21,
    "telefon": 62278224,
    "mail": "hansandreassen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Odd",
    "etternavn": "Jacobsen",
    "id": 22,
    "telefon": 98402082,
    "mail": "oddjacobsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Tor",
    "etternavn": "Dahl",
    "id": 23,
    "telefon": 22192401,
    "mail": "tordahl@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Geir",
    "etternavn": "Jørgensen",
    "id": 24,
    "telefon": 74060215,
    "mail": "geirjørgensen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Terje",
    "etternavn": "Henriksen",
    "id": 25,
    "telefon": 95755695,
    "mail": "terjehenriksen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Hanne",
    "etternavn": "Halvorsen",
    "id": 26,
    "telefon": 87306183,
    "mail": "hannehalvorsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Silje",
    "etternavn": "Lund",
    "id": 27,
    "telefon": 67560186,
    "mail": "siljelund@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Thomas",
    "etternavn": "Sørensen",
    "id": 28,
    "telefon": 23850387,
    "mail": "thomassørensen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Morten",
    "etternavn": "Jakobsen",
    "id": 29,
    "telefon": 43585870,
    "mail": "mortenjakobsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Heidi",
    "etternavn": "Moen",
    "id": 30,
    "telefon": 24633603,
    "mail": "heidimoen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Solveig",
    "etternavn": "Gundersen",
    "id": 31,
    "telefon": 97114319,
    "mail": "solveiggundersen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "John",
    "etternavn": "Iversen",
    "id": 32,
    "telefon": 44974200,
    "mail": "johniversen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Bjørg",
    "etternavn": "Strand",
    "id": 33,
    "telefon": 75209896,
    "mail": "bjoergstrand@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Randi",
    "etternavn": "Svendsen",
    "id": 34,
    "telefon": 38575669,
    "mail": "randisvendsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Bente",
    "etternavn": "Solberg",
    "id": 35,
    "telefon": 24470783,
    "mail": "bentesolberg@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Erik",
    "etternavn": "Martinsen",
    "id": 36,
    "telefon": 64675587,
    "mail": "erikmartinsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Astrid",
    "etternavn": "Eide",
    "id": 37,
    "telefon": 37433972,
    "mail": "astrideide@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Anders",
    "etternavn": "Knutsen",
    "id": 38,
    "telefon": 20044501,
    "mail": "andersknutsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Kristin",
    "etternavn": "Paulsen",
    "id": 39,
    "telefon": 14829065,
    "mail": "kristinpaulsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Berit",
    "etternavn": "Bakken",
    "id": 40,
    "telefon": 90113714,
    "mail": "beritbakken@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Elisabeth",
    "etternavn": "Kristoffersen",
    "id": 41,
    "telefon": 73400053,
    "mail": "elisabethkristoffersen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Marianne",
    "etternavn": "Mathisen",
    "id": 42,
    "telefon": 50278017,
    "mail": "mariannemathisen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Nina",
    "etternavn": "Lie",
    "id": 43,
    "telefon": 21051695,
    "mail": "ninalie@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Rune",
    "etternavn": "Amundsen",
    "id": 44,
    "telefon": 21155060,
    "mail": "runeamundsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Martin",
    "etternavn": "Rasmussen",
    "id": 45,
    "telefon": 23259467,
    "mail": "martinrasmussen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Andreas",
    "etternavn": "Nguyen",
    "id": 46,
    "telefon": 54770007,
    "mail": "andreasnguyen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Hilde",
    "etternavn": "Lunde",
    "id": 47,
    "telefon": 86781188,
    "mail": "hildelunde@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Anna",
    "etternavn": "Solheim",
    "id": 48,
    "telefon": 57246903,
    "mail": "annasolheim@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Ida",
    "etternavn": "Moe",
    "id": 49,
    "telefon": 68438755,
    "mail": "idamoe@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Eva",
    "etternavn": "Berge",
    "id": 50,
    "telefon": 54706493,
    "mail": "evaberge@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Maria",
    "etternavn": "Nygård",
    "id": 51,
    "telefon": 92841632,
    "mail": "marianygaard@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Ingrid",
    "etternavn": "Kristensen",
    "id": 52,
    "telefon": 78210155,
    "mail": "ingridkristensen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Marit",
    "etternavn": "Bakke",
    "id": 53,
    "telefon": 55276070,
    "mail": "maritbakke@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Trond",
    "etternavn": "Ali",
    "id": 54,
    "telefon": 17717389,
    "mail": "trondali@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "honør"
  },
  {
    "fornavn": "Tore",
    "etternavn": "Fredriksen",
    "id": 55,
    "telefon": 73504520,
    "mail": "torefredriksen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Harald",
    "etternavn": "Holm",
    "id": 56,
    "telefon": 18407811,
    "mail": "haraldholm@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Kari",
    "etternavn": "Lien",
    "id": 57,
    "telefon": 86570693,
    "mail": "karilien@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "student"
  },
  {
    "fornavn": "Jon",
    "etternavn": "Hauge",
    "id": 58,
    "telefon": 41805135,
    "mail": "jonhauge@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Inger",
    "etternavn": "Knudsen",
    "id": 59,
    "telefon": 82347182,
    "mail": "ingerknudsen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  },
  {
    "fornavn": "Anne",
    "etternavn": "Evensen",
    "id": 60,
    "telefon": 28648622,
    "mail": "anneevensen@gmail.com",
    "adresse": "Storgata 9, 0552 Oslo",
    "fødselsdato": 211192,
    "prisgruppe": "ordinær"
  }
],


  "months": ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli",
    "August", "September", "Oktober", "November", "Desember"],


    "days": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

}
} */