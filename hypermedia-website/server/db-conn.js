import { databasePassword } from '../server/personalDB.js'
const { Sequelize, DataTypes } = require('sequelize')
import axios from 'axios'

const password = databasePassword
// Development
const db = new Sequelize(
  'postgres://postgres:'+password+'@localhost:5432/hypermedia-test'
)
// Production
// const pg = require('pg')
// pg.defaults.ssl = true
// const db = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })




/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
  const Article = db.define(
    'article',
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      summary: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Comment = db.define(
    'comment',
    {
      content: DataTypes.TEXT,
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      underscored: true,
    }
  )
  const Person = db.define (
      'person',
      { 
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        biography: DataTypes.TEXT,
        summary: DataTypes.STRING,
        image: DataTypes.STRING,
      }
  )
  // Creating the 1 -> N association between Article and Comment
  // More on association: https://sequelize.org/master/manual/assocs.html
  Article.hasMany(Comment, { foreignKey: 'article_id' })
  Person.hasMany(Article, {foreignKey: 'person_id'} )
  Article.belongsTo(Person)
  db._tables = {
    Article,
    Comment,
    Person,
  }
}

/**
 * Function to insert some fake info in the database
 */
async function insertFakeData() {
  const { Article, Comment } = db._tables
  // Create the first Article
  const firstArticle = await Article.create({
    title: 'Such good article',
    summary: 'This is the summary of the first good article',
    content: 'The content of the first article',
    image:
      'https://www.meme-arsenal.com/memes/98c0fb217e3b35d20518647668cea5dc.jpg',
  })
  await Article.create({
    title: 'Why Fallout 76 is broken',
    summary: '..no really... why?',
    content:
      'After more than 50 hours plundering the irradiated wasteland of Fallout 76, the greatest mystery still lingering is who this mutated take on Fallout is intended for. Like many of Vault-Tec’s underground bunkers, Bethesda’s multiplayer riff on its post-nuclear RPG series is an experiment gone awry. There are bright spots entangled in this mass of frustratingly buggy and sometimes conflicting systems, but what fun I was able to salvage from the expansive but underpopulated West Virginia map was consistently overshadowed by the monotony of its gathering and crafting treadmill.\nOn the surface, Fallout 76 is another dose of Bethesda’s tried-and-true open-world RPG formula on a larger-than-ever map that’s begging to be explored. As you emerge from Vault 76 you’ll start in a relatively peaceful forest and venture out into more dangerous pockets of the irradiated wasteland. My favorite is traveling the lengths of the Cranberry Bog, where the pinkish-red fields are seemingly inviting from afar but turn out to be full of a snaking system of trenches and alien forests that hide the worst horrors of the wasteland, but there are many more.',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const comment1 = await Comment.create({
    content: 'Great article! Keep posting',
  })
  const comment2 = await Comment.create({
    content: 'Such Doge.',
  })

  const thirdArticle = await Article.create({
    title: 'Such great article',
    summary: 'This is the summary of the third good article',
    content: 'The content of the third article',
    image:
      'hthttps://www.bmw.it/content/dam/bmw/common/home/teaser/bmw-i4-mini-hometeaser-1680x756.jpg.asset.1615561624175.jpgtps://pbs.twimg.com/media/CB6OrVUUAAAU4eQ.jpg',
  })

  // Adding the first comment to the first article
  await firstArticle.addComment(comment1.id)
  // Adding the second comment to the first article
  await firstArticle.addComment(comment2.id)
}

async function seedPeople(){
  
  /**
   * data contains these important variables in the field data.results:
   * gender (string),
   * name (object divided into title, first, last),
   * location( if needed contains other fields such as city, state, country),
   * dob (object {age and date}),
   * picture (object which contains {large, medium, thumbnail})
   * nationality
   */
  const { data }= await axios.get(`https://randomuser.me/api/`);
  // twitter bio generator generates a short bio of a person
  const summary  = await axios.get(`http://www.twitterbiogenerator.com/generate`);
 
  //gets first result in an array of results
  var res = data.results[0];

  const { Article, Person } = db._tables
  var heOrShe = '';
  if (res.gender === 'male'){
    heOrShe = 'He';
  } else {
    heOrShe = 'She';
  }
  await Person.create(
    {
      name: res.name.first,
      surname: res.name.last,
      biography: res.name.first + ` ` + res.name.last + ` is a 30-year-old chef at chain restaurant who enjoys golf, spreading fake news on Facebook and photography. Being generous and creative, `+ res.name.first +
      `can also be very disloyal and a bit dull. ` + heOrShe +
      ` started studying food science at college but never finished the course. Physically,`+res.name.first+`  is in good shape. ` + heOrShe+` is very tall with pale skin, brown hair and green eyes. 
      `+heOrShe+` grew up in an upper class neighbourhood. `+res.name.first+`'s best friend is a chef at chain restaurant called Susie Torres. They have a very firey friendship.`,
      summary: summary.data,
      image: res.picture.large
    }
  )
}

/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition
  defineDatabaseStructure()
  // Synchronize Sequelize with the actual database. force = true removes all current tuples in db
  await db.sync({ force: false })
  // Call the function to insert some fake data
  // await insertFakeData()
  // for(var i = 0; i<8; i++)
  // await seedPeople()
  return db
}

export default initializeDatabase


// get a random person through an api provided from https://randomuser.me
// async function getPerson(){
//   // go to the below api and see the json file provided
//   const { data } = await axios.get(`https://randomuser.me/api/`);
//     console.log("String of data gotten from rand user" , data.results)
//     console.log("String of name of rand user" , data.results[0])  
// }
