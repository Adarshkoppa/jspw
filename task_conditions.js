/*Requirements
==============
Calculate Membership Discount (if / else if / else):
Bronze: 5% discount
Silver: 10% discount
Gold: 15% discount
Non-members: 0% discount*/

/*Apply Promo Code (if):
If the promo code is "FREEFALL", take an additional $10 off after the membership discount is applied.*/

/*Determine Shipping Cost (switch):
Based on the state string:
"NY": $5 shipping
"CA": $8 shipping
"TX": $10 shipping
Any other state: $15 shipping*/

function calculateFinalprice(basePrice,membershipLevel,promoCode,state){
    let finalPrice=basePrice;
if(membershipLevel==="Gold")
{
    finalPrice-=basePrice*0.15;
}

else if(membershipLevel==="Silver")
{
    finalPrice-=basePrice*0.10;
}
else if(membershipLevel==="Broze")
{
    finalPrice-=basePrice*0.05;
}

if(promoCode=="FREEFALL")
{
    finalPrice-=10;
}

switch(state)
{
    case "NY":
        finalPrice+=5;
        case "CA":
        finalPrice+=8;
        case "TX":
            finalPrice+=10;
            break;
            default:
                finalPrice+=15;}
                return parseFloat(finalPrice.toFixed(2));

}
console.log(calculateFinalprice(500,"Gold","FREEFALL","NY"));



/*The Challenge: Dynamic Promo Code & Delivery Calculator
Write a JavaScript function named calculateTotal that determines the final amount a customer needs to pay based on their cart value, a promo code, and their membership status.

Business Rules
Delivery Fee Rules:
1.If the order amount is $100 or more, shipping is Free.
2.If the order amount is less than $100, shipping costs $10.

Exception: If the customer is a Premium Member (isPremium = true), shipping is always Free, regardless of the order amount.

Promo Code Rules:
1.Code "SAVE10": Gives a 10% discount on the order amount (applied before shipping fees).
2.Code "FLAT20": Gives a flat $20 discount (applied before shipping fees).
Note: If the flat $20 discount makes the order amount negative, the order amount becomes $0.
3.Any other code or an empty string provides 0% discount.

Expected Output
The function should return the final calculated price rounded to 2 decimal places.*/

function calculateTotal(cartValue,promoCode,isPremium){
let orderAmount=cartValue;var shippingCost=0;
if(promoCode=="SAVE10")
{
    cartValue-=cartValue*0.1;
}
else if(promoCode=="SAVE20" && orderAmount>=20)
{
    cartValue-=20;
}
if(cartValue>=100 || isPremium)
{
   let shipingCost=0;
    orderAmount=cartValue+shippingCost;
}
else if(orderAmount<100)
{
   let shippingCost=cartValue+10;
    orderAmount=cartValue+shippingCost;
}
return parseFloat(orderAmount.toFixed(2));
}

console.log(calculateTotal(1000,"None","true"));
console.log(calculateTotal(1000,"SAVE20","true"));
console.log(calculateTotal(1000,"SAVE10","false"));
console.log(calculateTotal(20,"SAVE10","true"));
console.log(calculateTotal(20,"SAVE20","true"));
console.log(calculateTotal(20,"SAVE10","true"));
console.log(calculateTotal(10,"SAVE20","true"));