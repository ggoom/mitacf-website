const cgCards = document.querySelectorAll('.card');
const cgImages = ['/imgs/cg-freshman.jpg', '/imgs/cg-seeker.jpg', '/imgs/cg-freshman.jpg', '/imgs/cg-freshman.jpg']
let backgroundActive = [false, false, false, false];

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
        getImage = item.childNodes[1].childNodes[0];
        showBackground = !backgroundActive[index];
        if (showBackground) {
            item.style.color = 'rgba(0, 0, 0, 0)';
            getImage.style.visibility = 'visible';
            getImage.style.opacity = '1';
        }
        else {
            getImage.style.opacity = '0';
            getImage.style.transition = 'opacity 300ms ease-out';
            getImage.style.pointerEvents = 'none';
            item.style.color = '';
        }
        backgroundActive[index] = showBackground
    });
}
