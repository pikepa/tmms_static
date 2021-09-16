---
title: Quick Start Guide
author: PAP
---

The Total Material Management System (TMMS) is designed to manage the Requisitioning, Quotation, Purchase Order and Inventory Processes, as such it is fairly complex, so this initial guide has been put together to give the reader a quick overview.
OK, so you have now logged into the system, (see this article) and you have your Dashboard in front of you.

#### The Dashboard

The first thing you notice about the dashboard is that there is an orange title and a number (it varies from role to role) of light blue buttons.

The most common roles will be :-

- MR Originator
- Head of Department
- Warehouse Manager and
- Buyer

The light blue buttons are a way of directing you to various pages in the system and should be fairly self explanatory.

Below that you will see a Report, (probably My Material Requests), which lists all the Material Requests which you own or create.

Each role sees different reports, and will be dealt with in individual articles.

So let's get started on the steps needed to be filled for a Material Request to result in the required articles being delivered to site.

#### Step 1 - Initiate a Material Request (MR)
The ability to do this is available to everybody with access to TMMS.

Complete the required fields for the Material Request header
Add Items to the request, by selecting them from the Catalogue or adding a Non-Catalogued item.
You can add notes to the MR and images to the Material Request Items (MRI)
once you are happy with it, click on the "Submit" button at the top of to send the MR to your Departmental Manager for approval.
For images and more detail, follow this link...

#### Step 2 - Approve an MR
The ability to do this is limited to the Departmental Manager (DM) for the Business Unit as specified in the MR. These people are defined in System Tables.
On his Dashboard the DM will select a MR from the report "MR's Awaiting my Approval".
He should open and review it to confirm it is in order
He may add additional notes or Items to the MR
Once satisfied, he can approve the MR by clicking on the Approve button. He may also reject the MR and send it back to the originator for update/change.
Assuming it is approved we move to the next step.

#### Step 3 - Review an MR
This capability is available to the Warehouse Managers

On his dashboard the Warehouse Manager (WM) will select a MR from the report "MR's Waiting to Be Verified"
He opens the MR and confirms that all the MR Items are already in the Catalogue. If not he has the ability to add items directly to the catalogue, then update the MR Item.
He is also able to Issue items to the MR from Stock if the stock is available in the warehouse.
Once he has completed the aforementioned he "Verifies" the MR and it is moved through for approval by the Supply Chain Manager.

#### Step 4 - Approve an MR
This capability is available to the Supply Chain Managers.

On his dashboard the Supply Chain Manager (WM) will select a MR from the report "MR's Awaiting my Approval".
He should open and review it to confirm it is in order.
He can add additional notes / instructions to the buyers.
He then opens it to edit the header record and is required to Allocate a Buyer
Once done he is then able to "Approve the MR".

#### Step 5 - Generate a Request for Quotation (RFQ)
This capability is available to the Buyers.

On his dashboard the Buyer will select a MR from the report "MR's Awaiting my Attention".
On the right hand side of the report he will see a button "ADD RFQ", clicking on this will open a new screen for the RFQ Header.
Much information is carried forward from the MR, but he is required to populate to fields before saving the record
The Date by which the quotation is required,
The currency of the Quotation.
Once the record has been saved, he then adds proposed Vendors /Suppliers to whom he intends to send the Quotation Request.
He is then in a position to select the vendor record, and click on the "Print RFQ" button at the top of the page. This opens a form with the layout associated with the RFQ. This can be prionted, emailed directly or saved to pdf.
Once he has repeated this for each of the vendors, then returns to the RFQ header and marks the RFQ as "Despatched to Vendors", by clicking on the button of the same name.
The waiting game now occurs....

#### Step 6 - Register Quotations
This capability is available to the Buyers.

Once the Buyer receives a quotation from the supplier, he reselects the RFQ from his Dashboard, and then selects the Appropriate Vendor record.
By entering the Quotation Received Date, he is required to enter the following additional information:
The Vendor Reference (or Quotation)
The Valid From Date,
The Validity of the Quotation in Days,
The INCO Terms,
and attach a pdf copy of the Quote.
Once the record has been saved, the user is then in the position to
Add Details of the Vendor quote Quoted Items.
Once again he is able to add notes to the quotation to supplement information.
This process is repeated until all the quotes have been received

#### Step 7 - Make Recommendations and Submit
This capability is available to the Buyers.
Once the Buyer has received all his quotations, he/she select the master screen fro the RFQ and scrolls down to the "BID Report". The bid report shows a comparison of all the bids for the respective items.
On the Bid report he is able to select the quotes he/she wishes to take up by clicking on the "Change State " button. This will modify the column "State" to "Recommended Quote"
Once he/she is happy with the selected items, the Bid Report can be submitted to the Departmental manager for approval.
The RFQ is submitted by clicking on the Submit button at the top of the RFQ. This opens a new screen "Approvals" in which there are two fields to be completed,
the DOA Selection and
the Currency, a limited choice is provided.
Once the record is saved the Bid Report and it's respective approval record is submitted to the Departmental manager as he first point in the approval process as defined in the "Delegation of Authority" (DOA).
