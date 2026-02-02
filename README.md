# Cash Register Project

This is a JavaScript project that simulates a cash register function, originally designed as a FreeCodeCamp certification project.

## Description

The application calculates the change due to a customer based on the price of an item, the cash provided by the customer, and the available cash in the drawer (CID). It handles various scenarios:
- **Insufficient Funds:** Customer doesn't provide enough cash.
- **Exact Cash:** No change needed.
- **Open:** Change can be returned from the drawer.
- **Closed:** Exact change equals the total cash in drawer.
- **Insufficient Funds (Drawer):** Not enough specific denominations or total cash to return exact change.

## Features

- Dynamic calculation of change.
- Visual display of cash in drawer.
- Status updates (OPEN, CLOSED, INSUFFICIENT_FUNDS).
- Responsive design.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## How to Use

1.  Open `index.html` in your web browser.
2.  Enter the cash amount provided by the customer in the input field.
3.  Click the "Purchase" button.
4.  View the status and change due in the display area.
