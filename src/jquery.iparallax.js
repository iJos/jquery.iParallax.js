/*!
 * jquery.iparallax.js | jQuery iParallax v0.0.1
 * 
 * https://github.com/iJos/jquery.iParallax
 *
 * Copyright 2014 Jose Luis Jimenez | @iJos
 * 
 * Released under MIT License
 */


(function($){

    var methods = {
        init : function(options) {
            var defaults = {
                
               
            };
            var options = $.extend(defaults, options);
            var o = options;
        },
    };

    $.fn.iParallax = function(methodOrOptions) {
        if(methods[methodOrOptions]){
            //Methods
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        }else if(typeof methodOrOptions === 'object' || ! methodOrOptions){
            // Default to "init"

            //var arguments = $.extend(defaults, methodOrOptions); console.log();
            return methods.init.apply(this, arguments);
        }else{
            //Error
            $.error('Method ' +  methodOrOptions + ' does not exist on jQuery.icountdown');
        }    
    };

   

})(jQuery);