var express = require('express');
var router = express.Router();
var Patient=require('./../models/patient')


router.get('/', function(req, res, next) {
  res.render('dataphi1', { title: 'dataphi' });
});

router.get('/seepatientsinfo', function(req, res, next) {
  res.render('dataphi2');
});

router.post('/patientinput', function(req, res, next) {

data=req.body;
data['name']=req.body.firstname+req.body.lastname;
Patient.create(data, function (error, patient) {
        if (error) {
          return next(error);
        } else {
          return res.json(patient);
        }
      });

});

router.get('/getpatientdatabyname', function(req, res, next) {
Patient.getpatientdata(function (error, result) {
        if (error) {
          return next(error);
        } else {
        
          res.json({"data":result});
        }
      });

});

module.exports = router;
