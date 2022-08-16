let user = [{
    username: 'Lakshay53',
    email: 'contact@lakshaysharma.xyz',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'Iann Dior#1230',
    lessonsCompleted: [0, 1]
},
{
    username: 'Maddy',
    email: 'maddy@lakshaysharma.xyz',
    password: 'test1234',
    subscriptionStatus: 'VIP',
    discordId: 'Kenji#9592',
    lessonsCompleted: [0, 1, 2, 3]
}

]

function login(email, password){
    for (let i = 0; i < user.length; ++i){
        if (user[i].email === email){
            if (user[i].password === password){
                console.log(user[i])
                console.log('the details are correct - you are now logged in')
            }
            else{
                console.log('not correct password')
            }
        }
    }
}

login('maddy@lakshaysharma.xyz', 'test1234')
