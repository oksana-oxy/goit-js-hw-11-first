import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createImages(data) {
  const lightbox = new SimpleLightbox('.gallery-list a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  const list = document.querySelector('.gallery');
  let images = data.hits
    .map(
        hit =>
            `<li class="gallery-card">
  <a class="gallery-link" href="${hit.largeImageURL}">
    <img
      class="gallery-img"
      src="${hit.webformatURL}"
      data-source="${hit.largeImageURL}"
      alt="${hit.tags}"
    />
  </a>
  <div class="wrapper">
    <ul class="img-content-wrapper">
      <li class="text-info">
        Likes<span class="number">${hit.likes}</span>
      </li>
      <li class="text-info">
        Views<span class="number">${hit.views}</span>
      </li>
      <li class="text-info">
        Comments<span class="number">${hit.comments}</span>
      </li>
      <li class="text-info">
        Downloads<span class="number">${hit.downloads}</span>
      </li>
    </ul>
  </div>
</li>    `
    //   `<div class="image-frame"><a href="${hit.largeImageURL}"><img class="image" src="${hit.webformatURL}" alt="${hit.tags}" /></a><div class ="text-wraper"><div class="text-block"><h5>likes</h5><p>${hit.likes}</p></div><div class="text-block"><h5>views</h5><p>${hit.views}</p></div><div class="text-block"><h5>comments</h5><p>${hit.comments}</p></div><div class="text-block"><h5>downloads</h5><p>${hit.downloads}</p></div></div></div>`
    )
    .join('');
    //   list.insertAdjacentHTML('afterbegin', images);
    list.innerHTML = images;
  lightbox.refresh();
}

export function clearImages() {
  const list = document.querySelector('.gallery');
  list.innerHTML = '';
}