var data = require('../dummy.json');

exports.getJobInfo = function(req, res) { 
	var jobID = req.params.id;
	// if (projectID == "random") {
	// 	projectID = Math.floor(Math.random() * projects.length) + 1;
	// } else {
	// 	projectID = parseInt(projectID);
	// }
  jobID = parseInt(jobID);

  var job = data.currentApplications[jobID-1]; // of by one, our first project has index 0
  res.json(job);
  // res.render('application', job);
}
