var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("eWCmQ");var i=a("7t1md");const l=(0,a("krGWQ").getRefs)();function r(e){const t=(0,i.loadDataFromLS)(e);l.galleryItems.insertAdjacentHTML("beforeend",function(e){l.galleryItems.innerHTML="";const t="https://image.tmdb.org/t/p/w500";if(e.length>=1){return e.map((({id:e,title:n,original_title:a,poster_path:i,genres:l,vote_average:r,year:s})=>`<li class="gallery__item data-id="${e}" data-modal-open">\n            <img src="${t}${i}" alt="${e}-${a}" class="img" data-modal-open/>\n            <div class="item__text">\n                <h2 class="item__capt">${n}</h2>\n                <div class="item__wrap">\n                <p class="item__genre">${l} | ${s}</p>\n                <p class="item__rating">${r}</p>\n                </div>\n            </div>\n            </li>`)).join("")}return'<div class="clear-list">\n    <h3 class="clear-list__title">Oops...</h3>\n    <p class="clear-list__text">You haven\'t added a movie yet. Please make your choice.</p>\n    </div>'}(t))}l.myLibrary.classList.contains("my-library")&&(r("watched"),l.watchedBtn.addEventListener("click",(function(e){e.preventDefault,r("watched")})),l.queueBtn.addEventListener("click",(function(e){e.preventDefault,r("queue")}))),a("bTcpz"),a("2wbaf"),a("AKaiN");
//# sourceMappingURL=library.dd19bf67.js.map
