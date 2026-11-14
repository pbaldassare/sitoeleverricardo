/** Stesse foto del sito principale (copia in `public/media/`). */
const IMG = "/media";

export const images = {
  logo: `${IMG}/2021/07/logo_footer.png`,
  hero: `${IMG}/2021/05/riccerdo-home.jpg`,
  homeRicardo: `${IMG}/2021/05/Ricardo-6690.jpg`,
  homeTeresa: `${IMG}/2021/06/teresa_vererdo.jpeg`,
  ricardo: `${IMG}/2021/05/Ricardo-6672-FotoXLibro.jpg`,
  ricardoContatti: `${IMG}/2021/05/Ricardo-6603.jpg`,
  teresa: `${IMG}/2021/07/teresa.jpg`,
  metodo: `${IMG}/2021/05/Ricardo-6592.jpg`,
  metodoAlt: `${IMG}/2021/05/Ricardo-6685.jpg`,
  pubblicazioni: `${IMG}/2021/07/pubblicazioni.jpeg`,
  crisi: `${IMG}/2021/05/crisi.png`,
  controllo: `${IMG}/2021/05/controllo.png`,
  relazioni: `${IMG}/2021/05/relazioni.png`,
  identita: `${IMG}/2021/05/identita.png`,
  supporto: `${IMG}/2021/05/supporto.png`,
};

export const contact = {
  studio: "Studio Professionale Associato ILEVER",
  address: "Via Cervano 52/C1, 31020 San Pietro di Feletto (TV)",
  phone: "+39 0438 410233",
  ricardo: { name: "Dott. Ricardo Ileyassoff", mobile: "+39 340 534 8463", email: "ricardoileyassoff@gmail.com" },
  teresa: { name: "Dott.ssa Teresa Verardo", mobile: "+39 349 577 6615", email: "teresaverardo.psy@gmail.com" },
  piva: "P.I. 03806770263 — SDI: B2K7HJZ",
};

export const areas = [
  {
    title: "Periodi di crisi",
    text: "Difficoltà nella gestione delle **emozioni** e delle **relazioni** in periodi di **crisi** e incertezza.",
    image: images.crisi,
  },
  {
    title: "Controllo di sé",
    text: "Per chi sente di non riuscire a **controllare** parti di sé o convive con un **malessere psicologico**.",
    image: images.controllo,
  },
  {
    title: "Relazioni",
    text: "Difficoltà nelle **relazioni** sociali, nella vita **sentimentale** o nella **sfera familiare**.",
    image: images.relazioni,
  },
  {
    title: "Identità",
    text: "Quando sono messi in discussione **senso** e **significato** della propria vita.",
    image: images.identita,
  },
  {
    title: "Supporto",
    text: "Per chi **si prende cura d’altri**, vive **conflitti** o affronta l’**handicap**.",
    image: images.supporto,
  },
];

export const services = [
  "**Psicoterapia** individuale, di coppia e di famiglia",
  "**Sostegno psicologico**",
  "**Esperienze traumatiche**",
  "Disagio legato all’**handicap** (ipovisione e cecità)",
  "**Crisi** dell’adolescenza",
  "**Depressione** e stati d’**ansia**",
  "Patologie **borderline**",
  "**Analisi** e supervisioni di psicoterapeuti",
  "Dinamica delle **relazioni** in ambito lavorativo e organizzativo",
];