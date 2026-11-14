import { images } from "./content";

export type BlogPost = {
  slug: string;
  cover?: string;
  title: string;
  subtitle?: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "parlami-cosi-ti-posso-vedere",
    cover: images.pubblicazioni,
    title: "Parlami così ti posso vedere",
    subtitle: "Uno psicoanalista cieco tra lo sguardo e la voce",
    date: "22 agosto 2025",
    excerpt: "In **preparazione in italiano**: testimonianza clinica su **sguardo** e **voce**.",
    body: [
      "Questo libro offre una prospettiva innovativa sulla questione dello sguardo e della voce nella pratica clinica, tra estetica, letteratura, filosofia e neuroscienze.",
      "La cecità non spegne la vista bensì la interiorizza. L’ascolto in analisi si focalizza anche sulla melodia, sul tono e sul ritmo della voce.",
      "L’opera si rivolge a professionisti, studenti e lettori curiosi, con linguaggio accessibile e rigoroso. Edito in Argentina da Letra Viva.",
    ],
  },
  {
    slug: "libera-associazione",
    cover: images.metodo,
    title: "La libera associazione",
    subtitle: "Un viaggio di scoperta, non un percorso prefissato",
    date: "28 maggio 2021",
    excerpt: "Cosa significa **libera associazione** in psicoterapia e perché può aprire **nuove prospettive**.",
    body: [
      "Nel metodo della libera associazione sei invitato a riferire ciò che emerge in seduta senza censura volontaria. Non è un esercizio di confessione forzata: è un modo per avvicinarsi a ciò che senti, al di là del pensiero razionale.",
      "Paziente e terapeuta non sanno in anticipo dove condurrà il processo. I salti intuitivi tra ricordi, immagini e emozioni possono rivelare significati rimasti in ombra.",
      "L’obiettivo non è fornire risposte preconfezionate, ma creare le condizioni perché conflitti e memorie trovino integrazione nel presente.",
    ],
  },
  {
    slug: "periodi-di-crisi",
    cover: images.hero,
    title: "Vivere i periodi di crisi",
    subtitle: "Quando emozioni e relazioni sembrano fuori controllo",
    date: "15 settembre 2025",
    excerpt: "**Crisi**, lutti e cambiamenti: il **sostegno psicologico** aiuta a ritrovare un **senso**.",
    body: [
      "I periodi di crisi non sono «debolezza»: sono momenti in cui le usuali difese non bastano più e il disagio chiede ascolto.",
      "In studio affrontiamo stati d’ansia, depressione, conflitti familiari o lavorativi, sempre partendo dalla tua storia e dal contesto in cui vivi.",
      "Il primo colloquio serve a capire insieme se e come iniziare un percorso, senza impegni oltre al tempo della conoscenza reciproca.",
    ],
  },
  {
    slug: "sedute-online",
    cover: images.ricardoContatti,
    title: "Psicoterapia anche a distanza",
    subtitle: "FaceTime, WhatsApp, Skype — con la stessa riservatezza dello studio",
    date: "3 ottobre 2025",
    excerpt: "Chi non può raggiungere **Conegliano** può comunque fare **psicoterapia online** con la stessa **riservatezza**.",
    body: [
      "Riceviamo persone da tutta Italia e dall’estero. Gli incontri online mantengono la stessa struttura delle sedute in presenza, nel rispetto della privacy.",
      "La voce resta un canale privilegiato di comunicazione: tono, ritmo e silenzi raccontano tanto quanto le parole.",
      "Per concordare modalità e orari, contatta lo studio dal lunedì al venerdì.",
    ],
  },
  {
    slug: "esperienze-traumatiche",
    cover: images.metodoAlt,
    title: "Elaborare esperienze traumatiche",
    subtitle: "Quando il passato continua a pesare sul presente",
    date: "7 novembre 2025",
    excerpt: "**Trauma** e perdite: la psicoterapia offre uno spazio per **elaborarle** con gradualità.",
    body: [
      "Spesso ci troviamo in conflitto con parti di noi stessi a causa di esperienze difficili o addirittura traumatiche.",
      "Il lavoro clinico non forza il recupero dei ricordi: promuove condizioni in cui ciò che era rimosso possa emergere con il tempo, senza ripetizioni invasive.",
      "L’integrazione della personalità è un processo lento, con momenti di stallo normali che si affrontano insieme.",
    ],
  },
  {
    slug: "adolescenza-e-famiglia",
    cover: images.teresa,
    title: "Crisi dell’adolescenza",
    subtitle: "Genitori, figli e identità in trasformazione",
    date: "12 gennaio 2026",
    excerpt: "L’**adolescenza** mette in discussione **ruoli** e legami: terapia **individuale** o **familiare**.",
    body: [
      "Nella fase adolescenziale si ridefiniscono autonomia, corpo e appartenenza. I conflitti con i genitori non sono solo «capricci»: spesso esprimono bisogni non detti.",
      "Lo studio propone sostegno psicologico individuale e percorsi di coppia o famiglia quando serve un mediare più consapevole.",
      "L’obiettivo è favorire la comunicazione senza negare la complessità emotiva di ciascuno.",
    ],
  },
  {
    slug: "disagio-e-handicap",
    cover: images.ricardo,
    title: "Psicologia e handicap visivo",
    subtitle: "Ipovisione, cecità e relazione con gli altri",
    date: "2 marzo 2026",
    excerpt: "Clinica attenta a **ipovisione**, **cecità** e a chi **accompagna** nel quotidiano.",
    body: [
      "Il disagio legato all’handicap — in particolare all’ipovisione e alla cecità — può intrecciarsi con identità, autonomia e rapporto al mondo.",
      "La pratica dello studio integra questa sensibilità, maturata anche nel percorso personale e professionale del Dott. Ileyassoff.",
      "Chi si prende cura di altri o convive con il proprio limite trova qui uno spazio per parlare senza dover «essere forte» a ogni costo.",
    ],
  },
  {
    slug: "terapia-di-coppia",
    cover: images.homeTeresa,
    title: "Psicoterapia di coppia",
    subtitle: "Quando la relazione chiede nuove prospettive",
    date: "18 aprile 2026",
    excerpt: "**Terapia di coppia**: quando la **comunicazione** è bloccata, si può ritrovare **senso** alla relazione.",
    body: [
      "La terapia di coppia non è un tribunale: è un luogo in cui entrambi possono esprimere bisogni e paure, spesso più profondi del tema superficiale del litigio.",
      "Il metodo psicoanalitico invita a esplorare anche ciò che si ripete «alla cieca» nelle dinamiche affettive.",
      "Si può iniziare con un colloquio conoscitivo con uno o entrambi i partner, per valutare obiettivi e tempi.",
    ],
  },
];