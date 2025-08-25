const validPin = 1234;

document.getElementById("add_money_btn").addEventListener("click", function (e) {
    e.preventDefault();
    const selectBank = document.getElementById("select_bank").value;

    const accountNumber = document.getElementById("account_number").value;
    
    const addMoneyAmount = parseInt(document.getElementById("add_money_amount").value);
    
    const addMoneyPinNumber = parseInt(document.getElementById("add_money_pin_number").value);
    
    const availableBalance = parseInt(document.getElementById("available_balance").innerText);

    if(accountNumber.length < 11){
        alert("Invalid Account Number");
        return;
    }
    
    if(addMoneyPinNumber != validPin){
        alert("Invalid Pin Number");
        return;
    }
    
    const totalNewBalance = availableBalance + addMoneyAmount;

    document.getElementById("available_balance").innerText = totalNewBalance;
    
    console.log(totalNewBalance);

});