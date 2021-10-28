let name = {
  firstName: "Randeep",
  lastName: "Rana",
  getFullName: function (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state);
  },
};
// When you normally access the function
name.getFullName("Haridwar", "Uttarakhand");

//Call Method- It Allow you to borrow functions from different objects

let name2 = {
  firstName: "Shivam",
  lastName: "Kumar",
};

name.getFullName.call(name2, "Banglore", "Bengluru");

//Apply Method - It works same as call method but it takes arguments in array.
let name3 = {
  firstName: "Suraj",
  lastName: "Rana",
};

name.getFullName.apply(name3, ["Haridwar", "Uttarakhand"]);

//Bind Method - It works the same like the bind method but instead of calling the function and giving the output, it return a new copy of the function and if you want to access get the values you have to invoke the function.

let name4 = {
  firstName: "Abhi",
  lastName: "Heera",
};

let name4GetFullName = name.getFullName.bind(name4, "Haridwar", "Uttarakhand");

//we can pass the parameters in below function as well
name4GetFullName();
