/*!
 * jquery.iparallax.js | jQuery iParallax v0.0.1
 * 
 * https://github.com/iJos/jquery.iParallax.js
 *
 * Copyright 2014 Jose Luis Jimenez | @iJos
 * 
 * Released under MIT License
 */


(function($){

    var methods = {
        init : function(options) {
            var defaults = {
                parallax_binder     : document,
                parallax_element    : "",
                velocity_ratio_x    : 100,
                velocity_ratio_y    : 100,
                offset_x            : 0,
                offset_y            : 0,
            };
            var options = $.extend(defaults, options);
            new_iParallax_obj(options);
        }
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
            $.error('Method ' +  methodOrOptions + ' does not exist on jQuery.iParallax');
        }    
    };

    function new_iParallax_obj(options) {
        var start_left = parseInt($(options.parallax_element).css("left"));
        var start_top  = parseInt($(options.parallax_element).css("top"));
        $(options.parallax_binder).mousemove(function(e){
            var amountMovedX = (e.pageX * -1 / options.velocity_ratio_x);
            var amountMovedY = (e.pageY * -1 / options.velocity_ratio_y);
            $(options.parallax_element).css({
                'left': start_left + amountMovedX + options.offset_x,
                'top' : start_top  + amountMovedY + options.offset_y
            });
        });
    }

   

})(jQuery);