Function
ChangeCurrency()
{
    let Amount = document.getElementById("Amount").value;
    let FromCurrency = document.getElementById("FromCurrency").value;
    let ToCurrency = document.getElementById("ToCurrency").value;
    let Result;

    if (FromCurrency == "VND" && ToCurrency == "USD") {
        Result = "Result: " + (Amount / 23000) + "Đ";
    } else if (FromCurrency == "VND" && ToCurrency == "USD") {
        Result = "Result: " + (Amount * 23000) + "$";
    } else if (FromCurrency == "VND") {
        Result = "Result: " + Amount + "Đ";
    } else (FromCurrency == "USD")
    {
        Result = "Result: " + Amount + "$";
    }
    document.getElementById("Result").innerHTML = Result;
}
