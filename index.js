let posts = [
    title: '',
    text: '',
];
const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');

newPostBtnNode.addEventListener('click', function(){

 const postsFromUser = getPostsFromUser();
   
 setPosts(postsFromUser);

 renderPosts();
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

function setPosts(postsFromUser) {
  post.push(postsFromUser);
}

function getPosts() {
    return post;
}

//отобразить пост

function renderPosts() {
const posts = getPosts();
    
let postsHTML = ''; 

 posts.forEach(posts => {
    postsHTML += `
      <div class='posts'>
        <p class='post__title'>${post.title}</p>
        <p class='post__text'>${post.text}</p>
      </div>
    `;
  });

postsNode.innerHTML = postHTML;
}
