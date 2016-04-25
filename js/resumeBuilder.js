/*
JSON
*/
var work = {
	jobs: [
		{
			employer: 'Hanhai Investment, Inc.',
			title: 'Front-end developer intern',
			location: '97 E Brokaw Road, Suite 310, San Jose, CA 95112',
			dates: 'June 2015 - August 2015',
			description: ['> Redesigned and upgraded the website. Greatly enhanced my skills in JavaScript, HTML, SASS, jQuery', '> Took advantage of Bootstrap to simplify development and beautify the website', '> Added new features to the website based on the business requirement'
			]
		}
	]
};

var projects = {
	projects: [
		{
			title: 'Booklist App',
			dates: 'Winter 2016',
			description: ['> Created a web-based, single-page booklist app in Ember.js to help people manage their books. Features include searching books by different query criteria, creating new books, editing books, rating and making notes', '> Created a back-end, restful system in Node.js(Express framework) and designed Restful API for client side to fetch, create, update, delete books', '> Designed a schema in mongoDB to store all the information of books']
		},
		{
			title: 'Weather Forecast App',
			dates: 'Winter 2015',
			description: ['> Developed a web-based and single-page weather app using HTML, CSS, JavaScript and jQuery', '> Converted this app into MVC pattern by using Ember.js', '> Fetch real-time weather data from forecast.io API by using AJAX']
		},
		{
			title: 'Map Query System',
			dates: 'Fall 2015',
			description: ['> Implemented a map search system in JAVA which contains geographic information of campus', '> Read data from local files and converted it into Oracle Spatial Data Type. Designed a schema in Oracle database to hold these data', '> Utilized Java spatial APIs and SQL to query database based on different criteria']
		}
	]
};

var bio = {
	name: 'Chicheng(Bill) Zhou',
	role: 'Web/Front-end developer',
	location: 'San Jose',
	welcomeMsg: 'Have a rest here and enjoy!',
	picURL: 'images/fry.jpg',
	contacts: {
		email: 'billzhou0223@gmail.com',
		mobile: '(408)823-3732',
		Linkedin: 'https://www.linkedin.com/in/chichengzhou',
		Github: 'https://github.com/billzhou0223',
		website: 'bill-zhou.com'
	},
	skills: ['JavaScript', 'HTML/CSS(SASS)', 'JQuery', 'Ember.js', 'Restful API', 'Bootstrap', 'AJAX', 'Java', 'SQL', 'Oracle/mongo DB', 'Git']
};

var education = {
	schools: [
		{
			name: 'Santa Clara University',
			location: 'Santa Clara, CA, US',
			degree: 'Master of Science',
			major: 'Computer Science and Engineering',
			dates: 'Jan 2014 - Dec 2015',
			url: 'https://www.scu.edu/'
		}
	],
	onlineCourses: [
		{
			title: 'Responsive Web Design Fundamentals',
			school: 'Udacity',
			dates: 'Spring 2016',
			url: 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
		},
		{
			title: 'Responsive Images',
			school: 'Udacity',
			dates: 'Spring 2016',
			url: 'https://www.udacity.com/course/responsive-images--ud882'
		}
	]
};

/*
bio
*/
bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name),
			formattedRole = HTMLheaderRole.replace('%data%', bio.role),
			formattedEmail = HTMLemail.replace('%data%', bio.contacts.email),
			formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
			formattedGithub = HTMLgithub.replace('%data%', bio.contacts.Github),
			formattedWebsite = HTMLcontactGeneric.replace('%contact%', 'website').replace('%data%', bio.contacts.website),
			formattedLinkedin = HTMLcontactGeneric.replace('%contact%', 'linkedin').replace('%data%', bio.contacts.Linkedin),
			formattedLocation = HTMLlocation.replace('%data%', bio.location),
			formattedPic = HTMLbioPic.replace('%data%', bio.picURL);
			// formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMsg);

			$('#header').prepend(formattedName, formattedRole);
			$('#topContacts').append(formattedEmail, formattedMobile, formattedGithub, formattedLinkedin, formattedWebsite, formattedLocation);
			$('#header').append(formattedPic);

			if(bio.skills) {
				$('#header').append(HTMLskillsStart);
				$('#skills').append(bio.skills.map(function(ele, i) {
					return HTMLskills.replace('%data%', ele);
				}));
			}
};

bio.display();

//work
work.display = function displayWork() {
	var i;
	for(i in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer),
		formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title),
		formattedEmployerTitle = formattedEmployer + formattedTitle,
		formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates),
		formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location),
		formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description.join('<br>'));

		$('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
	}
};

work.display();

/*
project 
*/
projects.display = function() {
	var i, 
			project,
			formattedTitle,
			formattedDates,
			formattedDescription;
	for(i = 0; i < projects.projects.length; i++) {
		$('#projects').append(HTMLprojectStart);

		project = projects.projects[i];
		formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
		formattedDates = HTMLprojectDates.replace('%data%', project.dates);
		formattedDescription = HTMLprojectDescription.replace('%data%', project.description.join('<br>'));

		$('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);
	}
};

projects.display();

/*
education
*/
education.display = function() {
	/*
	schools
	*/
	var i,
			school,
			formattedSchoolName,
			formattedSchoolDegree,
			formattedSchoolDates,
			formattedSchoolLocation,
			formattedSchoolMajor;
	for(i = 0; i < education.schools.length; i++) {
		$('#education').append(HTMLschoolStart);

		school = education.schools[i];

		formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
		formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
		formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
		formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
		formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.major);

		$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
	}

	/*
	online course
	*/
	var onlineCourse,
			formattedOnlineTitle,
			formattedOnlineSchool,
			formattedOnlineDates,
			formattedOnlineURL;

	$('#education').append(HTMLonlineClasses);
	for(i = 0; i < education.onlineCourses.length; i++) {
		$('#education').append(HTMLschoolStart);

		onlineCourse = education.onlineCourses[i];

		formattedOnlineTitle = HTMLonlineTitle.replace('%data%', onlineCourse.title);
		formattedOnlineSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school);
		formattedOnlineDates = HTMLonlineDates.replace('%data%', onlineCourse.dates);

		$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates);
		// $('#education').append('<div style="clear: both;"></div>');
	}
};

education.display();

/*
google map
*/
$('#mapDiv').append(googleMap);
