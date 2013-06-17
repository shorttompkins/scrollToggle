scrollToggle
============

Trigger events based on the position of the scrollbar (and visibility of elements on the page as they are scrolled into/out of view).

To use:

*Include jQuery and scrollToggle.js

//ScrollToggle(verticalScrollTriggerPosition, callbackScrolledTO, callbackScrolledAWAY)

//verticalScrollTriggerPosition can be a number, property, or computed.  It is the vertical Y coord of the scrollbar destination.
<pre>
var myScroller = new ScrollToggle($('#block1').position().top, function () {
    console.log("Element has been reached.");
}, function () {
    console.log("Element is gone.");
});
</pre>

A working example can be found here: http://kroltech.com/upload/misc/scrollToggle_Sample/

A better production sample can be found here: http://www.nextgenugm.com 
(the orange dots in the right vertical nav change based on the sections as they scroll into view).
