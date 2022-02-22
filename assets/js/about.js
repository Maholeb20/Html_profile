
/* For Educational Background */
let academic = 'Educational Background';
let academicProgress=[
    'Matric','University','ShapeAi','Udemy'
];
let inputs =[
    'I Matriculated in 2017',
    'I recently completed my theory and school exposure practicals '+ 
        'and Part of the requirements for me to complete my qualification '+ 
        'National Diploma in Information Technology: Software Development  '+
        'is that I undergo a six months internship program',
    'I have completed a coding Bootcamp hosted by ShapeAI in collaboration '+ 
        'with Microsoft Learn and GDG Ranchi, Learned the fundamentals of '+
        'basic web development with HTML, CSS and JavaScript',
    'I have completed a coding course powered by udemy '+ 
        'I have learned the basic fundamentals of C# by coding',
];

let edbackgroud ='<h2>'+academic+'</h2>'; 
for(let i=0; i<academicProgress.length; i++){
    edbackgroud += '<h4>'+academicProgress[i]+'</h4><p>'+inputs[i]+'</p><br />';
}
document.getElementById('bio').innerHTML =edbackgroud;

/* Skills */
let skills=[
    'Django','Python','C#','C++','PostgresSQL','Oracle Databases(PL/SQL,MySQL)','HTML & CSS','JavaScript', 
];

let skills_aquriad = '<h2>Skills</h2>' ;
skills_aquriad += '<ul>';
    for(s=0; s<skills.length; s++){
        skills_aquriad += '<li>'+skills[s]+'</li>'
    }
skills_aquriad +='</ul>';
console.log(skills_aquriad);
document.getElementById('skills').innerHTML = skills_aquriad;

/* Profects have completed */
document.getElementById('projectsHeader').innerHTML += '<b>My Projects</b>';

const projetcts = new Array('University Final Year Project','Personal Project');
document.getElementById('card-header1').innerHTML += projetcts[0];
document.getElementById('card-header2').innerHTML += projetcts[1];

const projectsName = new Array('Tracking System','Video conference');
document.getElementById('card-title1').innerHTML = projectsName[0];
document.getElementById('card-title2').innerHTML = projectsName[1];

document.getElementById('card-text1').innerHTML = 'In my final studies I developed a web based system together with my team,'+
                                        'the purpose of the system was to help the funder to keep track of funded '+
                                        'students whether they are still attending classes or they dont, reason '+
                                        'for the system is to prevent further loss of funds to students that do not attend ';
document.getElementById('card-text2').innerHTML = 'A JavaScript project that create a live video conference '+
                                        'and allows connected users to chat and has private room';

