let card = document.querySelector(".card");
let data = document.querySelector(".data");
console.log(data);

let users = [];

function getUserData() {
  let req = new XMLHttpRequest();
  req.open("GET", "https://jsonplaceholder.typicode.com/users");
  req.send();
  req.onload = function () {
    if (req.status >= 200 && req.status < 300) {
      users = JSON.parse(req.response);
      displayUser();
    }
  };
}

function displayUser() {
  box = ``;
  card.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    box += `
    <div class="person1" onclick="usernumber(${users[i].id})">
                    <div class="imge-person">
                        <img src="imge/icons8-son-48.png" alt="">
                    </div>
                    <div class="text-person">
                        <h3>${users[i].name}</h3>
                        <p>${users[i].email}</p>
                    </div>
                </div>
    `;
  }
  card.innerHTML += box;
}

function usernumber(id) {
  getPosts(id);
}

let posts = [];
function getPosts(userId) {
  let req = new XMLHttpRequest();
  req.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  req.send();
  req.onload = function () {
    if (req.status >= 200 && req.status < 300) {
      posts = JSON.parse(req.response);
      displayPosts();
    }
  };
}

function displayPosts() {
  box = ``;
  data.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    box += `
    <div class="data-person1">
            <h4>${posts[i].title}</h4>
            <hr>
            <p>${posts[i].body}</p>
        </div>
    `;
  }
  data.innerHTML += box;
}

getPosts(1);
getUserData();
