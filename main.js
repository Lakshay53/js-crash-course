let users = [
  {
    username: "Lakshay53",
    email: "contact@lakshaysharma.xyz",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Iann Dior#1230",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Maddy",
    email: "maddy@lakshaysharma.xyz",
    password: "test1234",
    subscriptionStatus: "VIP",
    discordId: "Kenji#9592",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      if (users[i].password === password) {
        console.log(users[i]);
        console.log("the details are correct - you are now logged in");
      } else {
        console.log("not correct password");
      }
      return;
    }
  }
  console.log("couldn't find a email that matches");
}

login("maddy@lakshaysharma.xyz", "test1234");

function register(user){
    users.push(user)
}

register({
    username: 'Sia',
    email: 'Sia@lakshaysharma.xyz',
    password: 'sia123',
    subscriptionStatus: 'VIP',
    discordId: 'Sia#0001',
    lessonsCompleted: [0,1],
});

console.log(users)
