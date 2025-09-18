# Days Without Tachanun

This project is a website that displays the days when Tachanun is not said according to the Hebrew calendar. The site allows users to search by day and month and to edit the table content interactively.

## Features

- **Day Table:** Displays all the days by Hebrew months.
- **Search by Day and Month:** Users can enter a day and month to see if Tachanun is said or not.
- **Editable Cells:** Clicking on a table cell allows editing its content.
- **Responsive Design:** Works on both large and small screens.
- **Result Clarity:** If there is no special information for a particular day, a suitable message is shown.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6 modules)
- No external database required – all data is stored in the `tableData` array.

## Installation and Usage

1. Download all files (`index.html`, `style.css`, `script.js`, `data.js`) into a single folder.
2. Open `index.html` in a browser.
3. Perform a search by day and month or edit table cells.

## Files

- `index.html` – main page structure.
- `style.css` – website styling.
- `script.js` – logic for building the table, searching, and editing cells.
- `data.js` – day data (the `tableData` array).

## Usage Example

1. Enter a day, e.g., `1`.
2. Enter a month, e.g., `Tishrei`.
3. Click **Search** to display the information.
4. To reset the fields, click **Clear**.

## Notes

- The data is stored in the `tableData` array. Editing a cell will update the array in real-time.
- To add a new day or month, update `tableData` in `data.js`.

---

**Author:** Yohanan Segal  
**Language:** English
