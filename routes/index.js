router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'The Personal Portfolio Website',
    description: `The Personal Portfolio Website is a web-based platform designed to showcase an individual’s
    skills, projects, achievements, and contact details. It acts as a digital resume and professional
    portfolio that highlights one’s personal brand. This project allows recruiters, peers, and potential 
    collaborators to learn more about the individual in a structured and visually appealing way.`
  });
});

module.exports = router;
