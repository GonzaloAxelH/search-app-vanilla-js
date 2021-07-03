import { getSearchTerm } from './dataFunctions.js'
import { retrieveSearchResults } from './dataFunctions.js';
import { paintOnScreenResults,deleteOldResults ,loadingLoader,removeLoader} from './paintResults.js'
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
	deleteOldResults();
	const searchTerm = getSearchTerm();
	if(searchTerm === "") return;
	loadingLoader();
	const resultArray= await retrieveSearchResults(searchTerm);	//retrieve = recuperar
	removeLoader();
	paintOnScreenResults(resultArray);
}


initApp();







