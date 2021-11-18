var eta_ms = new Date(2021, 10, 16, 13, 09).getTime() - Date.now();
var timeout = setTimeout(function () { alert('alerta!') }, eta_ms);
