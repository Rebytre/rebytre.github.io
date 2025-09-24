/*

Personal Website
By: Rebytre

*/
window.addEventListener('keydown', doThis);

function doThis (e) {
    if (e.code == "KeyM") {
        document.getElementById("mainIconDecoration").style.visibility = 'hidden';
    }
}
function homeClicked() {
    if (window.getComputedStyle(homeContainer).visibility === 'hidden') {
        //Home Items
        document.getElementById('homeContainer').style.visibility = 'visible';
        //Projects Items
        document.getElementById('projectsContainer').style.visibility = 'hidden';
        //Socials Items
        document.getElementById('socialsContainer').style.visibility = 'hidden';
        //About Me Items
        document.getElementById('aboutContainer').style.visibility = 'hidden';
        //Blog Items
        document.getElementById('blogContainer').style.visibility = 'hidden';
    }
}

function projectsClicked() {
    if (window.getComputedStyle(projectsContainer).visibility === 'hidden') {
        //Home Items
        document.getElementById('homeContainer').style.visibility = 'hidden';
        //Projects Items
        document.getElementById('projectsContainer').style.visibility = 'visible';
        //Socials Items
        document.getElementById('socialsContainer').style.visibility = 'hidden';
        //About Me Items
        document.getElementById('aboutContainer').style.visibility = 'hidden';
        //Blog Items
        document.getElementById('blogContainer').style.visibility = 'hidden';
    }
}

function socialsClicked() {
    if (window.getComputedStyle(socialsContainer).visibility === 'hidden') {
        //Home Items
        document.getElementById('homeContainer').style.visibility = 'hidden';
        //Projects Items
        document.getElementById('projectsContainer').style.visibility = 'hidden';
        //Socials Items
        document.getElementById('socialsContainer').style.visibility = 'visible';
        //About Me Items
        document.getElementById('aboutContainer').style.visibility = 'hidden';
        //Blog Items
        document.getElementById('blogContainer').style.visibility = 'hidden';
    }
}

function aboutClicked() {
    if (window.getComputedStyle(aboutContainer).visibility === 'hidden') {
        //Home Items
        document.getElementById('homeContainer').style.visibility = 'hidden';
        //Projects Items
        document.getElementById('projectsContainer').style.visibility = 'hidden';
        //Socials Items
        document.getElementById('socialsContainer').style.visibility = 'hidden';
        //About Me Items
        document.getElementById('aboutContainer').style.visibility = 'visible';
        //Blog Items
        document.getElementById('blogContainer').style.visibility = 'hidden';
    }
}

function blogClicked() {
    if (window.getComputedStyle(aboutContainer).visibility === 'hidden') {
        //Home Items
        document.getElementById('homeContainer').style.visibility = 'hidden';
        //Projects Items
        document.getElementById('projectsContainer').style.visibility = 'hidden';
        //Socials Items
        document.getElementById('socialsContainer').style.visibility = 'hidden';
        //About Me Items
        document.getElementById('aboutContainer').style.visibility = 'hidden';
        //Blog Items
        document.getElementById('blogContainer').style.visibility = 'visible';
    }
}







