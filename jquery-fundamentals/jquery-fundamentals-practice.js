jQuery('.product').click(function(){jQuery(this).text('clicked');})


//---

jQuery(".product").toggle(
function() {jQuery(this).text('one');},
function() {jQuery(this).text('two');},
function() {jQuery(this).text('three');}
)

//---

jQuery('h2').hide()

//---

jQuery('.a').addClass('.one');
jQuery('.b').addClass('.two');


//WATCH OUT: add class without the precedent dot
jQuery('.a').addClass('one');  
jQuery('.b').addClass('two');

//---


jQuery ('[alt="jQuery"]') //exact match att selector
jQuery ('[alt|="jQuery"]') //prefix att selector
jQuery ('[alt*="jQuery"]') //contains word att selector
jQuery ('[alt=""]') // empty att selector
jQuery ('[alt!=""]') //not the element with empty att
jQuery ('img[alt!=""]') //images without empty alt att
jQuery ('img[alt~="Theme"]') //in an image match anywhere within

//OTHER
jQuery ('[alt^="jQ"]') //checks for starting value. Does not look for hyphen or consider words. You can use partial words and it will still find the value.
jQuery ('[alt*="The"]') //will find a partial match anywhere in the attribute value.
jQuery ('[alt$="go"]') //will find a partial match if it exists on the very end of the attribute value.
jQuery ('[alt^="jQ"][width="174"]') //multi-attribute selector. It follows the logic of the items above but each attribute has to match.

// DESCENDENT SELECTOR
jQuery('li.lvl1 > ul > li') //Specific Direct Children of Level 1 
jQuery('li#item2 + li') //Next Item After Match
jQuery('li#item2 ~ li') //Match All Siblings Following Match 
jQuery('li#item2 ~ *') //Match All Siblings ITEMS

// FORMS SELECTOR
jQuery(':text')
jQuery(':password')
jQuery (':file')
jQuery('select')
jQuery(':image') //this is for input image not for regular images
jQuery(':disabled')
jQuery(':enabled')

jQuery(':checked') //works for checkboxes and radio buttons
jQuery(':selected') //For select elements - options in a select menu

jQuery('[name="rb"]:checked') //checked radio buttons with name rb
jQuery(':input')
jQuery(':checkbox')
jQuery(':radio')
jQuery(':reset')
jQuery(':submit')


//BASIC AND CHILD FILTER SELECTORS
// Keep in mind JS starts at zero, thus zero shows up as even item
jQuery('.lvl1:even')
jQuery('.lvl1:odd')

//Indexed Filtering
jQuery('.lvl1:eq(1)') //equals specific nth element
jQuery('.lvl1:gt(1)') //gt greater than
jQuery('.lvl1:lt(1)') //gt greater than

//Not is Not an Index based filter
jQuery('.lvl1:not(1)') //wrong way to NOT, not base on index item
jQuery('.lvl1:not(.lvl1:eq(1))') //Not This Selection but the rest
jQuery('.lvl1:lt(1),.lvl1:gt(1)') //Not This Index Item But Rest 
jQuery('.lvl1:not(#item2)') //Not This ID But Rest

//Header Filter
jQuery(':header') //h1, h2, h3 etc

//First and Last
jQuery('.lvl1:first')
jQuery('.lvl1:last')

//Child Index Filter
jQuery('.lvl1:nth-child(2) ul .lvl2:first-child') //First Child of Item 2
jQuery('.lvl1:nth-child(2) ul .lvl2:last-child') //Last of Child of Item 2
jQuery('.lvl1:nth-child(2) ul .lvl2:nth-child(2)') //Child2 of Child2 
jQuery('.lvl1:nth-child(2) ul .lvl2:nth-child(2) ul li:first-child') //Detailed Selection 
jQuery('li:only-child') //Only Child Filter, brings out specifically only-child(s)


//CONTENT FILTERS
jQuery(':empty') //all empty items
jQuery('li:empty') //Empty List Items 

//Contain Filters
jQuery('li:contains("enjoy")') //contains tree
jQuery('li:contains("enjoy"):last-child') //contains target

//Has Filters
jQuery('li.lvl1:has(ol,ul)') //Items With Nested Lists 
jQuery('li.lvl1:not(li.lvl1:has(ol,ul))') //Items Without Nested Lists

//Parent Filters
jQuery('li.lvl2:parent') //Surprise Parents: the text within an element counts as having children.
jQuery('li.lvl1:parent') //Expected Parents 

