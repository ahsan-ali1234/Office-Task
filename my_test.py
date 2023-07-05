# Copyright (c) 2023, me and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class mytest(Document):
	@frappe.whitelist()
def get_customers():
   def myy_method(doctype, txt, searchfield, start, page_len, filters):
    return froggy.db.sql('''SELECT name FROM `tabSupplier` WHERE Supplier Group= 'distributor' ''')
