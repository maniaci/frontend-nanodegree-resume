var name = "Rob Maniaci";
var formattedRole="Web Developer";
var phone= "714-614-1521"
var contact= "contact"
var mobile= "714-777-7777"
var email="rob@gmail.com"
var twitter="affbuzz"
var github="maniaci"
var blog="affbuzz"

var formattedRole = HTMLheaderRole.replace("%data%",formattedRole);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedName);


var formattedPhone = HTMLcontactGeneric.replace("%data%",phone);
var formattedPhone1 = formattedPhone.replace("%contact%",contact);
$("#topContacts").append(formattedPhone1);

var formattedContact = HTMLemail.replace("%data%",contact);
$("#topContacts").append(formattedContact);

var formattedMobile = HTMLmobile.replace("%data%",mobile);
$("#topContacts").append(formattedMobile);



var formattedEmail = HTMLemail.replace("%data%",email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%",twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%",github);
$("#topContacts").append(formattedGithub);

var formattedBlog = HTMLblog.replace("%data%",blog);
$("#topContacts").append(formattedBlog);