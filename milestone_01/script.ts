const abc = document.getElementById('abc-button') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

abc.addEventListener('click', () => {
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});