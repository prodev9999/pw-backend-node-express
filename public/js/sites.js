$(function () {
  let current = location.pathname;
  $('nav ul li a').each(function () {
    let $this = $(this);
    // if the current path is like this link, make it active
    if (current.startsWith($this.attr('href')) && current.length > 1) {
      $this.addClass('active');
    }
  });

  $('tbody [data-href]').each(function (i, e) {
    let href = $(this).data("href");
    $(e).children('td:not(:last)').click(function () {
      window.open(href, '_blank');
    });
  });

  $('#modalForImage').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var data = button.data('whatever');
    var modal = $(this);
    modal.find('#modalImage').attr('src', data);
  })
});

function confirmDeleting(href) {
  if (confirm('Are you sure')) {
    window.location = href;
  }
}