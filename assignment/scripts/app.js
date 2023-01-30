console.log("hello");
$(document).ready(onReady);

// STATE //
let generateBtnCount = 0;

function onReady() {
  console.log("ready now");
  // handling generate button
  $('.generateBtn').on("click", onGenerate);
  // handling click events
  $(document).on("click", '#yellowBtn', onYellowClick);
  $(document).on("click", '#deleteBtn', onDelete);
}

// `generate` function for generate button
function onGenerate() {
  generateBtnCount++
  $('body').append(`
  <div><button id="yellowBtn">Yellow</button><button id="deleteBtn">Delete</button><p>${generateBtnCount}</p></div>
`);
}

// function to add class when button is clicked
function onYellowClick() {
  $(this).parent().addClass('yellowBackground')
}

// function to remove parent element when button is clicked
function onDelete() {
  $(this).parent().remove()
}


