import axios from 'axios'
import { databasePassword } from '../server/personalDB.js'
const { Sequelize, DataTypes } = require('sequelize')

const password = databasePassword
// Development
const db = new Sequelize(
  'postgres://postgres:' + password + '@localhost:5432/hypermedia-test'
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
  const Person = db.define('person', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    biography: DataTypes.TEXT,
    summary: DataTypes.STRING,
    image: DataTypes.STRING,
  })
  // No attributes because it only contains the keys to and from people and area (Person1 <-> Area1)
  const PeopleAreas = db.define('people_areas', {})
  const ServicesAreas = db.define('services_areas', {})
  const Area = db.define('area', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    details: DataTypes.TEXT,
    overview: DataTypes.STRING,
  })
  const Service = db.define('service', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    details: DataTypes.TEXT,
    overview: DataTypes.STRING,
  })
  // Creating the 1 -> N association between Article and Comment
  // More on association: https://sequelize.org/master/manual/assocs.html
  Article.hasMany(Comment, { foreignKey: 'article_id' })
  Person.hasMany(Article, { foreignKey: 'person_id' })
  Article.belongsTo(Person)
  Person.belongsToMany(Area, { through: PeopleAreas })
  Area.belongsToMany(Person, { through: PeopleAreas })
  Service.belongsToMany(Area, { through: ServicesAreas })
  Area.belongsToMany(Service, { through: ServicesAreas })
  db._tables = {
    Area,
    Article,
    Comment,
    Person,
    PeopleAreas,
    Service,
    ServicesAreas,
  }
}

/**
 * Function to insert some fake info in the database
 */
