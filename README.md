# Il Posto Giusto di Aversa — sito web

Sito statico (HTML/CSS/JS), zero backend, pronto per GitHub Pages.

## Come modificare i contenuti
Apri **`assets/data.js`**: è l'UNICO file da toccare per contenuti, prezzi e orari.
Cambi una riga, salvi, ricarichi la pagina. Non serve toccare la grafica.

- **Prezzi / piatti** → sezione `menu`
- **Orari** → sezione `orari` (mezzanotte = `"24:00"`, giorno chiuso = `aperto: false`)
- **Telefono / WhatsApp / social** → `contatti` e `social`
- **Menù fisso** → `menuFissi`
- **Specialità in vetrina** → `specialita`

> ⚠️ **I prezzi nel menu sono STIME**, non quelli reali. Sostituiscili con i tuoi.
> I piatti invece sono quelli realmente citati da recensioni e social.

## Foto
Stanno in `assets/img/` (formato WebP). Per sostituirne una: carica la nuova con
lo **stesso nome file** oppure aggiorna il nome dentro `data.js`.

## Pubblicazione su GitHub Pages
1. Crea un repository pubblico e carica questa cartella.
2. **Settings → Pages → Branch: `main` / root → Save.**
3. Il sito sarà su `https://TUONOME.github.io/NOMEREPO/`.

### Dominio personalizzato (es. ilpostogiustodiaversa.it)
1. In `data.js` metti l'URL definitivo in `seo.url`.
2. Aggiorna gli stessi URL in `index.html`, `robots.txt`, `sitemap.xml`.
3. Crea un file `CNAME` con dentro solo il dominio, poi imposta i DNS.

## Prenotazioni
Di default la richiesta parte **via WhatsApp** (funziona subito, nessuna
configurazione). Se vuoi riceverle anche via **email**:
1. Registrati gratis su [formspree.io](https://formspree.io) e crea un form.
2. Incolla l'ID in `data.js` → `prenotazione.formspreeId`.

## Mappa
La mappa Google si carica da sola dall'indirizzo. Nessuna API key richiesta.
