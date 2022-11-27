// $(document).ready(function () {
//   $(".video-circle").click(function () {
//     $(".modal-canvas").toggleClass(".hidden")
//   });
//   $(".modal-close").click(function () {
//     $(".modal-canvas").toggleClass(".hidden")
//   });
// });
$(document).ready(function () {
  $(".video-circle").click(function () {
    $(".modal-canvas").toggleClass("hidden");
    $("body").toggleClass("lock");
  });
  $(".modal-close").click(function () {
    $(".modal-canvas").toggleClass("hidden");
    $("body").toggleClass("lock");
  });
});
