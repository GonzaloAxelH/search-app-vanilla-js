import { prepareApiString } from './api.js'


 const getSearchTerm = () =>{
 	const rawSearchTerm =document.getElementById("searchInput").value.trim(); // raw == en bruto o crudo
 	const regex = /[ ]{2,}/gi;
	const searcTerm= rawSearchTerm.replaceAll(regex," ");
	return searcTerm;
}

 const retrieveSearchResults = async (searchTerm) =>{
		const wikiSearchString = getWikiSearchString(searchTerm);
		const wikiSearchResults=await queryData(wikiSearchString);
		let resultArray=[];
		if(wikiSearchResults.hasOwnProperty("query")){
			resultArray = processWikiResults(wikiSearchResults.query.pages);
		}
		
		return resultArray;
}


const processWikiResults = (results) =>{
	let myArray=[];
		Object.keys(results).forEach(key =>{
			const id = key;
			const title = results[key].title;
			const text = results[key].extract;
			const img = results[key].hasOwnProperty("thumbnail") 
				? results[key].thumbnail.source : null;
			const item ={
				id,
				title,
				text,img
			};
			myArray.push(item);
		})
		return myArray;
} 




const getWikiSearchString = (searchTerm) =>{
	let idioma = localStorage.getItem("languaje");
	localStorage.setItem('searchTerm',searchTerm); 
	let rawSearchApiString = prepareApiString(idioma,searchTerm,getMaxChars());
	console.log(rawSearchApiString)
	return rawSearchApiString;
}



const queryData = async (apiString) =>{
	try{
		const response = await fetch(apiString);
		const data = await response.json();
		return data;
	}catch(error){
		console.err(error)
	}
}




const getMaxChars = () =>{
	const widthScreen =window.innerWidth || document.body.clientWidth;
	let maxChars;
	if(widthScreen < 414) maxChars =65;
	if(widthScreen >= 414 && widthScreen < 1400) maxChars=100;
	if(widthScreen >= 1400) maxChars=135;
	return maxChars; 
}



export {retrieveSearchResults,getSearchTerm }