function renderPosts() {
    const postContainer = document.querySelector('.blog-posts-wrapper-grid');
    const cloneContainer = document.querySelector('.clone-container');
    const postContent = Array.from(cloneContainer.children);

    postContent.forEach(post => {
        const duplicatedPost = post.cloneNode(true);
        postContainer.appendChild(duplicatedPost);
    })
}
const loadingContainer = document.querySelector('.loading-container');
const loading = document.querySelector('.loading');
const config = {
    root: null,
    rootMargin: '0px',
    threshold: 1
};

const postObserver = new IntersectionObserver(entries => {
    entries.forEach(element => {
        loading.classList.toggle('show', element.isIntersecting);
        if (element.isIntersecting) setTimeout(renderPosts, 1000);
    })
}, config)

postObserver.observe(loading);

