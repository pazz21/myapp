var mongoose = require('mongoose');


var patientschema = mongoose.Schema({}, {
    strict: false,
    collection: 'patientdata'
});

patientschema.statics.getpatientdata = function(callback) {

patientdata.find({},{_id:0,__v:0})
      .exec(function (error, patient) {
        if (error) {
          return callback(error);
        } else if ( !patient ) {
          var err = new Error('patient not found.');
          err.status = 401;
          return callback(err);
        }
            return callback(null, patient);
       
      });

}

var patientdata= mongoose.model('patientdata', patientschema);
module.exports=patientdata;
