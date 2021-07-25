# Hatgemini website. Branch to be evaluated
# This branch contains only the code uploaded to Herokuapp for the website (no modules folder as it caused bugs)
  To read the documentation (C-IDM, P-IDM, Wireframes, scenarios and ER-diagram), go to the 'Documentation' folder.
  Instead if you are interested in the chatbot design, go to 'Documentation' > 'Chatbot design'.
# Required documentation for the evaluators is found below:
> <h4> Group Name: OneForAll (in mmcc3 site) / Hatgemini (in the google document) </h4> <br />

> Each member has put inside the database 3 tuples for employees, 2 for services, 3 for articles (not required) and 1 for areas.
> Furthermore each member has contributed in testing, developing, finding bugs, stylizing (for both mobile and computers) and giving ideas on the design of the site.


> Group member: Lisa Cosaro – 951884 – lisa.cosaro@mail.polimi.it <br />
>> I helped in: Areas and its component design and implementation, writing the documentation, writing scenarios and creating the wireframes + P-IDM.<br />

> Group member: Pardeep Kumar – 965284 – pardeep.kumar@mail.polimi.it <br />
>> I helped in: Navbar, Footer and Homepage + About us design and implementation, routing, creation of the logo, cross-checking documentation. <br />

> Group member: Ronzulli Michael – 953527 – michael.ronzulli@mail.polimi.it  <br />
>> I helped in: Services and its component design and implementation, writing the documentation (C-IDM, Content tables and Visual Design). <br />

> Group member: Etion Pinari – 965175 – etion.pinari@mail.polimi.it <br />
>> I helped in: Chatbot design and implementation, Employees and articles pages plus their components, redirect button. Contact us page. Database implementation (table creations) and APIs. NuxtJS initial configuration. Writing scenarios and this Git Description.<br />

> A technical documentation describing: <br />
>> Server and DB technologies: We used postgreSQL and express/sequelize to fetch data, create entities and relationships. They were all fetched through an api 'hatgemini/api/{fetch_request}'. We used pgAdmin4 in the development phase to test the database functionalities. More is explained in the design document! <br />
>> Components developed include: <br />
>>> (auto-explanatory components) TheNavbar, TheFooter, Chat <br />
>>> (previewers) such as AreaPreview, PersonProfile, ServicePreview, ArticleMini and HomePageCard. All of them are components which show a preview or a brief description of the entity (Area, Person, Article etc). HomePageCard is the component shown in the homepage only and it previews data regarding any entity (in our case we used it to show the employees of the month/ best services/ best performing areas).<br />
>>> (buttons) such as Redirect button which is a simple button that sends you back #n number of steps behind on your travel (by default set to -1)

>> Plugins: MMCC for the chatbot implementation and a plugin so when we click out of the navbar it closes (for mobile only), simple routing (routing.js) which sends you to the link you request, store includes the messages of the chatbot, and 'counter' which is the value of scrolling left of right used in the allEmployees page (where we show every 6 employees). Number of employees (inside store) is needed to calculate if we have any other employees to show. <br /> <br />
 
> How our usage of the framework was compliant to the best practices:  
>> We created and reused many components which were useful to lower our work to be done and facilitate maintainability (the components were changed many times during our implementation). The components also used asyncData to dynamically fetch and create the webpage. The layout was defined once (with navbar+footer) with its stylizing which helped to guide a general feeling of the site (border colors, highlight colors were defined once in assets/scss/colors.scss). We used routing in a simple way (as a global method). The store was an important best-practice we followed, since it allowed for the chatbot implementation and to remember in which state we left the employees page. The middleware was important for the api/fetchData (to dynamically allocate information)<br />
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
