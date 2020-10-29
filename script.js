const menuIcon = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-items');

const nav = document.querySelectorAll('.menu-items li') 

// menu burguer 
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('close');
    menuItems.classList.toggle('show');
});

// ARROW ICON

// photos
const arrowPhotos = document.querySelector('#photos-down');

arrowPhotos.addEventListener('click', () => {
    arrowPhotos.classList.toggle('fa-angle-double-up');
});

// videos
const arrowVideos = document.querySelector('#videos-down');

arrowVideos.addEventListener('click', () => {
    arrowVideos.classList.toggle('fa-angle-double-up')
})

// modal 
const modal = document.querySelector('.modal');
const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('click', openModal);
})

function openModal(event) {
    const closeIcon = document.querySelector('#close');

    // opening model
    const photo = event.currentTarget;
    modal.classList.add('active');

    // getting image 
    const imgContainer = document.querySelector('.img-container');
    let img = photo.cloneNode(true);

    // change photo - arrow forward
    const arrowForward = document.querySelector('#arrow-modal-right');

    // getting photo index
    let index = Array.from(photos).indexOf(photo);

    
    arrowForward.addEventListener('click', () => {
        if(index < photos.length - 1) {
            // remove current photo from container
            imgContainer.removeChild(img);
            
            // clone new photo div by array position
            const nextPhoto = photos[index + 1].cloneNode(true);
    
            // imgContainer.remove(photo)
            img = nextPhoto;
            imgContainer.appendChild(img);
    
            index++
        }
    })

    // console.log(oldIndex)

    // change photo - arrow forward
    const arrowBackward = document.querySelector('#arrow-modal-left');
    
    arrowBackward.addEventListener('click', () => {
        if(index > 0) {
            // remove current photo from container
            imgContainer.removeChild(img);
            
            // clone new photo div by array position
            const nextPhoto = photos[index - 1].cloneNode(true);
    
            // imgContainer.remove(photo)
            img = nextPhoto;
            imgContainer.appendChild(img);
    
            index--
        }
    })


    // add img to imgContainer
    imgContainer.appendChild(img);

    // closing modal
    closeIcon.addEventListener('click', () => {
        modal.classList.remove('active');
        imgContainer.removeChild(img);
    });

}
