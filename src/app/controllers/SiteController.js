const Course = require('../models/Course');
const {convertArray}= require('../../util/convert');

class SiteController{
    //[GET] /
    index(req, res,next) {
        Course.find({}).then((courses, err) => {
            res.render('home',{courses:convertArray(courses)});
       })
       .catch(err=>next(err));

    }
     //[GET] /search
    search(req,res){
        res.render('search');
    }
}
module.exports= new SiteController