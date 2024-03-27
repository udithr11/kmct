function toggleSidebar() {
    var sidebar = document.getElementById('nav_sidebar');
    var hamburgerIcon = document.getElementById('hamburger_icon');
    var body = document.body;
    var nav_bar = document.getElementById('nav_bar');
    var hero_revised = document.getElementById('hero_revised');


    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';

    // Apply transition for both margin-left and backdrop-filter properties
    body.style.transition = 'margin-left 0.5s ease, backdrop-filter 0.5s ease';

    body.style.marginLeft = sidebar.style.display === 'none' ? '0' : '-22rem';
    body.style.backdropFilter = sidebar.style.display === 'none' ? 'none' : 'blur(100px)';
    body.style.overflow = sidebar.style.display === 'none' ? 'visible' : 'hidden'; // Toggle overflow


    hamburgerIcon.style.visibility = sidebar.style.display === 'none' ? 'visible' : 'hidden';

    nav_bar.style.filter = sidebar.style.display === 'none' ? 'none' : 'blur(3px)';
    hero_revised.style.filter = sidebar.style.display === 'none' ? 'none' : 'blur(3px)';

}


function toggleClose() {
    var sidebar = document.getElementById('nav_sidebar');
    var hamburgerIcon = document.getElementById('hamburger_icon');
    var body = document.body;
    var nav_bar = document.getElementById('nav_bar');
    var hero_revised = document.getElementById('hero_revised');
    var institutionsElement = document.getElementById('institutions');
    var courses = document.getElementById('courses');




    sidebar.style.display = 'none';
    institutionsElement.style.display='none';
    courses.style.display='none';

    body.style.marginLeft ='0';
    body.classList.remove('overlay');
    body.style.overflow = sidebar.style.display === 'none' ? 'visible' : 'hidden'; // Toggle overflow


    hamburgerIcon.style.visibility = 'visible ';

    nav_bar.style.filter = sidebar.style.display === 'none' ? 'none' : 'blur(3px)';
    hero_revised.style.filter = sidebar.style.display === 'none' ? 'none' : 'blur(3px)';
}

function institutions() {
    var institutionsElement = document.getElementById('institutions');
    
    // Toggle the display of the institutions element
    if (institutionsElement.style.display === 'none') {
        institutionsElement.style.display = 'block';
    } else {
        institutionsElement.style.display = 'none';
    }
}

function courses() {
    var courses = document.getElementById('courses');
    
    // Toggle the display of the institutions element
    if (courses.style.display === 'none') {
        courses.style.display = 'block';
    } else {
        courses.style.display = 'none';
    }
}

function back(){

    var institutionsElement = document.getElementById('institutions');
    var courses = document.getElementById('courses');

    institutionsElement.style.display='none';
    courses.style.display='none';



}