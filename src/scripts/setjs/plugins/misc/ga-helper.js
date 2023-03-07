import eventManager, {eventTypes} from 'setjs/kernel/event-manager.js';

eventManager.addListener(eventTypes.loaded, 'ga-helper', function() {
  if (window.dataLayer && typeof window.dataLayer.push === 'function') {
    window.dataLayer.push({
        page: window.location.href,
        event: 'pageview',
      });
  }
});
