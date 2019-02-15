var data = require("../dummy.json");

exports.addCompany = function(request, response) { 
	// Your code goes here
  var newCompany = {
    "name": request.query.companyName,
    "position": request.query.position,
    "favorited": false
  }
  data.currentApplications.push(newCompany);
  console.log(data.currentApplications);
  console.log(request);
  response.render('view-applications', data);
}
 
