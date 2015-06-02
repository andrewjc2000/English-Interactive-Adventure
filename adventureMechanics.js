
var Data = {
	stepImages: ["USMap.gif", "Scene2.png", "Scene3.png", "Scene4.png", "Scene5.png", "Scene6.png", "Scene7.png", "Scene8.png",
		"Scene9.png", "Scene10.png", "Scene11.png", "Scene12.png", "Scene13.png", "Scene14.png", "Scene14.png"
	],
	dates: ["June 2018", "August 2018", "August 2018 - June 2022", "June 2022 - June 2024", "June 20th, 2024", "June 2024 - December 2024",
		"December 2024 - December 2026", "2026 - 2028", "May 2028 - June 2028", "June 24th, 2028", "June 2028 - June 2029", 
		"June 13th - 15th, 2029", "June 15th 2029 - January 1st, 2030", "April 14th, 2030", "April 14th, 2030 (continued)"
	],
	stepDescriptions: [
	//description 1
	"Our journey begins at the end of 18-year-old Andrew Chafos's Senior year at Mount Saint Joseph High School," +
	" an all-boys catholic school in Baltimore, Maryland."+
	"  He graduated at the top of his class and maintained a 4.0 GPA or higher all throughout high school.  " +
	"During his Junior year, Andrew developed an extremely popular app for both Apple and Android devices he named <i>Worldwide Pirates Online.</i>" +
	"  He gained a profit of over $200,000 off of the app, and immediately invested that money into his college funds."+ 
	"  As a result of his app and Standardized test scores, Andrew got accepted into the Massachusetts Institute of Technology (MIT)." +  
	"He will soon move from his house in Maryland to rent out an apartment in Massachusetts for his time at M.I.T.",
	//description 2
	"Andrew is beginning his freshman year at M.I.T.  He finds all his courses very interesting, and he is quite excited for the year."+
	"  On the first day, his Computer "+
	"Science class, as he is majoring in Computer Science, had a guest speaker, Bill Gates.  Shockingly, Bill immediately recognized Andrew. "+
	" In the middle of the class, Bill was explaining how successful computer programmers could become.  He then says, 'Andrew Chafos here "+
	"is a fine example of that.  His newly developed app has earned hundreds of thousands of dollars in revenue.'  He then proceeds to show "+
	"gameplay of the app, and the class is very impressed.  After class, Gates confronts Andrew and they briefly discuss programming.  However"+
	", Gates soon tells Andrew, 'I have sensed an ingenuity within you that has been absent from the world of technology for decades.  You could"+
	" potentially create an invention that would revolutionize our world.  I sense that...there is a greater need for that now more than ever. "+
	" During my time as the CEO of Microsoft, I began to suspect that the governments of the world are trying to change how societies function."+
	"  Together, us programmers must stop them and bring back creativity into the world.'  Andrew did not understand at all at the time what "+
	"Bill was implying, however he agreed to work during college to create such an invention.  Andrew did not see Gates for many more years.",
	//description 3
	"Andrew continues his college studies as planned, and stays in touch with his family.  As he promised Bill Gates, he also began to work on an extraordinary invention."+
	"  Although during college he did not know what it would be, he started creating "+
	"many upon many operational programs in dozens of programming languages that could eventually be used for a machine's operating system "+
	"to perform countless tasks.  Bill Gates assisted Andrew from time to time with this.  However, as Andrew was programming a translator AI "+
	"during his Junior year, he started to encounter some mysterious issues.  His programs would spontaneously quit and throw error messages "+
	"for no reason, and his power would go out right before he was to test something very important.  Although Andrew greatly wanted to find "+
	"the source of his problems, his college studies became so time-consuming that he was forced the stop working on the project altogether."+
	"  On the bright side, however, Andrew successfully graduated from M.I.T. with a "+
	"Bachelor's degree and excellent grades, and he continued to improve his Pirates app as well.",
	//description 4
	"After college, Andrew decides to get back to work on his invention.  He does not encounter the mysterious errors he had in college for some"+
	" time.  As Andrew progressed, he finally decided what the invention would be: a personal, all-purpose robot "+
	"that would simplify many aspects of people's lifestyles, and enhance them as well.  He decided to name his invention the <i>Parvor</i>, coming"+
	" from the Latin words <i>parva</i> and <i>adiutor</i>, or 'small helper'.  He continues to primarily develop the machine's software for a solid year,"+
	" however soon starts encountering several issues.  The mysterious errors have arisen yet again, and something else has started occurrin"+
	"g as well: whenever Andrew is about to test out something very important, his door swings open and he is attacked by storm spirits. "+
	" He barely manages to defend himself during the first attack, and actually winds up in the hospital during the second attack.  Andrew's "+
	"hospital fees leave Andrew in a very unstable economic state, although his pirates app allows him to receive a bare minimum income.",
	//description 5
	"After Andrew recovered, he was unsure about whether or not to get back to work on his invention.  He figured that he should at least get back "+
	"to his house, as he had pondered whether or not to start living with his parents again. "+
	" However, in a turn of events, when Andrew walked home, he passed by a blacksmith working on the streets.  The blacksmith appeared to be"+
	" performing the forging of an ancient sword for a live audience, and he was doing it very swiftly.  Andrew stopped and watched with the "+
	"crowd until the show was over.  When the show concluded, the blacksmith approached Andrew.  'I have heard about you much, Andrew Chafos, "+
	"and have watched your progress with your extraordinary creation.  I am Vulcan, the God of the Forge and Fire.'"+
	"  Andrew was astounded.  Vulcan then asked, 'Do you require my assistance?'  Andrew replied, 'Yes!  As you know, "+
	"I am currently attempting to create an invention.  However, my program has recently started to crash whenever I make significant "+
	"progress, and I have been attacked by storm spirits twice now for a similar reason.'  Vulcan replied, 'I can help you with that.'",
	//description 6
	"Vulcan and Andrew proceed to walk to Andrew's house.  When they arrive, Vulcan walks right over to the computer.  "+
	"He sees the error message, and then turns to Andrew, saying, "+
	"'Your problem is very typical; my mechanics encounter it all the time.  Your computer has micro-spodulures.  Micro-spodulures are "+
	"microscopic creatures that infest your programs and take control of your computer's hardware until you impress them.  To get rid of them, "+
	"you have to impress them with your programming skills so that they fear and respect you.'  This having been said, Vulcan proceeded to "+
	"work on the computer.  He re-coded the entire Windows operating system in a matter of minutes, which actually had many improvements,"+
	" and published his work to github.  Suddenly, an alert box popped up on the computer, which read, 'You are quite the programmer!  U"+
	"s micro-spodulures will pester you no longer.'  After this occurred, the back of the computer opened, and the micro-spodulures jumped ou"+
	"t (although Andrew could not see them, as they were microscopic).  Vulcan then said, 'Also, the storm-spirits only pester us engineers d"+
	"uring the month of June.  Therefore, just wait to program again until July.  June is a slow month for demigod engineers, trust me.'  And"+
	"rew followed his instructions, and continued programming in July.  He made progress much more quickly and was about ready to compile the"+
	" whole program and start working on the physical invention in December.  However, when he was walking back from the robotic parts store,"+
	" he tripped and fell into a gigantic pit.  As he fell, he saw an ugly creature with a horrible mouth and teeth at the center of the pit."+
	"  He later discovered this creature to be the Sarlacc, however he was soon engulfed by the creature and did not escape for some time.",
	//description 7
	"Andrew remained in the Sarlacc Pit for 2 years until, at long last, Vulcan took a break from his work, realizing something was wrong, "+
	"and teleported to Andrew's aid.  Vulcan lit the Sarlacc on fire, and protected Andrew in a fire-resistant"+
	" bubble.  Once Andrew recovered from the incident, he realized that making his invention without a job would not lead him to success.  "+
	"Therefore, in the December of 2026, Andrew applied for a job at Microsoft.  His interviewers were very impressed with his programming "+
	"knowledge and attempts to create such a sophisticated invention, and therefore Andrew immediately got the job.  His interviewers "+
	"even started him off by putting him as the head of a team working on Microsoft's "+
	"new features for Windows Diamond Edition (Windows 27).",
	//description 8
	"Andrew continues his career at Microsoft.  He and his team develop many important components for the new Windows operating "+
	"system, but the most significant was a new file"+
	" indexing system that greatly improves both the appearance and performance of Windows.  As soon as Andrew shares his progress (in 2029),"+
	" he is promoted to the Head of the Windows Feature Enhancement Division of Microsoft.  His fellow employees at his level instantly "+
	"become jealous of him, including the other Division Heads.  Soon, Andrew finds out something else about his aggressive competitors: "+
	"they were actually demigods.  This theory was confirmed when one day, when Andrew and his team were making excellent progress "+
	"on their latest feature, a completely arrangeable and customizable Desktop, Alfred Smith, Head of the Hardware Department, "+
	"confronted Andrew and proceeded to attack him.  Andrew defended himself this time, however he got a nasty bruise, and when Alfred "+
	"finally stopped he said, \"If my father Jupiter were here, you'd be dead\" Andrew knew then that he had to be careful with people or"+
	" creatures he didn't know well, even in Microsoft.  On the other hand, Andrew's mother called him one day after work and yelled"+
	" at him for not calling her for two years and then suddenly getting an average job at Microsoft without consulting her first.  "+
	"Andrew explained his situation, however his Mom was still fed up at the end of the conversation.  This greatly stressed Andrew out.",
	//description 9
	"As if Andrew's current problems weren't enough, a new political group invaded the United States' government system.  This group "+
	"called themselves the New Roman Empire and started to change many aspects of the American societies. "+
	" Americans were very upset with their presence, but especially programmers were angered as this group demanded that all code be "+
	"written in Latin-X, the official programming language of their group.  Therefore, even Microsoft had to adjust all of their code "+
	"just to accommodate to this political group's orders.  Andrew was shocked by this change in the government and continued to "+
	"work in Java, C++, Python, and other languages for his software, and then compile it to look like it was written in Latin-X.  "+
	"However, one day a member of the Roman Empire wrote a re-compiler for all of Microsoft's code, and found that Andrew's"+
	" code did not compile back into Latin-X.  Soon, Andrew mysteriously disappeared and was replaced by that Roman Empire employee."+
	"  Andrew was actually taken into the highly secretive prison for the illuminati.  As it turns out, the Roman Empire "+
	"was actually a code name for the illuminati organization.  As he was held captive, the illuminators (members of the illuminati) "+
	"tortured him and attempted to brainwash him, however they were unsuccessful and so they decided to hold an execution for him instead.",
	//description 10
	"On the day of Andrew's execution within the illuminati prison, Andrew had nearly given up all hope.  "+
	"However, early in the morning, when the majority of the "+
	"guards were asleep, a swirling vortex popped out of one of the walls of Andrew's cell.  As it turns out, this vortex was a time portal, "+
	"and out sprang forth a middle-aged man wearing a suit and tie.  'Hello, great-grandson, Andrew', he said, 'I am your great-grandfather, "+
	"Andrew K. Chafos.  I already am aware of your troubles as it was prophesied that my great-grand-son bearing my names would be captured"+
	" by the illuminati.'  He smiled, and said, 'And destroy it on the same day.'  Andrew embraced his great-grandfather, and he explained "+
	"the plan to modern Andrew.  'I have formulated an equation that disproves all ancient theories about societies and the world.  Its "+
	"power will destroy the ideals, intentions, and all that was ever known as the illuminati.  The plan is simple: we will challenge the "+
	"illuminati CEO to a math contest.  When we ask him to analyze this formula, he will have no choice but to plug it into his mainframe "+
	"computer.  Once it is within the system, the entire illuminati will collapse.'  When Andrew was released from his cell, the guards "+
	"walked him towards the execution room.  'Any last requests before your execution?'  Andrew smiled and said, 'Yes.  How about a little "+
	"math contest?' and so the two Andrews executed their plan perfectly, America was restored, and Andrew got back to work at Microsoft.",
	//description 11
	"Now that the illuminati were out of the way, and Windows Diamond Edition has been released, "+
	"Andrew gets right back to work on his invention.  Since his "+
	"operating system was so sophisticated for the machine, he decided to name it Windows Platinum Edition, and took a few months"+
	" to make it Windows-like.  Then he started working on the robot itself.  He would work at least 20 hours a week on it, ensuring "+
	"every detail and feature was user-friendly and perfect.  When he finally released information to the public about his invention, "+
	"one investor, George McDonald, immediately gained interest, giving Andrew $75,000 to continue his work.  The machine was coming "+
	"along excellently: it had a universal translator, nearly flawless movement AI, and a top-of-the-notch voice recognition system."+
	"  He also installed many convenient hardware appliances on the machine, including a microwave, flash-light, cellphone, "+
	"camera, and many other useful things.  Everything was going very well in terms of the machine's progress for a solid year of hard work.",
	//description 12
	"However, Andrew hit another severe roadblock in the middle of June after that one year.  There were severe thunderstorms in Maryland, "+
	"and he found out that his younger brother had been paralyzed by a lightning strike.  At work, Alfred, "+
	"who still held his position, whispered to him, 'My Dad did that to your brother.  How does it feel?'  In a massive rage, Andrew "+
	"violently attacked Alfred, and wound up breaking both of his legs and arms.  As a result, Alfred's father, Jupiter, sent another "+
	"curse upon Andrew: Andrew found out two days later that he had cancerous influenza, a deadly disease that would be either fatal or "+
	"take months to treat.  Andrew fell extremely ill for the disease and had to temporarily leave his job for treatment in a nearby hospital.",
	//description 13
	"Andrew remained in the hospital for six months, the entire time being too ill to even get out of his bed.  "+
	"He finally recovered on New Year's Day, 2030.  However, he now knows "+
	"that he will be under extreme stress to finish his invention.  He was making so much progress prior to his illness that he "+
	"said <i>Parvor</i> would be released on his 30th birthday, April 14th, 2030.  He has four and a half months to complete his invention.",
	//description 14
	"It is more than four months since Andrew was let out of the hospital.  Today is the day that Andrew tells the public all about his revolutionary "+
	"invention <i>Parvor</i>, on its official release date.  Andrew walks up to the stage and gives his speech, "+
	"'Good morning everyone.  Thank you for attending today's presentation about my creation, <i>Parvor</i>.  Before I begin, I would like "+
	"to personally thank everyone who made this ceremony possible today.  All my supporters, my co-workers at Microsoft, my family "+
	"members, and anyone who took time out of their lives to care about mine,' said Andrew.  He then turns to the audience and says,"+
	" 'And now, ladies and gentlemen, I give you: <i>Parvor</i>.'  Andrew then holds up his robot, shiny, finished, and painted metallic "+
	"silver.  The audience applauds.  'I have been looking forward to this day for over a decade.  <i>Parvor</i> has been a wonderful "+
	"project that has forever changed my life, as I'm sure it will change any others.  I am proud to say that as of today, <i>Parvor</i>"+
	" has over 200 hardware accessories, over 500 applications, and is free of all bugs to the extent of which I've tested.  Not only "+
	"can it be used as a universal translator, personal item holder, cell phone, and microwave, I also implemented something that has not "+
	"been seen before: a cure dispenser.'  Andrew then turned to the machine and said, '<i>Parvor</i>, could I have a cure for cancerous ",
	//description 14 cont.
	"influenza and paralysis?'  The machine replied, 'Certainly, Andrew.  Here you go.  Dispensing cure for cancerous influenza and "+
	"paralysis...' and so two pills came out of the machine.  The audience was amazed.  Andrew said, 'Along with this, the machine is "+
	"highly efficient.  It has micro-solar panels that can charge it from the smallest amount of light levels, and can run for 48 hours "+
	"when it is using all of its features.  Also,' Andrew said, 'It can fly.  <i>Parvor</i>, activate Drone Mode!' said Andrew.  The "+
	"machine leaped into the air, and the audience was amazed again.  'I believed that these were <i>Parvor</i>'s major features.  You "+
	"can buy one for a retail price of $99.99.  Thank you for your time.'  Later that year, Andrew was promoted to the CEO of Microsoft. "+
	" He made the machine the company's major focus, and it soon became the most widely used machine in the entire world, affordable "+
	"by over four billion humans worldwide.  <i>Parvor</i>, thanks to Andrew Chafos and his life goal, forever changed the world of mankind."
	]
};

