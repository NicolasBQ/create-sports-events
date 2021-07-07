const myBtn = document.getElementById('botonMy');
const createBtn = document.getElementById('botonCreate');
const mySection = document.getElementById('section-my');
const createSection = document.getElementById('section-create');

myBtn.addEventListener('click', function() {
    myBtn.className = 'h-6 w-32 pb-2 bg-white rounded-bl-lg rounded-tl-lg font-semibold text-gray-800';
    createBtn.className = 'h-6 w-32 pb-2 bg-gray-800 rounded-br-lg rounded-tr-lg text-white font-semibold';
    createSection.className = 'hidden';
    mySection.className = 'flex flex-col items-center mt-8';
});

createBtn.addEventListener('click', function() {
    myBtn.className = 'h-6 w-32 pb-2 bg-gray-800 rounded-bl-lg rounded-tl-lg text-white font-semibold';
    createBtn.className = 'h-6 w-32 pb-2 bg-white rounded-br-lg rounded-tr-lg font-semibold text-gray-800';
    mySection.className = 'hidden';
    createSection.className = 'flex flex-col items-center mt-16';
})