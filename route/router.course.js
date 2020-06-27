
const express = require('express');
const Course = require("../model/model.course");
const mongoose = require('mongoose');


const router = express.Router();

/** registering a new course to database  */
router.post('/course', function(req,res,next){
    console.log(req.body)
    const course = new Course({
                // _id:req.body.id,
        name:req.body.name,
        code: req.body.code,
        topics:req.body.topics 
     })
     course.save()
     .then(data=>{res.send(data)})
     .catch(err=> console.log(err))
});

/** get all courses from database  */
router.get('/courses', function(req,res,next){
    Course.find().then((data)=> res.json(data) )  
});

/** get element by id from database */
router.get('/course/:courseId', function(req,res,next){
    Course.findById(req.params.courseId).then((data) => res.json(data));
});

/**updating course by id  */
router.patch('/course/:courseId', async function(req,res,next){
    console.log(req.body)
const coId = req.body.id
    try {
        await Course.updateOne({ _id: coId }, { $set: { ...req.body.editable} });
        res.json({ success: true, data: "succesfully updated" });
      } catch (error) {
        res.json({ success: false, data: "not able to update" });
      }
});

/** delete element by id   */
router.delete('/course/:courseId', async function(req,res,next){
    console.log(req.params.courseId )
    try {
        await Course.deleteOne({ _id: req.params.courseId });
        res.json({ success: true, data: "succefully deleted" });
      } catch (error) {
        res.json({ success: false });
      }
});
module.exports = router;
