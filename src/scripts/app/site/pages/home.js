import getComp from 'setjs/template/component.js';

export default {
  templates: ['site/home'],
  comp: function() {
    console.log('conflict');
    return getComp('site/home');
  }
};
