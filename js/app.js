import { getSearchTerm } from './dataFunctions.js'
import { retrieveSearchResults } from './dataFunctions.js';

const initApp = () => {
	const form = document.getElementById('form');
	form.addEventListener("submit",submitTheSearch);	
}
//funciones 
const submitTheSearch=(event)=>{
	event.preventDefault();
	processsTheSearch();
}

const processsTheSearch = async () =>{
	const searchTerm = getSearchTerm();
	if(searchTerm === "") return;
	const resultArray= await retrieveSearchResults(searchTerm);	//retrieve = recuperar
	console.log(resultArray)
}


initApp();







