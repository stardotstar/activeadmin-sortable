(function($) {
  $(document).ready(function() {
    $('.handle').closest('tbody').activeAdminSortable();
  });

  $.fn.activeAdminSortable = function() {
    this.sortable({
      update: function(event, ui) {
        var url = ui.item.find('[data-sort-url]').data('sort-url');

        $.ajax({
          url: url,
          type: 'post',
          data: { position: ui.item.index() + 1 },
          success: function() { 
            $("tr", $('.handle').closest('tbody')).removeClass('even odd');
            $("tr", $('.handle').closest('tbody')).filter(":even").addClass('odd');
            $("tr", $('.handle').closest('tbody')).filter(":odd").addClass('even');
          }
        });
      }
    });

    this.disableSelection();
  }
})(jQuery);
