import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = galleryImages(galleryItems);

function galleryImages(image) {
    return image
      .map(
        ({ original, description, preview }) =>
          `<a 
      class="gallery__item"
      href="${original}"
      >
      <img
      class="gallery__image"
      src="${preview}" 
      data-source=${original} 
      alt="${description}" 
      ></a>`
      )
      .join("");
}
  
gallery.insertAdjacentHTML("beforeend", images);

gallery.addEventListener("click", onClickGallery);

gallery.onclick = function () {
   return false; 
};


function onClickGallery(e) {
    const isImage = e.target.classList.contains('gallery__image');

    if (!isImage) {
        return
    }

    else {     

    basicLightbox
                  .create(
                    `
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`
                  )
        .show();
        
    }

    const divGallery = document.querySelector(".basicLightbox");

    if (divGallery) {
    document.addEventListener("keydown", escClose);

        function escClose(event) {
          if (event.key === "Escape") {
          divGallery.remove();
          document.removeEventListener("keydown", escClose);
        }
        }
        
    }

}

