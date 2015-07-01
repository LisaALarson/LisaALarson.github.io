// collect inputs from user.
var partPrice = prompt("Enter the pre-tax price of all of the parts combined (without \"$\"). Ex: 9.99");
var taxPercent = prompt("Enter the tax percentage (without \"%\").  Ex: 7.25");
var laborPercent = prompt("Enter the percent mark-up for labor (without \"%\"). Ex: 60");

//document.write("partPrice: " + partPrice + "  ");
//document.write("taxPercent: " + taxPercent + "  ");
//document.write("laborPercent: " + laborPercent + "  ");

//function to calculate total customer bill.
function calculateTotalBill(partPrice, taxPercent, laborPercent){
	var taxOnParts=partPrice*(taxPercent*.01);
	//document.write("taxOnParts: "+taxOnParts + "  ");

	var partCostWithTax = parseFloat(partPrice) + parseFloat(taxOnParts);
	//document.write("partCostWithTax: " + partCostWithTax + "  ");

	var laborCost=partCostWithTax*(laborPercent*.01);
	//document.write("laborCost: " + laborCost);
return laborCost+partCostWithTax;
}

var totalBill = calculateTotalBill(partPrice, taxPercent, laborPercent);
// outputting total customer bill to the user.
document.write("The total bill for the customer is $"+totalBill);