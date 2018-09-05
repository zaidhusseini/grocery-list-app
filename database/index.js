const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groceries',  { useNewUrlParser: true });

const grocerySchema = new mongoose.Schema({
  description: String,
  quantity: Number
})

const Grocery = mongoose.model('GroceryItem', grocerySchema) ;

let saveItem = function(item, res){
  Grocery.create(item, (err, response)=>{
    if (err) {
      console.log('error saving item in DB', err);
      return;
    }
    res.send(response);
  })
}

let retrieveItems = function(res){
  Grocery.find({},(err, response)=>{
    if (err) {
      console.log('error saving item in DB', err);
      return;
    }
    res.send(response);
  })
}



module.exports.save = saveItem;
module.exports.retrieve = retrieveItems;