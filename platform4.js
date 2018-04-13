var pos = 0;
var newpos = 0;
var plat1 = new Image();
var plat2 = new Image();
var plat3 = new Image();
var plat4 = new Image();
var plat5 = new Image();
plat1.src = "../Bubble-1.png";
plat2.src = "../Bubble-2.png";
plat3.src = "../Bubble-3.png";
plat4.src = "../Bubble-4.png";
plat5.src = "../Bubble-5.png";
var img = document.getElementById('platImg');
var width = 0;

function getMousePos(img, evt) {
    var rect = img.getBoundingClientRect();
    return {
		x: Math.round(evt.clientX - rect.left)
    };
}
img.addEventListener('mousemove', function(evt) {
    width = $("#platImg").width();
    var mousePos = getMousePos(img, evt);
	var x = mousePos.x;
	var plat1 = "<div id=\"platform\">\
	<button onclick=\"plat1ch();\" id=\"button1\">Real World 101</button><div id=\"p1\" style=\"display: none; margin-bottom: 5px\"><p>Co-op students get plenty of help writing resumes, and finance majors have been taught the ins-and-outs of their student loans. Other students may not receive any formal guidance on topics that are essential for success beyond college. We’ll make sure that professional development and financial literacy are emphasized in Learning Communities with all students, regardless of major.</p><center><img src=\"../platgraphs/real-world-101.png\"></img></center></div>\
<button onclick=\"plat2ch();\" id=\"button2\">Capstone Sneak Peek</button><div id=\"p2\" style=\"display: none; margin-bottom: 5px\"><p>First-year courses don’t really give students a great picture of what their major is all about. To give younger students a snapshot of what’s to come, we’ll implement a weeklong class shadow program where you can sit in on upper-level courses in any major.</p><center><img src=\"../platgraphs/capstone.png\"></img></center></div>\
<button onclick=\"plat3ch();\" id=\"button3\">Meet the Next POTUS</button><div id=\"p3\" style=\"display: none; margin-bottom: 5px\"><p>Next year the United States will be gearing up for the presidential election. We’ll make sure UC is on the map for presidential candidates during their primary campaign trail. #hottestcollegeinamerica</p></div>\
<button onclick=\"plat4ch();\" id=\"button4\">Rate My Co-op</button><div id=\"p4\" style=\"display: none; margin-bottom: 5px\"><p>The Office of Professional Practice and the Career Development Center could do better to enhance students’ collegiate experience. We’ll collaborate with these offices to revamp the end-of-co-op survey and find a way for students to share their co-op and internship experiences with other students.</p></div>\
<button onclick=\"plat5ch();\" id=\"button5\">Easy Add, Easy Drop</button><div id=\"p5\" style=\"display: none; margin-bottom: 5px\"><p>Why does adding a class require you to trek across campus with a piece of paper in search of multiple signatures? We will move this process online. No more trekking.</p></div>\
	</div>"
	var plat2 = "<div id=\"platform\">\
	<button onclick=\"plat1ch();\" id=\"button1\">Pushing Back on Tuition Hikes</button><div id=\"p1\" style=\"display: none; margin-bottom: 5px\"><p>If you started at UC five years ago, you would’ve paid $5,700 less in tuition and fees while getting a degree than if you started today. Tuition is up 10% and fees have nearly tripled since 2010. The current trend is unsustainable. We’ll make college affordability for every student our top priority.</p><center><img src=\"../platgraphs/pushing-back-on-tuition-hikes.png\"></img></center></div>\
<button onclick=\"plat2ch();\" id=\"button2\">Textbooks-R-Us</button><div id=\"p2\" style=\"display: none; margin-bottom: 5px\"><p>Tired of selling back your textbooks for pennies on the dollar? Turn them in to the library for \“textbook points\”, and use the points to buy your textbooks for next semester. Rinse and repeat. It’s cutting costs by cutting out the middle-man.</p><center><img src=\"../platgraphs/textbooks.png\"></img></center></div>\
<button onclick=\"plat3ch();\" id=\"button3\">Profs Cutting Costs</button><div id=\"p3\" style=\"display: none; margin-bottom: 5px\"><p>We will partner with deans and professors to slash escalating classroom costs. We’ll ask professors not to issue the newest edition of a text every year unless there’s a significant difference, and we won’t allow a textbook to be listed as “required” on a syllabus if it isn’t used. If we’re serious about controlling costs, this is a joint mission with the faculty.</p><center><img src=\"../platgraphs/profs-cutting-costs.png\"></img></center></div>\
<button onclick=\"plat4ch();\" id=\"button4\">Finish on Time</button><div id=\"p4\" style=\"display: none; margin-bottom: 5px\"><p>We need a better system for students to track their progress toward graduation, especially when it comes to matching semesterly course offerings with degree requirements.  In order to avoid the cost of an extra year, we’ll make sure students are provided with the resources to graduate on time.</p><center><img src=\"../platgraphs/finish-on-time.png\"></img></center></div>\
	</div>"
	var plat3 = "<div id=\"platform\">\
	<button onclick=\"plat1ch();\" id=\"button1\">Your Flight Connection</button><div id=\"p1\" style=\"display: none; margin-bottom: 5px\"><p>Naab+Griggs worked hard to get this service “off the ground” last semester. Currently, students can catch a free ride to CVG Airport after final exams in the fall and spring. We propose expanding the program for Spring Break and Thanksgiving Break, as well as providing pick-up service in addition to drop-off.</p><center><img src=\"../platgraphs/flight.png\"></img></center></div>\
<button onclick=\"plat2ch();\" id=\"button2\">Swipe-o Bell</button><div id=\"p2\" style=\"display: none; margin-bottom: 5px\"><p>Over the past two years, Andrew & Andrew have worked to allow students to use their swipes at DAAP Cafe and Quick Mick’s. Now what about the restaurants in TUC such as Papa John’s, Burger King, and Taco Bell? We know from experience that it’s possible, and we will make it happen.</p><center><img src=\"../platgraphs/swipe-o-bell.png\"></img></center></div>\
<button onclick=\"plat3ch();\" id=\"button3\">Renter's Guide for Off-Campus Housing</button><div id=\"p3\" style=\"display: none; margin-bottom: 5px\"><p>Is your landlord available when you need them? Do they respond promptly to maintenance concerns? Did they follow-up on promises they made when you signed your contract? These are things students want to know before signing a lease. We will develop a platform for students to share their renting experiences with each other.</p></div>\
<button onclick=\"plat4ch();\" id=\"button4\">GTL: Get That Laundry</button><div id=\"p4\" style=\"display: none; margin-bottom: 5px\"><p>Is there a washer or dryer open? Are your clothes ready? Many universities already have a system in place to let you know, either by text or by mobile app. It’s time to connect our laundry rooms to your smartphone.</p></div>\
	</div>"
	var plat4 = "<div id=\"platform\">\
	<button onclick=\"plat1ch();\" id=\"button1\">Empowering a Culture of Consent</button><div id=\"p1\" readonly=\"yes\" style=\"display: none; margin-bottom: 5px\"><p>Sexual violence is a huge (and often silent) issue that affects our campus, and it's our responsibility to be a part of the solution. As a part of emphasizing a culture of consent on our campus, we will help bring education and training that will empower every student to actively prevent sexual assault. We will work with the Women’s Center, Title IX office, and advocacy groups to start a campaign that focuses on bystander intervention tactics at Bearcat Bound Orientation, with the Greek Life office, and with local bar staff.</p><center><img src=\"../platgraphs/consent.png\"></img></center></div>\
<button onclick=\"plat2ch();\" id=\"button2\">Gender Neutral Spaces</button><div id=\"p2\" readonly=\"yes\" style=\"display: none; margin-bottom: 5px\"><p>GenderBloc, together with the faculty & staff of the LGBTQ Center, has been working hard for the past couple of years to increase the amount of gender-neutral housing and bathrooms on campus.  We want to help in any way possible to accelerate the creation of these spaces, especially in new (temporary and permanent) construction projects. As an example, the Clifton Court Pavilion and Commons Edge classroom trailers don’t include gender-neutral restrooms because they’re labeled as \"temporary\" – even though they have been (and will be) here for several years.</p><center><img src=\"../platgraphs/gender-neutral-spaces.png\"></img></center></div>\
<button onclick=\"plat3ch();\" id=\"button3\">Classrooms as Safer Spaces</button><div id=\"p3\" readonly=\"yes\" style=\"display: none; margin-bottom: 5px\"><p>Students should feel safe and welcomed at UC, both inside and outside the classroom. We will team up with faculty to make sure each instructor is equipped with the knowledge and training to create a safe class environment. This also means more fully funding our social justice resources on campus.</p></div>\
<button onclick=\"plat4ch();\" id=\"button4\">Taking a Stand for Mental Health</button><div id=\"p4\" readonly=\"yes\" style=\"display: none; margin-bottom: 5px\"><p>UC is the only public university in the state of Ohio that does not offer free individual mental health sessions to all students. Costs should not prevent students from seeking help. We’re determined for students to get the help they need through the use of 5 free sessions for students each year.</p><center><img src=\"../platgraphs/mental-health.png\"></img></center></div>\
<button onclick=\"plat5ch();\" id=\"button5\">Fighting Student Homelessness</button><div id=\"p5\" readonly=\"yes\" style=\"display: none; margin-bottom: 5px\"><p>The FAFSA asserts that there are 58,000 homeless students on campuses nationwide. Many members of our UC community find themselves in this crisis, but it's a largely unspoken problem. Amongst homeless students, most of whom belong to marginalized populations, graduation rates are significantly lower than rates for students with secure housing. We will work to create an Economic Crisis Response Team that will take measures to help a student stay in school through providing temporary meal vouchers, low-cost housing, and information for resources in the community.</p></div>\
	</div>"
	var plat5 = "<div id=\"platform\">\
	<form action=\"\" >\
<fieldset>\
<p>Our campaign is all about what really matters to students like you. Got an idea that we missed? Submit it below, and it could be added as an official promise on our platform. The winning idea(s) will be announced Monday, February 23rd.</p><br>\
<p>Email:</p>\
<textarea name=\"email\" style=\"height:20px\">\
</textarea>\
<p>Idea:</p>\
<textarea name=\"submission\" height=\"100\">\
</textarea>\
<p>\
<input type=\"submit\" value=\"Submit\">\
</fieldset>\
</form>\
<script src=\"../jquery.js\"></script>\
<script src=\"../submit.js\"></script>\
</div>"
	if(x>=0 && x< width/5 && pos !== 1){
		pos = 1;
		img.src = "../Bubble-1.png";
		$( "#platform").replaceWith(plat1);
	}else if(x>width/5 && x<2*width/5 && pos !== 2){
		pos = 2;
		img.src = "../Bubble-2.png";
		$( "#platform").replaceWith(plat2);
	}else if(x>2*width/5 && x<3*width/5 && pos !== 3){
		pos = 3;
		img.src = "../Bubble-3.png";
		$( "#platform" ).replaceWith(plat3);
	}else if(x>3*width/5 && x<4*width/5 && pos !== 4){
		pos = 4;
		img.src = "../Bubble-4.png";
		$( "#platform" ).replaceWith(plat4);
	}else if(x>4*width/5 && x<=width && pos !== 5){
		pos = 5;
		img.src = "../Bubble-5.png";
		$( "#platform" ).replaceWith(plat5);
	}else{
	}
}, false);

function plat1ch(){
    $(document.getElementById("p1")).toggle();
  }
function plat2ch(){
    $(document.getElementById("p2")).toggle();
  }
function plat3ch(){
    $(document.getElementById("p3")).toggle();
  }
function plat4ch(){
    $(document.getElementById("p4")).toggle();
  }
function plat5ch(){
    $(document.getElementById("p5")).toggle();
  }