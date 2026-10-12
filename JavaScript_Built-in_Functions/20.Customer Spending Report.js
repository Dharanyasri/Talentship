// Problem 10 — Customer Spending Report
// Input
const orders = [
  {
    customer: "Arun",
    status: "completed",
    items: [
      { product: "Laptop", price: 50000, qty: 1 },
      { product: "Mouse", price: 1000, qty: 2 }
    ]
  },
  {
    customer: "Priya",
    status: "completed",
    items: [
      { product: "Keyboard", price: 3000, qty: 1 },
      { product: "Mouse", price: 1000, qty: 1 }
    ]
  },
  {
    customer: "Arun",
    status: "completed",
    items: [
      { product: "Monitor", price: 15000, qty: 1 }
    ]
  },
  {
    customer: "Karthik",
    status: "cancelled",
    items: [
      { product: "Laptop", price: 50000, qty: 1 }
    ]
  },
  {
    customer: "Priya",
    status: "completed",
    items: [
      { product: "Monitor", price: 15000, qty: 2 }
    ]
  }
];
/*Task
Generate a customer spending report:

Ignore cancelled orders.
Calculate the total amount of every order.
Group spending by customer.
Calculate the total amount spent by each customer.
Calculate the number of completed orders for each customer.
Convert the grouped result into an array.
Keep customers who spent more than 20000.
Sort customers by total spending in descending order.
Find the highest-spending customer.
Expected Output
{
  customers: [
    {
      name: "Arun",
      totalSpent: 67000,
      orders: 2
    },
    {
      name: "Priya",
      totalSpent: 34000,
      orders: 2
    }
  ],
  highestSpender: "Arun"
} */
const completed = orders.filter(order => {
    return order.status === "completed";
});
const orderTotals = completed.map(order => {

    const total = order.items.reduce((acc, item) => {
        return acc + (item.price * item.qty);
    }, 0);

    return {
        customer: order.customer,
        total: total
    };
});
const grouped = orderTotals.reduce((acc, order) => {

    if (!acc[order.customer]) {
        acc[order.customer] = {
            totalSpent: 0,
            orders: 0
        };
    }

    acc[order.customer].totalSpent += order.total;
    acc[order.customer].orders++;

    return acc;

}, {});
const customers = Object.keys(grouped).map(customer => {

    return {
        name: customer,
        totalSpent: grouped[customer].totalSpent,
        orders: grouped[customer].orders
    };

});
const filteredCustomers = customers.filter(customer => {
    return customer.totalSpent > 20000;
});
filteredCustomers.sort((a, b) => {
    return b.totalSpent - a.totalSpent;
});
const highestSpender = filteredCustomers.reduce((highest, customer) => {

    return customer.totalSpent > highest.totalSpent
        ? customer
        : highest;

}).name;
const result = {
    customers: filteredCustomers,
    highestSpender: highestSpender
};

console.log(result);