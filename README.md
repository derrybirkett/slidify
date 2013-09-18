Slidify
=======

Create an ad hoc jQuery Slider on an Element (with sub-elements, obviously)

How to use
==========

You will need to create (1) the HTML for the slider: a container div and slide divs and (2) Attach slidify to the container div through jQuery.  The CSS is up to you.

01 HTML
-------

To create a slider first create a DIV with subelements (the slides). eg:
'''
<div id="Slider">
   <div class="slide">Slide content</div>
   <div class="slide">Slide 2 content</div>
</div>
'''
NB: The slider div needs a class or ID to enable referencing via jQuery.

02 jQuery
----------

Minimum requirement is:

$("#Slider").slidify;

If you want to specificy a slide class, and a heigh and width of the slider container you can set those options like this:

$("#HeaderSections").slidify({
  sliderWidth:990,
  sliderHeight:550,
  slideSelector:".slide"
});

