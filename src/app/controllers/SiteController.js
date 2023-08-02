const Course = require('../models/Course');

class SiteController{
    //[GET] /
    async index(req, res) {
        res.render('home');
        // let data={};
        // try {
        //     data = await Course.find({})
        // } catch (error) {
        //     console.log("Lấy dữ liệu bị lỗi");
        // }
        res.json(await Course.find({}));
    //     Course.find().then((courses, err) => {
    //         res.json(courses);
    //    });

        // res.render('home');
    }
     //[GET] /search
    search(req,res){
        res.render('search');
    }
}
module.exports= new SiteController