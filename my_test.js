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
        var classValue = frm.doc.class; 

        if (schoolValue && !classValue) {
            frappe.msgprint('Please select a class.'); 
            validated = false; 
        }
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
	
  }


   },

 
       
    
);
