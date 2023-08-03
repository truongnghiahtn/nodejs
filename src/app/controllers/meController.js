const Course = require("../models/Course");
const { convertArray, convertObject } = require("../../util/convert");

class MeController {
  //[GET] /course/:slug
  show(req, res, next) {
    Course.find({})
      .then((course) => {
        //res.json(course);
        res.render("me/meOfCourse", { course: convertArray(course) });
      })
      .catch(next);
  }

}
module.exports = new MeController();
