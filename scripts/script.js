function getElement(id){

    return document.getElementById(id)

}

let light = 0; 
let modeText = getElement('mode');
let root = document.documentElement;
let main = getElement('main');
let springbrook = getElement('springbrook');

function mode(event){
    if(light === 0){
        event.target.classList.add('off');
        modeText.innerHTML = 'dark mode';
        modeText.style.color  = 'white';
        springbrook.style.filter = 'brightness(80%)'
        event.target.style.borderColor = 'white';
        root.style.setProperty('--backgroundcolor', 'black');
        root.style.setProperty('--mainbackground','rgb(5,5,5)');
        root.style.setProperty('--nav-font-color', 'white');
        root.style.setProperty('--boxshadow', 'rgba(255, 255, 255, 0.8)');
        
        
        light =1; 
    }

    else{
        event.target.classList.remove('off');
        modeText.innerHTML = 'light mode';
        modeText.style.color  = 'black';
        root.style.setProperty('--mainbackground','rgb(252, 252, 252)');
        event.target.style.borderColor = 'rgba(117, 111, 111, 0.993)';
        root.style.setProperty('--backgroundcolor', 'white');
        root.style.setProperty('--nav-font-color', 'black');
        root.style.setProperty('--boxshadow', 'rgba(5, 5, 5, 0.8)');
        springbrook.style.filter = 'brightness(50%)'
        
        light = 0;
    }
    
    
}
let home = getElement('home'); 
let [about, projects, contact] = [getElement('about'), getElement('projects'), getElement('contact')];


function navigation(event){

    //console.log(window.location.href)
    
    
    switch(event.target.id){
        case 'home':
            event.target.style.boxShadow = '2px 2px 2px 2px var(--boxshadow)'
            about.style.boxShadow = 'none';
            projects.style.boxShadow = 'none';
            contact.style.boxShadow = 'none';
            break;

        case 'about':
            event.target.style.boxShadow = '2px 2px 2px 2px var(--boxshadow)'
            home.style.boxShadow = 'none';
            projects.style.boxShadow = 'none';
            contact.style.boxShadow = 'none';
            break;

        case 'projects':
            event.target.style.boxShadow = '2px 2px 2px 2px var(--boxshadow)'
            home.style.boxShadow = 'none';
            about.style.boxShadow = 'none';
            contact.style.boxShadow = 'none';
            break;

        case 'contact':
            event.target.style.boxShadow = '2px 2px 2px 2px var(--boxshadow)'
            home.style.boxShadow = 'none';
            about.style.boxShadow = 'none';
            projects.style.boxShadow = 'none';
            break;
    }

    

    

}

let toggler = getElement('toggler__');
toggler.addEventListener('click', mode);


home.addEventListener('click', navigation);
about.addEventListener('click', navigation);
projects.addEventListener('click', navigation);
contact.addEventListener('click', navigation)