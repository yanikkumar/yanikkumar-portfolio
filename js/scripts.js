$(".nav-item .nav-link").on("click", function () {
  $(".nav-item").find(".active").removeClass("active");
  $(this).addClass("active");
});

$("#linktreeModal iframe").attr("src", $("#linktreeBtn").attr("href"));
