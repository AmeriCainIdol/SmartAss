const User = require('./index').User;


//NOTE: the user has 3 fields, name, password, email so we're going to fill in the rest of the schema with this function, use this function to create the user that we'll pass into our database with saveUser

//we will use this as a default object for creating new users.
const defaultUserSchemaForNewUsers = {
  wins: 0,
  losses: 0,
  gamesPlayed: 0,
  averageWinRate: 0,
}
const userSignedUp = (userObject) => {
  //create the default user object to be saved into the database when a user signs up
  let userObjectForDatabase =
    Object.assign({}, defaultUserSchemaForNewUsers, userObject);
  //this will return a new object prepared to go into the database.
  return userObjectForDatabase;
}

//NOTE: take the object that userSignedUp created and pass into this function
//save a new user into the database
const saveUser = (userObject) => {
  //first check database and see if user exists
  User.find({ username: userObject.username },
    (err, docs) => {
      if (err) {
        //if not, create the user and save it to database
        const newUser = new User(userObject);
        newUser.save(
          (error) => {
            if (error) {
              console.log(`error saving new user: ${error}`)
            } else {
              console.log(`new user succesfully saved`)
            }
          })
      } else {
        //the user exists
        console.log('DAMN');
        //window.alert('user already exists');
        //FIXME: do something else here maybe
      }
    });
}

//after the game finishes update the userObject
const updateUserAfterGame = (userObject) => {
  //find user and update
  User.update({ username: userObject.username }, {
    //FIXME: did user win or lose?
    wins: Number,
    losses: Number,
    gamesPlayed: Number(userObject.gamesPlayed++),
    averageWinRate: Number(userObject.wins / userObject.gamesPlayed),
  },
    (err, numberAffected) => {
      if (err) {
        console.log('error updating user after game :', err)
      } else {
        console.log('# of documents affected after game: ', numberAffected)
      }
    })
};






//NOTE: userSignedUp creates the object that we need to pass into the database
//NOTE: saveUser checks the database and saves the object that userSignedUp created
const dbHelpers = {
  userSignedUp,
  saveUser,
  updateUserAfterGame,
}

module.exports.dbHelpers = dbHelpers;


