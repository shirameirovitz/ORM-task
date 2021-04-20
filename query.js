const { MenuItem, Order } = require('./models');

//create menu
// MenuItem.bulkCreate(
//   [
//     {
//       name: 'Pizza',
//       price: 23,
//       vegetarian: true,
//       description:
//         'Flattened base of leavened wheat-based dough topped with tomatoes, cheese, mushrooms, onions, olives',
//     },
//     {
//       name: 'Pie',
//       price: 20,
//       vegetarian: true,
//       description:
//         'Baked dish which is usually made of a pastry dough casing that contains a filling of various sweet or savoury ingredients.',
//     },
//     {
//       name: 'Salad',
//       price: 37,
//       vegetarian: true,
//       description:
//         'Cold dish that includes leafy greens such as lettuce, arugula/rocket, kale and spinach.',
//     },
//     {
//       name: 'Hamburger',
//       price: 50,
//       vegetarian: false,
//       description:
//         'Sandwich consisting of cooked patties of ground beef meat, placed inside a sliced bun. served with cheese, lettuce, tomato, onion, pickles, bacon. condiments such as ketchup, mustard, mayonnaise, relish, ',
//     },
//     {
//       name: 'Schnitzel and Fries',
//       price: 40,
//       vegetarian: false,
//       description: 'A thin slice of meat fried in fat with fried potatoes',
//     },
//     {
//       name: 'Sushi',
//       price: 62,
//       vegetarian: false,
//       description:
//         'Prepared vinegared rice,with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables.',
//     },
//     {
//       name: 'Fish and chips',
//       price: 48,
//       vegetarian: false,
//       description:
//         'A hot dish consisting of fried fish in batter, served with chips.',
//     },
//     {
//       name: 'Beef soup',
//       price: 53,
//       vegetarian: false,
//       description:
//         'A soup with cooked beef, potatoes, onion, carrots and celery that have been cooked for 3 hours',
//     },
//   ],
//   { fields: ['name', 'price', 'vegetarian', 'description'] }
// );

//create Order
Order.bulkCreate(
  [
    {
      customer_name: 'Nitzan Listman',
      address: 'Dizingof, Tel Aviv',
      comment: 'hi!, my name is Nitzan',
    },
    {
      customer_name: 'Nitzan Listman',
      address: 'Dizingof, Tel Aviv',
    },
    {
      customer_name: 'Tomer Yair-Pur',
      address: 'Rothschild 6, Givatayim',
      comment: 'I really love computers',
    },
    {
      customer_name: 'Tomer Yair-Pur',
      address: 'Rothschild 6, Givatayim',
      comment: 'I lived in Australia a year',
    },
    {
      customer_name: 'Nir Fainshtein',
      address: 'Tamar 38, Eilat',
      comment: 'I Spend alot of time in creating apps',
    },
    {
      customer_name: 'Rotem Vilkovski',
      address: 'Hashalom 11, Raanana',
      comment: 'Once I hacked and got free hamburgers from BBB',
    },
    {
      customer_name: 'Shira Meirovitz',
      address: 'Shmaryahu Levin 20',
      comment: 'I love the summer',
    },
  ],
  { fields: ['customer_name', 'address', 'comment'] }
);
