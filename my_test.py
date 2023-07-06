# Copyright (c) 2023, me and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class mytest(Document):
    pass

@frappe.whitelist()
def supplier(supplier_name):
    supplier_doc = frappe.get_doc('Supplier', supplier_name)
    country = supplier_doc.country

    return country
