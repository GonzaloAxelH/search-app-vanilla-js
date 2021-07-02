import { getSearchTerm } from './dataFunctions.js'
import { retrieveSearchResults } from './dataFunctions.js';



$(document).ready(()=>{
    localStorage.setItem("languaje", "es");
});



console.log(localStorage.getItem("languaje"))
//test for iterating over child elements
var langArray = [];
$('.vodiapicker option').each(function () {
    var img = $(this).attr("data-thumbnail");
    var text = this.innerText;
    var value = $(this).val();
    var item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text + '</span></li>';
    langArray.push(item);
})
    
$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function () {
    var img = $(this).find('img').attr("src");
    var value = $(this).find('img').attr('value');
    var text = this.innerText;
    var item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
    $('.btn-select').html(item);
    $('.btn-select').attr('value', value);
    $(".b").toggle();
    localStorage.setItem("languaje", value);
    console.log(localStorage.getItem("languaje"))

    const processsTheSearch = async () =>{
        const searchTerm = getSearchTerm();
        if(searchTerm === "") return;
        const resultArray= await retrieveSearchResults(localStorage.getItem("searchTerm"));	//retrieve = recuperar    
        console.log(resultArray);
    }
    processsTheSearch();
});

$(".btn-select").click(function () {
    $(".b").toggle();
});

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang) {
    //find an item with value of sessionLang
    var langIndex = langArray.indexOf(sessionLang);
    $('.btn-select').html(langArray[langIndex]);
    $('.btn-select').attr('value', sessionLang);
} else {
    var langIndex = langArray.indexOf('ch');
    console.log(langIndex);
    $('.btn-select').html(langArray[langIndex]);
    //$('.btn-select').attr('value', 'en');
}


