document
  .querySelectorAll(".card")
  .addEventListener("click", toggleClass(event));
function toggleClass(event) {
  event.classlist.toggle("show");
}
