export type NavItem = {
  to: string
  label: string
  arrow?: boolean
}

export type IconItem = {
  icon: string
  label: string
}

export type Offering = {
  icon: string
  title: string
  quote?: string
  quoteBy?: string
  body?: string
}

export const navItems: NavItem[] = [
  { to: '/leistungen', label: 'Unsere Leistungen' },
  { to: '/profil', label: 'Dr. Beate Kummer' },
  { to: '/kontakt', label: 'Kontakt', arrow: true }
]

export const serviceStrip: IconItem[] = [
  { icon: '/images/icons/fi-rs-leaf.svg', label: 'Entsorgungsmanagement' },
  { icon: '/images/icons/fi-ss-recycle.svg', label: 'Externe Umweltbeauftragte' },
  { icon: '/images/icons/fi-ss-graduation-cap.svg', label: 'Schulungen & Weiterbildung' },
  { icon: '/images/icons/fi-rr-layers.svg', label: 'Nachhaltigkeit & Umweltkommunikation' }
]

export const clients = [
  { src: '/images/clients/accurec.jpg', name: 'Accurec' },
  { src: '/images/clients/airtecbraids.jpg', name: 'Airtec Braids' },
  { src: '/images/clients/bartelsrieger.jpg', name: 'Bartels Rieger' },
  { src: '/images/clients/basf.jpg', name: 'BASF' },
  { src: '/images/clients/batrec.jpg', name: 'Batrec' },
  { src: '/images/clients/commerzbank.jpg', name: 'Commerzbank' },
  { src: '/images/clients/derka.jpg', name: 'DEKRA' },
  { src: '/images/clients/eizo.jpg', name: 'EIZO' },
  { src: '/images/clients/eurobat.jpg', name: 'EUROBAT' },
  { src: '/images/clients/europeanalu.jpg', name: 'European Aluminium' },
  { src: '/images/clients/evonik.jpg', name: 'Evonik' },
  { src: '/images/clients/Gropyus_Logo_SVG_Horizontal_Teal.svg', name: 'Gropyus' },
  { src: '/images/clients/Koehler_Paper.svg', name: 'Koehler Paper' },
  { src: '/images/clients/kraiburg.jpg', name: 'Kraiburg' },
  { src: '/images/clients/lamy.jpg', name: 'LAMY' },
  { src: '/images/clients/Loreal_logo.svg', name: "L'Oréal" },
  { src: '/images/clients/nrw.jpg', name: 'NRW-Stiftung' },
  { src: '/images/clients/polysecure.jpg', name: 'Polysecure' },
  { src: '/images/clients/rag.jpg', name: 'RAG' },
  { src: '/images/clients/remondies.jpg', name: 'REMONDIS' },
  { src: '/images/clients/scholz.jpg', name: 'Scholz' },
  { src: '/images/clients/vfa.jpg', name: 'vfa' }
]

export const claims = [
  'Umweltanforderungen meistern.',
  'Nachhaltigkeit gestalten.',
  'Chemikalienrecht verstehen.'
]

export const competencies: IconItem[] = [
  { icon: '/icons/tube.svg', label: 'REACH- und Gefahrenstoffmanagement' },
  { icon: '/icons/chart.svg', label: 'Einrichtung eines Sustainability Council' },
  { icon: '/icons/rain.svg', label: 'Gutachten zum Gewässerschutz und Schadstoffbelastung im Oberflächengewässer' },
  { icon: '/icons/search.svg', label: 'Vorbereitung eines Entsorgungsfachbetriebsaudits' },
  { icon: '/icons/doc.svg', label: 'Beurteilung REACH-Konformität von Sicherheitsblättern' },
  { icon: '/icons/layers-card.svg', label: 'Untersuchungen zur Beschränkung der 12 gefährlichsten Schadstoffe' },
  { icon: '/icons/pie.svg', label: 'Untersuchungen zum europäischen Aluminiummarkt' },
  { icon: '/icons/leaf-card.svg', label: 'Nachhaltigkeitsprojekte' }
]

