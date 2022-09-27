const pokazOKancelarii = () => {
    document.getElementById('o-kancelarii').classList.remove('ukryte')
    document.getElementById('dokumenty').classList.add('ukryte')
    document.getElementById('czynnosci').classList.add('ukryte')
    document.getElementById('platnosci').classList.add('ukryte')
    document.getElementById('kontakt').classList.add('ukryte')
    document.getElementById('do-pobrania').classList.add('ukryte')

}

const pokazDokumenty = () => {
    document.getElementById('o-kancelarii').classList.add('ukryte')
    document.getElementById('dokumenty').classList.remove('ukryte')
    document.getElementById('czynnosci').classList.add('ukryte')
    document.getElementById('platnosci').classList.add('ukryte')
    document.getElementById('kontakt').classList.add('ukryte')
    document.getElementById('do-pobrania').classList.add('ukryte')
}

const pokazCzynnosci = () => {
    document.getElementById('o-kancelarii').classList.add('ukryte')
    document.getElementById('dokumenty').classList.add('ukryte')
    document.getElementById('czynnosci').classList.remove('ukryte')
    document.getElementById('platnosci').classList.add('ukryte')
    document.getElementById('kontakt').classList.add('ukryte')
    document.getElementById('do-pobrania').classList.add('ukryte')
}

const pokazPlatnosci = () => {
    document.getElementById('o-kancelarii').classList.add('ukryte')
    document.getElementById('dokumenty').classList.add('ukryte')
    document.getElementById('czynnosci').classList.add('ukryte')
    document.getElementById('platnosci').classList.remove('ukryte')
    document.getElementById('kontakt').classList.add('ukryte')
    document.getElementById('do-pobrania').classList.add('ukryte')
}

const pokazKontakt = () => {
    document.getElementById('o-kancelarii').classList.add('ukryte')
    document.getElementById('dokumenty').classList.add('ukryte')
    document.getElementById('czynnosci').classList.add('ukryte')
    document.getElementById('platnosci').classList.add('ukryte')
    document.getElementById('kontakt').classList.remove('ukryte')
    document.getElementById('do-pobrania').classList.add('ukryte')
}

const pokazDoPobrania = () => {
    document.getElementById('o-kancelarii').classList.add('ukryte')
    document.getElementById('dokumenty').classList.add('ukryte')
    document.getElementById('czynnosci').classList.add('ukryte')
    document.getElementById('platnosci').classList.add('ukryte')
    document.getElementById('kontakt').classList.add('ukryte')
    document.getElementById('do-pobrania').classList.remove('ukryte')

}