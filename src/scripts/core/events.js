import eventManager, {eventTypes} from 'setjs/kernel/event-manager.js';
import {throttle} from 'setjs/utility/calls.js';

var documentTop = 0;

eventManager.addListener(eventTypes.loaded, 'events', function() {
  $body.removeClass('loading');
  $hbody.scrollTop(0);
  $win.add('body, .js-scroll').off('scroll.ev').on('scroll.ev', function() {
    viewUpdate(eventTypes.scroll, $(this));
  });
});

export function viewUpdate(eventType, $el) {
  var height = $win.height();
  var top = ($el || $doc).scrollTop();
  var bottom = top + height;
  var change = top - documentTop;
  eventType && eventManager.raiseEvent(eventType, top, bottom, height, change);
  eventManager.raiseEvent(eventTypes.view, top, bottom, height, change);
  documentTop = top;
}

function createViewEvent(eventType, delay) {
  return throttle(function(e) {
    viewUpdate(eventType, $(e.target));
  }, delay || 20);
}

$win.add('body').on('resize', createViewEvent(eventTypes.resize, 100));
