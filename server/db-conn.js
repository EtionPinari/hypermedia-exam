import axios from 'axios'
// import { databasePassword } from '../server/personalDB.js'
const { Sequelize, DataTypes } = require('sequelize')

// const password = databasePassword
// Development
// const db = new Sequelize(
//   'postgres://postgres:' + password + '@localhost:5432/hypermedia-test'
// )
// Production
const pg = require('pg')
pg.defaults.ssl = true
const db = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})

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
  const ArticleAreas = db.define('article_areas', {})

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
  // Comment was never implemented
  Article.hasMany(Comment, { foreignKey: 'article_id' })
  // One to many Relationships
  Person.hasMany(Article, { foreignKey: 'person_id' })
  Article.belongsTo(Person)
  Area.hasMany(Article, { foreignKey: 'area_id' })
  Article.belongsTo(Area)
  Service.belongsTo(Person)
  Person.hasMany(Service, { foreignKey: 'person_id' })
  // Many to many Relationships
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
    ArticleAreas,
  }
}

/**
 * Function to insert some fake info in the database
 */
async function insertFakeData() {
  const { Area, Article, Service } = db._tables

  // Add ARTICLES (3) here
  const EtionArticle1 = await Article.create({
    title: 'How video game play may provide learning, health, social benefits',
    summary: `Playing video games, including violent shooter games, may boost children's learning, health and social skills, according to a review of research in American Psychologist.`,
    content: `The study comes out as debate continues among psychologists and other health professionals regarding the effects of violent media on youth. An APA task force is conducting a comprehensive review of research on violence in video games and interactive media and will release its findings later this year.

      "Important research has already been conducted for decades on the negative effects of gaming, including addiction, depression and aggression, and we are certainly not suggesting that this should be ignored," says Isabela Granic, PhD, of Radboud University Nijmegen in The Netherlands, lead author of the article. "However, to understand the impact of video games on children's and adolescents' development, a more balanced perspective is needed." <br>
      
      <h3>Are gamers lazy?</h3>While one widely held view maintains that playing video games is intellectually lazy, such play actually may strengthen a range of cognitive skills such as spatial navigation, reasoning, memory and perception, according to several studies reviewed in the article. This is particularly true for shooter video games, which are often violent, the authors found. A 2013 meta-analysis found that playing shooter video games improved a player's capacity to think about objects in three dimensions just as well as academic courses designed to enhance these same skills, according to the study.
      
      "This has critical implications for education and career development, as previous research has established the power of spatial skills for achievement in science, technology, engineering and mathematics," Granic says.
      
      This enhanced thinking was not found when playing other types of video games, such as puzzles or role-playing games.
      
      `,
    image:
      'https://www.wanderglobe.org/wp-content/uploads/2018/08/5-Video-Games-That-your-Kids-Should-Play.jpg',
  })
  const EtionArticle2 = await Article.create({
    title: 'Why is kids’ video game Roblox worth $38 billion?',
    summary: `When the children’s digital game Roblox launched on the New York Stock Exchange last week, the company’s share price rapidly took off. By the end of the day, it was valued at US$38 billion.
    How can a game for kids be worth so much?
    `,
    content: `Roblox has been around since 2004, but it’s often overshadowed by the more popular and easily understandable game Minecraft. Bought by Microsoft in 2014 for a comparatively paltry US$2.5 billion, Minecraft players create and explore pixelated worlds and share them with friends. In Roblox, players can create and share entire games — or play any of the millions of games created by others in the community.

      Some of the most popular games are My Restaurant, which lets you build and run your own restaurant, Theme Park Tycoon 2, a play on the Rollercoaster Tycoon Series, or Tower Defence Simulator, which lets you fight waves of enemies with your friends.
      Roblox is ultimately a playground for designing games.

Using Roblox Studio, anyone can create virtual worlds and games that can then be easily released on the Roblox platform, instantly becoming available to millions of players.

<h4>How the game works?</h4>This user-created content can then be played by other players. Roblox has an embedded system for making small purchases within the platform, and creators receive 30% of the revenue. In 2020, Roblox paid out US$328.7 million this way.
Some creators earn as much as US$50,000 per month. According to Roblox, there were more than 300 creators who earned over US$100,000 in 2020.

Roblox’s optimistic market valuation is based on the sheer number of creators developing on its platform: as many as 20 million a year. While most games can quickly go in and out of fashion, Roblox’s community of developers will keep pumping out fresh content. This is great for Roblox, which benefits from what games scholar Julian Kucklich calls the “precarious playbour” of the creators.

`,
    image: 'https://wallpapercave.com/wp/wp1815435.png',
  })
  const EtionArticle3 = await Article.create({
    title: 'How online gaming has become a social lifeline',
    summary:
      'Gamers have known for a long time something that everyone else is starting to figure out: there’s community connection on the other side of a screen',
    content: `“Our entire lives have led up to this,” my friends joked with me in mid-March.

      I was sitting in my tiny New York City apartment, panicky and coming to terms with the reality that I’d be trapped inside for weeks, potentially months. But my friends reassured me that as lifelong video game enthusiasts, the prospect of sitting on a sofa in front of a TV for an interminable stretch would be a cakewalk.<br> After all, gamers like me do already spend plenty of time in front of our screens all on our own.
      
      But even sitting alone for hours, gamers aren’t necessarily isolated. In many cases, far from it. With the rise of social media, gamers – particularly in Gen Z – have perfected the art of building communities in and around video games. <h4> It is a simulation of real life:</h4>Gamers don’t just compete with strangers on the internet, but forge genuine, enduring friendships.
      
      In this age of long-haul social distancing and mental-health strains, gamers have long had a tool that’s now bringing some relief to those who’ve never picked up a controller before. The explosive growth of gaming during the pandemic has shown that many have found a new outlet for much-needed connection in isolation.
      When shelter-in-place orders came down, millions of people around the world turned to tech-fuelled diversions to stay in touch with family and friends, like Netflix Party film viewings, Zoom chats and video games.

      There’s the outer-space saboteur mobile game Among Us (which 100 million people have downloaded); and the Jackbox games that mix video chatting and elements of classics like Pictionary, and that have acted as stand-ins for in-person happy hours. Perhaps the most well known is Animal Crossing: New Horizons. Released in March, Nintendo’s record-breaking Switch game that tripled the company’s profits drops players in a tiny tropical town filled with talking anthropomorphic animal neighbours who help them redecorate their home, catch butterflies and grow fruit trees.

      Gaming has skyrocketed during the pandemic, reaching people who’d play every now and then, or even those who had previously snubbed it entirely. In the US alone, four out of five consumers in one survey played video games in the last six months, according to a new study by NPD, an American business-research firm. And at a time in which many industries are in dire straits, sales in gaming are booming. Global revenue is expected to jump 20% this year to $175bn (£130bn).`,
    image: 'https://ychef.files.bbci.co.uk/1280x720/p091j3dx.webp',
  })
  const LisaArticle1 = await Article.create({
    title: `Accelerate Hydrogen: how to 'rewrite global energy map'`,
    summary: `Recharge and sister NHST title Upstream publish the first issue of new e-newsletter that will 'separate hype from the hard truths' in the rapidly evolving global H2 market`,
    content: `<p>NHST Media Group titles <i>Recharge</i> and <i>Upstream</i> have launched a new weekly e-newsletter to cover the rapidly evolving global hydrogen market.</p>
    <p>The second in our <i>Accelerate</i> energy transition e-newsletter series, <i>Accelerate Hydrogen</i> will report on the sector seen as set to “rewrite the global energy map” as governments and industry gear up strategies to reach carbon-neutrality by mid-century.</p>
    <p>“We have been covering the hydrogen market closely for a number of years now, but the step-up in industrial and governmental interest in the sector that we have seen in the past 12 months has been extraordinary,” said <i>Recharge</i> Editor-in-Chief Darius Snieckus.</p>
    <p>“For a sense of the speed of progress in this space: a few years ago, analysts were talking about green – renewables-based – hydrogen become cost-competitive with blue – gas-fed, with carbon capture – by 2035, by last year it became 2030 and now some are forecasting the cost crossover will happen before then.</p>
    <p>“Another clear indicator is in the size of projects now being developed, <a href="https://www.rechargenews.com/energy-transition/global-green-hydrogen-pipeline-exceeds-200gw-heres-the-24-largest-gigawatt-scale-projects/2-1-933755"><b>with over 20 multi-billion-dollar giga-scale green hydrogen schemes</b></a> moving forward at last count,” Snieckus added. </p>
    <p>“What’s often missing from the hydrogen discussion is context in what is a highly complex emerging industry. When is hydrogen the most cost-effective solution, and when is it a bad idea? Should we only use renewables-powered green hydrogen or welcome the ‘low-carbon’ blue variety? Is it possible to produce all the hydrogen we need from wind and solar power when the world desperately needs massive volumes of renewable energy to decarbonise the power sector?</p>
    <p>Plus, we have exclusive news of a potential <b><a href="https://www.rechargenews.com/energy-transition/-our-plasma-electrolysers-will-cut-the-cost-of-green-hydrogen-by-a-factor-of-three-/2-1-1032895">market-changing electrolyser technology</a></b> that could cut the cost of green hydrogen by a factor of three; an exclusive long-read on <b><a href="https://www.rechargenews.com/energy-transition/-our-plasma-electrolysers-will-cut-the-cost-of-green-hydrogen-by-a-factor-of-three-/2-1-1032895">a 3GW floating wind and hydrogen megaproject</a></b> that could slash offshore oil production emissions in the UK North Sea ‘by half’, and much more.</p>`,
    image:
      'https://images-global.nhst.tech/image/eGE5QkRsL2NYT1BFZHhsTnJsQ1RKVm5CRjYyTlhtdDNUZUw4MDhaVjBFMD0=/nhst/binary/e00c333d3f0ffc422445eac244228087?image_version=640',
  })
  const LisaArticle2 = await Article.create({
    title:
      'Concentrated Solar Power should be considered given the need for manageable energy and storage',
    summary: `José Barragán is the Vice President of Renewables Technical Services at ACWA Power and Hatgemini is honored to have a talk about energy consumption with him.`,
    content: `<p>Mr. José Barragán is the Vice President of Renewables Technical Services at ACWA Power. Founded in 2004 in Saudi Arabia, ACWA Power is a developer, investor, and operator of power generation and desalinated water production plants and is currently present in 13 countries in the Middle East, Africa, Central Asia, and Southeast Asia. It has 64 assets in operation, construction, or advanced development, producing close to 42GWof power and&nbsp;6.4&nbsp;million m<sup>3</sup>&nbsp;/day of desalinated water.&nbsp;ACWA Power&nbsp;is accelerating energy transition globally and is the most active in the Concentrating Solar Power (CSP) sector.</p>
    <p>The company holds more than 560 MW of CSP in Operation, located in South Africa and Morocco,&nbsp;and another 800 MW under construction in Dubai (UAE) and South&nbsp;Africa.&nbsp;Recently, ACWA Power announced the financial closure of a new CSP plant, Redstone, in South Africa. Mr. Barragan, who has actively participated in this project, kindly accepted to respond to our following questions:</p>
    <p><strong>1.Mr. Barragán, could you please explain how Redstone works? What is the technology? Is there any difference with the last CSP that came online in Chile Cerro Dominador?</strong></p>
    <p>The Redstone project is based on central tower technology with molten salts. The plant uses two molten salts tanks, one kept cold at 300 degrees C and one kept hot at 565 degrees C. The molten salt is pumped from the cold tank to the hot tank going through the solar receiver. The solar receiver is located at the top of a central tower where solar radiation is concentrated by a &nbsp;solar field with more than 41000 heliostats (25 m2 each). The molten salts are heated up to 565 degrees in the receiver panels (600 MWth net absorbed power) and stored in the hot tank (12 h capacity). &nbsp;Independently, the molten salts are pumped from the hot tank to the cold tank going through a steam generator system (SGS). In the SGS, the feed-water coming from a rankine steam cycle is heated up and converted to superheated and reheated steam and feeds a steam turbine which is connected to an electrical generator producing 115 MWe gross power. This power can be dispatched whenever needed, as long as there is sufficient energy content in the hot tank. Conceptually, this technology is the same as in the Moroccan Noor 3 project, the Chilean Cerro Dominador project, and the tower unit in the UAE DEWA CSP (Noor Energy 1) project. The main particularity of the Redstone project is that the strategy of operation which aims to maximise the plant load factor during the peak time from 4.30 pm to 9.30 pm when a higher tariff is applicable. The plant is expected to be dispatchable from 5 am to 10 pm as the PPA. Therefore, the plant will not be operated on a baseload 24h basis as the Cerro Dominador project in Chile even though it is capable of doing so.</p>
    <p><strong>2.The project was announced a few years ago, however, the financial closure only came recently. What is the reason for this delay? Is due to any technical challenge? Or, on the contrary, is due to an external factor?</strong></p>
    <p>It has taken time to launch the execution of Redstone and both ACWA Power and our partners made tremendous efforts to financially close the project despite the challenges faced. There were a number of reasons that contributed to the delays; however, these were not related to the CSP technology itself. Due to the perseverance of ACWA Power and our partners, we were able to achieve the financial close of the project. This milestone would not have been possible without the continued support of various entities involved and we truly appreciate their active collaboration in this venture.</p>
    <p><strong>3.In Spain, the Government has announced 5 GW of new CSP until 2030, with the first auction already in 2021. How does ACWA Power perceive the Spanish market, in which they are not present?</strong></p>
    <p>At ACWA Power our focus remains on reliably and responsibly delivering power and desalinated water at a low cost in the countries we operate in. We are currently&nbsp;present in 13 countries and will continue to seek opportunities for growth.</p>`,
    image:
      'https://www.evwind.es/wp-content/uploads/2020/01/Dubai-concentrated-solar-power-672x372.jpg',
  })

  const LisaArticle3 = await Article.create({
    title: 'Energy bars on the rise',
    summary:
      'Hatgemini takes a look at the rapidly growing and evolving energy bar market in the latest edition of our Innovation Spotlight feature',
    content: `<p>So-called “energy bars”, i.e. products with health and nutritional benefits, are one of the fastest-growing segments within the snack bar market. Health-conscious consumers are the main growth driver, as they are increasingly on the lookout for all-natural, sustainable products that support their well-being.</p>
    <p>Especially in times of global pandemic, with people all around the globe having more time for themselves, a great share of consumers is rethinking their approach to health, nutrition, and sustainability. Bar producers are following suit with expanded portfolios that boost the traditional bar market – with many varieties of shapes, tastes, and packaging styles.</p>
    <p>Manufacturers of all sizes – from start-ups and small enterprises to large companies and multinational corporations – are benefitting from the current trend. However, the production of health and nutrition bars differs from conventional chocolate and snack bars production in a number of ways, which has a significant impact on the manufacturing, handling, and packaging process:</p>
    <ul><li>Bars with natural ingredients can spoil more easily; consequently, health and nutrition bar packaging needs to offer better protection than for conventional bars</li>
	<li>Using natural ingredients like nuts and dried fruits means product sizes can vary from bar to bar, which poses a particular challenge for product feeding and handling</li>
	<li>Allergen-free products are subject to stringent hygienic standards. Combined with their oftentimes sticky consistency, this calls for extensive cleaning and maintenance processes.</li>
</ul><p>Learn more: <a href="http://info.syntegon.com/production-and-packaging-of-health-bars" target="_blank">http://info.syntegon.com/packaging-of-energy-bars</a></p>
    `,
    image:
      'https://packagingeurope.com/downloads/9795/download/syntegon2-01.07.jpg?cb=59f8b57186b5794f644e4162e188bf1f',
  })
  const DeepArticle1 = await Article.create({
    title:
      'Ensure your business is secure and quick to respond in the event of a breach.',
    summary:
      'malware doesn’t only threaten data security – it can also have a direct impact on sustainability initiatives and impede enterprise climate targets. There are numerous attacks that cause detrimental effects on the environment:',
    content: `DDOS attacks
    DDOS attacks consume extortionate amounts of energy. The attack often starts with that suspicious link or download that you accidently click on. Before you know it, you have a botnet on your hands, rapidly sending fake traffic to a server or website. As the network becomes flooded with malicious traffic, it’s no longer able to operate normally. The malware quickly captures workstations causing computers across the network to run at full capacity, firing more and more requests to the server. Eventually, the server goes into overdrive as it tries to handle the mass of data requests it’s receiving.   
    From a business perspective, this means services and operations can grind to a halt. But from an energy perspective, it means consumption levels accelerate exponentially, undermining efficiency measures that may have been in place.
    Production line sabotage
    Cyber criminals are increasingly targeting production lines in an attempt to break into a company’s network. This can spell disaster for a factory, potentially rendering its entire production unfit for purpose. Malware can jeopardize the robust quality control procedures that ensure a product is being produced safely and meets standards.
    For example, a factory producing automotive chemicals will have various digital checkpoints along the production line to ensure the product meets regulated levels. Malware can damage these checkpoints, making them unreliable and ineffective. This has a considerable knock-on effect: entire batches of product become unusable and must be discarded, the energy used becomes obsolete, and ultimately pollution and waste levels increase.
    This was seen recently when one of the spirits brands suffered a ransomware attack. While the breach compromised the security of customer data, it also ground its factories to a halt. The drinks brand was unable to prove that its liquor met regulations and so had to discard batches of product.    
    Sustainable infrastructure warfare
    For organizations that operate in sustainable infrastructure, any attacks will have a direct and devastating effect on the environment – a fact that certainly does not escape attackers, particularly the growing number of state sponsored ones.
    Take, for example, a water works company. A water works ensures that water is safe and prevents pollution from entering our rivers. It processes water to ensure it is clean and will monitor pollution levels at all times. If that system is compromised, then the water is no longer guaranteed to be clean or free of pollution, creating astronomical environmental, economic, and societal consequences.
    By actively protecting infrastructure against malicious attacks, we are simultaneously protecting the environment – and the communities it supports.
    An end-to-end solution
    Given the widespread impact of a potential attack, organizations cannot afford any gaps in their cybersecurity. The most effective way to protect your business is through end-to-end encryption, which enables you to manage the full lifecycle of your security.
    At Hapgemini, we split our end-to-end solution into three key areas:
    Define your security objectives and procedures; ensure cybercriminals can’t get through the back door.
    Protect your assets; implement the right security solutions for your business.
    Defend the enterprise; detect and react in advance of cyberattacks.
    By taking this approach, you can ensure your business is secure and quick to respond in the event of a breach. The sooner you act on malware, the faster you stop the spread of infection and avoid the associated risks. It’s this action that ensures cybersecurity can be an enabler for sustainability.
    `,
    image:
      'https://www.onoratoinformatica.it/wp-content/uploads/2020/12/ransomware-virus-onorato.png',
  })
  const DeepArticle2 = await Article.create({
    title:
      'Is your cybersecurity insurance dynamic enough for today’s threat landscape?',
    summary:
      'To provide effective insurance, and claim their stake within this growing market, insurance providers must pivot their models to ensure that they can effectually assess cyber-risk.',
    content: `Providing cover is not straightforward. Cyber-attacks are not one-size-fits-all, making them harder to quantify from an insurance standpoint. Moreover, new methods of attack are constantly emerging. With causes ranging from human error to ransomware to identity theft, insurers must design extensive and agile policies to ensure they are providing sufficient protection.
    Traditionally, insurers have provided cover on a sum-insured basis or conducted physical – and also time-consuming – audits. For the fast-moving world of cybersecurity, this is inadequate, either being inaccurate at the point of underwriting or outdated once completed and resulting in risk levels that do not match what has been logged.
    To provide effective insurance, and claim their stake within this growing market, insurance providers must pivot their models to ensure that they can effectually assess cyber-risk. To do this, they must offer competitive price policies, manage risk of the policy portfolio continuously, and also qualify legitimate claims and protect themselves from fraud.
    HatGemini’s Global Cyber Insurance offer
    HatGemini has developed a Global Cyber Insurance offer that gives insurers a competitive advantage in meeting and exceeding the needs of today’s organizations looking for cover. It combines our expertise in cyber risk management and compliance, threat intelligence, and the ability to assess a client’s external risk posture in near real-time.
    We are unique in our ability to harness digital insights to assist policyholders in understanding and improving their security posture. We also help insurance providers manage their insured portfolio effectively. We do this by addressing challenges across the entire cyber insurance life-cycle: rapid risk assessments at the point of sale, tracking the risk posture of the policyholder throughout the insured period, and providing timely interventions to mitigate both the risk of a cyberattack and the likelihood of a claim being made.
    Lower risk, higher profitability
    Using our heritage in technology and innovation strategy, we use tools such as automation and real-time data analysis to provide effective and dynamic cover. We automate the security risk assessment, using data analytics to evaluate multiple risk vectors and information from historical breaches associated with the potential policyholder. This not only significantly reduces the length of the risk assessment; it improves accuracy too.
    As part of the onboarding process we provide a score report to the policyholder, providing details of security risks they are exposed to and recommendations on how to address these risks.
    Once the policy is live, we help insurers to stay aware of a policyholder’s changing risk profile, in real-time, allowing for timely interventions that prevent security breaches and subsequent claims. By proactively evaluating threats, HatGemini offers 24×7 notifications, security news and security alerts with comprehensive, actionable intelligence.
    If and when breaches do occur, HatGemini helps to sift through the ambiguity of pay-outs and claims. We assist insurers with a claim period risk report, detailing the risk posture of the policyholder. We also help insurers to identify the root causes of a breach and give guidance in setting up forensic direction.
    In today’s digital world, cybersecurity risks are inevitable and complex. But cybersecurity insurance doesn’t have to be. Just as cybercriminals are using more intelligent solutions and tools, so too should insurance providers – enabling them to stay one step ahead
    Contact HatGemini today for additional details about our unique – and uniquely effective – services for cyber insurance carriers and policyholders.
    `,
    image:
      'https://i2.res.24o.it/images2010/Editrice/ILSOLE24ORE/NOVA24/2021/02/04/Nova24/ImmaginiWeb/Ritagli/AdobeStock_265280757-Cybersecurity-kk9B--1020x533@IlSole24Ore-Web.jpg',
  })

  const DeepArticle3 = await Article.create({
    title: 'Testing the Security of your Applications',
    summary: 'Applications are your business. Better secure them',
    content: `With 73% of security breaches occurring at the application layer, identifying vulnerabilities has become a priority for organizations worldwide. Many organizations now depend on the rapid release of critical applications to remain competitive. Our Application Security Testing solution makes it simple and fast to initiate fundamental security controls, whether you have just a few applications or are looking to launch a comprehensive security program across your organization.
    With Capgemini’s Application Security Testing service:
    You simply purchase a subscription and our experts systematically test all your applications – Web-based, mobile, or business applications, proprietary or open source – prior to release.
    You get a balanced mix of manual and automated testing depending on the level of service you need, using best-in-class tools and processes from Capgemini and world-class partners.
    You receive actionable results via a single, intuitive dedicated portal. The portal gives you the ability to scan requests, review results, and view dashboards that help you understand your application security posture and build the most appropriate remediation strategy.
    You can customize your dashboards in terms of business priorities or technical complexity.
    You ensure objectivity by separating the testing process from development, and you get a whole new level of scalability and repeatability.
    You get broader and more accurate coverage because we combine top-tier analyst tools, continuously updated threat intelligence, and expertise based on many years of testing experience to detect vulnerabilities – all delivered by security experts based in multiple geographies.
    You have the flexibility to test wherever you undertake development activity, ensuring responsiveness to your time pressures and enabling faster
    `,
    image: 'https://miro.medium.com/max/750/1*wYU7HChNgP-Mt8iZvdiFxQ.jpeg',
  })

  const MichaelArticle1 = await Article.create({
    title:
      'Reinventing Customer Experience through emotionally realistic insurer/policyholder engagement',
    summary:
      'It’s now more common for customers to research and buy on the internet rather than in person for many important purchases in their lives.',
    content: `I purchased my first insurance policy when agents and brokers were the primary gateways to coverage. An agent assessed my needs and factors such as age, lifestyle habits, and income, and, then, offered policy recommendations. This approach created a system of trust and transparency that forged long-term insurer/customer relationships.

    Times have changed.  And while I can still turn to an agent in-person or virtually, I can also go to a comparison website for policy recommendations, visit an insurer’s corporate website for specific information, or use a mobile app to purchase a policy and track details.
    
    It’s now more common for customers to research and buy on the internet rather than in person for many important purchases in their lives. Our World Insurance Report 2020 survey found that 62% of millennials and 64% of Gen X and older generations transact online – everything from purchasing clothes to paying bills. And insurance policyholders are no exception as they frequently use digital tools in addition to traditional channels to research, compare, and buy insurance products online.
    Easy-to-use websites and apps are needed to ensure hassle-free digital interactions so users can effortlessly complete tasks such as purchasing or updating policies, filing claims, or paying premiums. Straightforward, clearly written policy terms and comparisons of different plans can help customers make swift purchase decisions. Recently, I explored the artificial intelligence (AI) chatbot, Maya, from American InsurTech Lemonade. Maya was easy to navigate and offered instant quotes.

    Purchasing an insurance policy, however, can be an emotional as well as a financial decision. As policyholders, we interact with our insurers at critical times – an accident, serious illness, or property damage/loss – that necessitate smooth and hassle-free communication and emotionally intelligent, reassuring engagement. And that’s why it is so essential for insurers to humanize the digital customer experience (CX).

    However, it does seem a bit counterintuitive to ‘humanize’ digital customer experience.  How is this even possible? This is where emotional AI fits in as it can recognize and respond to human feelings. Early examples of emotional AI are Siri and Alexa and they have paved the way for people to become more comfortable with chatbots and voice assistants to answer their questions.
    `,
    image: 'https://economictimes.indiatimes.com/photo/60334367.cms',
  })

  const MichaelArticle2 = await Article.create({
    title:
      'Digital innovation empowers banks to deliver superior customer experience during unprecedented times',
    summary:
      'How to collaborate effectively with FinTechs to deliver innovative customer experiences.',
    content: `While technology’s role has been rising in banking as more customers demand omnichannel digital interactions, the COVID-19 pandemic has upped the ante for digital customer experience. Our recently published research report, COVID-19 and the financial services consumer, revealed that now more than ever FS customers want digital experiences to make transactions and engage with firms from the safety of their homes – and these customers aren’t shy about going to FinTechs or challenger banks to get the digital experience they are craving. For banks too, technology has emerged as a critical enabler to keep businesses up and running, as it facilitates work-from-home capabilities.

    For banks, digital banking is a win-win. Not only does it improve customer experience (CX), it also increases operational efficiencies and revenue opportunities. In fact, many banks have undertaken digital transformation initiatives intended to increase internet and mobile banking while pursuing core banking modernization. Banks are embracing emerging technologies such as artificial intelligence, the cloud, and analytics to manage rising operational costs, evolving customer expectations, and cybercrime.
    
    The key challenge for banks before the pandemic was to learn how to collaborate effectively with FinTechs to deliver innovative customer experiences to keep customers coming back for more and compete head on with competition from BigTechs and challenger banks. For all, leveraging emerging technologies to win customers was the number-one strategy to fuel these strategic collaborations.
    
    And then along came COVID-19, and the need to shelter in place to save lives. It was no longer a race to deliver excellent customer experience through digital, it was a necessity. Now, more than ever, is the time to find the right path to deliver innovative digital customer experience – and that path is Open X.
    `,
    image:
      'https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/0004360_bank-leumi-le-israel-bm-global-banking-606-tel-aviv-yafo_493.jpeg',
  })

  const MichaelArticle3 = await Article.create({
    title:
      'Financial firms leverage automation to improve both their top and bottom lines',
    summary:
      'These days, commercial banks are enthusiastically investing in automation to gain a competitive technological advantage through simplified operations.',
    content: `Since the global financial crisis ended nearly a decade ago, commercial banks have been transforming to focus on operational risk, enhance compliance, prevent fraudulent transactions, and improve processes and efficiency by streamlining repetitive tasks.

    Disruption by FinTech firms and non-financial challengers is driving banking incumbents to innovate and improve agility. They need to find ways to efficiently process and onboard customers, bolster customer satisfaction through quicker response time, and optimize routine and manual processes.
    With 56% of global annual bank revenue generated by corporations, it was no surprise that of the US$78 billion invested in FinTech firms in 2016 more than half was earmarked for corporate banking innovation. FinTech firms are challenging commercial banking incumbents with novel new solutions around payments, trade finance, and advanced analytics.

    Around the globe, banks seek to automate and streamline their existing processes in data and documentation to reduce risk, increase accuracy, lower operating costs, and save time on manual and repetitive tasks.

    For example, Bank of America worked with Houston-based FinTech startup HighRadius to develop an artificial intelligence (AI) solution to support corporate clients’ process account receivables. The application was designed mainly for clients who manage a high volume of payments in which remittance information is either missing or comes in separately from the payment. The solution leverages optical character recognition and machine learning to identify payments and match them with associated remittance data – a strategic innovation with the potential to reduce cost and improve cash forecasting.

    Commercial banks are using AI on the front-end to secure customer identities, mimic the work of employees, enable seamless interoperability, and engage customers across channels. On the back-end, automated solutions can support staff, power processes, and pre-empt problems.
    `,
    image:
      'https://www.swissbusinessacademy.com/wp-content/uploads/2021/03/23475526491_b817003b38_o.jpg',
  })
  // redundant
  const Author = await seedPerson()

  // Add you AREA here
  const Etion = await Area.create({
    title: `Gaming and Entertainment`,
    image: `https://www.translationsuniverse.com/images/video-game-streaming-subscription.jpg`,
    details:
      `In our area you can see many articles detailing the newest trends and changes in the field Gaming and Entertainment, detailing the newest advancements in graphics and videogame design .` +
      ` What attracts a person and keeps him bounded for hours? What is the fine balance between too little reward and too much reward? What are some bad design examples in entertainment?` +
      ` These and many more articles in the following links: `,
    overview: `Area where you can learn more about games' design and how it affects people.`,
  })

  Etion.addPerson(12)
  Etion.addPerson(11)
  Etion.addPerson(10)

  const Lisa = await Area.create({
    title: `Energy and Utilities`,
    image: `https://avansys-usa.com/wp-content/uploads/2012/05/Energy_EN-Header.jpg`,
    details:
      `Energy and utility companies face a level of disruption not seen in decades. New, cash-rich competitors` +
      `are disrupting the market. Renewables prices continue to ratchet downward. New energy-storage technologies` +
      `are rapidly becoming industrialized. Meanwhile, technology – and opportunity – are moving to the edge. `,
    overview: `Area where you can learn utilities and energy and how it affects people.`,
  })

  Lisa.addPerson(1)
  Lisa.addPerson(2)
  Lisa.addPerson(3)

  const Deep = await Area.create({
    title: `Electronics & High Tech`,
    image: `https://image.freepik.com/premium-vector/high-tech-technology-geometric_29971-384.jpg`,
    details: `The industry and world faces an onslaught of new challenges, increasing competition, and added levels of scrutiny with respect to data and privacy. Business models focused exclusively on product development and exploiting economies of scale are no longer viable in the current environment. Instead, businesses must transform products to drive deeper customer engagement by supplementing goods with high-value, relevant services that deliver a business outcome. This shift to “servitization” will help differentiate their offerings and protect the business from replication by competitors.`,
    overview: `Area when you can learn more about electronics and high tech.`,
  })

  Deep.addPerson(4)
  Deep.addPerson(5)
  Deep.addPerson(6)

  // Michael's area
  const Michael = await Area.create({
    title: `Banking & Capital Markets`,
    image: `https://res-1.cloudinary.com/fieldfisher/image/upload/c_lfill,dpr_1,g_auto,h_194,w_344/f_auto,q_auto/v1/services/corporate/corporate_finance_stocksscreen_599773376_medium_v221ji`,
    details:
      `To transform, profit and grow, organizations need to create new customer engagement benchmarks, find new ways to generate revenue and` +
      `continue to reduce expense. The world’s leading banks and capital market firms collaborate with Capgemini to reimagine their business models` +
      `to meet the evolving demands from the market, customers, partners and the regulators.` +
      `We put innovation at the center of everything we do and help organizations future-proof their businesses ` +
      `by developing capabilities across these key five pillars of the Digital Enterprise of the Future: 
      Orchestrating an Open Ecosystem, Becoming an Intelligent Bank, Driving Customer Centricity,
      Enhancing Go-To-Market Agility and Ensuring Business Resilience.`,
    overview: `Area where you can learn the Banking and Capital Markets industry and how it affects people.`,
  })

  Michael.addPerson(7)
  Michael.addPerson(8)
  Michael.addPerson(9)

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
    image: `https://www.capgemini.com/be-en/wp-content/uploads/sites/17/2019/12/Cap-for-web-03.jpg?w=960`,
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

  const LisaService1 = await Service.create({
    title: `Next-Gen AMI`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRY6bXJ7EXFKGuIcWwTs2ThwDiwTgnHlyvQQ&usqp=CAU`,
    details:
      `Deploying a next-generation AMI solution that will serve as the foundation` +
      `for energy transition efforts and enable digital and industry technologies is a priority for many` +
      `utilities. Without further investment, organizations may  not fully realize the advanced benefits from` +
      `first wave deployments.` +
      `HatGemini helps utility organizations address these issues and prepare for the future with Next-Gen AMI,` +
      ` a future resilient, integrated system of smart meters, communication services, modern applications and ` +
      `data management technologies. Building on the original promise of the initial wave, we work with clients` +
      `to plan, design, deploy and operate a next-generation AMI that will enable modern technologies, define new ` +
      `business benefits and address the challenges of brownfield implementation. For utilities that are ` +
      `planning or have recently implemented their initial AMI deployment, Next-Gen AMI enhances the value` +
      `of AMI with technology modernization and experience from the initial wave.`,
    overview: `Unlocking the service, efficiency and security opportunities of a next-generation advanced metering infrastructure`,
  })
  const LisaService2 = await Service.create({
    title: `u2es Transformation`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpU5I7ras5D43SiL-e2eQTx89MwH_gP-9a1g&usqp=CAU`,
    details: `Our u2es Transformation strategy guides your utilities company through your transition 
     into an energy services company. u2es defines a transformation strategy that is based on three 
     pillars of success: Customer Engagement, Operational Excellence and New Business Models.
      Leveraging the results of our rigorous assessment, we create a business case and define a detailed 
      roadmap that highlights the following:
      Your specific needs across the value chain
      A future market position for your company
      A tailored transformation strategy
      Possible technologies and business partners for implementation
      Benefits:
      Improved customer satisfaction
      Stronger new customer and strategic relationships
      Increased profitability and operational efficiency
      Compelling new business models
      More effective market positioning and revenue streams`,
    overview: `Transform your utility company into an energy services company with u2es Transformation, a value-based program that leverages emerging technologies to deliver proven benefits and positions your company as a leader for the future.`,
  })

  const DeepService1 = await Service.create({
    title: `Cyber Attack Simulation`,
    image: `https://www.swascan.com/wp-content/uploads/2020/11/cyber-4444448_1920-300x200.jpg`,
    details: `The more you know about the threat’s your organization faces,
     the less vulnerable you are to increasingly sophisticated cyber attacks.
     HatGemini gives you that knowledge. A Cyber Attack Simulation exercise 
     exposes both known and unknown vulnerabilities by putting enterprise 
     defenses under the same duress as in the real and evolving threat landscape.
     Leveraging our state-of-the-art Security Operations Center Lab, our proven
     methodologies span multiple technologies and security control areas, from
     physical security to personnel and procedural security controls, to system and application-level penetration`,
    overview: `Despite investment in cyber security controls, the modern
    enterprise is still being breached. A real-world attack simulation to
    test your Process, Technology and Compliance can help you understand
     your exposures to the security threats.
    `,
  })
  const DeepService2 = await Service.create({
    title: `Cybersecurity Consulting`,
    image: `https://images.squarespace-cdn.com/content/v1/5a05e672fe54ef1b4ad127a0/1567007217706-ELMLZ1U0EGRFBLD5N0LQ/Cybersecurity-services.jpg`,
    details: `Our cybersecurity consulting services give you insight into
     your security management with assessments of your sensitive data, 
     critical infrastructures and applications. We work with you to define
     and implement the right strategy, target operating model and GRC structure.
     We ensure your security design and operations support your strategic 
     objectives and business continuity. By planning ahead with a cybersecurity
     strategy as part of your digital transformation journey, you will be in a
     more confident position to stay compliant and achieve cost savings. Our 
     roadmap are built upon a very consistent framework (incl. market standards, human factor and economics).`,
    overview: `Make Cybersecurity a Business Enabler in the Digital Enterprise`,
  })

  const MichaelService1 = await Service.create({
    title: `Optimize your supply chain and vendor performance`,
    image: `https://www.rextart.com/wp-content/uploads/2020/05/finance-assurance-prova-768x484-1-scaled.jpg`,
    details:
      `Your business can benefit from a digital supply chain solution that increases your competitive advantage by strengthening your business drivers and focusing on your end customers.` +
      `Capgemini’s Digital Supply Chain offering puts your customers at the heart of our solution and opens up your channels to new` +
      `innovative business models – resulting in increased revenue, profitability, working capital and customer satisfaction.` +
      `Our Digital Supply Chain solution comprises a number of supply chain operations, including: 
      Demand Planning, Order Management, Master Data Management and Supply Chain Analytics.`,
    overview: `Create a real-time operating and decision-making environment through automating your systems`,
  })
  const MichaelService2 = await Service.create({
    title: `Transform your finance operations`,
    image: `https://www.almalaboris.com/images/articoli/finanza-finance-skills-competenze.png`,
    details: `Capgemini’s Frictionless Finance offer delivers next-generation, AI-augmented order-to-cash (O2C), purchase-to-pay (P2P), record-to-analyze (R2A),  
    and analytics, transforming your finance function into one that drives frictionless, enterprise-level outcomes, including enhanced efficiency and improved working capital.
    Our solution leverages Capgemini’s renowned Digital Global Enterprise Model (D-GEM) platform that underpins next-generation AI-enabled solutions, an AI-augmented workforce, 
    AI-driven operating models, and a partnership philosophy to drive frictionless processing, all of which help shape the future of your organization’s finance operations.`,
    overview: `Unlock value from your F&A function through frictionless, AI-enabled finance operations`,
  })

  // People are automatically generated, you do not need to add them manually
  // ID's of people to use: LISA: 1-2-3 PARDEEP 4-5-6 MICHAEL 7-8-9 ETION 10-11-12
  // Add relation between Service and Area
  await EtionService1.addArea(Etion)
  await EtionService2.addArea(Etion)
  await LisaService1.addArea(Lisa)
  await LisaService2.addArea(Lisa)
  await DeepService1.addArea(Deep)
  await DeepService2.addArea(Deep)
  await MichaelService1.addArea(Michael)
  await MichaelService2.addArea(Michael)

  // Add relationship between Service and Person who created it
  await EtionService1.setPerson(12)
  await EtionService2.setPerson(11)
  await LisaService1.setPerson(1)
  await LisaService2.setPerson(2)
  await DeepService1.setPerson(4)
  await DeepService2.setPerson(5)
  await MichaelService1.setPerson(7)
  await MichaelService2.setPerson(8)

  // Add relationship between Article and Person who created it (Author.id = 12)
  await EtionArticle1.setPerson(Author.id)
  await EtionArticle2.setPerson(Author.id)
  await EtionArticle3.setPerson(Author.id)
  await LisaArticle1.setPerson(1)
  await LisaArticle2.setPerson(2)
  await LisaArticle3.setPerson(1)
  await DeepArticle1.setPerson(4)
  await DeepArticle2.setPerson(5)
  await DeepArticle3.setPerson(6)
  await MichaelArticle1.setPerson(7)
  await MichaelArticle2.setPerson(8)
  await MichaelArticle3.setPerson(9)

  // Add relationship between Article and Area which it refers to
  await EtionArticle1.setArea(Etion.id)
  await EtionArticle2.setArea(Etion.id)
  await EtionArticle3.setArea(Etion.id)
  await LisaArticle1.setArea(Lisa.id)
  await LisaArticle2.setArea(Lisa.id)
  await LisaArticle3.setArea(Lisa.id)
  await DeepArticle1.setArea(Deep.id)
  await DeepArticle2.setArea(Deep.id)
  await DeepArticle3.setArea(Deep.id)
  await MichaelArticle1.setArea(Michael.id)
  await MichaelArticle2.setArea(Michael.id)
  await MichaelArticle3.setArea(Michael.id)
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

  const biographies = [
    // 1st biography
    res.name.first +
      ` ` +
      res.name.last +
      `  is a 22-year-old business studies student who enjoys ferret racing, working on cars and travelling. ` +
      heOrShe +
      ` is generous and considerate, but can also be very nasty and a bit unkind.

      ` +
      heOrShe +
      ` is  Portuguese and currently at college studying business studies. ` +
      heOrShe +
      ` has a severe phobia of clowns, and is obsessed with bottled water.
    
    Physically, ` +
      res.name.first +
      ` is in good shape. ` +
      heOrShe +
      ` is very short and grew up in a middle class neighbourhood. She was raised in a happy family home with two loving parents.
    
     ` +
      res.name.first +
      `'s best friend is a business studies student called Isabel Watts. ` +
      heOrShe +
      ` also hangs around with Dale Fraser and Kendra Gallagher. They enjoy planking together.
    
    `,

    // 2nd biography
    res.name.first +
      ` ` +
      res.name.last +
      ` is a 35-year-old ex-chef at chain restaurant who enjoys golf, spreading fake news on Facebook and photography. Being generous and creative, ` +
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
    // 3rd biography
    res.name.first +
      ` ` +
      res.name.last +
      ` is a 20-year-old student who enjoys theatre, running and bridge. ` +
      heOrShe +
      ` is creative and smart, but can also be very unfriendly and a bit impatient.

    ` +
      heOrShe +
      ` is American who defines herself as vegan. She is currently at college. ` +
      heOrShe +
      ` is obsessed with gangnam style.
    
    Physically, ` +
      res.name.first +
      ` is in good shape. ` +
      heOrShe +
      ` is very short with bronze skin, auburn hair and blue eyes although the images might not show it. ` +
      heOrShe +
      ` has a tattoo of Psy on her upper back.
    ` +
      res.name.first +
      `'s best friend is a medical student called Zac Allan. They have a been friends since childhood. They enjoy watching YouTube videos together.
    
    `,
    // 4th biography
    res.name.first +
      ` ` +
      res.name.last +
      ` is a 29-year-old ex-television actor who enjoys planking, watching television and theatre. ` +
      heOrShe +
      ` is energetic and caring, but can also be very unintelligent and a bit untidy.

    ` +
      heOrShe +
      ` is Tuvaluan who defines himself as straight. ` +
      heOrShe +
      ` finished school and then left academia, but still managed to follow his dream of being an IT.
    
    Physically, ` +
      res.name.first +
      ` is in good shape. ` +
      heOrShe +
      ` is tall with light skin, light-brown hair and big eyes.
    
    ` +
      heOrShe +
      ` grew up in a working class neighbourhood. 

    Jeff's best friend is another television actor called Angela Ortiz. They enjoy often making reports about our Hatgemini company.
    
    `,
  ]

  const id = Math.floor(Math.random() * biographies.length)

  const Author = await Person.create({
    name: res.name.first,
    surname: res.name.last,
    biography: biographies[id],
    summary: summary.data,
    image: res.picture.large,
  })
  return Author
}

// eslint-disable-next-line no-unused-vars
async function seedDatabase() {
  for (let i = 0; i < 11; i++) await seedPerson()
  await insertFakeData()
}
/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition
  defineDatabaseStructure()
  // Synchronize Sequelize with the actual database. force = true removes all current tuples in db
  await db.sync({ force: true })
  // Call the function to insert some fake data
  await seedDatabase()

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
