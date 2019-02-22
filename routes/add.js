var data = require("../dummy.json");

exports.addCompany = function(request, response) { 
	// Your code goes here
  var newCompany = {
    "id": data.currentApplications.length + 1,
    "name": request.query.companyName,
    "position": request.query.position,
    "contactInfo": request.query.contactInfo,
    "stage": request.query.stage,
    "website": request.query.website,
    "favorited": false
  }
  data.currentApplications.push(newCompany);
  response.render('view-applications', data);
}
 
