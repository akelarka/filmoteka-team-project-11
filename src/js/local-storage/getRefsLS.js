export const getRefsLS = () => {
    return {
        modalWatchedBtn: document.querySelector('.modal-film__btn-watched'),
        modalQueueBtn:   document.querySelector('.modal-film__btn-queque'),
        watchedBtn:      document.querySelector('#js-WatchedButton'),
        queueBtn:        document.querySelector('#js-QueueButton'),
        galleryItems:    document.querySelector('.film__list'),
        myLibrary:       document.querySelector('#my-library'),
    };  
};
