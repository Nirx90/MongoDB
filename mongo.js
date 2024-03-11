// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz"
//   key       value

// show dbs -- shows databases
// use iant -- create database


db.user.insert({name:"NIrav",username:"Nirx08",email:"inirav114@gmail.com"})
db.user.insert({name:"Shakshi",username:"Sakku08",email:"sshankar25@gmail.com"})
db.user.insert({name:"Parth",username:"pm098",email:"pmakwana23@gmail.com"})
db.user.insert({name:"Muskan",username:"mussu26",email:"muskan123@gmail.com"})
db.user.insert({name:"Shalini",username:"ini67",email:"inni56@gmail.com"})

db.user.find()  // show table , select table

db.user.findOne() // show first data 

db.user.find().count() // count data

db.user.find().skip(n)  // first n data will be skipp where n is number

db.user.find().sort({"name":1}) //1 is used for sorting data in ascending 

db.user.find().sort({"name":-1}) // -1 is used for sorting data in descending

db.user.find({name:"Nirav"})

//------------------------------------------------------------------------------------
// Quary Operator

$eq    //  equal to
      db.books.find({field: {$eq:value}})
      db.books.find({isbn: {$eq:9988}})   // but this one is preferd
      db.books.find({isbn:9988})          // ln 35 and 36 this both are same

    //   {
    //     _id: ObjectId('63a2cd06343caf25b86d26e2'),
    //     title: 'Oracle in simple way',
    //     isbn: 6677,
    //     downloadable: true,
    //     no_of_reviews: 3,
    //     tags: [ 'database', 'sql', 'relational' ],
    //     languages: [ 'english', 'hindi', 'gujarati' ],
    //     author: {
    //       name: 'Virat Kohli',
    //       callname: 'kohli',
    //       profile: { exp: 2, courses: 2, books: 2 }
    //     }
    //   },

    // if we want to find auther virat kohli
     db.books.find({"author.callname":{$eq:"kohli"}})


// .count() function can be used with any function
$ne // not equal to

      db.books.find({field: {$ne:value}})
      db.books.find({isbn: {$ne:9988}})     // but this one is preferd
      db.books.find({isbn: {$ne:9988}}).count()   // this will give count of how many such record founded
      db.books.find({isbn:9988})


$gt
      db.books.find({"author.profile.books":{$gt:4}})
      db.books.find({"author.profile.books":{$gt:4}}).count()  // this will give count of how many such record founded
      db.books.find({"author.profile.books":2})


$gte 


$lt 
$lte 
$in 
      db.books.find({"tags":{$in:['jenkins']}})
      db.books.find({"languages":{$in:['gujarati']}})
      db.books.find({"tags":{$in:['jenkins','programming']}})

      // direct 
      db.books.find({"tags":'jenkins'})
$nin 
      db.books.find({"tags":{$nin:['jenkins']}})
      db.books.find({"tags":{$nin:['jenkins','programming']}})

//----------------------------------------------------------------------------------

// logical operator

//----------------------------------------------------------------------------------

//$and $or $nor

     // syntax
     db.collection_name.find({logical_operator: [{expression1},{expression2},{expression3}]})
     //tb-name

     // example
     db.books.find({$and : [{no_of_reviews:{$gt:3}},{tags:"programming"}]} ) // if both condition is satisfied

     db.books.find({$or : [{no_of_reviews:{$gt:3}},{tags:"programming"}]} )  // if one of them is satisfied  

     db.books.find({$nor : [{no_of_reviews:{$gt:3}},{tags:"programming"}]} ) // if one condition false then run and 
                                                                             //if both condition satisfied than not come

     db.books.find({no_of_reviews:{$not:{$gt:3}}})    // if given coulmn has not greater than given value


//-----------------------------------------------------------------------------------------
Update 

Synrax 

db.collection.update(quary,update,option)   // minimum 2 args required

