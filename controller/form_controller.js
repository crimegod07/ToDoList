const List =require('../models/list');

module.exports.lists = function(req, res) {
    return res.render('layout', {
        title: "To Do List"
    })
}



module.exports.create = function(req, res) {

    List.findOne( {description: req.body.description}, function(err, list){
        if(err){
            console.log('error in finding user in signing up'); return }
            if(!list){
                List.create(req.body, function(err, list){
                    if(err){
                        console.log('error in creating user while signing up'); return
                    }
                    return res.redirect('back');
                })
            }

           else{
                return res.redirect('back');
            }
    });
}