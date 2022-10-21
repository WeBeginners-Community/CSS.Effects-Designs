var i = 1;
function add() {
  document.getElementById("box2").style.visibility = "visible";
  document.getElementById("task_window").style.visibility = "visible";
}
function cut() {
  document.getElementById("task_window").style.visibility = "hidden";
  document.getElementById("box2").style.visibility = "hidden";
}
function cut2() {
  document.getElementById("item_window").style.visibility = "hidden";

  document.getElementById("box2").style.visibility = "hidden";
}
function addTask() {
  if (document.getElementById("task_name").value == "") {
    alert("Please,provide the name of the task");
  } else {
    document.getElementById("container1").innerHTML =
      document.getElementById("container1").innerHTML +
      "<div class='box' id='" +
      i +
      "' onclick='addItemWindow(this.id)'><div class='box_nav'>" +
      document.getElementById("task_name").value +
      "</div><div class='box-item'><ul type='none'></ul></div></div>";
    i++;
    cut();
  }
}
function back() {
  document.getElementById("container1").style.visibility = "visible";
  document.getElementById("container2").style.visibility = "hidden";
  // document.getElementById("container3").children[0].children[1].children[0].innerHTML="";
}
var current_box;
function addItemWindow(clicked_id) {
  current_box = clicked_id;
  var elem = document.getElementById(clicked_id);
  var name = elem.children[0].innerHTML;
  document.getElementById("container1").style.visibility = "hidden";
  document.getElementById("container2").style.visibility = "visible";
  document.getElementById("container3").children[0].children[0].innerHTML =
    name;
  document.getElementById("container3").children[0].children[1].innerHTML =
    document.getElementById(clicked_id).children[1].innerHTML;
  for (
    var x = 0;
    x <
    document.getElementById("container3").children[0].children[1].children[0]
      .children.length;
    x = x + 1
  ) {
    document
      .getElementById("container3")
      .children[0].children[1].children[0].children[x].setAttribute(
        "onclick",
        "done(this.className)"
      );
  }
}
function add_item() {
  document.getElementById("box2").style.visibility = "visible";
  document.getElementById("item_window").style.visibility = "visible";
}
var j = 1;
function addItem() {
  if (document.getElementById("item_name").value == "") {
    alert("Please,provide the name of the item");
  } else {
    document.getElementById(
      "container3"
    ).children[0].children[1].children[0].innerHTML =
      document.getElementById("container3").children[0].children[1].children[0]
        .innerHTML +
      "<li class='" +
      j +
      "' onclick=done(this.className)><input type='checkbox' class='checkBox'>" +
      document.getElementById("item_name").value +
      "</li>";
    document.getElementById(current_box).children[1].children[0].innerHTML =
      document.getElementById(current_box).children[1].children[0].innerHTML +
      "<li class='" +
      j +
      "' ><input type='checkbox' class='checkBox'>" +
      document.getElementById("item_name").value +
      "</li>";
    j++;
    cut2();
  }
}

function done(className) {
  document.getElementsByClassName(className)[0].style.color = "darkgray";
  document.getElementsByClassName(className)[1].style.color = "darkgray";
  document.getElementsByClassName(className)[0].style.fontSize = "larger";
  document.getElementsByClassName(className)[1].style.fontSize = "larger";
  document.getElementsByClassName(className)[0].style.textDecoration =
    "line-through";
  document.getElementsByClassName(className)[1].style.textDecoration =
    "line-through";
  document.getElementsByClassName(className)[0].children[0].checked = "true";
  document.getElementsByClassName(className)[1].children[0].checked = "true";
  document.getElementsByClassName(
    className
  )[0].children[0].style.backgroundColor = "lightGray";
  document.getElementsByClassName(
    className
  )[1].children[0].style.backgroundColor = "lightGray";
  document.getElementsByClassName(className)[1].children[0].checked = "true";
}
