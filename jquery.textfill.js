﻿/**
 * @preserve  textfill
 * @name      jquery.textfill.js
 * @author    Russ Painter
 * @author    Yu-Jie Lin
 * @version   0.1.3
 * @date      03-27-2012
 * @copyright (c) 2012 Yu-Jie Lin
 * @copyright (c) 2009 Russ Painter
 * @license   MIT License
 * @homepage  https://github.com/jquery-textfill/jquery-textfill
 * @example   http://jquery-textfill.github.com/jquery-textfill/Example.htm
*/
; (function($) {
  /**
  * Resizes an inner element's font so that the inner element completely fills the outer element.
  * @param {Object} Options which are maxFontPixels (default=40), innerTag (default='span')
  * @return All outer elements processed
  */
  $.fn.textfill = function(options) {
    var defaults = {
      maxFontPixels: 40,
      minFontPixels: 4,
      innerTag: 'span',
      callback: null,
      complete: null
    };
    var Opts = jQuery.extend(defaults, options);
    
    this.each(function() {
      var ourText = $(Opts.innerTag + ':visible:first', this);
      var maxHeight = $(this).height();
      var maxWidth = $(this).width();
      var fontSize;
      
      var minFontPixels = Opts.minFontPixels;
      var maxFontPixels = Opts.maxFontPixels;
      while (minFontPixels < maxFontPixels - 1) {
        fontSize = Math.floor((minFontPixels + maxFontPixels) / 2)
        ourText.css('font-size', fontSize);
        if (ourText.height() < maxHeight)
          minFontPixels = fontSize;
        else
          maxFontPixels = fontSize;
      }
      var HfontSize = minFontPixels;

      minFontPixels = Opts.minFontPixels;
      maxFontPixels = Opts.maxFontPixels;
      while (minFontPixels < maxFontPixels - 1) {
        fontSize = Math.floor((minFontPixels + maxFontPixels) / 2)
        ourText.css('font-size', fontSize);
        if (ourText.width() < maxWidth)
          minFontPixels = fontSize;
        else
          maxFontPixels = fontSize;
      }
      var WfontSize = minFontPixels

      ourText.css('font-size', Math.min(HfontSize, WfontSize));

      // call callback on each result
      if (Opts.callback) Opts.callback(this);
    });
    
    // call complete when all is complete
    if (Opts.complete) Opts.complete(this);
    
    return this;
  };
})(jQuery);
