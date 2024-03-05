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
        img.style.borderRadius = '10px';
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

document.addEventListener("DOMContentLoaded", function() {
    
    let wmad = document.getElementById('wmad');
    let smp = document.getElementById('smp');
    let networking = document.getElementById('networking');
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');

    function triggerScroll() {
        window.scrollBy(0, 1.5);
        window.scrollBy(0, -1);
    }
    // Assuming WOW.js is initialized and assigned to window.wow somewhere in your code.
    // Example: window.wow = new WOW().init();

    wmad.addEventListener("click", function() {
      first.style.display = "block";
      second.style.display = "none";
      third.style.display = "none";
triggerScroll();
    });

    smp.addEventListener("click", function() {
      first.style.display = "none";
      second.style.display = "block";
      third.style.display = "none";
      triggerScroll();
    });

    networking.addEventListener("click", function() {
      first.style.display = "none";
      second.style.display = "none";
      third.style.display = "block";
      console.log("WMAD clicked, attempting to sync WOW.js");
triggerScroll();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const popupBtn = document.getElementById('popup-btn');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    
    popupBtn.addEventListener('click', () => {
      popup.style.display = 'block';
      
    });
    
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      document.removeEventListener('click', closePopupOutside);
    });
    
    function closePopupOutside(event) {
      if (!popup.contains(event.target) && event.target !== popupBtn) {
        popup.style.display = 'none';
        document.removeEventListener('click', closePopupOutside);
      }
    }
    
  });
