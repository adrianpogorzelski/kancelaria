class MobileMenu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `   
            <nav class="btm-nav border-t md:hidden">
                <button>
                    <a href="tel:775577898" class="flex-col">
                        <div class="indicator">
                            <i class="fa-solid fa-phone fa-lg"></i>
                            <div class="indicator-item badge badge-ghost badge-xs animate-ping"></div>
                        </div>
                        <span class="hidden sm:flex text-xs">77 55 77 898</span>
                    </a>
                </button>
                <button>
                    <a href="tel:533987456" class="flex-col">
                        <div class="indicator">
                            <i class="fa-solid fa-mobile fa-lg"></i>
                            <div class="indicator-item badge badge-ghost badge-xs animate-ping"></div>
                        </div>
                        <span class="hidden sm:flex text-xs">533 987 456</span>
                    </a>
                </button>
                <button>
                    <a href="mailto:notariusz@spychalskiego13.pl" class="flex-col">
                        <div class="indicator">
                            <i class="fa-solid fa-envelope fa-lg"></i>
                            <div class="indicator-item badge badge-ghost badge-xs animate-ping"></div>
                        </div>
                        <span class="hidden sm:flex text-xs">notariusz@spychalskiego13.pl</span>
                    </a>
                </button>
            </nav> 
        `
    }
}

customElements.define('mobile-menu-component', MobileMenu)