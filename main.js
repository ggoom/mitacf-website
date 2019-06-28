freshmanCG = document.querySelector('freshman-cg')

const cgCards = document.querySelectorAll('.card');

// const cgImages = ["url('/public/cg-freshman.jpg')", "url('/public/cg-seeker.jpg')", "url('/public/cg-freshman.jpg')", "url('/public/cg-freshman.jpg')"]
const cgImages = ['/public/cg-freshman.jpg', '/public/cg-seeker.jpg', '/public/cg-freshman.jpg', '/public/cg-freshman.jpg']
let backgroundActive = [false, false, false, false]


cgCards.forEach(switchBackground);

function switchBackground(item, index) {
    item.style.cursor = 'pointer';
    imgContainer = item.childNodes[1];
    imgContainer.innerHTML = "<img src='" + cgImages[index] + "'/>";
    innerImage = imgContainer.childNodes[0];
    innerImage.style.height = '100%';
    innerImage.style.width = '100%';
    innerImage.style.objectFit = 'cover';
    innerImage.style.overflow = 'hidden';
    innerImage.style.position = 'absolute';
    innerImage.style.top = '0px'
    innerImage.style.left = '0px'
    innerImage.style.transition = 'opacity 300ms ease-out';
    innerImage.style.visibility = 'hidden';
    innerImage.style.opacity = '0';


    item.addEventListener('click', (e) => {
        // console.log(innerImage)
        getImage = item.childNodes[1].childNodes[0];
        showBackground = !backgroundActive[index];
        if (showBackground) {
            item.style.color = 'rgba(0, 0, 0, 0)';
            // item.style.cursor = 'default';
            getImage.style.visibility = 'visible';
            getImage.style.opacity = '1';
            // getImage.style.transition = 'visibility 1s'
            // innerImage.style.opacity = '1';
        }
        else {
            getImage.style.opacity = '0';
            getImage.style.transition = 'opacity 300ms ease-out';
            getImage.style.pointerEvents = 'none';
            item.style.color = '';
            // item.style.cursor = '';
        }
        backgroundActive[index] = showBackground
    });
}

// const getBoolean = (item) => {
//     switch(showBackground) {
//         case true:
//             item.addEventListener('click', (e) => {
//                 item.style.backgroundImage = "url('/public/cg-freshman.jpg')";
//             });

//     }