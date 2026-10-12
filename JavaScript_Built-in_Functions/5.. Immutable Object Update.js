// Problem: Update address.city to "Bangalore" and increment loginCount by 1 without modifying the original object.

const user = {
  id: 7,
  name: "Priya",
  loginCount: 3,
  address: {
    city: "Chennai",
    pin: "600001"
  }
};
// Expected Output:

// {
//   id: 7,
//   name: "Priya",
//   loginCount: 4,
//   address: {
//     city: "Bangalore",
//     pin: "600001"
//   }
// }

const updateuser = {
  ...user,
  loginCount:user.loginCount+1,
  address:{
  ...user.address,city:"Bangalore"
}
};
console.log(user);
console.log(updateuser);