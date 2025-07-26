/*

Personal Website
By: Rebytre

*/

function homeClicked() {
    //Home Items
    document.getElementById('homeContainer').style.visibility = 'visible';
    for (let i = 1; i <= 10; i++) {
        setTimeout(function() {document.getElementById('homeContainer').style.opacity = i * 0.1;}, i * 50);
    }
    //Projects Items
    document.getElementById('projectsContainer').style.visibility = 'hidden';
    document.getElementById('projectsContainer').style.opacity = 0;
    //Socials Items
    document.getElementById('socialsContainer').style.visibility = 'hidden';
    document.getElementById('socialsContainer').style.opacity = 0;
    //About Me Items
    document.getElementById('aboutMeContainer').style.visibility = 'hidden';
    document.getElementById('aboutMeContainer').style.opacity = 0;
}

function projectsClicked() {
    //Home Items
    document.getElementById('homeContainer').style.visibility = 'hidden';
    document.getElementById('homeContainer').style.opacity = 0;
    //Projects Items
    document.getElementById('projectsContainer').style.visibility = 'visible';
    for (let i = 1; i <= 10; i++) {
        setTimeout(function() {document.getElementById('projectsContainer').style.opacity = i * 0.1;}, i * 50);
    }
    //Socials Items
    document.getElementById('socialsContainer').style.visibility = 'hidden';
    document.getElementById('socialsContainer').style.opacity = 0;
    //About Me Items
    document.getElementById('aboutMeContainer').style.visibility = 'hidden';
    document.getElementById('aboutMeContainer').style.opacity = 0;
}

function socialsClicked() {
    //Home Items
    document.getElementById('homeContainer').style.visibility = 'hidden';
    document.getElementById('homeContainer').style.opacity = 0;
    //Projects Items
    document.getElementById('projectsContainer').style.visibility = 'hidden';
    document.getElementById('projectsContainer').style.opacity = 0;
    //Socials Items
    document.getElementById('socialsContainer').style.visibility = 'visible';
    for (let i = 1; i <= 10; i++) {
        setTimeout(function(){document.getElementById('socialsContainer').style.opacity = i * 0.1;}, i * 50);
    }
    //About Me Items
    document.getElementById('aboutMeContainer').style.visibility = 'hidden';
    document.getElementById('aboutMeContainer').style.opacity = 0;
}

function aboutMeClicked() {
    //Home Items
    document.getElementById('homeContainer').style.visibility = 'hidden';
    document.getElementById('homeContainer').style.opacity = 0;
    //Projects Items
    document.getElementById('projectsContainer').style.visibility = 'hidden';
    document.getElementById('projectsContainer').style.opacity = 0;
    //Socials Items
    document.getElementById('socialsContainer').style.visibility = 'hidden';
    document.getElementById('socialsContainer').style.opacity = 0;
    //About Me Items
    document.getElementById('aboutMeContainer').style.visibility = 'visible';
    for (let i = 1; i <= 10; i++) {
        setTimeout(function() {document.getElementById('aboutMeContainer').style.opacity = i * 0.1;}, i * 50);
    }
}
