// The tabbing
function  hideAll(){
  const sections = document.querySelectorAll("section");
  for (var i = 0; i < sections.length; i++) {
    if (!sections[i].className.match(" hidden")) {
      sections[i].className += " hidden";
    }
  }
}

function  unhide(element){
  element.className = element.className.replace(" hidden", "");
}

function bindEventListeners(){
  let menuItems = document.querySelectorAll("nav button");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function(){
      hideAll();
      const className = menuItems[i].className;
      const section = document.querySelector("section." + className);
      unhide(section);
    })
  }
}

// The blog functinality
var createButton = document.getElementById('createButton');
createButton.addEventListener('click', function(){
  var title = document.getElementById('title');
  var newTitle = document.createElement('h3');
  newTitle.innerHTML = title.value;
  var section = document.getElementById('main');

  var post = document.getElementById('text');
  var newPost = document.createElement('p');
  newPost.innerHTML = post.value;

  newTitle.className = 'newTitle';
  newPost.className = 'newPost';

  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'delete';
  deleteButton.addEventListener('click', function(){
    newPost.innerHTML = '';
    newTitle.innerHTML = '';
    deleteButton.className = 'gone'
  });

  section.prepend(deleteButton);
  section.prepend(newPost);
  section.prepend(newTitle);

  title.value = '';
  post.value = '';
})

// driver code
bindEventListeners()