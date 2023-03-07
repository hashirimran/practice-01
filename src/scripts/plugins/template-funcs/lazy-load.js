import {addFuncs} from 'core/acts-funcs.js';
import {makeLazy, lazyImg} from 'setjs/utility/lazy-media.js';
// import {responsiveWidth} from 'helpers/misc.js';

addFuncs({
  lazyImg: makeLazy('src'),
  lazyBg: makeLazy('bg'),
  lazyResponsive: function(url, {$el}) {
    if (/\.(gif|svg)(\?(.*))?$/.test(url)) {
      let path = url.split('?')[0];
      if (path.endsWith('gif')) {
        url = path;
      }
      $el.attr('src', url).addClass('loaded');
    } else {
      !$el.attr('src') && $el.attr('src', `${url}&w=60`);
      setup();
    }

    function setup() {
      if ($.contains(document.body, $el[0])) {
        // lazyImg($el, `${url}&w=${responsiveWidth($el)}`);
        lazyImg($el, `${url}`);
      } else {
        setTimeout(setup, 500);
      }
    }
  }
});
