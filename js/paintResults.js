
const paintOnScreenResults = (results) => {
	results.forEach(result =>{	
		//create elements
		let itemResult = document.createElement('div');
		let descriptionResult = document.createElement('span');
		let titleLinlResult = document.createElement('a');
		let containerResults = document.createElement('div');

		//add to clases
		itemResult.classList.add('app__result-item');
		containerResults.classList.add('app__result-item-info');
		descriptionResult.classList.add('app__result-item-description');

		//add properties and data
		
		if(result.img){
			let imagenResult = document.createElement('img');
			imagenResult.src = result.img;
			imagenResult.alt= result.title;
			containerResults.appendChild(imagenResult);
		}
		descriptionResult.textContent = result.text;
		titleLinlResult.textContent = result.title;
		titleLinlResult.target = '_blank';
		titleLinlResult.href = `https://en.wikipedia.org/?curid=${result.id}`;

		//appends 
		containerResults.appendChild(descriptionResult);
		itemResult.appendChild(titleLinlResult);
		itemResult.appendChild(containerResults);

		document.getElementById('app-searchs-results').append(itemResult);
	})
}





const deleteOldResults=()=>{
	let resultsAll=document.getElementById('app-searchs-results');
	while (resultsAll.firstChild){
		resultsAll.removeChild(resultsAll.firstChild);
	}
}


const loadingLoader = () =>{
		let loader = document.getElementById('loading-screen')
		loader.classList.add('active');
}
const removeLoader = ()=> {
		let loader = document.getElementById('loading-screen')
		loader.classList.remove('active');
}

export { paintOnScreenResults,deleteOldResults,loadingLoader,removeLoader}
