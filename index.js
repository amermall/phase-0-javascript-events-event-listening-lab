// const input = document.getElementById('input');
// input.addEventListener("click", clickAlert);

// const main = document.getElementById('main');
// // console.log(main);
// main.addEventListener("dblclick", clickAlert);

// function clickAlert() {
//   return alert(`Hee hee, that tickles!`);
// }
const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}
