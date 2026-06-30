/*The Challenge: Order Batch Auditor
Write a JavaScript function named auditOrders that processes an array of order objects. The function needs to calculate the total revenue generated, identify any high-value orders, and flag orders that have missing data.

Business Rules
1.Calculate Total Revenue:
2.Loop through all orders and sum up the price of all orders where the status is "completed".
3.Do not include "pending" or "cancelled" orders in the revenue sum.
4.Identify High-Value Orders:
5.Any completed order with a price of $500 or more should have its orderId added to a highValueOrders array.
6.Flag Incomplete Orders:
7.If an order is missing a price (i.e., undefined, null, or missing entirely), its orderId should be added to a flaggedOrders array.

Expected Output
The function should return an object containing three keys: totalRevenue (rounded to 2 decimal places), highValueOrders (array of IDs), and flaggedOrders (array of IDs).*/


function auditOrders(orders)
{
    let TotalRevenue=0;
    const flaggedOrders = [];
    const highValueOrders = [];

for(const order of orders)
{
    if(order.price === undefined || order.price === null)
    {
        flaggedOrders.push(order.orderID);
        continue;
    }
    if(order.status==="completed")
    {
        TotalRevenue = TotalRevenue+order.price;
         if(order.price >= 500)
    {
        highValueOrders.push(order.orderID);
    }
    }
   
} return {
TotalRevenue: parseFloat(TotalRevenue.toFixed(2)),
highValueOrders: highValueOrders,
flaggedOrders: flaggedOrders
}
};

const sampleOrders = [
    {orderID:"ORD0001",status:"completed",price:1000},
    {orderID:"ORD0002",status:"pending",price:undefined},
    {orderID:"ORD0003",status:"Cancelled",price:500},
]

console.log(auditOrders(sampleOrders));

