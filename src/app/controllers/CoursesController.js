const Course = require("../models/Course");
const { convertArray, convertObject } = require("../../util/convert");

class CoursesController {
  //[GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        // res.json(course);
        res.render("courses/detalCourse", { course: convertObject(course) });
      })
      .catch(next);
  }

  // [GET] /course/create
  create(req, res, next) {
    res.render("courses/createCourse");
  }

  // [GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/editCourse", { course: convertObject(course) });
      })
      .catch(next);
  }

  // [POST] /course/store
  store(req, res, next) {
    const formData = req.body;
    formData.img = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  // [PUT] /course/update/:id
  update(req, res, next) {
    const formData = req.body;
    Course.updateOne({ _id: req.params.id },formData )
      .then(()=>res.redirect('/me/courses/store'))
      .catch(next)
  }
}
module.exports = new CoursesController();
