const express = require('express');
const app = express();
const port = 8001;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const List = require('./models/list');
const Routelist=require('./models/list');
const bodyParser = require('body-parser');



app.use(expressLayouts)
 app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


 app.set('view engine', 'ejs');
 app.set('views', './views');



app.use(express.static('./assets'));


app.use(express.urlencoded());



app.get('/', function(req,res){

    List.find({}, function(err, lists){
        if(err){
            console.log('Error in fetching contact from db');
            return;
        }
        console.log(lists);
        return res.render("layout", {
         title : " To DO List",
         To_Do_List : lists
     });
    })
     
 })




app.post('/todo', function(req, res){
    // contactList.push(req.body);
    List.create({
        description: req.body.description,
        work:req.body.work,
        date:req.body.date1
    }, function(err, newList){
        if(err){
            console.log('error in creating a List ');
            return;
        };
        console.log('******', newList);
        return res.redirect('/');
        
    });
    
  })


app.get('/delete/', function(req,res){
    
    //get the id from in the url
    let id =req.query.id;

     //find the list in the database using id and delete it
    List.findByIdAndDelete(id, function(err){
        if(err){
        console.log('error in deleteing an object from database');
        return;
        }
        return res.redirect('back');
    })
    
})

app.listen(port, function(err){
    if(err){
        console.log('Error', err)
        console.log(`Error in running the server: $(err)`);
    }
       console.log(`Server is running on port:${port}`);
})


