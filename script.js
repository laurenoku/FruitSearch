const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function searchHandler(e) {
   let userData = e.target.value;
   search(userData);
 
}

function search(userData) {
    //Initially remove all elements (so if user erases a letter or adds a new letter then clean previous outputs)
    useSuggestion();
    let results = [];
    //loop through above array
    for (let i of fruits){
        //convert input to lowercase and compare with each string
        
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !== ""){
            let listItem = document.createElement('li')
            //one common class name
            listItem.classList.add('list-items');
            listItem.style.cursor = 'pointer';
            listItem.setAttribute('onclick', "showSuggestions('" + i + "')");
            //Display matched part in bold;
            let word = '<b>' + i.substr(0,input.value.length) + '</b>';
            word += i.substr(input.value.length);
            //display the value in array
            listItem.innerHTML = word;
            document.querySelector('.suggestions').appendChild(listItem);
        }
    }
  }

function showSuggestions(value) {
 input.value = value;
 useSuggestion();
}

function useSuggestion (e){
      //clear all the items
      let items = document.querySelectorAll('.list-items');
      items.forEach((item)=>{
          item.remove();
      });
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);