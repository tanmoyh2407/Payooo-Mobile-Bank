document.getElementById("add_money_btn").addEventListener("click", function (e) {
    e.preventDefault();
    const selectBank = document.getElementById("select_bank").value;

    const accountNumber = document.getElementById("account_number").value;
    
    const addMoneyAmount = parseInt(document.getElementById("add_money_amount").value);
    
    const addMoneyPinNumber = document.getElementById("add_money_pin_number").value;
    
    const availableBalance = parseInt(document.getElementById("available_balance").innerText);
    
    const totalNewBalance = availableBalance + addMoneyAmount;

    document.getElementById("available_balance").innerText = totalNewBalance;
    
    console.log(totalNewBalance);

});