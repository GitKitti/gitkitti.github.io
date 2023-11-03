document.addEventListener('DOMContentLoaded', function () {
    // Get all the thumbnail elements
    var thumbnails = document.querySelectorAll('.thumbnail');
    var modal = document.getElementById('imgModal');
    var modalImg = document.getElementById('full-image');
    var captionText = document.getElementById('caption');
    var span = document.getElementsByClassName("close")[0];
  
    // Loop through all thumbnails
    thumbnails.forEach(function (thumbnail) {
      thumbnail.onclick = function (event) {
        event.preventDefault(); // Prevent the link from opening the URL directly
        modal.style.display = "block";
        modalImg.src = this.href; // Set the URL of the image to show in the modal
        captionText.innerHTML = this.children[0].alt; // Set the caption
      };
    });
  
    // Close the modal when the close button is clicked
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    // Close the modal when clicking outside the image
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });