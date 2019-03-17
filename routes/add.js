var data = require("../dummy.json");

exports.addCompany = function(request, response) {

  var companyName =  request.query.companyName;
  var firstLetter = companyName.charAt(0).toUpperCase();

  // RegEx to check for letters only
  var regex = /[A-Z]/gi;
  var fLetter;

  //Check if firstLetter is a letter
  if(regex.test(firstLetter)){
    fLetter = firstLetter;
  } else {
    fLetter = "Default";
  }  
  var newCompany = {
    "id": data.currentApplications.length + 1,
    "name": request.query.companyName,
    "position": request.query.position,
    "contactInfo": request.query.contactInfo,
    "stage": request.query.stage,
    "website": request.query.website,
    "favorited": false,
    "deleted": false,
    "firstLetter":fLetter
  }
  data.currentApplications.push(newCompany);
  response.render('view-applications', data);
}
 
