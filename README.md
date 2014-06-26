iParallax
=========

Simple and powerful parallax for DOM elements. No scroll, only mouse movement.

Dependencies
------------

This plugin uses the following dependences

Last jQuery Version
* [jQuery](https://github.com/jquery/jquery)

Use
------

Add `jquery.iparallax.js`, after jQuery to the head of your HTML document. Then call iParallax on document ready.

```javascript
$(document).ready(function () {

    $('body').iParallax({
        parallax_binder         : document, 
        parallax_element        : ".element",
        velocity_ratio_x        : 150,
        velocity_ratio_y        : 150,
        offset_x                : 10,
        offset_y                : 0
	});
	
});
```
### PARAMETERS


#### parallax_binder

This is the element where you are going to bind the mouse movemente. Default `document`. You can use any element you want.
`parallax_binder         : "#myDiv"`


#### parallax_element

This is the element affected by our parallax. There is no default
`parallax_element        : ".element"`

#### velocity_ratio_

This is the velocity ratio (multiplier) the lower number, more aggresive parallax effect. Defaults `100` (X and Y)
`velocity_ratio_x        : 150,
 velocity_ratio_y        : 150`

#### offset_

Do you want to adjust your container perfectly? Use the offset. Defaults `0` (X and Y)
`offset_x                : 10,
 offset_y                : 0`


Copyright
---------

Copyright (c) 2014 Jose Luis Jimenez | @iJos.