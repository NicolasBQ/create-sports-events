//Dom Objects
const mainContainer = document.getElementById('container');
const form = document.getElementById('form');
const search = document.getElementById('search');
const evenList = document.getElementById('section-my');
const eventContainer = document.getElementById('events-container');
const arr = [];

form.onsubmit = function(e) {
    e.preventDefault();
    new Message();
    new Values().image();
    arr.push(new Values);
}
//Successull message
function Message() {
    const container = document.getElementById('section-create');
    const message = document.createElement('div');
    message.innerText = 'Successfully creation of event, go to "My events" to check it.';
    message.className = 'h-20 w-64 mx-auto mt-12 p-4 bg-green-400 rounded text-center text-white md:w-80';
    mainContainer.insertBefore(message, container);
    setTimeout(function() {
        document.querySelector('.h-20').remove();
    }, 3000)

}
//Form Values
function Values() {
    this.name = document.getElementById('name').value;
    this.sport = document.getElementById('sport').value;
    this.type = document.getElementById('type').value;
    this.lvl = document.getElementById('lvl').value;
    this.gender = document.getElementById('gender').value;
    this.image = function() {
        if(this.sport == 'Football') {
            this.sportImg = 'Imagenes/Soccerball.svg';
                new Card(this.name, this.sportImg);
        }
        if(this.sport == 'Basketball') {
            this.sportImg = 'Imagenes/Basketball.png';
            new Card(this.name, this.sportImg);
        }
        if(this.sport == 'Baseball') {
            this.sportImg = 'Imagenes/Baseball.png';
            new Card(this.name, this.sportImg);
        }
    }

}
//Creation of card
function Card(name, sport) {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes();
    const dateTime = date + ' ' + time;   
    const div = document.createElement('div');
    div.innerHTML = `<div class="h-14 w-72 bg-gray-300 mt-8 rounded flex flex-row hover:bg-red-500 md:w-80" id="${name}">
                        <div class="justify-self-start pl-2">
                            <img src="${sport}" class="h-8 w-8 mt-3"/>
                        </div>
                        <div class="w-56 md:w-64">
                            <h1 class="text-gray-800 text-xl font-bold text-center py-1">${name}</h1>
                            <p class="text-gray-800 text-sm font-semibold text-center">Created <span>${dateTime}</span></p>
                        </div>
                        <div>
                        </div>
                    </div>
                    `
    evenList.append(div);
    new Access();
}
//Manipulation of the cards
function Access() {
   const items = new Values();
   const item = document.getElementById(items.name);
   item.addEventListener('click', function(){
        evenList.className = 'hidden'
        const eventSection = document.createElement('section');
        eventSection.className = 'flex flex-col items-center';
        eventSection.innerHTML = `<div class="h-72 w-72 bg-gray-300 mt-12 rounded borde-2 border-gray-500">
                                    <div>
                                    <img src="Imagenes/arrow.svg" id="back-arrow-${items.name}" class="h-8 w-8 mx-2 my-2 hover:cursor-pointer"/>
                                    </div>
                                    <h1 class="text-center text-gray-800 font-bold text-2xl">${items.name}</h1>
                                    <div class="grid grid-cols-2 grid-rows-5">
                                        <span class="ml-8 mt-3 text-lg text-gray-700">Sport</span>
                                        <span class="ml-8 mt-3  text-lg text-gray-900 font-bold">${items.sport}</span>
                                        <span class="ml-8 mt-3 text-lg text-gray-700">Type</span>
                                        <span class="ml-8 mt-3  text-lg text-gray-900 font-bold">${items.type}</span>
                                        <span class="ml-8 mt-3 text-lg text-gray-700">Level</span>
                                        <span class="ml-8 mt-3  text-lg text-gray-900 font-bold">${items.lvl}</span>
                                        <span class="ml-8 mt-3 text-lg text-gray-700">Gender</span>
                                        <span class="ml-8 mt-3  text-lg text-gray-900 font-bold">${items.gender}</span>
                                    </div>
                                  </div>`                           
        mainContainer.append(eventSection);
        const backArrow = document.getElementById('back-arrow-' + items.name);
        backArrow.addEventListener('click', function(){
            eventSection.className = 'hidden';
            evenList.className = 'flex flex-col items-center mt-8';
        })
        createBtn.addEventListener('click', function(){
            eventSection.className = 'hidden';
        })
        myBtn.addEventListener('click', function(){
            eventSection.className = 'hidden';
        })
   })
}
//Searcher of Events
search.addEventListener('keyup', function(e){
    e.preventDefault();
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    for(let event of arr) {
        const foundEvent = document.getElementById(event.name);
        let eventName = event.name.toLowerCase();
        if(eventName.indexOf(searchInput) !== -1) {
            evenList.insertBefore(foundEvent, eventContainer);
        }
        else {
            evenList.append(foundEvent);
        } 
    }
})


 