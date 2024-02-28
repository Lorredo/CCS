// Function to construct gallery
function constructGallery(galleryId, galleryName, imageFilenames, imagesFolder) {
    const galleryElement = document.querySelector('.' + galleryId);

    // Create album container
    const albumContainer = document.createElement('div');
    albumContainer.classList.add('album');
    galleryElement.appendChild(albumContainer);

    

    // Iterate through image filenames
    imageFilenames.forEach((filename, index) => {
        // Create link for image
        const imageLink = document.createElement('a');
        imageLink.href = imagesFolder + filename;
        imageLink.setAttribute('data-fancybox', galleryId); // Unique data-fancybox value
        albumContainer.appendChild(imageLink);

        // Create image element
        const img = document.createElement('img');
        img.src = imagesFolder + filename;
        img.alt = galleryName + ' Image'; // Alt text
        if (index === 0) {
        img.style.marginBottom = '-30px';
    }
    
    imageLink.appendChild(img);
        // Initially hide all images except the first one
        if (index !== 0) {
            img.style.display = 'none';
        }
    });
// Create heading for album
const albumHeading = document.createElement('h2');
albumHeading.textContent = galleryName;
albumHeading.style.fontSize = '19px';
albumHeading.style.textAlign = 'center';
albumHeading.style.marginTop = '-15px';
albumContainer.appendChild(albumHeading);

    // Initialize Fancybox
    $('[data-fancybox="' + galleryId + '"]').fancybox({
        loop: true,
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        thumbs: {
            autoStart: true,
        }
    });
}

// Call function to construct galleries on page load
document.addEventListener('DOMContentLoaded', function() {
    constructGallery('gallery-10', 'CCS Week', ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', 
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'], 'images/ccs-week/');
});
document.addEventListener('DOMContentLoaded', function() {
    constructGallery('gallery-20', 'LSPU SPC CCS Feb Fair', ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', 
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'], 'images/lspu-spc-ccs-feb-fair/');
});

document.addEventListener('DOMContentLoaded', function() {
   
    constructGallery('gallery-30', 'Teachers APPRECIATION', ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', 
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', 
    '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg'], 'images/teachers-appreciation/');


});

