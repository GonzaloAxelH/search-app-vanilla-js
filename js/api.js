const prepareApiString = (languaje,searchTerm,maxChars,generator="search",gsrLimit="20",prop="pageimages|extracts") => {
	const string = `https://${languaje}.wikipedia.org/w/api.php?action=query&generator=${generator}&gsrsearch=${searchTerm}&gsrlimit=${gsrLimit}&prop=${prop}&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;

	return encodeURI(string);				
}

export {prepareApiString}
