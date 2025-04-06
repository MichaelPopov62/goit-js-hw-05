'use strict'

 // оголошую стрілочну функцію
const sortByDescendingFriendCount = (users) => {
  
//  приймаю масив , перевіряю   
  console.log(users);
  
// повертаю масив користувачів який створюється після сортування
  return users.toSorted((a, b) =>
    
/*визначив умови сортування , це за спаданням.Так як ми сортуєм за кількостю друзів
використовуєм синтаксис (-) */
    b.friends.length - a.friends.length);
};
  
// перевіряю
  console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
[
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
    gender: "female"
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
    gender: "female"
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
    gender: "female"
  },
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
    gender: "male"
  }
]