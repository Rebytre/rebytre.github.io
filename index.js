/*

Personal Website
By: Rebytre

*/

function homeClicked() {
    //Home Items
    document.getElementById('headerContainer').style.visibility = 'visible';
    document.getElementById('personalContainer').style.visibility = 'visible';
    //Projects Items
    document.getElementById('projectsContainer').style.visibility = 'hidden';
    //Socials Items
    document.getElementById('socialsContainer').style.visibility = 'hidden';
    //About Me Items
    document.getElementById('aboutMeContainer').style.visibility = 'hidden';
}

function projectsClicked() {
    //Home Items
    document.getElementById('headerContainer').style.visibility = 'hidden';
    document.getElementById('personalContainer').style.visibility = 'hidden';
    //Projects Items
    document.getElementById('projectsContainer').style.visibility = 'visible';
    //Socials Items
    document.getElementById('socialsContainer').style.visibility = 'hidden';
    //About Me Items
    document.getElementById('aboutMeContainer').style.visibility = 'hidden';
}

function socialsClicked() {
    //Home Items
    document.getElementById('headerContainer').style.visibility = 'hidden';
    document.getElementById('personalContainer').style.visibility = 'hidden';
    //Projects Items
    document.getElementById('projectsContainer').style.visibility = 'hidden';
    //Socials Items
    document.getElementById('socialsContainer').style.visibility = 'visible';
    //About Me Items
    document.getElementById('aboutMeContainer').style.visibility = 'hidden';
}

function aboutMeClicked() {
    //Home Items
    document.getElementById('headerContainer').style.visibility = 'hidden';
    document.getElementById('personalContainer').style.visibility = 'hidden';
    //Projects Items
    document.getElementById('projectsContainer').style.visibility = 'hidden';
    //Socials Items
    document.getElementById('socialsContainer').style.visibility = 'hidden';
    //About Me Items
    document.getElementById('aboutMeContainer').style.visibility = 'visible';
}

