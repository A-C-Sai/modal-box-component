// Start writing JavaScript here!
const body = document.body;
const openModalBtn = document.querySelector(".jsModalButton");
const closeModalBtn = document.querySelector(".jsModalClose");

openModalBtn.addEventListener("click", (e) => {
  body.classList.add("modal-is-open");
});

closeModalBtn.addEventListener("click", function () {
  body.classList.remove("modal-is-open");
});
