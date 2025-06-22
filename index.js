const menu = document.getElementById('menu')
const icon = document.getElementById('icon')

function toggleMenu() {
    menu.classList.contains('show');
    if (menu.classList.contains('show')){
        icon.textContent = 'close';
    } else {
        icon.textContent = 'menu';
    }
}
function  orderViaWhatsApp (button) {
    const card = button.closest('.card');
    const productName = card.querySelector('h3').textContent; //Ambil langsung dari <h3>
    const price = card.querySelector('.price').textContent;
    const phoneNumber = '62082258277615'; //ganti dengan nomer kamuw, format internasional


const message = `halo saya ingin beli ${productName} seharga${price}`;
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
window.open(url,`_blank`);
}