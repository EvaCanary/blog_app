
let posts = [];
const TITLE_VALIDATION_LIMIT = 20;
const TEXT_VALIDATION_LIMIT = 100;

const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.querySelector(".js-validation-message"); // Correct selector

newPostBtnNode.addEventListener('click', function() {
    validation(); // Call validation before adding a new post
        const titleLen = postTitleInputNode.value;
        const textLen = postTextInputNode.value;
        
      if (titleLen === "" || textLen === "") {
        return; // прекращаем выполнение функции и не добавляем пост
      }
      if (
        titleLen.length >= TITLE_VALIDATION_LIMIT ||
        textLen.length >= TEXT_VALIDATION_LIMIT
      ) {
        return; // прекращаем выполнение функции и не добавляем пост
      }
    const postFromUser = getPostFromUser();    
    addPost(postFromUser);
    renderPosts();
});

postTitleInputNode.addEventListener("input", validation);
postTextInputNode.addEventListener("input", validation);

function validation(){
   const titleLen = postTitleInputNode.value.length;
   const textLen = postTextInputNode.value.length;

   if (titleLen === "" || titleLen > TITLE_VALIDATION_LIMIT){
     validationMessage.innerText = `Длинна заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`; // Corrected message
     validationMessage.classList.remove("validationMessage_hidden");
     return;
   }

   if (textLen > TEXT_VALIDATION_LIMIT){
    validationMessage.innerText = `Длинна текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`; // Corrected message
    validationMessage.classList.remove("validationMessage_hidden");
    return;
  }
  validationMessage.classList.add("validationMessage_hidden");
}

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text,
    };    
}

function addPost({ title, text }) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Не изменяется
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    
    const dt = `${day}.${(month < 10 ? '0' : '')}${month}.${year} ${hours}:${minutes}`;

    posts.push({
        dt,
        title,
        text,
    });
}


function renderPosts() {
    let postsHTML = '';
    posts.forEach(post => {
        postsHTML += ` 
        <div class='post'>
        <p class='post__date'>${post.dt}</p>
        <p class='post__title'>${post.title}</p>
        <p class='post__text'>${post.text}</p>
        </div>`;
    });

    postsNode.innerHTML = postsHTML;
}
