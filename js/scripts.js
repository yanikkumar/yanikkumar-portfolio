$(".nav-item .nav-link").on("click", function () {
  $(".nav-item").find(".active").removeClass("active");
  $(this).addClass("active");
});

$("#linktreeModal iframe").attr("src", $("#linktreeBtn").attr("href"));

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

function getCurrentYear() {
  return new Date().getFullYear();
}
document.getElementById("year").textContent = getCurrentYear();