//Focus filter
jQuery('li.lvl1:focus') //jQuery 1.6 added a :focus filter selector. If you use this remember that the item has to be an item that would normally get focus from the browsers perspective.


//VISIBILITY SELECTORS
jQuery('.lvl1:eq(2)').hide() //Hide Item 3 (index 2)
jQuery('.lvl1:hidden') //find hidden items
jQuery('.lvl1 :hidden').show() //Show All Hidden with TYPO
jQuery('.lvl1:hidden').show() //Corrected Show Hidden
jQuery('.lvl2 > *').hide() //Hide Children of Level 2 


//DOM MANIPULATION
//DOM Insertion (inside)
jQuery('#color1').text('Ruby') //Ruby Text Inserted/Replaces
jQuery('#color3').html('<span style="color:blue;">Ocean</span>') //Style Ocean with color blue
jQuery('#color3').append('...') //Add dots after Ocean
jQuery('#color3 span').prepend('...') //Add dots before Ocean
jQuery('#cat').appendTo('#color1') //Move Cat
jQuery('#dog').prependTo('#color3 span') //Move Dog 
//appendTo()/prependTo() the item selected on the left of the command is what modifies the item on the right.

//DOM Insertion (around and outside)
jQuery('#cat2')  
   .after(  
      "<li>Panther</li>",  
      "<li>Saber Tooth</li>"  
   )` //add after
   
jQuery('#dog2')  
   .before(  
      "<li>Beagle</li>",  
      "<li>Fox</li>"  
   )` //add before   
   
   
jQuery('#cat3').insertAfter('#cat2') //Insert After   
jQuery('#dog1').insertBefore('#dog2') //Insert Before

//Around modifications
jQuery('ul.lvl1').wrapAll('<div style="border:1px solid red;padding:2px;"></div>') //Wrap All Selected
jQuery('ul').wrap('<div style="border:1px solid green;padding:2px;"></div>') //Wrap Each Selected 
jQuery('ul.lvl1').unwrap() //Unwrap Function
jQuery('#dogs li').wrapInner('<div style="margin:3px;border:1px solid black; background-color:yellow;"></div>') //Wrap Inner 


// THIS IS A CHUNK FROM ANOTHER FILE

/*Lesson 3: Dom Manipulation*/
//Video 13b - Around and Outside
//inserts 2 li after the id
jQuery('#cat2')
.after(
"<li>Panther</li>",
"<li>Saber Tooth</li>"
)
//inserts 2 new created li before the id
jQuery('#dog2')
.before(
"<li>Beagle</li>",
"<li>Fox</li>"
)
//selects cat3 and inserts it after cat2
jQuery('#cat3').insertAfter('#cat2')
//selects dog1 and inserts it before dog2
jQuery('#dog1').insertBefore('#dog2')
//selects
jQuery('ul.lvl1').wrapAll('<div style="border:1px solid red;padding:2px;"></div>')
//Wrap Each Selected
jQuery('ul').wrap('<div style="border:1px solid green;padding:2px;"></div>')
//Unwrap Function
jQuery('ul.lvl1').unwrap()
//Wrap Inner method - wraps the contents of every selected item
jQuery('#dogs li').wrapInner('<div style="margin:3px;border:1px solid black; background-color:yellow;"></div>')


//VIDEO 14 - Copy, Removal and Replacement
//store the clone in a variable first
hold_clone = jQuery('#cat3').clone();
jQuery('#cats ul').append(hold_clone);
//remove specific item from parent-child perspective
jQuery('#fromList #cat3').remove()
//detach and moves element
hold_detach = jQuery('#bird1').detach();
jQuery('#birds ul').prepend(hold_detach);
//
jQuery('#dog2').empty()
//
jQuery('<li>mutt</li>').replaceAll('#dogs li')
//does the same as above if not defining
jQuery('#dogs li').text('Poodle');
//
var myParent = jQuery('#bird2').parent();
jQuery(myParent)
.replaceWith(
"<ol>"
+jQuery(myParent).html()
+"</ol>"
)



// video 15
// Attribute and class manipulation

jQuery('label[for="special1"]').attr("class","highlight") //Add class to element with specific attribute
//
jQuery('label[for="special1"]').removeAttr("class","highlight") //Remove class to element with specific attribute
//
jQuery('#myList').val() //Method pulls back which value is selected
//
jQuery('#myList').val(3) //Sets value to #3 if available
//
jQuery('#special1').is(':checked') //Returns true or false if a value is checked.
//
jQuery('label[for="special1"]').addClass('highlight') //adds highlight class to attribute
//
jQuery('label[for="special1"]').removeClass('highlight') //removes class
//
jQuery('label[for="special1"]').hasClass('highlight') // checks if element has a class