export const offerings: Offering[] = [
  {
    icon: '/images/icons/tiles/fi-rs-megaphone.svg',
    title: 'Umweltkommunikation',
    quote: 'Tue Gutes und rede darüber.',
    quoteBy: 'Walter Fisch',
    body: 'Presse- und Öffentlichkeitsarbeit, Erstellen von Pressetexten und Fachartikeln, freie journalistische Tätigkeit, Pressesprecherfunktion für Unternehmen verschiedener Branchen und Wirtschaftsverbände.'
  },
  {
    icon: '/images/icons/tiles/fi-rs-diploma.svg',
    title: '(Umwelt-) Beauftragtenwesen',
    quote: 'Es gibt kein „weg“. Wenn wir etwas wegwerfen, muss es irgendwo hingehen.',
    quoteBy: 'Annie Leonard',
    body: 'Bereitstellung von externen Umweltbeauftragten wie Immissionsschutz-, Abfall- und Störfallbeauftragte für kommunale und privatwirtschaftliche Unternehmen der Recyclingwirtschaft.'
  },
  {
    icon: '/images/icons/tiles/fi-rs-bank.svg',
    title: 'Gesetzesfolgenabschätzung',
    quote: 'Fast fashion is not free, someone somewhere is paying.',
    quoteBy: 'Lucy Siegle',
    body: 'Lobbyistische Tätigkeiten für Firmen und Verbände (eine zunehmende Regelungsdichte auf europäischer und bundesdeutscher Ebene macht es notwendig, vor allem die mittelständischen Unternehmen mit Hilfe einer Folgenabschätzung auf die neue Rechtslage rechtzeitig vorzubereiten und ggf. Konsequenzen abzuschätzen).'
  },
  {
    icon: '/images/icons/tiles/fi-rr-leaf.svg',
    title: 'Nachhaltigkeitsberichterstattung und Nachhaltigkeitsprojekte',
    quote: 'Bei allem, was man tut, das Ende zu bedenken, das ist Nachhaltigkeit.',
    quoteBy: 'Eric Schweitzer',
    body: 'Unterstützung von großen mittelständischen Unternehmen und Konzernen bei der Erstellung von entsprechenden Berichten bzw. Unterstützung bei der Suche von Projekten, die einen sozialen und ökologischen Hintergrund haben.'
  },
  {
    icon: '/images/icons/tiles/fi-rs-graduation-cap.svg',
    title: 'Schulungen und Weiterbildungen für Fach- und Führungskräfte',
    quote: 'Jeder dumme Junge kann einen Käfer zertreten. Aber alle Professoren der Welt können keinen herstellen.',
    quoteBy: 'Arthur Schopenhauer',
    body: 'Tätigkeit im Rahmen der Fort- und Weiterbildung für die Bereiche Umweltmanagement, Umweltrecht, Entsorgungsmanagement, Entsorgungsfachbetriebe etc. für Unternehmen, Akademien, Universitäten, Hochschulen und Unternehmen.'
  },
  {
    icon: '/images/icons/tiles/fi-rs-search-alt.svg',
    title: 'Studien und Gutachten zur Umsetzung von Umwelt- und Stoffrecht',
    quote: 'Wir gehen mit der Welt um, als hätten wir noch eine zweite im Kofferraum.',
    quoteBy: 'Jane Fonda',
    body: 'Anwendung von umweltrechtlichen Regelungen z. B. korrekte Anwendung des ElektroG, Altfahrzeug-Verordnung und Verpackungsgesetz, Umsetzung der REACh-Verordnung, Registrierung bei der ECHA, Erstellung von Sicherheitsdatenblätter, Eingabe von Daten in die SCCIP-Datenbank.'
  }
]

export const expertise = [
  {
    title: 'Umwelt / Umwelttechnologien / Umweltrecht',
    text: 'Abfallmanagement, Abfallrecht, Immissionsschutzrecht und Genehmigungsverfahren, Gesetzesfolgenabschätzung, Ressourceneffizienzpotenziale, Klimaschutz und Energieeffizienz etc.'
  },
  {
    title: 'Energiewirtschaft',
    text: 'Gutachten zum Energiemarkt, Herausgabe des Buches „Nachhaltige Energiepolitik“, Mitglied im Aufsichtsrat des Stadtwerks Bad Honnef AG, Vorstand einer Bürgerenergiegenossenschaft, Vorlesungen Energierecht etc.'
  },
  {
    title: 'Chemie/Gefahrstoffe',
    text: 'Toxikologie von Stoffen, Umgang mit Gefahrstoffen, Umsetzung der REACh-Verordnung, Erstellung Sicherheitsdatenblätter etc.'
  },
  {
    title: 'Politik- und Lobbyismus',
    text: 'Geschäftsführung eines Wirtschaftsverbandes, Lobbyismus für Verbände und Unternehmen seit 16 Jahren, politisches Engagement und verschiedene Mandate/Positionen seit 25 Jahren (regional und überregional)'
  },
  {
    title: 'Umweltkommunikation',
    text: 'Externe und interne Berichterstattung, Moderation/Mediation von Großprojekten, Pressekonferenzen, Studien und Gutachten, Interessenvertretung etc.'
  },
  {
    title: 'Beste Kontakte',
    text: 'zu Wirtschafts- und Pressevertretern sowie zu Ministerien im nationalen und internationalen Bereich'
  },
  {
    title: 'Lehre/Dozententätigkeiten',
    text: 'bei Bildungsträgern (z.B. TÜV Rheinland Akademie) und Hochschulen (z.B. Universität Leipzig/Jena, Hochschule Heilbronn)'
  },
  {
    title: 'Management- und Führungsqualitäten',
    text: 'Personalführung an Universität, bei Verband und Unternehmensberatung sowie Geschäftsführertätigkeit'
  }
]

export const team = [
  {
    name: 'Anja Krüschet',
    role: 'Verwaltung/Buchhaltung',
    email: 'krueschet@beate-kummer.de',
    image: '/images/team/anja_kummer.jpg'
  },
  {
    name: 'Mariami Dzidziguri Herfurth',
    role: 'Wissenschaftliche Mitarbeiterin',
    email: 'buero@beate-kummer.de',
    image: '/images/team/dzidziguri.jpg'
  },
  {
    name: 'Bastian Kummer',
    role: 'Wissenschaftlicher Mitarbeiter',
    email: 'buero@beate-kummer.de',
    image: '/images/team/kummer-teams_benj.jpg'
  }
]
