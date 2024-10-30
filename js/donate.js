// noakhali
document.getElementById("btn-donate")
    .addEventListener('click', function(){
        // get input amount
        const donateAmount = getInputFieldValueById("input-amount-noakhali")
        // get title
        const title = document.getElementById("title-noakhali").innerText
        // Get the full current date and time
        const now = new Date();
        const fullDateTime = now.toString(); // Full date and time
        // add to history
        const div = document.createElement('div');
        div.innerHTML = `
            <h4 class="text-xl font-bold">${donateAmount} tk is donated for ${title} </h4>
            <p>Date: ${fullDateTime} </p>
        `
        document.getElementById("history-form").appendChild(div);

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
        const addDonateAmount = getTextFieldValueById("addDonateNoakhali")
        // const addDonateAmount = getTextFieldValueById("addDonate")

        const moneyDonate = donateAmount + addDonateAmount;

        document.getElementById("addDonateNoakhali").innerText = moneyDonate
        document.getElementById("input-amount-noakhali").value = '';

        // main balance 
        const mainBalance = balance - donateAmount
        document.getElementById("balance").innerText = mainBalance

        // alert("Successfully added money and updated balance.");
        document.getElementById("my_modal_1").showModal();
    });

// feni
document.getElementById("btn-donate-feni")
    .addEventListener('click', function(){
        // get input amount
        const donateAmount = getInputFieldValueById("input-amount-feni")
        // get title
        const title = document.getElementById("title-feni").innerText
        // Get the full current date and time
        const now = new Date();
        const fullDateTime = now.toString(); // Full date and time
        // add to history
        const div = document.createElement('div');
        div.innerHTML = `
            <h4 class="text-xl font-bold">${donateAmount} tk is donated for ${title} </h4>
            <p>Date: ${fullDateTime} </p>
        `
        document.getElementById("history-form").appendChild(div);
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
        const addDonateAmount = getTextFieldValueById("addDonateFeni")

        const moneyDonate = donateAmount + addDonateAmount;

        document.getElementById("addDonateFeni").innerText = moneyDonate
        document.getElementById("input-amount-feni").value = '';

        // main balance 
        const mainBalance = balance - donateAmount
        document.getElementById("balance").innerText = mainBalance

        // alert("Successfully added money and updated balance.");
        document.getElementById("my_modal_2").showModal();
    });

// Quata 
document.getElementById("btn-donate-quota")
    .addEventListener('click', function(){
        // get input amount
        const donateAmount = getInputFieldValueById("input-amount-quota")
        // get title
        const title = document.getElementById("title-quota").innerText
        // Get the full current date and time
        const now = new Date();
        const fullDateTime = now.toString(); // Full date and time
        // add to history
        const div = document.createElement('div');
        div.innerHTML = `
            <h4 class="text-xl font-bold">${donateAmount} tk is donated for ${title} </h4>
            <p>Date: ${fullDateTime} </p>
        `
        document.getElementById("history-form").appendChild(div);

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
        const addDonateAmount = getTextFieldValueById("addDonateQuota")

        const moneyDonate = donateAmount + addDonateAmount;

        document.getElementById("addDonateQuota").innerText = moneyDonate
        document.getElementById("input-amount-quota").value = '';

        // main balance 
        const mainBalance = balance - donateAmount
        document.getElementById("balance").innerText = mainBalance

        // alert("Successfully added money and updated balance.");
        document.getElementById("my_modal_3").showModal();
    });