const imageContainer = document.getElementById('imageContainer');
const numberOfImages = 2; // Change this to the number of images you have
const imageFolderPath = 'images/spaceclub22/'; // Path to the folder containing the images

// Create image elements and add to the container
for (let i = 1; i <= numberOfImages; i++) {
    const img = document.createElement('img');
    img.src = `${imageFolderPath}image${i}.jpg`; // Assuming images are named as image1.jpg, image2.jpg, etc.
    img.alt = `Image ${i}`;
    img.dataset.index = i - 1; // Store the index for reference
    imageContainer.appendChild(img);
}

// Get the modal
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const closeModal = document.getElementsByClassName("close")[0];
const prevBtn = document.getElementsByClassName("prev")[0];
const nextBtn = document.getElementsByClassName("next")[0];

let currentIndex;

// Open the modal and display the clicked image
imageContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        currentIndex = parseInt(event.target.dataset.index);
        showImage(currentIndex);
        modal.style.display = "block";
    }
});

function showImage(index) {
    modalImg.src = `${imageFolderPath}image${index + 1}.jpg`;
    modalImg.alt = `Image ${index + 1}`;
}

// Close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Next/previous controls
nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % numberOfImages;
    showImage(currentIndex);
}

prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + numberOfImages) % numberOfImages;
    showImage(currentIndex);
}
