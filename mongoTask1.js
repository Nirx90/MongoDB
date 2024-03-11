// {
//     title : "Fight Club",
//     writer : "Chuck Palahniuk",
//     year : 1999,
//     actors : ["Brad Pitt","Edward Norton"]
// },
// {
//     title:"Pulp Fiction", 
//     writer:"Quentin Tarantino", 
//     year:2009, 
//     actors:["John Travolta", "Uma Thurman"]
// },
// {
//     title:"Inglorious Basterds", 
//     writer:"Quentin Tarantino", 
//     year:2009, 
//     actors:["Brad Pitt", "Diane Kruger", "Eli Roth"]
// },
// {
//     title:"The Hobbit: An unexpected Journey", 
//     writer:"J.R.R. Tolkein", 
//     year:2012,franchise:"The Hobbit"
// },
// {
//     title:"The Hobbit: The Desolation of Smaug",
//     writer:"J.R.R Tolkien",
//     year:2013, 
//     franchise:"The Hobbit"
// },
// {
//     title:"The Hobbit: The Battle of the Five Armies", 
//     writer:"J.R.R Tolkien", 
//     year:2002, 
//     franchise:"The Hobbit", 
//     synopsis:"Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
// },
// {
//     title:"Pee Wee Herman's Big Adventures"
// },
// {
//     title:"Avatar"
// }


// 1) get all documents.
db.mongo.find()

// 2) get all documents with writer set to "Quentin Tarantino".
db.mongo.find({"writer" :{$eq:"Quentin Tarantino"}})

// 3) get all documents where actors include "Brad Pitt".
db.mongo.find({"actors":{$in:["Brad Pitt"]}})

// 4) get all documents with franchise set to "The Hobbit".
db.mongo.find({"franchise" :{$eq:"The Hobbit"}})

// 5) get all movies released in the 90s.
db.mongo.find({"year":{$lt:2000}})

// 6) get all movies released before the year 2000 or after 2010.
db.mongo.find({$or: [{"year":{$lt:2000}},{"year":{$gt:2010}}]})


db.mongo.insert({
    title : "Fight Club",
    writer : "Chuck Palahniuk",
    year : 1999,
    actors : ["Brad Pitt","Edward Norton"]
})

db.mongo.insert({title:"Pulp Fiction", 
writer:"Quentin Tarantino", 
year:2009, 
actors:["John Travolta", "Uma Thurman"]})

db.mongo.insert({title:"Inglorious Basterds", 
writer:"Quentin Tarantino", 
year:2009, 
actors:["Brad Pitt", "Diane Kruger", "Eli Roth"]})

db.mongo.insert({title:"The Hobbit: An unexpected Journey", 
writer:"J.R.R. Tolkein", 
year:"2012",franchise:"The Hobbit"})

db.mongo.insert({
    title:"The Hobbit: The Desolation of Smaug",
    writer:"J.R.R Tolkien",
    year:2013, 
    franchise:"The Hobbit"
})

db.mongo.insert({
    title:"The Hobbit: The Battle of the Five Armies", 
    writer:"J.R.R Tolkien", 
    year:2002, 
    franchise:"The Hobbit", 
    synopsis:"Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
})

db.mongo.insert({
    title:"Pee Wee Herman's Big Adventures"
})

db.mongo.insert({
    title:"Avatar"
})

db.test.insert([{
    title : "Fight Club",
    writer : "Chuck Palahniuk",
    year : 1999,
    actors : ["Brad Pitt","Edward Norton"]
},
{
    title:"Pulp Fiction", 
    writer:"Quentin Tarantino", 
    year:2009, 
    actors:["John Travolta", "Uma Thurman"]
},
{
    title:"Inglorious Basterds", 
    writer:"Quentin Tarantino", 
    year:2009, 
    actors:["Brad Pitt", "Diane Kruger", "Eli Roth"]
},
{
    title:"The Hobbit: An unexpected Journey", 
    writer:"J.R.R. Tolkein", 
    year:2012,franchise:"The Hobbit"
},
{
    title:"The Hobbit: The Desolation of Smaug",
    writer:"J.R.R Tolkien",
    year:2013, 
    franchise:"The Hobbit"
},
{
    title:"The Hobbit: The Battle of the Five Armies", 
    writer:"J.R.R Tolkien", 
    year:2002, 
    franchise:"The Hobbit", 
    synopsis:"Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
},
{
    title:"Pee Wee Herman's Big Adventures"
},
{
    title:"Avatar"
}])