async function insertFakeData() {
  const { Area, Article, Comment, Service } = db._tables

  // ETION's ARTICLES
  const art1 = await Article.create({
    title: 'How video game play may provide learning, health, social benefits',
    summary: `Playing video games, including violent shooter games, may boost children's learning, health and social skills, according to a review of research in American Psychologist.`,
    content: `The study comes out as debate continues among psychologists and other health professionals regarding the effects of violent media on youth. An APA task force is conducting a comprehensive review of research on violence in video games and interactive media and will release its findings later this year.

      "Important research has already been conducted for decades on the negative effects of gaming, including addiction, depression and aggression, and we are certainly not suggesting that this should be ignored," says Isabela Granic, PhD, of Radboud University Nijmegen in The Netherlands, lead author of the article. "However, to understand the impact of video games on children's and adolescents' development, a more balanced perspective is needed."
      
      While one widely held view maintains that playing video games is intellectually lazy, such play actually may strengthen a range of cognitive skills such as spatial navigation, reasoning, memory and perception, according to several studies reviewed in the article. This is particularly true for shooter video games, which are often violent, the authors found. A 2013 meta-analysis found that playing shooter video games improved a player's capacity to think about objects in three dimensions just as well as academic courses designed to enhance these same skills, according to the study.
      
      "This has critical implications for education and career development, as previous research has established the power of spatial skills for achievement in science, technology, engineering and mathematics," Granic says.
      
      This enhanced thinking was not found when playing other types of video games, such as puzzles or role-playing games.
      
      `,
    image:
      'https://www.apa.org/images/2014-02-upfront-video-games_tcm7-165899.jpg',
  })
  const art2 = await Article.create({
    title: 'Why is kids’ video game Roblox worth $38 billion?',
    summary: `When the children’s digital game Roblox launched on the New York Stock Exchange last week, the company’s share price rapidly took off. By the end of the day, it was valued at US$38 billion.
    How can a game for kids be worth so much?
    `,
    content: `Roblox has been around since 2004, but it’s often overshadowed by the more popular and easily understandable game Minecraft. Bought by Microsoft in 2014 for a comparatively paltry US$2.5 billion, Minecraft players create and explore pixelated worlds and share them with friends. In Roblox, players can create and share entire games — or play any of the millions of games created by others in the community.

      Some of the most popular games are My Restaurant, which lets you build and run your own restaurant, Theme Park Tycoon 2, a play on the Rollercoaster Tycoon Series, or Tower Defence Simulator, which lets you fight waves of enemies with your friends.
      Roblox is ultimately a playground for designing games.

Using Roblox Studio, anyone can create virtual worlds and games that can then be easily released on the Roblox platform, instantly becoming available to millions of players.

This user-created content can then be played by other players. Roblox has an embedded system for making small purchases within the platform, and creators receive 30% of the revenue. In 2020, Roblox paid out US$328.7 million this way.
Some creators earn as much as US$50,000 per month. According to Roblox, there were more than 300 creators who earned over US$100,000 in 2020.

Roblox’s optimistic market valuation is based on the sheer number of creators developing on its platform: as many as 20 million a year. While most games can quickly go in and out of fashion, Roblox’s community of developers will keep pumping out fresh content. This is great for Roblox, which benefits from what games scholar Julian Kucklich calls the “precarious playbour” of the creators.

`,
    image:
      'https://store-images.s-microsoft.com/image/apps.23943.13510798883386282.e6f02eb7-a760-453e-8d79-46d4ec74807e.84e78792-8a8f-4ae3-a7a0-709c45161cf1?mode=scale&q=90&h=600&w=400',
  })
  const art3 = await Article.create({
    title: 'How online gaming has become a social lifeline',
    summary:
      'Gamers have known for a long time something that everyone else is starting to figure out: there’s community connection on the other side of a screen',
    content: `“Our entire lives have led up to this,” my friends joked with me in mid-March.

      I was sitting in my tiny New York City apartment, panicky and coming to terms with the reality that I’d be trapped inside for weeks, potentially months. But my friends reassured me that as lifelong video game enthusiasts, the prospect of sitting on a sofa in front of a TV for an interminable stretch would be a cakewalk. After all, gamers like me do already spend plenty of time in front of our screens all on our own.
      
      But even sitting alone for hours, gamers aren’t necessarily isolated. In many cases, far from it. With the rise of social media, gamers – particularly in Gen Z – have perfected the art of building communities in and around video games. Gamers don’t just compete with strangers on the internet, but forge genuine, enduring friendships.
      
      In this age of long-haul social distancing and mental-health strains, gamers have long had a tool that’s now bringing some relief to those who’ve never picked up a controller before. The explosive growth of gaming during the pandemic has shown that many have found a new outlet for much-needed connection in isolation.
      When shelter-in-place orders came down, millions of people around the world turned to tech-fuelled diversions to stay in touch with family and friends, like Netflix Party film viewings, Zoom chats and video games.

      There’s the outer-space saboteur mobile game Among Us (which 100 million people have downloaded); and the Jackbox games that mix video chatting and elements of classics like Pictionary, and that have acted as stand-ins for in-person happy hours. Perhaps the most well known is Animal Crossing: New Horizons. Released in March, Nintendo’s record-breaking Switch game that tripled the company’s profits drops players in a tiny tropical town filled with talking anthropomorphic animal neighbours who help them redecorate their home, catch butterflies and grow fruit trees.

      Gaming has skyrocketed during the pandemic, reaching people who’d play every now and then, or even those who had previously snubbed it entirely. In the US alone, four out of five consumers in one survey played video games in the last six months, according to a new study by NPD, an American business-research firm. And at a time in which many industries are in dire straits, sales in gaming are booming. Global revenue is expected to jump 20% this year to $175bn (£130bn).`,
    image: 'https://ychef.files.bbci.co.uk/1280x720/p091j3dx.webp',
  })
  const Author = await seedPerson()

  await art1.setPerson(Author.id)
  await art2.setPerson(Author.id)
  await art3.setPerson(Author.id)

  // EXAMPLES
  const firstArticle = await Article.create({
    title: 'Such good article',
    summary: 'This is the summary of the first good article',
    content: 'The content of the first article',
    image:
      'https://www.meme-arsenal.com/memes/98c0fb217e3b35d20518647668cea5dc.jpg',
  })
  await firstArticle.setPerson(1)
  const secondArticle = await Article.create({
    title: 'Why Fallout 76 is broken',
    summary: '..no really... why?',
    content:
      'After more than 50 hours plundering the irradiated wasteland of Fallout 76, the greatest mystery still lingering is who this mutated take on Fallout is intended for. Like many of Vault-Tec’s underground bunkers, Bethesda’s multiplayer riff on its post-nuclear RPG series is an experiment gone awry. There are bright spots entangled in this mass of frustratingly buggy and sometimes conflicting systems, but what fun I was able to salvage from the expansive but underpopulated West Virginia map was consistently overshadowed by the monotony of its gathering and crafting treadmill.\nOn the surface, Fallout 76 is another dose of Bethesda’s tried-and-true open-world RPG formula on a larger-than-ever map that’s begging to be explored. As you emerge from Vault 76 you’ll start in a relatively peaceful forest and venture out into more dangerous pockets of the irradiated wasteland. My favorite is traveling the lengths of the Cranberry Bog, where the pinkish-red fields are seemingly inviting from afar but turn out to be full of a snaking system of trenches and alien forests that hide the worst horrors of the wasteland, but there are many more.',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  secondArticle.setPerson(2)
  const ThirdArticle = await Article.create({
    title: 'Such great article',
    summary: 'This is the summary of the third good article',
    content: 'The content of the third article',
    image:
      'https://www.bmw.it/content/dam/bmw/common/home/teaser/bmw-i4-mini-hometeaser-1680x756.jpg.asset.1615561624175.jpgtps://pbs.twimg.com/media/CB6OrVUUAAAU4eQ.jpg',
  })
  ThirdArticle.setPerson(3)
  const comment1 = await Comment.create({
    content: 'Great article! Keep posting',
  })
  const comment2 = await Comment.create({
    content: 'Such Doge.',
  })
  // Etion's area
  const Etion = await Area.create({
    title: `Gaming and Entertainment`,
    image: `https://www.translationsuniverse.com/images/video-game-streaming-subscription.jpg`,
    details:
      `In our area you can see many articles detailing the newest trends and changes in the field Gaming and Entertainment, detailing the newest advancements in graphics and videogame design .` +
      ` What attracts a person and keeps him bounded for hours? What is the fine balance between too little reward and too much reward? What are some bad design examples in entertainment?` +
      ` These and many more articles in the following links: `,
    overview: `Area when you can learn more about games' design and how it affects people.`,
  })
  // Sorry for being ego-centric
  // This method adds the people with id 9-8-7 to my area (titled: gaming)
  Etion.addPerson(9)
  Etion.addPerson(8)
  Etion.addPerson(7)

  const EtionService1 = await Service.create({
    title: `Introducing Hatgimini's STIDIA gaming service`,
    image: `https://www.gstatic.com/stadia/gamers/landing_page/assets/v2_play_anywhere_hitman_2x.png`,
    details:
      `Stidia is Hatgimini’s gaming platform that lets you instantly play video games on compatible screens that you already own. Stream games directly to your favourite compatible devices. Games are ready wherever you have Internet, without waiting for installs, downloads or updates. ` +
      `Similar to the way that you already stream TV shows or music, Stidia streams your games directly to your desktop, laptop, compatible phone or tablet. To play on TVs, grab Stidia Premiere Edition so that you can play using a Stidia Controller. With Stidia, you’re ready to play in seconds.
      ` +
      `If you wonder about the price, Stidia Pro offers a subscription that unlocks a growing collection of games to play on Stidia. Try Stidia today and you’ll start with a one-month trial of Stidia Pro, including an assortment of games that you can play right now (automatically €9.99/mo incl. vat, cancel at any time. Subscription auto-renews unless cancelled. Additional terms apply.). Build a library of games that you can access as long as you’re a Stidia Pro subscriber. More games will be added to the Stidia Pro library for you to claim every month. You’ll also get other benefits such as monthly discounts or rewards for your profile.
      ` +
      ``,
    overview: `Join in the possibility to play any game on any platform without downloading the games!`,
  })
  const EtionService2 = await Service.create({
    title: `Digital Entertainment Exchange (DEX)`,
    image: `https://www.gstatic.com/stadia/gamers/landing_page/assets/v2_play_anywhere_hitman_2x.png`,
    details:
      `DEX is a sophisticated reporting tool that incorporates best practices to analyze sales and performance while reducing costs. Grow your business and stay one step ahead.` +
      `Global box office revenue is forecast to hit $50 billion by 2020, with China, India, and the United States representing the largest markets. Movies play a key role in the entertainment experience, but as customers want more content on demand, the market needs to adapt.

    Opportunities are endless in this rapidly-changing market, but being able to identify and act on them comes with a series of challenges. Many organizations are burdened with:
    
    Complex deal terms
    Multiple vendors
    Software licenses to aggregate a functional theatrical distribution platform
    Costs related to maintaining and upgrading disparate systems
    Major and independent studios, distributors and theaters need better options to manage distribution processes that deliver flexibility, operating efficiency, and complete control. This means getting the right content to the right audiences at the right time.
    
    DEX automates the complicated theatrical distribution process while reducing costs and minimal changes to current business-specific processes. By implementing best practices, DEX has helped organizations stay ahead of the curve while driving innovation and optimization through high-level reporting and invaluable performance data.

    DEX delivers:

    Booking management: multi-format bookings, holdovers, and release planning
    Digital cinema support: virtual-print fee calculations, digital print and key requests
    Territory configuration support: financial reporting according to country-specific regulations
    Financial processing: box-office data, payments and cash applications
    Security: maximum security and data protection

    We’ll work with you to define an intelligent service model that handles your day-to-day distribution and operational demands. Our collaborative, hands-on approach starts with your strategic goals in mind and ends with world-class solutions that will transform your business.


     `,
    overview: `Gain flexibility, operating efficiency, and complete control of your theatrical distribution`,
  })

  EtionService1.addArea(Etion)
  EtionService2.addArea(Etion)

  // Adding the first comment to the first article
  await firstArticle.addComment(comment1.id)
  // Adding the second comment to the first article
  await firstArticle.addComment(comment2.id)
}

async function seedPerson() {
  /**
   * data contains these important variables in the field data.results:
   * gender (string),
   * name (object divided into title, first, last),
   * location( if needed contains other fields such as city, state, country),
   * dob (object {age and date}),
   * picture (object which contains {large, medium, thumbnail})
   * nationality
   */
  const { data } = await axios.get(`https://randomuser.me/api/`)
  // twitter bio generator generates a short bio of a person
  const summary = await axios.get(`http://www.twitterbiogenerator.com/generate`)

  // gets first result in an array of results
  const res = data.results[0]

  const { Person } = db._tables
  let heOrShe = ''
  if (res.gender === 'male') {
    heOrShe = 'He'
  } else {
    heOrShe = 'She'
  }
  const Author = await Person.create({
    name: res.name.first,
    surname: res.name.last,
    biography:
      res.name.first +
      ` ` +
      res.name.last +
      ` is a 30-year-old chef at chain restaurant who enjoys golf, spreading fake news on Facebook and photography. Being generous and creative, ` +
      res.name.first +
      `can also be very disloyal and a bit dull. ` +
      heOrShe +
      ` started studying food science at college but never finished the course. Physically,` +
      res.name.first +
      `  is in good shape. ` +
      heOrShe +
      ` is very tall with pale skin, brown hair and green eyes. 
      ` +
      heOrShe +
      ` grew up in an upper class neighbourhood. ` +
      res.name.first +
      `'s best friend is a chef at chain restaurant called Susie Torres. They have a very firey friendship.`,
    summary: summary.data,
    image: res.picture.large,
  })
  return Author
}

// eslint-disable-next-line no-unused-vars
async function seedDatabase() {
  for (let i = 0; i < 8; i++) await seedPerson()
  await insertFakeData()
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
  //await seedDatabase()

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
