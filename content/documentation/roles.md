---
title: Roles
author: pap
---

A "Role" is used to control the level of access a user has to information in the application application. When the system administrator invites a user to use the application, the email address (user) is assigned to a role. The Role controls the access to data in the application. This can be down to individual field level, but is most often used at Table and form level. In TMMS the roles are used to manage what information the User sees and to control the process flow of MR's, RFQ's and Purchase Orders.

Roles are used to Manage 
* The "Home Screen" the User sees, 
* The Tables he/she has access to in the Home Bar,
* The forms (and hence the data he/she sees)
* The reports they have access to,
* Whether they can export data, print data etc.

### The main roles in TMMS
The following listed and described roles are the main ones used in TMMS:
* Material Requester
* Team Leader
* Department Manager
* Warehouse Manager
* Warehouse Operator
* Supply Chain Manager
* Buyers
* Finance
* Senior Management
Others may be added at a later date....

The following diagram illustrates the part each role plays within the overall process flow from Requisition to Approved Purchase order
![DOA 01 Image](/images/process/ProcessOverview.jpeg)


### Material Requisitioner
A Material Requisitioner is the instigator of the TMMS process. This role is granted permission to Create, edit their own Material / Service Requests and Submit them to their Business Unit Manager for approval or (in the case where indicated in the Business Unit table) to their Team leader to submit after review for approval by Business Unit Manager. 

On their Home screen, they are also able to track the status of their MR's through the "My Material Requests" Report. 

In addition through the tables displayed on the Home Bar, they can access :
* The Material Request Table :- to search for and view all MR's in the system in a read only capacity.
* The Request For Quotation table :- to search for and view all RFQ's in the system in a read only capacity.
* The Purchase Order Table :- to search for and view all PO's in the system in a read only capacity.
* The Catalogue Table :- to search for items in catalogue to add to their MR's or check on stock availability.

### The Team Leader
This role is basically the same as the Requisitioner, however where the Business Unit specifies a Team leader must review the MR's before submission, the MR is displayed on the Home screen as awaiting Review. 
The Team Leader may then submit the MR on behalf of the original Requisitioner after review or modification.

### The Department Manager

The Department Manager has all of the permissions of the aforementioned roles. However as the nominated Business Unit Budget owner, it is his responsibility to "Approve" the MR before it progresses to the Warehouse Manager for issue (if in stock) or adding to the Catalogue if Non-Catalogued Items are included in the MR.
In addition he has the ability to "Approve" quotations submitted to him for approval by the Buyers within the Supply Chain Office via the RFQ BId Report. 
The Department Manager may also "Reject" an MR. When rejected the MR is set to a status of "Open" and a reason for the rejection has to be given in the Audit Trail.
Once the Quotation has been approved and in accordance with the Delegation of Authority (DOA), he may well also approve the Purchase Order when that has been created for his Business Unit.

### The Warehouse Manager
The Warehouse Manager has the same access as the Material Requisitioner however this role also controls all elements of the
* Catalogue Management and
* Warehouse Management, including Receipting, Issues, Returns, Transfers between locations etc.

In the MR process the Warehouse Manager, gets the MR after it has been approved by the Department Manager, and prior to being sent on to the Supply Chain Manager. 

The purpose of this is to ensure that:-

* Only properly classified and described items get added to the catalogue, and 
* If stock is available, to issue the items to the appropriate people.

Once the item is added to the catalogue the warehouse manager modifies the MR line item to include the catalogued Item. He does not modify any other information.

Once complete the MR is "Verified" and sent to the Supply Chain Manager to allocate a Buyer for any items not issued.

### The Supply Chain Manager
The Supply Chain Manager own the TMMS system, however his role also limits him to the Tables he sees on a day to day basis, and controls the approvals he is required to do. He has all the capability of Requisitioner's and for his department the permissions of the the Department Manager.

In addition the first point at which he comes into contact with the MR, is after it has been Approved by the Department Manager and Verified by the Warehouse Manager. 

As the overall owner of the Catalogue he is in a position to reject an MR to either the Originator, The Department Manager or the Warehouse Manager. 

In the case of the latter, this might be to change a description, in the case of the former, this might be to make changes to the MR, in quantity or to validate that the MR is for the right items, quantities etc. 

When an MR is rejected, it's status is set back to that of the position it is being rejected to and an audit record is written and a reason for rejection needs to be given.

The Supply Chain Manager, then takes the Approved MR, and allocates this to a "Buyer" to manage the Request for Quotation (RFQ) Process.

The Supply Chain Manager is then the first reviewer of a Buyer recommendation, prior to passing the "Bid" report / RFQ to the Department Manager to approve the Quotation.

Once the quotation has been approved and the Purchase Order/s are prepared, depending on the DOA, the Supply Chain Manager is usually the first Approver. This is managed via an "Approval Record" and is explained in more detail in another section.

### The Buyers Role

The Buyer's Role provides the same access capabilities as the Material Requisitioner however this role also controls all elements of the of the RFQ Process with the exception of Approvals.

The Buyer is able to add:
* A New Request For Quotation;
* Add Vendors from the standard list of Vendors to the RFQ;
* Submit the RFQ to Vendors by printing the RFQ to pdf and emailing it or submitting hard copy;
* Add Vendor quotes to the system until the required quotes have been submitted.
* Change the status of lines in a quote to become the "Recommended Quotation"
* Submit the Quotation to the Supply Chain Manager for review prior to despatch to the Department manager for approval within his budget.

Once the Buyer receives notification of the Quotation Approval from the system, then he is able to:
* Create a new Purchase Order;
* Complete the necessary details; and submit for electronic approval with the DOA.

Once approved the Buyer is then able to "Issue the PO", and print the final PO for despatch to the vendors.

Finally the Buyer is able to create an Invoice Payment receipt (IPR), this is the process by which he notifies finance that an Invoice has been received for the full or partial PO amount as the goods have either been delivered to a Forwarder, or have in fact been delivered to the Tana Office. Once the IPR is Submitted the buyer signs off.

### The Finance Managers Role

The Finance Managers role provides the capabilities of a Requisitioner and Department Manager, in addition this role has access to the
* Purchase Order Export to Sun and 
* Various Reports as defined to allow the financial management of items within the system.

In addition through the tables displayed on the Home Bar, they can access :
* The Material Request Table :- to search for and view all MR's in the system in a read only capacity.
* The Request For Quotation table :- to search for and view all RFQ's in the system in a read only capacity.
* The Purchase Order Table :- to search for and view all PO's in the system in a read only capacity.
* The Catalogue Table :- to search for items in catalogue to add to their MR's or check on stock availability.

### The Finance User Role 
Users included within this role are involved in the following functions:
* Receiving New vendor Information and setting up the appropriate details in the Finance Systems and adding Vendor Numbers to the Vendor records in TMMS
* Linking to Invoice Payment Receipts created by Buyers on notification of receipt of goods by a forwarder or like.

### The Warehouse Operator
The role has the same access to MR's as the Material Requisitioner, but in addition this role allows the user to:
* Issue items from warehouse stock in the form of Non-MR issues, (ie issues for standard stock items where there is no MR Created). 
* Receive Items in to Inventory or stock from Field Consignment Notes(FCN's),
* Carry out transfers within inventory,
* Receive returns to the Warehouse.
