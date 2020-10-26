const menuIcon = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-items');

const nav = document.querySelectorAll('.menu-items li') 

// menu burguer 
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('close');
    menuItems.classList.toggle('show');
});

// nav.forEach( item => (e) => {
//     item.classList.remove('active');
//     console.log(e)
//     item.addEventListener('click', () => {
//         item.classList.add('active');
//         console.log('foi')
//     })
// })

function highlight(event) {
    const navItem = event.currentTarget;

    nav.forEach(item => {
        item.classList.remove('active')
    });

    navItem.classList.add('active');
}