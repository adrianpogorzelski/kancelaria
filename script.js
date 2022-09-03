const pokazDokumenty = () => {
    document.getElementById('dokumenty').classList.remove('ukryte')
    document.getElementById('zakres-uslug').classList.add('ukryte')
    document.getElementById('platnosci').classList.add('ukryte')
    document.getElementById('kontakt').classList.add('ukryte')
}

const pokazUslugi = () => {
    document.getElementById('dokumenty').classList.add('ukryte')
    document.getElementById('zakres-uslug').classList.remove('ukryte')
    document.getElementById('platnosci').classList.add('ukryte')
    document.getElementById('kontakt').classList.add('ukryte')
}

const pokazPlatnosci = () => {
    document.getElementById('dokumenty').classList.add('ukryte')
    document.getElementById('zakres-uslug').classList.add('ukryte')
    document.getElementById('platnosci').classList.remove('ukryte')
    document.getElementById('kontakt').classList.add('ukryte')
}

const pokazKontakt = () => {
    document.getElementById('dokumenty').classList.add('ukryte')
    document.getElementById('zakres-uslug').classList.add('ukryte')
    document.getElementById('platnosci').classList.add('ukryte')
    document.getElementById('kontakt').classList.remove('ukryte')
}