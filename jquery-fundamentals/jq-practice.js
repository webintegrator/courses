

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

























