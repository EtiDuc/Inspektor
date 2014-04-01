//populate la page avec les donnees.
$(function(){
	for(i in data)
	{
		var line = "<div class=row index='"+i+"'>";
		line = line+"<div class='column_names col-md-12'>";
		line = line+"<div class='col-md-4 table_header'>Source image</div>";
		line = line+"<div class='col-md-8 table_header'>Recognised text</div>";
		line = line+"</div>";
		
		line=line+"<img src='file:///"+data[i][0]+"' class='col-md-4'>";
		line=line+"<div class='col-md-8'><div class=textbox>"+data[i][1]+"</div>";
		line=line+"<label>Exactitude: </label>";
		line=line+"<div class='progress'>";
	  		line=line+"<div class='progress-bar' role='progressbar' aria-valuenow='"+data[i][2]+"' aria-valuemin='0' aria-valuemax='100' style=\"width: "+data[i][2]+"%;\">";
	   	 		line=line+"<span>"+data[i][2]+"%</span>";
	  		line=line+"</div>";
		line=line+"</div>";
		
		$("#data").append($(line));
	}
});


//listeners pour le enter dans le keyword filter
$(function() {
	$('#keyword_form').submit(function(e){
		e.preventDefault();
		standard_search();
	});
});


$(document).ready(function() {
	$("#standard_search").click(function() {
		standard_search();
	});
	$("#regex_search").click(function() {
		regex_search();
	});
	$("#fuzzy_search").click(function() {
		fuzzy_search();
	});
});


function standard_search()
{
	var filter = $('#filter').val();

	$('.row').each(function() {
		var text = $(this).find('.textbox').text();
		if ( text.toLowerCase().indexOf(filter.toLowerCase()) != -1 )
		{
			$(this).show();
		}
		else
		{
			$(this).hide();
		}
	});
}


function regex_search()
{
	var filter = $('#filter').val();
	var regex = new RegExp(filter);
	
	$('.row').each(function() {
		var text = $(this).find('.textbox').text();
		if ( regex.test(text) )
		{
			$(this).show();
		}
		else
		{
			$(this).hide();
		}
	});
}

function fuzzy_search()
{
	alert("TODO: fuzzy search");
}
