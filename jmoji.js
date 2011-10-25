/*!
 * jMoji v.0.1
 * Copyright 2011, Mark Guerra <markgx@gmail.com>
 * http://github.com/markgx/jmoji
 * Licensed under the MIT license
 */

;(function ($, window, document) {
  var defaults = {};

  function jMoji(element, options) {
    // don't do anything if user is already on iOS
    if (navigator.userAgent.match(/iPad|iPhone/i)) {
      return element;
    }

    this.element = element;
    this.options = $.extend( {}, defaults, options) ;

    this.init();
    return element;
  }

  jMoji.prototype.init = function () {
    $el = $(this.element);
    var html = $el.html();
    html = html.replace(/[\ue001-\ue537]/gi, _replaceWithSpan);
    $el.html(html);
  };

  function _replaceWithSpan(str) {        
    var eCode = str.charCodeAt(0).toString(16);
    var span = '<span class="emoji emoji_' + eCode + '"></span>';
    return span;
  }

  $.fn.jMoji = function (options) {
    return new jMoji(this, options);
  }
})(jQuery, window, document);
