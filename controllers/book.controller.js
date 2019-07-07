const Book = require('../models/book.model');

exports.test = function(req,res) {
    res.send('Greethings from the test controller!');
};

exports.book_create = function(req,res) {
    try{
        let book = new Book ({
            Title : req.body.Title,
            Author : req.body.Author,
            AgeGroup : req.body.AgeGroup,
            BookCover : req.body.BookCover
        });
    
        book.save(function (err) {
            if(err) {
                return next(err);
            }
            res.send('Book Created successfully');
        });
    } catch(ex) {
        console.log(ex);
        res.end();
    }
    
};

exports.book_details = function(req,res) {
    try {
        Book.findById(req.params.id,function(err,book) {
            if(err) {
                res.send(err)
            }
   
            res.send(book);
        });
    } catch(ex) {
        console.log(ex);
        res.end();
    }     
};

exports.book_update = function(req,res) {
    try {
        Book.findByIdAndUpdate(req.params.id,{$set : req.body}, function(err,book) {
            if(err) {
                res.send(err)
            }
    
            res.send('Product Updated');
        });

    } catch(ex) {
        console.log(ex);
        res.end();
    }
};

exports.book_delete = function(req,res) {
    try {
        Book.findByIdAndRemove(req.params.id,function(err) {
            if(err) {
                res.send(err);
            }
            res.send("Deleted successfully");
        }); 
    } catch(ex) {
        console.log(ex);
        res.end();
    }       
};

exports.book_alldetails = function(req,res) {
    try {
        Book.find(function(err,books) {
            if(err) {
                res.send(err);
            }
            res.send(books);
        })
    } catch(ex) {
        console.log(ex);
        res.end();
    }
}