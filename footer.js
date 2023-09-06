class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
           <footer class="navbar bg-primary navbar-dark">
        <div class="container">
            <div class="row row-cols-2 row-cols-md-4 mt-3 w-100 mx-0">
                <div class="col ms-md-0">
                    <div class="navbar-nav">
                        <div class="text-white">
                            <h6>INFORMACJE O KANCELARII</h6>
                            <a class="nav-link p-0" href="#">Strona główna</a>
                            <a class="nav-link p-0" href="platnosci.html">Płatności</a>
                            <a class="nav-link p-0" href="pytania.html">Pytania i odpowiedzi</a>
                            <a class="nav-link p-0" href="kontakt.html">Kontakt</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="navbar-nav text-white">
                            <h6>INFORMACJE O CZYNNOŚCIACH</h6>
                            <a class="nav-link p-0" href="czynnosci/czynnosci.html">Zakres czynności</a>
                            <a class="nav-link p-0" href="czynnosci/dokumenty.html">Dokumenty</a>
                    </div>
                </div>
                <div class="col pt-3 pt-md-0">
                    <div class="navbar-nav text-white">
                        <h6>SZCZEGÓŁY CZYNNOŚCI</h6>
                        <a class="nav-link p-0" href="czynnosci/najem-okazjonalny.html">Najem okazjonalny</a>
                        <a class="nav-link p-0" href="czynnosci/postepowanie-spadkowe.html">Postępowanie spadkowe</a>
                    </div>
                </div>
                <div class="col pt-3 pt-md-0">
                    <div class="navbar-nav text-white">
                        <h6>KONTAKT</h6>
                        <div class="mb-2 d-flex">
                            <a class="nav-link text-decoration-none d-flex align-items-center me-2" href="tel:775577898">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>
                            </a>
                            <a class="nav-link text-decoration-none d-flex align-items-center mx-2" href="tel:533987456">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                                </svg>
                            </a>
                            <a class="nav-link text-decoration-none d-flex align-items-center mx-2" href="mailto:notariusz@spychalskiego13.pl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                </svg>
                            </a>
                        </div>
                        <address>
                            <p class="my-1">Kancelaria Notarialna Anna Wawszczak</p>
                            <p class="my-1">ul. Stanisława Spychalskiego 13</p>
                            <p class="my-1">lokal 101A (1 piętro)</p>
                        </address>
                        <div class="my-1">
                            <p class="my-1">NIP: 754 299 28 52</p>
                            <p class="my-1">REGON: 523 540 579</p>
                        </div>
                        <a class="mt-3 nav-link" href="https://www.facebook.com/profile.php?id=100088032353559" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row mx-0 w-100 border-top mt-3 mb-2">
                <p class="text-white text-center pt-2 mb-0">&copy; 2022 Kancelaria Notarialna Anna Wawszczak</p>
            </div>
        </div>
    </footer>
`
    }
}

customElements.define('footer-component', Footer)