var Load = {
	loadComponents: function(){
		$("#startAdventure").fadeIn(3000);
	},
	loadAdventure: function(){
		$("#startAdventure").fadeOut(2000, 
			function(){
				Story.initialAdvanceStep();
			}
		);
	}
};

var Story = {
	currentStep: 0,
	numberOfSteps: Data.stepImages.length,
	executedAlready: false,
	initialAdvanceStep: function(){
		if(!Story.executedAlready){
			Story.executedAlready = true;
			Story.currentStep = 1;
			Story.loadInfo();
			$("#storyStepFrame").fadeIn(1000);
		}
	},
	advanceStep: function(){			
		if(Story.currentStep + 1 <= Story.numberOfSteps){
			Story.currentStep++;
			$("#storyStepFrame").css('display', 'none');
			Story.loadInfo();
			$("#storyStepFrame").css('display', 'block');
		}
		else{
			Story.finishStory();
		}
	},
	backStep: function(){
		if(Story.currentStep > 1){
			Story.currentStep--;
			$("#storyStepFrame").css('display', 'none');
			Story.loadInfo();
			$("#storyStepFrame").css('display', 'block');
		}
	},
	info7String: "The Text says: \nHas Bachelor\'s from MIT\nKnows 20 programming languages"+
			"\nWorked with Bill Gates",
	info11String: "The Text says: \nSuccessfully invested $75,000 in Parvor!",
	loadInfo: function(){
		$("#storyImage").css("background", "url(Resources/" + Data.stepImages[Story.currentStep - 1] + ") no-repeat");
		$("#storyImage").css("background-size", "100% 100%");
		$("#storyImage").attr(
			"onClick", "if(Story.currentStep === 7){alert(Story.info7String);}else if(Story.currentStep === 11){alert(Story.info11String);}"
		);
		$("#dateHeader").html(Data.dates[Story.currentStep - 1]);
		if(Story.currentStep === 6){
			$("#stepInfo").css(
				"font-size", "73%" 
			);
			//$("#storyStepFrame").css('height', '80%');
		}
		else{
			$("#stepInfo").css(
				"font-size", 
				Math.round(-1 / 30 * Data.stepDescriptions[Story.currentStep - 1].length + (1877 / 15)).toString() + "%"
			);
			//$("#storyStepFrame").css('height', '80%');
		}
		$("#stepInfo").html(Data.stepDescriptions[Story.currentStep - 1]);
		if(Story.currentStep === 1){
			$("#backButton").css('display', 'none');
		}
		else{
			$("#backButton").css('display', 'block');
		}
	},
	finishStory: function(){
		if(confirm("You have reached the end of the story!  Would you like to reload the page?") === true){
			location.reload();
		}
	}
};