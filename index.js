let post = {
    title: '',
    text: '',
};
const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');

newPostBtnNode.addEventListener('click', function(){

 const postFromUser = getPostFromUser();
   
 setPost(postFromUser);

 renderPost();
});
   
 //получить данные из поля вводы

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;
    return {
        title: title,
        text: text
    };
}
 //сохранить пост

function setPost(post) {
    post = newPost;
}
function getPost() {
    return post;
}

//отобразить пост

function renderPost() {
const post = getPost();

const postHTML =`
<div class='post'>
   <p class='post__title'>${post.title}</p>
   <p class='post__text'>${post.text}</p>
</div>
`;

postsNode.innerHTML = postHTML;
}
