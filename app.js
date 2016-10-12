var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromAPI(searchTerm, callback){
	var query ={
		part: 'snippet',
		key: 'AIzaSyAr9cDTQw1yY4KmXfZLT8kmKYO8LCJMuHY',
		q: searchTerm,
		maxResults: 10
	};
	$.getJSON(YOUTUBE_BASE_URL, query, callback);
}

function displaySearchData(data){
	var resultElement = '';
	if(data.items){
		data.items.forEach(function(item){
			var youtubeURL = 'https://www.youtube.com/watch?v=' + item.id.videoId; 
			resultElement += '<a href="' + youtubeURL + '"><img src="' + item.snippet.thumbnails.medium.url + '"></a>';
		})
	}	
	else{
		resultElement += '<p>No Results Found!</p>';
	}
	$('.js-displayContainer').html(resultElement);
}

function watchSubmit(){
	$('.js-searchForm').submit(function(event){
		event.preventDefault();
		var inputQuery = $(this).find('.js-query').val();
		getDataFromAPI(inputQuery, displaySearchData);
	})
}

watchSubmit();