// Noakhali donate
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
      totalAmount;
    // console.log(noakhaliAvailableAmount);
    const totalNoakhaliDonationAmount =
      noakhaliAvailableAmount + noakhaliInputField;
    document.getElementById("noakhali-donation-available-amount").innerText =
      totalNoakhaliDonationAmount;
  } else {
    alert("Try Again Later");
  }
});
