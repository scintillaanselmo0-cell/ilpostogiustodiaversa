/* =============================================================================
   IL POSTO GIUSTO DI AVERSA — UNICO FILE DA MODIFICARE
   -----------------------------------------------------------------------------
   Qui dentro c'e' TUTTO: nome, contatti, orari, indirizzo, social, menu, prezzi.
   Per cambiare un prezzo o un orario modifichi UNA riga qui: non tocchi mai
   l'aspetto del sito. Salvi il file e ricarichi la pagina.

   ⚠️ PREZZI: sono STIME coerenti con la fascia del locale, NON i prezzi reali.
      Sostituisca ogni "prezzo" con quello vero del menu. I piatti sono invece
      quelli realmente citati da recensioni, social e stampa.

   REGOLE ORARI:
   - Formato 24h "HH:MM". Chiusura a mezzanotte = "24:00".
   - Giorno di chiusura completa: metta  aperto: false
   - "aperto ora / chiuso" sul sito si calcola da solo da questi orari.
   ============================================================================ */

const RISTORANTE = {

  /* --- IDENTITA' ---------------------------------------------------------- */
  brand: {
    nome: "Il Posto Giusto",
    nomeEsteso: "Il Posto Giusto di Aversa",
    cittaBrand: "di Aversa",
    tagline: "Ristorante di pesce & pizzeria",
    // frase gancio, tono delle recensioni reali:
    hook: "Il pesce arriva ancora vivo al banco. Poi diventa un piatto che ricorderai.",
  },

  /* --- CONTATTI ----------------------------------------------------------- */
  contatti: {
    telefono: "081 424 9489",           // fisso / prenotazioni ufficio
    telefonoLink: "+39 081 424 9489",   // usato per il tasto Chiama
    whatsapp: "347 613 8959",           // numero mostrato
    whatsappNumero: "393476138959",     // formato internazionale senza + per il link
    // messaggio WhatsApp precompilato per il tasto generico:
    whatsappMsg: "Ciao! Vorrei prenotare un tavolo da Il Posto Giusto di Aversa.",
    email: "",                          // opzionale: lasci "" se non serve
  },

  /* --- INDIRIZZO / MAPPA -------------------------------------------------- */
  indirizzo: {
    via: "Via Aldo Moro, 73",
    cap: "81031",
    citta: "Aversa",
    provincia: "CE",
    plusCode: "X56X+CP Aversa",
    lat: 40.9611,   // [DA VERIFICARE] ricavato dal Plus Code
    lng: 14.1993,   // [DA VERIFICARE] ricavato dal Plus Code
    // link "Indicazioni" (apre Google Maps):
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Il+Posto+Giusto+di+Aversa+Via+Aldo+Moro+73+Aversa",
    // iframe mappa (nessuna API key richiesta):
    mapEmbed: "https://maps.google.com/maps?q=Il%20Posto%20Giusto%20di%20Aversa%20Via%20Aldo%20Moro%2073%20Aversa&z=16&output=embed",
  },

  /* --- SOCIAL & DELIVERY -------------------------------------------------- */
  social: {
    instagram: "https://www.instagram.com/ilpostogiustodiaversa/",
    facebook: "https://www.facebook.com/ilpostogiustodiaversa/",
    tiktok: "", // opzionale
  },
  delivery: {
    glovo: "https://glovoapp.com/it/it/napoli/il-posto-giusto-nap",
    alfonsino: "https://app.alfonsino.delivery/aversa/order/menu/savaris-il-posto-giusto-di-aversa",
  },

  /* --- INFO RAPIDE (mostrate come "badge") -------------------------------- */
  meta: {
    rating: "4,7",
    recensioni: "2.861",
    fasciaPrezzo: "20–60 € a persona",
    priceRangeSchema: "€€€",
    cucina: ["Pesce", "Mediterranea", "Pizzeria", "Crudi di mare"],
    servizi: ["Tavoli all'aperto", "Sala privata", "Menu bambini", "Asporto", "Consegna a domicilio", "Accessibile"],
  },
  coperto: "Coperto 2,00 €",
  noteMenu: "Alcuni prodotti, in mancanza di fresco, possono essere sostituiti da ottimi surgelati. La pizza è disponibile anche con impasto ai cereali.",

  /* --- ORARI (fonte: cartello del locale + Google/Waze) ------------------- */
  /* [ASSUMPTION] Weekend "tutta la giornata": impostato pranzo→mezzanotte
     con apertura 12:00. Waze riporta 10:00: se aprite prima, modifichi "open". */
  orari: [
    { giorno: "Lunedì",    open: "16:00", close: "24:00", aperto: true },
    { giorno: "Martedì",   open: "16:00", close: "24:00", aperto: true },
    { giorno: "Mercoledì", open: "16:00", close: "24:00", aperto: true },
    { giorno: "Giovedì",   open: "16:00", close: "24:00", aperto: true },
    { giorno: "Venerdì",   open: "12:00", close: "24:00", aperto: true },
    { giorno: "Sabato",    open: "12:00", close: "24:00", aperto: true },
    { giorno: "Domenica",  open: "12:00", close: "24:00", aperto: true },
  ],
  orariNota: "Dal venerdì alla domenica orario continuato.",

  /* --- PRENOTAZIONE ------------------------------------------------------- */
  prenotazione: {
    // Di default la richiesta parte via WhatsApp (funziona subito, senza backend).
    // Se vuole riceverla anche via email, crei un form gratuito su formspree.io
    // e incolli qui il suo ID (poi il codice invia a Formspree in automatico).
    formspreeId: "", // es. "xanewabc" — lasci "" per usare solo WhatsApp
    orariSelezionabili: ["12:30","13:00","13:30","14:00","19:30","20:00","20:30","21:00","21:30","22:00"],
    maxPersone: 20,
  },

  /* --- MENU FISSI (dalla comunicazione social del locale) ----------------- */
  menuFissi: [
    {
      nome: "Menù Degustazione di Pesce",
      prezzo: "49,90 € a coppia",   // [DA VERIFICARE]
      portate: [
        "Entrée: bruschetta con pesce marinato del giorno",
        "Sautè in cestino di pane con scampi e gamberi",
        "Pacchero con pescato del giorno e zucchine",
        "Sfilettato di pesce con chips di patate",
        "Dolce del giorno",
        "1 bottiglia di acqua",
      ],
    },
  ],

  /* --- SPECIALITA' IN VETRINA (le 5 più amate dalle recensioni) ----------- */
  /* img = nome file dentro assets/img/ */
  specialita: [
    { nome: "Crudo di gambero rosso", img: "crudo-gambero.webp",
      desc: "Gambero rosso crudo, il taglio che apre ogni cena importante." },
    { nome: "Tartare di tonno rosso", img: "tartare-tonno.webp",
      desc: "Tonno tagliato al coltello, agrumi e olio del territorio." },
    { nome: "Polpo & patate di Avezzano", img: "polpo.webp",
      desc: "Il piatto che i clienti nominano per primo. Polpo scottato su crema." },
    { nome: "Tartare con caviale", img: "tartare-gambero.webp",
      desc: "Crudo di crostacei, mantecato e finito con caviale." },
  ],

  /* --- MENU ALLA CARTA ---------------------------------------------------- */
  /* Ogni piatto: nome, desc, prezzo, tag[], allergeni[].
     Tag disponibili: "specialita","crudo","piccante","vegetariano","senza-glutine"
     Allergeni (mostrati come sigle): pesce, crostacei, molluschi, glutine,
     latticini, uova, frutta a guscio, solfiti.                               */
  menu: [
    {
      id: "crudi",
      nome: "Crudi di Mare",
      nota: "Dal banco all'ingresso, pescato del giorno.",
      piatti: [
        { nome: "Plateau Royal", desc: "Selezione di crudi del giorno per due: gambero rosso, scampi, ostriche, tartare.", prezzo: "45,00", tag:["specialita","crudo"], allergeni:["crostacei","molluschi","pesce"] },
        { nome: "Crudo di gambero rosso", desc: "Gamberi rossi crudi, sale in fiocchi e olio EVO.", prezzo: "18,00", tag:["crudo","specialita"], allergeni:["crostacei"] },
        { nome: "Tartare di tonno rosso", desc: "Tonno al coltello, scorza di agrumi, olio del territorio.", prezzo: "16,00", tag:["crudo"], allergeni:["pesce"] },
        { nome: "Carpaccio di ricciola", desc: "Ricciola sottile, colatura e limone.", prezzo: "15,00", tag:["crudo"], allergeni:["pesce"] },
        { nome: "Selezione di ostriche", desc: "Tre pezzi, secondo disponibilità del giorno.", prezzo: "15,00", tag:["crudo"], allergeni:["molluschi"] },
      ],
    },
    {
      id: "antipasti-mare",
      nome: "Antipasti di Mare",
      piatti: [
        { nome: "Polpo & patate di Avezzano", desc: "Polpo scottato su crema di patate di Avezzano.", prezzo: "16,00", tag:["specialita"], allergeni:["molluschi"] },
        { nome: "Sautè di cozze e vongole", desc: "Cozze e vongole aperte a vapore, crostino, pepe.", prezzo: "14,00", tag:[], allergeni:["molluschi","glutine"] },
        { nome: "Bruschetta con pesce marinato", desc: "Pane caldo e pesce marinato del giorno.", prezzo: "12,00", tag:[], allergeni:["pesce","glutine"] },
        { nome: "Insalata di mare", desc: "Polpo, seppia, gamberi, sedano e limone.", prezzo: "14,00", tag:[], allergeni:["molluschi","crostacei"] },
      ],
    },
    {
      id: "antipasti-caldi",
      nome: "Antipasti Caldi",
      piatti: [
        { nome: "Cestino di pane con sautè", desc: "Cestino caldo con sautè di scampi e gamberi.", prezzo: "16,00", tag:["specialita"], allergeni:["crostacei","glutine"] },
        { nome: "Parmigiana di pesce spada", desc: "A strati, con provola e basilico.", prezzo: "13,00", tag:[], allergeni:["pesce","latticini"] },
        { nome: "Gratinato di frutti di mare", desc: "Cozze e vongole gratinate al forno.", prezzo: "12,00", tag:[], allergeni:["molluschi","glutine"] },
      ],
    },
    {
      id: "fritti",
      nome: "Fritti",
      piatti: [
        { nome: "Frittura di paranza", desc: "Pesce piccolo del golfo, croccante.", prezzo: "16,00", tag:[], allergeni:["pesce","glutine"] },
        { nome: "Fritto misto mare", desc: "Gamberi, calamari e paranza.", prezzo: "18,00", tag:["specialita"], allergeni:["crostacei","molluschi","glutine"] },
        { nome: "Calamari fritti", desc: "Anelli di calamaro, limone.", prezzo: "14,00", tag:[], allergeni:["molluschi","glutine"] },
      ],
    },
    {
      id: "primi",
      nome: "Primi di Mare",
      piatti: [
        { nome: "Gnocchi gamberi e pistacchio", desc: "Gnocchi, gamberi e granella di pistacchio.", prezzo: "16,00", tag:["specialita"], allergeni:["crostacei","glutine","frutta a guscio"] },
        { nome: "Pacchero con pescato del giorno", desc: "Pacchero, pescato del giorno e zucchine.", prezzo: "15,00", tag:["specialita"], allergeni:["pesce","glutine"] },
        { nome: "Spaghetti alle vongole", desc: "Vongole veraci, aglio e prezzemolo.", prezzo: "14,00", tag:[], allergeni:["molluschi","glutine"] },
        { nome: "Risotto ai frutti di mare", desc: "Mantecato con il pescato del giorno.", prezzo: "16,00", tag:["specialita"], allergeni:["molluschi","crostacei"] },
        { nome: "Linguine all'astice", desc: "Mezzo astice, pomodorino, per due su richiesta.", prezzo: "24,00", tag:[], allergeni:["crostacei","glutine"] },
        { nome: "Gnocco alla Nerano", desc: "Gnocchi, crema di zucchine e Provolone del Monaco DOP.", prezzo: "13,00", tag:["vegetariano"], allergeni:["glutine","latticini"] },
      ],
    },
    {
      id: "secondi",
      nome: "Secondi di Mare",
      piatti: [
        { nome: "Grigliata mista di pesce", desc: "Selezione del giorno alla griglia.", prezzo: "22,00", tag:["specialita"], allergeni:["pesce","crostacei","molluschi"] },
        { nome: "Sfilettato di pesce con chips", desc: "Pescato sfilettato con chips di patate.", prezzo: "20,00", tag:[], allergeni:["pesce"] },
        { nome: "Pescato del giorno al sale", desc: "In crosta di sale, sfilettato al tavolo.", prezzo: "8,00 / hg", tag:[], allergeni:["pesce"] },
        { nome: "Astice alla catalana", desc: "Astice, pomodoro, cipolla di Tropea.", prezzo: "26,00", tag:[], allergeni:["crostacei"] },
      ],
    },
    {
      id: "pizze",
      nome: "Pizze",
      nota: "Impasto anche ai cereali. Lun & Mar disponibile impasto multicereali.",
      piatti: [
        { nome: "Margherita", desc: "Pomodoro, fiordilatte, basilico.", prezzo: "6,00", tag:["vegetariano"], allergeni:["glutine","latticini"] },
        { nome: "Rustica", desc: "Salsiccia di maiale nero casertano, patate di Avezzano, provola di Agerola.", prezzo: "10,00", tag:["specialita"], allergeni:["glutine","latticini"] },
        { nome: "Pizza fritta", desc: "Ricotta, provola, pepe, pomodoro.", prezzo: "8,00", tag:[], allergeni:["glutine","latticini"] },
        { nome: "Calzone \"pizza gâteau\"", desc: "Il calzone ispirato al gattò di patate.", prezzo: "9,00", tag:["specialita"], allergeni:["glutine","latticini"] },
      ],
    },
    {
      id: "dolci",
      nome: "Dolci",
      piatti: [
        { nome: "Millefoglie", desc: "La più richiesta: sfoglia e crema.", prezzo: "6,00", tag:["specialita"], allergeni:["glutine","latticini","uova"] },
        { nome: "Tiramisù", desc: "Classico, al cucchiaio.", prezzo: "6,00", tag:[], allergeni:["glutine","latticini","uova"] },
        { nome: "Cheesecake", desc: "Base biscotto e frutti di bosco.", prezzo: "6,00", tag:[], allergeni:["glutine","latticini"] },
      ],
    },
  ],

  /* --- GALLERIA AMBIENTE -------------------------------------------------- */
  gallery: [
    { img:"insegna.webp", alt:"Insegna al neon del ristorante Il Posto Giusto di Aversa" },
    { img:"sala-marmo.webp", alt:"Sala interna con pareti in marmo e soffitto dorato" },
    { img:"banco-pesce.webp", alt:"Banco del pesce fresco all'ingresso" },
    { img:"astice-vivo.webp", alt:"Astice vivo nella vasca del locale" },
    { img:"sala-legno.webp", alt:"Sala con boiserie in legno" },
    { img:"dehors.webp", alt:"Tavoli all'aperto del ristorante" },
    { img:"chef.webp", alt:"Lo chef che rifinisce un piatto di pesce" },
    { img:"degustazione.webp", alt:"Piatto di pesce con abbinamento vino" },
  ],

  /* --- CHEF / STORIA ------------------------------------------------------ */
  chef: {
    nome: "Giulio De Simone",
    ruolo: "Executive Chef",
    testo: "Con l'arrivo dello chef Giulio De Simone la cucina ha preso una direzione precisa: mettere il mare al centro e lasciar parlare il prodotto. Crudi, ostriche, tartare e primi di forte personalità, senza eccessi. Il pescato arriva fresco — spesso vivo — e passa dal banco all'ingresso direttamente al piatto.",
    foto: "chef.webp",
  },

  /* --- SEO ---------------------------------------------------------------- */
  seo: {
    title: "Ristorante di Pesce & Pizzeria ad Aversa | Il Posto Giusto", // rispecchia <title> statico in index.html
    description: "Ristorante di pesce ad Aversa (CE): crudi, tartare, polpo, pizza. Pescato fresco al banco, sala elegante, tavoli all'aperto. Prenota: 081 424 9489.",
    url: "https://ilpostogiustodiaversa.it/", // [DA VERIFICARE] metta l'URL definitivo
    ogImage: "assets/img/og.jpg",
  },
};

/* NON MODIFICARE: rende i dati disponibili al sito. */
window.RISTORANTE = RISTORANTE;
