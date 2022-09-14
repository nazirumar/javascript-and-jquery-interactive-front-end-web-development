


var msg = '<p><b> Page title:</b>' + document.title + '<br />';
// msg 
msg += '<b> Page Adress:</b>' + document.URL + '<br />';
msg += '<b> Page modified:</b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML =msg
