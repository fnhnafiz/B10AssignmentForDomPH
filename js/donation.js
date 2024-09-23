// Blog & Home Button Click EventListener

// function blogPage() {
//   window.location.href = "blog.html";
// }
// function homePage() {
//   window.location.href = "index.html";
// }
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// Noakhali donate button
const noakhaliDonateBtn = document.getElementById("noakhali-donate-btn");
noakhaliDonateBtn.addEventListener("click", function () {
  const noakhaliInputField = parseFloat(
    document.getElementById("noakhali-input-field").value
  );

  if (noakhaliInputField > 0 && !isNaN(noakhaliInputField)) {
    const totalDonationAmount = parseFloat(
      document.getElementById("total-donation-available-Ammount").innerText
    );
    const noakhaliAvailableAmount = parseFloat(
      document.getElementById("noakhali-donation-available-amount").innerText
    );
    const totalAmount = totalDonationAmount - noakhaliInputField;
    document.getElementById("total-donation-available-Ammount").innerText =
      totalAmount.toFixed(2);
    // console.log(noakhaliAvailableAmount);
    const totalNoakhaliDonationAmount =
      noakhaliAvailableAmount + noakhaliInputField;
    document.getElementById("noakhali-donation-available-amount").innerText =
      totalNoakhaliDonationAmount.toFixed(2);
    // History Items in Here
    const noakhaliHistoryItem = document.createElement("div");
    noakhaliHistoryItem.className = "bg-white p-4 border space-y-3";
    noakhaliHistoryItem.innerHTML = `
  <p class="text-xl font-bold"> ${noakhaliInputField.toFixed(
    2
  )} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
  <p>${new Date()}</p>
  `;

    const historyContainer = document.getElementById("noakhali-history-item");
    historyContainer.insertBefore(
      noakhaliHistoryItem,
      historyContainer.firstChild
    );
  } else {
    document.getElementById("my_modal_5").classList.add("hidden");
    window.location.reload();
    alert("Try Again Later");
  }
});

// When Click History Button
const historyBtn = document.getElementById("history-button");
historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("bg-[#B4F461]");
  const donationBtn = document.getElementById("donation-button");
  donationBtn.classList.remove("bg-[#B4F461]");
  const mainSection = document.getElementById("mainSectionInBody");
  mainSection.classList.add("hidden");
  const historyList = document.getElementById("noakhali-history-item");
  historyList.classList.remove("hidden");
  const feniHistoryList = document.getElementById("feni-history-item");
  feniHistoryList.classList.remove("hidden");
  const quotaHistoryList = document.getElementById("quota-history-item");
  quotaHistoryList.classList.remove("hidden");
});
// When Click Donation Button
const donationButton = document.getElementById("donation-button");
donationButton.addEventListener("click", function () {
  donationButton.classList.add("bg-[#B4F461]");
  const historyButton = document.getElementById("history-button");
  historyButton.classList.remove("bg-[#B4F461]");
  const mainBodySection = document.getElementById("mainSectionInBody");
  mainBodySection.classList.remove("hidden");
  const historyList = document.getElementById("noakhali-history-item");
  historyList.classList.add("hidden");
  const feniHistoryList = document.getElementById("feni-history-item");
  feniHistoryList.classList.add("hidden");
  const quotaHistoryList = document.getElementById("quota-history-item");
  quotaHistoryList.classList.add("hidden");
});

// Feni Donation EventListener
const feniDonationBtn = document.getElementById("feni-donate-btn");
feniDonationBtn.addEventListener("click", function () {
  const totalAvailableAmount = getAvailableAmountId(
    "total-donation-available-Ammount"
  );
  const feniInputValue = getInputFieldValueId("feni-input-field");
  const feniAvailableAmount = getDonationTextValueId(
    "feni-donation-available-amount"
  );
  // total available Amount
  if (feniInputValue > 0 && !isNaN(feniInputValue)) {
    // feni Donation amount
    const totalFeniAmount = feniAvailableAmount + feniInputValue;
    document.getElementById("feni-donation-available-amount").innerText =
      totalFeniAmount.toFixed(2);
    const totalAmount = totalAvailableAmount - feniInputValue;
    document.getElementById("total-donation-available-Ammount").innerText =
      totalAmount.toFixed(2);
    // feni history List
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-4 border space-y-3";
    historyItem.innerHTML = `
    <p class = "font-bold text-xl">${feniInputValue.toFixed(
      2
    )} Taka is Donate for Flood Relief in Feni,Bangladesh</p>
    <p> ${new Date()}</p>
    
    `;
    const feniHistoryContainer = getHistoryListId("feni-history-item");
    feniHistoryContainer.insertBefore(
      historyItem,
      feniHistoryContainer.firstChild
    );
  } else {
    document.getElementById("my_modal_6").classList.add("hidden");
    window.location.reload();
    alert("Try Again Later");
  }
});

// Dnation for Quota

const quotaDonationBtn = document.getElementById("quota-donate-btn");
quotaDonationBtn.addEventListener("click", function () {
  const totalAmountQuota = getAvailableAmountId(
    "total-donation-available-Ammount"
  );
  const quotaInputvalue = getInputFieldValueId("quota-input-field");
  const quoataAvailableAmount = getAvailableAmountId(
    "quota-donation-available-amount"
  );
  if (quotaInputvalue > 0 && !isNaN(quotaInputvalue)) {
    const totalAmount = quoataAvailableAmount + quotaInputvalue;
    document.getElementById("quota-donation-available-amount").innerText =
      totalAmount.toFixed(2);
    const totalAvailableAmount = totalAmountQuota - quotaInputvalue;
    document.getElementById("total-donation-available-Ammount").innerText =
      totalAvailableAmount.toFixed(2);

    // Quota history List
    const quotahistoryItem = document.createElement("div");
    quotahistoryItem.className = "bg-white p-4 border space-y-3";
    quotahistoryItem.innerHTML = `
    <p class = "font-bold text-xl">${quotaInputvalue.toFixed(
      2
    )} Taka is Aid for Injured in the Quota Movement</p>
    <p> ${new Date()}</p>
    
    `;
    const quotaHistoryContainer = getHistoryListId("quota-history-item");
    quotaHistoryContainer.insertBefore(
      quotahistoryItem,
      quotaHistoryContainer.firstChild
    );
  } else {
    document.getElementById("my_modal_7").classList.add("hidden");
    window.location.reload();
    alert("Try Again Later");
  }
});
