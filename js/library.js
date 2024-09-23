// Donation Available Amoount
function getAvailableAmountId(id) {
  const availableAmount = parseFloat(document.getElementById(id).innerText);
  return availableAmount;
}

// Function create for feni
function getInputFieldValueId(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}
function getDonationTextValueId(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}
function getHistoryListId(id) {
  const historyContainer = document.getElementById(id);
  return historyContainer;
}
