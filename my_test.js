// Copyright (c) 2023, me and contributors
// For license information, please see license.txt

frappe.ui.form.on('my test', {
    validate: function(frm) {
        var dateValue = frm.doc.date; 
        if (dateValue) {
            frm.set_df_property('name1', 'hidden', 1);
            refresh_field('name1');
        }

       var supplier = frm.doc.supplier; 
        if (supplier) {
            frm.set_df_property('name1', 'hidden', 0);
            refresh_field('name1');
        }

        var schoolValue = frm.doc.school; 
        var classField = frm.fields_dict.class;
        
        if (schoolValue) {
            classField.df.reqd = 1; 
        } else {
            classField.df.reqd = 0; 
        }
        
        frm.refresh_field('class_field'); 
    },

     after_cancel: function(frm) {
       console.log('Performing custom actions after canceling a document.');
    },
    after_insert: function(frm) {
       console.log('Performing custom actions after inserting a new document.');
    },
    after_save: function(frm) {
       console.log('Performing custom actions after saving a document.');
    },
    before_cancel: function(frm) {
       console.log('Performing custom actions before canceling a document.');
    },
    before_insert: function(frm) {
       console.log('Performing custom actions before inserting a new document.');
    },
    before_save: function(frm) {
       console.log('Performing custom actions before saving a document.');
    },
    before_submit: function(frm) {
       console.log('Performing custom actions before submitting a document.');
    },
    before_update: function(frm) {
       console.log('Performing custom actions before updating a document.');
    },
    calculated_field: function(frm) {
       console.log('Performing custom actions when a calculated field is recalculated.');
    },
    form_render: function(frm) {
       console.log('Performing custom actions after rendering a form.');
    },
    onload: function(frm) {
       console.log('Performing custom actions on form load.');
    },
    on_change: function(frm) {
       console.log('Performing custom actions when a field value changes.');
    },
    on_copy: function(frm) {
       console.log('Performing custom actions when a document is copied.');
    },
    on_delete: function(frm) {
       console.log('Performing custom actions when a document is deleted.');
    },
    on_load: function(frm) {
       console.log('Performing custom actions when a form is loaded.');
    },
    on_submit: function(frm) {
       console.log('Performing custom actions when submitting a document.');
    },
    on_trash: function(frm) {
       console.log('Performing custom actions when moving a document to trash.');
    },
    refresh: function(frm) {
       console.log('Performing custom actions when refreshing a form.');
    },
    validate: function(frm) {
       console.log('Performing custom actions during form validation.');
    },
  
 
  refresh: function(frm) {
	frm.set_query('Supplier', function() {
  return {
    filters: {
    'Supplier Group': 'Distributer' 
    }
  };
});
    frm.add_custom_button(__('General Ledger Report'), function() {
      frappe.set_route('query-report', 'General Ledger');
    });

    frm.add_custom_button(__('Open Popup'), function() {
      
      var dialog = new frappe.ui.Dialog({
        title: 'Quick Entry',
        fields: [
          {
            fieldtype: 'Data',
            fieldname: 'Name',
            label: 'Name',
            onchange: function() {
             
              frm.set_value('name1', this.value);
            }
          },
          {
            fieldtype: 'Date',
            fieldname: 'Date',
            label: 'Date',
            onchange: function() {
            
              frm.set_value('date', this.value);
            }
          }
        ],
        primary_action: function() {
         
          dialog.hide();
        }
      });

     
      dialog.show();
    });
	
  },
   onload: function(frm) {
        console.log('Performing custom actions on form load.'); 
    },
    refresh: function(frm) {
        console.log('Refreshing the form.'); 
    },
    validate: function(frm) {
       
        console.log('this is from validate hook'); 
    },
    before_save: function(frm) {
        console.log('Performing custom actions before saving.'); 
    },
    on_submit: function(frm) {
        console.log('Document submitted successfully.'); 
    },


   

   supplier: function(frm) {
		var supplier = frm.doc.supplier;
		if (supplier) {
		console.log('response')
		  frappe.call({
			method: 'myapp.myapp.doctype.my_test.my_test.supplier',
			args: {
				supplier_name: supplier
			},
			callback: function(response) {
			  if (response.message) {
				var country = response.message;
				frm.set_value('country', country);
			  }
			}
		  });
		}
		else {
			frm.set_value('country', '');
		  }
	  },
 
       
  } 
);
