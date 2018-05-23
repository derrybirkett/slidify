Slidify v0.2
=======

Create an ad hoc jQuery Slider on an Element (with sub-elements, obviously)

How to use
==========

You will need to create (1) the HTML for the slider: a container div and slide divs and (2) Attach slidify to the container div through jQuery.  The CSS is up to you.

01 HTML
-------

To create a slider first create a DIV with subelements (the slides). eg:

    <div id="Slider">
       <div class="slide">Slide content</div>
       <div class="slide">Slide 2 content</div>
    </div>

NB: The slider div needs a class or ID to enable referencing via jQuery.

02 jQuery
----------

Minimum requirement is:

    $("#Slider").slidify;

Although you will probably want to style the CSS to give the Slider container a height and width (especially if you use floating elements)

If you want to specify a slide class, and a heigh and width of the slider container you can set those options like this:

    $("#Slider").slidify({
      sliderWidth:990,
      sliderHeight:550,
      slideSelector:".slide"
    });

It's possible it doesn't work well - it's a pre-release Beta: So if you feel kind or angry maybe ping me on twitter @derrybirkett to vent.

## Shout me a coffee
If you found this Repo useful you could offer me a coffee! I will be so happy! ☕️ via [PayPal](https://www.paypal.me/derrybirkett/5) 

<a href="https://www.paypal.me/derrybirkett/5">
  <img width="160" height="41" src="http://derrybirkett.com/wp-content/uploads/2018/03/paypal-badge.png" >
</a>

Follow [@derrybirkett](https://twitter.com/derrybirkett) on Twitter [![Twitter Follow](https://img.shields.io/twitter/follow/derrybirkett.svg?style=social&label=Follow)]()
