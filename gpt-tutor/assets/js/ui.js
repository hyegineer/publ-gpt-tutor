$('#folder-name-change-btn').on('click', function () {
  $('#folder-name-change-before').removeClass('show-active');
  $('#folder-name-change-after').addClass('show-active');
})
$('#folder-name-change-cancel-btn').on('click', function () {
  $('#folder-name-change-before').addClass('show-active');
  $('#folder-name-change-after').removeClass('show-active');
})

$('.jschange-name-btn').on('click', function() {
  $(this).parents('.change-before').removeClass('show-active');
  $(this).parents('.change-before').siblings('.change-after').addClass('show-active');
})

$('.jschange-name-cancel-btn').on('click', function() {
  $(this).parents('.change-after').removeClass('show-active');
  $(this).parents('.change-after').siblings('.change-before').addClass('show-active');
})
$('#header-nav-btn').on('click', function () {
  $('#sidebar').toggleClass('active');
  $('.sidebar-overlay').toggleClass('active');
})

$('.sidebar-overlay').on('click', function() {
  $('#sidebar').removeClass('active');
  $(this).removeClass('active');
})
function openModal(id) {
  $('#' + id).addClass('active');
  $('#' + id).children('.custom-modal').scrollTop(0);
}
function closeModal(id) {
  $('#' + id).removeClass('active');
}
function allCloseModal() {
  $('.modal-wrapper').removeClass('active');
}
$(".sub-menu-edit-btn").on('click', function () {
  $(this).parents('.align-right').siblings('.edit-sub-menu-list-grp').children('.sub-menu-list').children('.btn-wrap').toggleClass('active');
})