let incomingOrder = {
    customerName: "   Rahul Sharma   ",
    basePrice: "2499",
    orderDate: "2026-07-12",
};

incomingOrder.customerName = incomingOrder.customerName.trim().toLocaleUpperCase();
incomingOrder.basePrice = Number(incomingOrder.basePrice);

let finalPrice = incomingOrder.basePrice - incomingOrder.basePrice * 0.155;
finalPrice = finalPrice.toFixed(2);

let myTimeStamp = Date.now();
const myTimeStampinSec = Math.floor(Date.now() / 1000);

let formattedDate = new Date(incomingOrder.orderDate);
console.log(formattedDate.getMonth());

console.log(`Customer ${incomingOrder.customerName} bought sneakers for ₹${finalPrice}. System Epoch Time: ${myTimeStampinSec}`);










