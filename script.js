import { tableData } from "./data.js";

// בניית הטבלה
function buildTable() {
  const tbody = document.getElementById("table-body");

  tableData.forEach((row) => {
    const tr = document.createElement("tr");

    row.forEach((cell, index) => {
      const td = document.createElement("td");

      if (index === 0) {
        td.className = "day-header";
        td.textContent = cell;
      } else {
        td.className = "editable";
        td.innerHTML = cell;
        td.onclick = () => editCell(td);
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}

// עריכת תא
function editCell(cell) {
  if (cell.classList.contains("editing")) return;

  const originalContent = cell.innerHTML;
  cell.classList.add("editing");

  const input = document.createElement("textarea");
  input.className = "edit-input";
  input.value = cell.textContent;
  input.style.height = "60px";

  cell.innerHTML = "";
  cell.appendChild(input);
  input.focus();

  function saveEdit() {
    cell.classList.remove("editing");
    const newContent = input.value;
    cell.innerHTML = newContent;

    // עדכון הנתונים במערך
    const row = cell.closest("tr");
    const rowIndex = Array.from(row.parentNode.children).indexOf(row);
    const cellIndex = Array.from(row.children).indexOf(cell);

    if (tableData[rowIndex]) {
      tableData[rowIndex][cellIndex] = newContent;
    }
  }

  input.onblur = saveEdit;
  input.onkeydown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      saveEdit();
    }
    if (e.key === "Escape") {
      cell.classList.remove("editing");
      cell.innerHTML = originalContent;
    }
  };
}

// חיפוש בטבלה
function searchTable() {
  const day = document.getElementById("search-day").value.trim();
  const month = document.getElementById("search-month").value.trim();
  const resultsDiv = document.getElementById("results");

  if (!day || !month) {
    resultsDiv.innerHTML = '<div class="no-result">הזן יום וחודש לחיפוש</div>';
    return;
  }

  // מציאת הכותרות
  const headers = [
    "יום",
    "תשרי",
    "חשון",
    "כסליו",
    "טבת",
    "שבט",
    "אדר",
    "אדר א",
    "אדר ב",
    "ניסן",
    "אייר",
    "סיון",
    "תמוז",
    "אב",
    "אלול",
  ];
  const monthIndex = headers.indexOf(month);

  if (monthIndex === -1) {
    resultsDiv.innerHTML =
      '<div class="no-result">חודש לא נמצא. נסה: תשרי, חשון, כסליו...</div>';
    return;
  }

  // מציאת השורה
  const dayRow = tableData.find((row) => row[0] === day);

  if (!dayRow) {
    resultsDiv.innerHTML =
      '<div class="no-result">יום לא נמצא. נסה: א, ב, ג...</div>';
    return;
  }

  const content = dayRow[monthIndex] || "";

  if (content.trim() && !content.includes("---")) {
    resultsDiv.innerHTML = `
                    <div class="result-box">
                        <div class="result-date">${day} ${month}</div>
                        <div>${content}</div>
                    </div>
                `;
  } else {
    resultsDiv.innerHTML = `
                    <div class="result-box">
                        <div class="result-date">${day} ${month}</div>
                        <div class="no-result">אין מידע מיוחד ליום זה - אומרים תחנון כרגיל</div>
                    </div>
                `;
  }
}

function clearSearch() {
  document.getElementById("search-day").value = "";
  document.getElementById("search-month").value = "";
  document.getElementById("results").innerHTML =
    '<div class="no-result">הזן יום וחודש לחיפוש</div>';
}

// טעינת הטבלה בתחילת הטעינה
document.addEventListener("DOMContentLoaded", buildTable);
