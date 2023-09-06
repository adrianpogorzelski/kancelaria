class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `    
            <div class="fixed w-full z-[1]">
                <header class="navbar bg-base-100 border-b drop-shadow">
                    <div class="navbar-start">
                        <!-- Brand -->
                        <a class="btn btn-ghost normal-case text-md hover:bg-base-100 p-0">
                            <img id="logo" src="img/AW.png" alt="Kancelaria Notarialna Anna Wawszczak: logo" class="m-0 h-10">
                            <div>
                                <h1 class="text-start">Kancelaria notarialna</h1>
                                <h1 class="text-start">Anna Wawszczak</h1>
                            </div>
                        </a>
                    </div>
            
                    <!-- Contact -->
                    <div class="hidden md:flex navbar-end w-5/6">
                        <a href="tel:775577898" class="text-md">
                            <i class="fa-solid fa-phone fa-lg me-3 md:me-1"></i>
                            <span class="hidden md:inline text-sm">77 55 77 898</span>
                        </a>
                        <a href="tel:533987456" class="mx-4 md:mx-2">
                            <i class="fa-solid fa-mobile fa-lg me-3 md:me-1"></i>
                            <span class="hidden md:inline text-sm">533 987 456</span>
                        </a>
                        <a href="mailto:notariusz@spychalskiego13.pl">
                            <i class="fa-solid fa-envelope fa-lg me-1 md:me-1"></i>
                            <span class="hidden md:inline text-sm">notariusz@spychalskiego13.pl</span>
                        </a>
                    </div>
                </header>
            
                <nav class="hidden navbar bg-primary text-primary-content p-0 min-h-6 border-b">
                    <div class="navbar-start h-8">
            
                        <!-- Mobile dropdown -->
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost sm:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-neutral">
                                <li>
                                    <a>Czynności</a>
                                    <ul class="p-2">
                                        <li><a>Zakres czynności</a></li>
                                        <li><a>Dokumenty</a></li>
                                        <li>
                                            <a>Informacje o czynnościach</a>
                                            <ul class="p-2">
                                                <li><a>Najem okazjonalny</a></li>
                                                <li><a>Postępowanie spadkowe</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a>Płatności</a></li>
                                <li><a>Pytania i odpowiedzi</a></li>
                                <li><a>Kontakt</a></li>
                            </ul>
                        </div>
                    </div>
            
                    <!-- Desktop menu -->
                    <div class="navbar-center hidden sm:flex h-6">
                        <ul class="menu menu-horizontal px-1">
                            <li tabindex="0">
                                <details>
                                    <summary>Czynności</summary>
                                    <ul class="p-2 text-neutral">
                                        <li><a>Zakres czynności</a></li>
                                        <li><a>Dokumenty</a></li>
                                        <li>
                                            <a>Informacje o czynnościach</a>
                                            <ul class="p-2">
                                                <li><a>Najem okazjonalny</a></li>
                                                <li><a>Postępowanie spadkowe</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Płatności</a></li>
                            <li><a>Pytania i odpowiedzi</a></li>
                            <li><a>Kontakt</a></li>
                        </ul>
                    </div>
            
                    <!-- Contact -->
                    <div class="navbar-end">
                    </div>
                </nav>
            </div>
        `
    }
}

customElements.define('header-component', Header)