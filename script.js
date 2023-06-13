const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function searchHandler(e) {
   let userInput = e.target.value;
   search(userInput);
 
}

function search(userInput) {
    //Initially remove all elements (so if user erases a letter or adds a new letter then clean previous outputs)
    clearSuggestions();
    let results = [];
    //loop through above array
    for (let fruit of fruits){
        //convert input to lowercase and compare with each string in array
        if (fruit.toLowerCase().includes(input.value.toLowerCase()) && input.value !== ""){
            let listItem = document.createElement('li')
            //one common class name
            listItem.classList.add('has-suggestions');
            listItem.setAttribute('onclick', "useSuggestion('" + fruit + "')");
            //display the value in array in bold
            let newWord = fruit.replace(input.value, '<b>' + input.value + '</b>')
            listItem.innerHTML = newWord;
            //attach listItem to ul
            document.querySelector('.suggestions').appendChild(listItem);
        }
    }
  }

function useSuggestion (value){
    input.value = value;
    clearSuggestions();
}
function clearSuggestions (){
    //clear all the items
    let items = document.querySelectorAll('.has-suggestions');
    items.forEach((item)=>{
        item.remove();
    });
}

input.addEventListener('keyup', searchHandler);
