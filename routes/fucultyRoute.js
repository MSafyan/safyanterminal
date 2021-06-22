const express = require('express');

const facultyRouter = express.Router();

const {getFaculty,postFaculty,deleteFaculty,updateFaculty,getOneFaculty,addtocart}=require('../controller/facultyController')

facultyRouter.route('/').get(getFaculty);
facultyRouter.route('/').post(postFaculty);
facultyRouter.route('/:id').get(getOneFaculty);
facultyRouter.route('/:id').put(updateFaculty);
facultyRouter.route('/:id').delete(deleteFaculty);
facultyRouter.route('/added/:id').delete(addtocart);



module.exports = facultyRouter;