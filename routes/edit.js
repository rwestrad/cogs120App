var data = require("../dummy.json");

exports.editCompany = function(request, response) { 
  var coID = request.query.coID;
  var editedCompany = {
    "id": coID,
    "name": request.query.companyName,
    "position": request.query.position,
    "contactInfo": request.query.contactInfo,
    "stage": request.query.stage,
    "website": request.query.website,
    "favorited": false
  }
  data.currentApplications[coID-1] = editedCompany;
  response.render('view-applications', data);
}

exports.editFavorited = function(request, response) {
  
}
