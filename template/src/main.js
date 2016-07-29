import Vue from 'vue'{{#eq lintConfig "airbnb"}};{{/eq}}
import App from './App'{{#eq lintConfig "airbnb"}};{{/eq}}

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }{{#eq lintConfig "airbnb"}},{{/eq}}
}){{#eq lintConfig "airbnb"}};{{/eq}}
