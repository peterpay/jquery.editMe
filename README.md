jquery.editMe
=============

Allow you to handle content editable HTML5 Feature without making extra dom changes
with selectors and simplicity to trigger events to know before and after values

###Install
=======

      <script src="jquery.editMe.js"></script>

###Usage
=======

      $("selector").editMe({
            onEditCompleted:function(itemEdited,newValue)
            {
                  // Do whatever you need here
            }
      });

