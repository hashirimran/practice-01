import getComp from 'setjs/template/component.js';
import {getQsMap} from 'setjs/utility/browser.js';

export default {
  templates: ['site/home'],
  comp: function() {
    console.log(getQsMap());
    return getComp('site/home',{age :10},{
      form : function(opts){
        opts.data.age = opts.$el.formJSON().age;
        console.log(opts,opts.$el.formJSON())
      }
    });
  
  }
};