db.books.update({$set:{no_of_reviews:5}})   // this will give error coz 2 args required

db.books.update({"isbn":9988},{$set:{no_of_reviews:5}})    // where "isbn":9988 there it will change no_of_reviews = 5

db.books.update({"isbn":9988},{$set:{price:150}})  // where "isbn":9988 there it will update price = 150 even if that field is not there

db.books.update({"isbn":9988},{$set:{sold_in :['surat','baroda','roorkee']}})  

db.books.updateOne({"isbn":6677},{$set:{"author.profile.courses":256}}) // je pela male e update karse

db.books.updateMany({"isbn":6677},{$set:{"author.profile.courses":52}}) // jetlama isbn 6677 male e badha update karse

db.books.updateMany({},{$set:{"author.profile.courses":786}})   // badha update karva
//-----------------------------------------------------------------------------------------
Delete 

db.books.deleteOne({'isbn':1122})  // for deleting single data

db.books.remove({"isbn":6677}) // for deleteing  multiple  data

//-----------------------------------------------------------------------------------------
Drop 

db.books.drop()  // delete collection (table)

// Drop Databases

db.dropDatabase()

//-----------------------------------------------------------------------------------------
//delete specific data
Unset

db.books.update({"isbn":6677},{$unset:{'author.callname':0}})  // je pelo record male ema perticular vastu delete

db.books.updateMany({"isbn":6677},{$unset:{'author.callname':0}}) // jetla isbn 6677 male etla ma callname delete thai jase

db.books.updateMany({},{$unset:{'author.callname':0}}) // badha record ma callname delete

db.books.update({"isbn":9988},{$unset:{'price':0}})  //



//-----------------------------------------------------------------------------------------

//Rename data
db.books.update({"isbn":9988},{$rename:{'no_of_reviews':'reviews'}})  // jya sauthi pelllo isbn = 9988 malse tya rename 
                                                                      // for only one rename

db.books.updateMany({"isbn":9988},{$rename:{'no_of_reviews':'reviews'}}) // jetla isbn 9988 male etlama rename

db.books.updateMany({},{$rename:{'no_of_reviews':'reviews'}})  // jya jya aa field malse tya badha rename karnakhse

//-----------------------------------------------------------------------------------------
// multiply data
//mul
db.books.update({"isbn":9988},{$mul:{'author.profile.courses':1.4}})    // jya pelo record malse ena 
                                                                        // author.profiel.course ma 1.4 vade multipy thai jase

db.books.updateMany({"isbn":9988},{$mul:{'author.profile.courses':1.4}}) // jetla isbn 9988 male etlama multipy

db.books.updateMany({},{$mul:{'author.profile.courses':1.4}})  // jya jya aa field male e badha multipy

//-----------------------------------------------------------------------------------------
// increment data
//inc
db.books.update({"isbn":9988},{$inc:{'author.profile.books':2}})    // jya pelo record malse ena 
                                                                  // author.profiel.books ma 2 no umero karse

db.books.updateMany({"isbn":9988},{$inc:{'author.profile.courses':2}}) // jetla isbn 9988 male etlama 2 no umero

db.books.updateMany({},{inc:{'author.profile.courses':3}})  // jya jya aa field male e badha ma 3 no umero

//-----------------------------------------------------------------------------------------
// perticular column show karne k liye
db.books.find({},{}) // for all data

db.books.find({},{no_of_reviews:1}) //first field {} empty matlab badha data, no_of_reviews wali field aavse and bydefault id vali coulmn aavse

db.books.find({},{no_of_reviews:1,_id:0})  // no_of_reviews wali field aavse and id wali coulmn vai jase

db.books.find({},{no_of_reviews:1,_id:0,title:1}) 

db.books.find({no_of_reviews:{$gte:3}},{no_of_reviews:1,_id:0,title:1})

db.books.find({no_of_reviews:{$gte:3}},{no_of_reviews:1,_id:0,'author.name':1,title:1})