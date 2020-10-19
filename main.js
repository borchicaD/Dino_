var tbody = document.getElementById('tbody');

var xml = new XMLHttpRequest();

xml.open('GET', 'https://mysafeinfo.com/api/data?list=dinosaurs&format=json&select=ID,Name,Url&case=default&token=NVuVIKq9APEOYxIRcuQyH7ODc3petfz4&rows=1400&formatting=none&download=true');

xml.addEventListener('readystatechange', function(){
	if(xml.readyState === 4 && xml.status === 200){
		displayTableContent();
	}
})
xml.send();
function displayTableContent(){
	var data = JSON.parse(xml.responseText);
	var text = "";
	for (i=0;i<data.length;i++){
		text += '<tr>';
		//text += '<td>'+data[i].ID+'</td>';
		text += '<td>'+data[i].Name+'</td>';
		text += '<td><a href="'+data[i].Url+'"  target="_blank">Saznaj više...</a></td>';
		text += '</tr>';		
	}
	tbody.innerHTML = text;
}