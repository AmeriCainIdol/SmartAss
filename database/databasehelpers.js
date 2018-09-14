// const mongoose = require('mongoose');
// const config = require('../config/config')

// var db = mongoose.connection;

// //NOTE: uncomment to drop database
// // mongoose.connect('mongodb://localhost/fetcher', () => {
// //   mongoose.connection.db.dropDatabase();
// // })

// //FIXME: remember to add a process.env here for mlabs deploy
// const mongoDB = config.MONGODB_URI;
// //process.env.MONGODB_URI;
// //mongoose.Promise = global.Promise;
// mongoose.connect(mongoDB, {
//   keepAlive: true,
//   reconnectTries: Number.MAX_VALUE,
//   useMongoClient: true
// });


// db.on('error', function () {
//   console.log('mongoose connection error:');
// });

// db.once('open', function () {
//   console.log('mongoose connected successfully');
// });

// const userSchema = mongoose.Schema({
//   //this will give us no duplicates
//   user_id: {
//     type: Number,
//     unique: true,
//     index: true
//   },
//   username: String,
//   userEmail: String,
//   userPassword: String,
//   wins: Number,
//   losses: Number,
//   gamesPlayed: Number,
//   averageScorePerGame: Number,
// });


// const User = mongoose.Model('User', userSchema);


const User = require('./index').User;


//NOTE: the user has 3 fields, name, password, email so we're going to fill in the rest of the schema with this function, use this function to create the user that we'll pass into our database with saveUser

//we will use this as a default object for creating new users.
const defaultUserSchemaForNewUsers = {
  wins: 0,
  losses: 0,
  gamesPlayed: 0,
  averageScorePerGame: 0,
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
        window.alert('user already exists');
        //FIXME: do something else here maybe
      }
    });
}

//after the game finishes update the userObject
const updateUserAfterGame = (userObject) => {
  //find user in database
  User.find({ username: userObject.username }),
    (err, docs) => {
      if (err) {
        console.log('error updating user object: ', err)
      } else {

      }
    }
  //update user with stats from game
};





//NOTE: userSignedUp creates the object that we need to pass into the database
//NOTE: saveUser checks the database and saves the object that userSignedUp created
const dbHelpers = {
  userSignedUp,
  saveUser,
}

module.exports.dbHelpers = dbHelpers;


// var Item = mongoose.model('Item', itemSchema);

// let saveOne = (array) => {
//   return [array].map(e => {
//     return {
//       img_id: e.id,
//       earth_date: e.earth_date,
//       img_src: e.img_src,
//       rover_name: e.rover.name,
//       launch_date: e.rover.launch_date,
//       landing_date: e.rover.landing_date,
//       status: e.rover.status,
//       total_photos: e.rover.total_photos,
//       cameras: e.rover.cameras.length,
//       colorize_url: e.colorize_url,
//       dream_url: e.dream_url,
//     }
//   }).map(e => {
//     let schemaObject = new Item(e);
//     console.log('item going into the database: ', e);
//     schemaObject.save(
//       (error) => {
//         if (error) {
//           console.log('error saving one image')
//         } else {
//           console.log('image saved')
//         }
//       }
//     )
//   })
// }

// let saveAll = (object) => {
//   //parse the object
//   //const objectParsed = JSON.parse(object.body)
//   //console.log('object: ', object);
//   //console.log('objectParsed: ', objectParsed.body);
//   //pull what i want from the object by mapping the parsed object
//   const foundImage = object.latest_photos.map(e => {
//     //const foundImage = object.latest_photos.map(obj => {
//     //our repo model needs an object
//     //so we're going to create an object literal in this map function and return
//     //a new array of objects with the properties that we want.
//     //console.log(obj);
//     return {
//       img_id: e.id,
//       earth_date: e.earth_date,
//       img_src: e.img_src,
//       rover_name: e.rover.name,
//       launch_date: e.rover.launch_date,
//       landing_date: e.rover.landing_date,
//       status: e.rover.status,
//       total_photos: e.rover.total_photos,
//       cameras: e.rover.cameras.length,
//     }
//   });

//   foundImage.map(e => {
//     let schemaObject = new Item(e);
//     schemaObject.save(
//       (error) => {
//         if (error) {
//           console.log(`${chalk.red.bold('database/index.js : ')}${error}`)
//         } else {
//           console.log(
//             `${chalk.green.bold('images saved ')}`
//           )
//         }
//       }
//     )
//   })
// }

// module.exports.Item = Item;
// module.exports.saveOne = saveOne;
// module.exports.saveAll = saveAll;