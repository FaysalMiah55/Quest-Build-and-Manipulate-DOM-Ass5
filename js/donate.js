document.getElementById("btn-donate")
    .addEventListener('click', function(){
        // get input amount
        const donateAmount = getInputFieldValueById("input-amount")
        // get main balance
        const balance = getTextFieldValueById("balance")
        
        if (donateAmount > balance) {
            alert("Donation exceeds available balance");
            return;  // Stop further execution if the donation exceeds the balance
        }
        if (isNaN(donateAmount) || donateAmount <= 0) {
            alert("Failed to Add Money");
            return;  // Stop further execution if input is not valid
        }
        const addDonateAmount = getTextFieldValueById("addDonate")

        const moneyDonate = donateAmount + addDonateAmount;

        document.getElementById("addDonate").innerText = moneyDonate
        document.getElementById("input-amount").value = '';

        // main balance 
        const mainBalance = balance - donateAmount
        document.getElementById("balance").innerText = mainBalance

        alert("Successfully added money and updated balance.");
        // document.getElementById("my_modal_1").showModal();
    });