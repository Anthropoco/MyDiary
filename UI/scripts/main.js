function displayLogin(e) {
    document.querySelector('#sign-up').style.display = 'none';
    document.querySelector('#login').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function displaySignUp(e) {
    document.querySelector('#login').style.display = 'none';
    document.querySelector('#sign-up').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function closeModal(e) {
    document.querySelector('.overlay').style.display = 'none';
}

function login(e) {
    //submit login credentials
    //on success display entries.html
    window.location.assign("entries.html")
}

function createUser(e) {
    //submit new user credentials
    //on success display entries.html
    window.location.assign("entries.html")
}

function logout(e){
    //cancel session

    //redirect to homepage
    window.location.assign("index.html");
}

function viewProfile(e){
    window.location.assign("profile.html");
}

function viewEntry(e){
    window.location.assign("entry.html");
}

function editEntry(e){
    window.location.assign("edit-entry.html");
}

//attach the logout function to logout buttons
document.querySelector('.logout')
    .addEventListener('click', logout);

//call viewProfile on click of view-profile buttons
document.querySelector('.view-profile')
    .addEventListener('click', viewProfile);
    

//call viewEntry on click of buttons with class entry
Array.from(document.querySelectorAll('.entry'))
    .forEach((item, idx)=>{
        item.addEventListener('click',viewEntry);
    });

//call editEntry on click of button with class edit-entry
document.querySelector('.edit-entry')
    .addEventListener('click', editEntry);