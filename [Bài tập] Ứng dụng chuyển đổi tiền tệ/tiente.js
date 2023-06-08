function ChangeCurrency(){
    let Amount = document.getElementById("Amount").value;
    let FromCurrency = document.getElementById("FromCurrency").value;
    let ToCurrency = document.getElementById("ToCurrency").value;
    let Result;

    if (FromCurrency == "VND" && ToCurrency == "USD") {
        Result = "Result: " + (Amount / 23000) + "Đ";
    } else if (FromCurrency == "USD" && ToCurrency == "VND") {
        Result = "Result: " + (Amount * 23000) + "$";
    } else {
        Result = "Result: " + Amount;
    }
    document.getElementById("Result").innerHTML = Result;
}