//  this need further revision                                             
txtCount = 0;
txtArray = ['highlight','brdr1'];
jQuery ('#special1').click(function() {
	txtCount++;
	jQuery('label[for="special1"]').toggleClass(txtArray[txtCount = 1]);
});

//video 16 - style manipulation
jQuery('#img1').css({border:'solid 4px green'}) // add a css value
//
// these 2 are the same thing""
jQuery('#img1').css("background-color")
jQuery('#img1').css("backgroundColor") //HTML DOM style

jQuery('#img1').css({backgroundColor: '#444444', border: '10px solid blue', margin: '4px', padding: '6px', width: '215px'})

jQuery('#img2').height(60).width(280) //"chained values for height and width"

jQuery('#img2').innerWidth(300)
jQuery('#img2').outerWidth(300)
  
 /*EVENTS */
 
 //Video 17 Load - Unload
 
 //Inserts this text in a paragraph as soon as texts loads
 jQuery(document).ready(function($){
		$('p').text('The DOM has been full converted from HTML to browser elements.');
		});
	alert('This fires as soon as possible');
	
//Loads the ready event, then the next one
jQuery.holdReady(true);
jQuery(document).ready(function($) {
	alert('This is the ready alert.');
});
alert('The alert box after holdReady');
jQuery.holdReady(false);

//Appends and image tag after a paragraph
jQuery('p').append('<br /><img height="53" width="215" border="0" />')

//Alerts that an image has been loaded, needs to run first
jQuery('p img').load(function() {
	alert('Image is loaded now');	
});

//This actually loads the image
jQuery('p img').attr("src","logo_jquery_215x53.gif");

//This unloads everything as we leave the page - DOESNT-WORK
jQuery(window).unload(function() {
	alert('Unload is working');	
});

//Video 18 Browser events

//Generates an error message
jQuery('p img').error(function() {
	alert('The image tag generted an error');	
}).attr("src","jqueryui.jpg");

//this adds text and measurements as window gets resized
jQuery(window).resize(function() {
	jQuery ('p').prepend('Windows was resized with width of '+jQuery(window).width()+' and a height of '+jQuery(window).width()+'.');
});

//this adds text while scrolling
jQuery('#scrollText').scroll(function() {
	jQuery ('p').prepend('Scroll...');
});

//Video 19 Events - this is a fundamental for plugin creation

var e = jQuery.Event("click");
jQuery("#chooseYes").trigger( e );


// Video 20 - Event handler attachment, bind, unbind, one, substainability, sustainable binding

$('#chooseYes').bind('click', function() {
	alert('You clicked the radio button.');	
});

//this below will NOT work cuz an inline function doesn't have a pointer so we need an external function for that to work
$('#chooseYes').unbind('click', function() {
	alert('You clicked the radio button.');	
});

//so it will be like this:
var myHandler = function() (alert('bind event working'));
jQuery('#chooseYes').bind("click", myHandler);

jQuery('#chooseYes').unbind("click", myHandler);


//this bind the event one time only, so no need to unbind this event
$('#chooseNo').one('click', function() {
	alert('this should one show one');	
});

// this is for sustainable  which allow future elements -currently unexistant- to be affected by the event.
jQuery('label').live({
	hover: function() {
	jQuery(this).toggleClass('hoverLive');
},
mouseover: function() {
	jQuery(this).addClass('mouseover');
},
mouseout: function() {
	jQuery(this).removeClass('mouseover');
}
});
//********
jQuery('form').prepend('<input id="chooseYes" type="radio" value="yes" name="choose"><label class="" for="chooseYes"> Yes </label><br>');

//To unbind all we "kill it"
jQuery('label').die();


//Add value and focus to field when clicked
jQuery('#chooseYes').click(function() {
	jQuery('#rv').val('YES');
	jQuery('#rv').trigger("focus");	
});

//
jQuery('#chooseNo').click(function() {
	jQuery('#rv').triggerHandler("click");
});
jQuery('#chooseYes').focus(function() {
	alert('I have the focus now.');
});












// Video 29

// Video 32 
jQuery.ajaxPrefilter()

// Video 32 jQuery Utilities
jQuery.type()



/* Jquery 2.x does not support IE 6,7,8*/

//make a test: list of commands and write definition, then vice-versa
//borrow study plans college de Maisonneuve
// create a Cheat Sheet latest jQuery version





















     
     
    














