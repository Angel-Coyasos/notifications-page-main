const markAll = document.querySelector('#mark-all');
const numberElement = document.querySelector('#number');
const posts = document.querySelectorAll('.post');

const notReadElements = document.querySelectorAll('.not-read');

const updateNotifications = () => {

    const notReadElementsNow = document.querySelectorAll('.not-read');

    numberElement.innerHTML = notReadElementsNow.length;

}

posts.forEach ( post => {

    post.addEventListener('click', () => {

        post.classList.remove('post-not-read');

        post.querySelector('.status').classList.remove('not-read');

        updateNotifications();

    } );

})

markAll.addEventListener('click', () => {

    notReadElements.forEach( (notReadElement) => {
        notReadElement.classList.remove('not-read');
    } );

    posts.forEach( (post) => {
        post.classList.remove('post-not-read');
    } );

    updateNotifications();

})