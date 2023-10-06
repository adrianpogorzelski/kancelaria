const rorButton = document.querySelector('#kopiuj-ror');
const depozytButton = document.querySelector('#kopiuj-depozyt');
const copyMessage = document.querySelector('.copy-message');
const numerRor = "75 1050 1575 1000 0097 6817 2711";
const numerDepozytu = "04 1050 1575 1000 0097 6910 2667";

rorButton.addEventListener('click', () => {
    navigator.clipboard.writeText(numerRor)
    copyMessage.classList.remove('hidden');
    setTimeout(() => {
        copyMessage.classList.add('hidden');
    }, 3000);
});

depozytButton.addEventListener('click', () => {
    navigator.clipboard.writeText(numerDepozytu)
    copyMessage.classList.remove('hidden');
    setTimeout(() => {
        copyMessage.classList.add('hidden');
    }, 3000);
});
