const $userEdit = $("#userEdit");
const $dogEdit = $("#dogEdit");
const $editUserBtn = $("#editUserBtn");
const $editDogBtn = $("#editDogBtn");
const $deleteBtn = $("#deleteBtn");

$userEdit.on("click", function() {
  location.href= "/user/edit"
})

$dogEdit.on("click", function() {
  location.href= "/user/edit/dog"
})

$editUserBtn.on("click", function() {
  let $userName = $("#username").val().trim();
  let $userEmail = $("#useremail").val().trim();
  let $bio = $("#userbio").val().trim();

  let editObj = {
    name : $userName,
    email: $userEmail,
    bio: $bio
  }

  $.ajax("/api/edit", { type: "PUT", data: editObj })
    .then(
    function() {
      location.assign("/user");
    });
})

$editDogBtn.on("click", function() {
  let $dName = $("#dName").val().trim();
  let $breed = $("#breed").val().trim();
  let $age = $("#age").val().trim();
  let $temperament = $("#temp").val().trim();
  let $bio = $("#dBio").val().trim();

  let editObj = {
    name: $dName,
    breed: $breed,
    age: $age,
    temperament: $temperament,
    bio: $bio
  }

  $.ajax("/api/edit/dog", { type: "PUT", data: editObj })
    .then(function() {
      location.assign("/user");
    })

})

$deleteBtn.on("click", function() {
  $.ajax({ method: "DELETE", url: "/api/edit" })
    .then(function() {
      location.assign("/");
    })
})

