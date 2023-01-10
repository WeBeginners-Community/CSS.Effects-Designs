const click = document.getElementsByClassName("click");

const vote = document.getElementsByClassName("vote");
click.addEventListener('click', () => {
    vote.textContent = "hii";

})
function vote(){
    alert("Congrats Your Vote is Counted 😊😊")
}