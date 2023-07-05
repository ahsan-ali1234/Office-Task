// Copyright (c) 2023, me and contributors
// For license information, please see license.txt

frappe.ui.form.on('my test', {


	
  refresh: function(frm) {

refresh: function(frm) {
         frm.set_query('customer_method', function() {
			return {
				query: 'myapp.myapp.doctype.testapp.test.myquery_method'}
		});



	  
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
});


