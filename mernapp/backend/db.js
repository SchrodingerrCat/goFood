const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://goFood:goFood@cluster0.wkussip.mongodb.net/goFoodmern' ;
const mongoDB = async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
        if(err) console.log("---",err)
        else{
            console.log("Connected") ;
            const fetched_data = await mongoose.connection.db.collection("food_items") ;
            fetched_data.find({}).toArray(function(err, data){
                if(err) console.log(err) ;
                else console.log(data) 
            })
        }
    });
}

module.exports = mongoDB ;