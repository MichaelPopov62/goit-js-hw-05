'use strict'

// створюю функцію стрілочну
const getTotalBalanceByGender = (users, gender) => {
    
// отримую масив, перепровіряю  
  console.log(users);

/* методом фильтрую користівачів згідно умови Змінну створюю для розуміння ланцюга,та можливості тестувати*/
  const filteradUser = users.filter((user) => user.gender === gender);

//методом додаю значення всіх єлементів в один результат
  const totalBalanse = filteradUser.reduce(
    (total, user) => total + user.balance,
    0
  );
  // повертаю значення
  return totalBalanse;
} 

// перевіряю

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
