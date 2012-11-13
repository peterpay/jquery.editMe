/*

Copyright (c) 2012 Pedro Aron Barrera Almaraz

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/


(function($) {
// What does the editMe plugin do?
$.fn.editMe = function(options) {

  if (!this.length) { return this; }

  var opts = $.extend(true, {}, $.fn.editMe.defaults, options);

  this.each(function() {
    var $this = $(this);
	// set the attribute
	$this.attr("contenteditable",true);
	// set the events
    $this.live('focus', function() {
	    var $currentSelectedItem = $(this);
	    before=$currentSelectedItem.html();
	    return $currentSelectedItem;
	}).live('blur keyup paste', function(event) {
	    var $currentSelectedItem=$(this);
		after=$currentSelectedItem.html();
	    opts.onEditComplete(event.srcElement,after);
	    return $currentSelectedItem;
	});	
  });

  return this;
};

// default options
$.fn.editMe.defaults = {
  before:"",
  after:"",
  onEditComplete:function(parent,newValue){
		// TODO : here should be your new  function on edit complete
		console.log("event must be implemented")		
  }
};

})(jQuery);

/*  sample of code
 span .class .editable
 <span class="editable" data-newvalue="ItemName">ItemName</span>
 <span class="editable">Item Name</span>
 <span class="editable">Item Name</span>
 <span class="editable">Item Name</span>

 <?php if(permissions){

  $(".editable").editMe({
		onEditComplete:function()
			{			
				$(this).data("newvalue")=this.after;
			}	
  		});
	}
	?>
*/
