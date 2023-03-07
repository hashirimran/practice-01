import eventManager, {eventTypes} from 'setjs/kernel/event-manager.js';

eventManager.addListener(eventTypes.loaded, 'drop-menu', function() {
  $('.dropdown').removeClass('open');
});

eventManager.addListener(eventTypes.init, 'drop-menu', function() {
  $doc.on('click', function(e) {
    var $menuBtn = $('.dropdown');
    var $found = $menuBtn.find(e.target).add($menuBtn.filter(e.target));

    if ($found.length) {
      var $menu = $found.closest('.dropdown');
      if ($menu.hasClass('open') && $(e.target).closest('.prevent-close').length) {
        return;
      }

      $menu.toggleClass('open');
      $('.dropdown.open').not($menu).not($menu.parents('.dropdown.open')).removeClass('open');

      if (!e.target.href) {
        return !$menu.length;
      }
    } else {
      $('.dropdown.open').removeClass('open');
    }
  });
});
