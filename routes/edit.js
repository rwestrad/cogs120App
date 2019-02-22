var data = require("../dummy.json");

exports.editCompany = function(request, response) { 
	// Your code goes here
  // var coID = request.query.id;
  // console.log(coID);
  // data.currentApplications[coID-1] = {
  //   "id": coID,
  //   "name": request.query.name,
  //   "position": request.query.position,
  //   "stage" : request.query.stage,
  //   "contactInfo": request.query.contactInfo,
  //   "website": request.query.website,
  //   "favorited": request.query.favorited
  // }
  response.render('view-applications', data);
}
