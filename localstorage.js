const user = {
  id: 1,
  name: "John",
  age: 25,
};

let sUser= JSON.stringify(user);

function settear () {
 localStorage.setItem("name",sUser);
 return;
}
settear();