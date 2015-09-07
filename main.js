'use strict';	
$('#content').hide();
let json = api.boa.run('popularity.boa');
$('#loading').hide();
$('#content').show();

for(let index in json.FanOut) {
	let fanOut = 0; let loc = 0; let noa = 0; let noc = 0; let nom = 0;
	let nopa = 0; let nopm = 0; let nopra = 0; let noprm = 0; let wmc = 0;
	
	if (json.FanOut[index] != undefined)
		fanOut = json.FanOut[index];
	if (json.LOC[index] != undefined)
		loc = json.LOC[index];
	if (json.NOA[index] != undefined)
		noa = json.NOA[index];
	if (json.NOC[index] != undefined)
		noc = json.NOC[index];
	if (json.NOM[index] != undefined)
		nom = json.NOM[index];
	if (json.NOPA[index] != undefined)
		nopa = json.NOPA[index];
	if (json.NOPM[index] != undefined)
		nopm = json.NOPM[index];
	if (json.NOPRA[index] != undefined)
		nopra = json.NOPRA[index];
	if (json.NOPRM[index] != undefined)
		noprm = json.NOPRM[index];
	if (json.WMC[index] != undefined)
		wmc = json.WMC[index];
	
	$('#table-output-body').append(`<tr><td> <i>${index}</i> </td> <td> ${fanOut} </td> <td> ${loc} </td><td> ${noa} </td><td> ${noc} </td><td> ${nom} </td><td> ${nopa} </td><td> ${nopm} </td><td> ${nopra} </td><td> ${noprm} </td><td> ${wmc} </td></tr>`)
}

