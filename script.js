var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();

    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);

    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["id"] = document.getElementById("id").value;
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["mobileNumber"] = document.getElementById("mobileNumber").value;
  formData["address"] = document.getElementById("address").value;
  formData["department"] = document.getElementById("department").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.id;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.firstName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.lastName;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.mobileNumber;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.address;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.department;

  cell6 = newRow.insertCell(6);
  cell6.innerHTML = `<a onClick="onEdit(this)" >Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("id").value;
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("mobileNumber").value = "";
  document.getElementById("address").value = "";
  document.getElementById("department").value = "";

  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;

  document.getElementById("id").value = selectedRow.cells[0].innerHTML;
  document.getElementById("firstName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
  document.getElementById("mobileNumber").value =
    selectedRow.cells[3].innerHTML;
  document.getElementById("address").value = selectedRow.cells[4].innerHTML;
  document.getElementById("department").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.id;
  selectedRow.cells[1].innerHTML = formData.firstName;
  selectedRow.cells[2].innerHTML = formData.lastName;
  selectedRow.cells[3].innerHTML = formData.mobileNumber;
  selectedRow.cells[4].innerHTML = formData.address;
  selectedRow.cells[5].innerHTML = formData.department;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("id").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}
