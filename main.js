function getName(){
	var first = document.querySelector('#first').value;
	var second = document.querySelector('#second').value;
	var third = document.querySelector('#third').value;
	var fourth = document.querySelector('#fourth').value;
	document.querySelector('#o').innerHTML = generate(first,second,third,fourth);
	document.querySelector('#terry').style.display = "block";
}

function generate(first,second,third,fourth){
	var newName = "";

	if(first == '0') newName = 'La';
	if(first == '1') newName = 'Da';
	if(first == '2') newName = 'Dar';
	if(first == '3') newName = 'Ty';
	if(first == '4') newName = 'Quen';
	if(first == '5') newName = 'Jer';
	if(first == '6') newName = 'Quin';
	if(first == '7') newName = 'Nel';
	if(first == '8') newName = 'Jam';
	if(first == '9') newName = 'Per';

	if(second == '0') newName = newName.concat('shar');
	if(second == '1') newName = newName + 'mar';
	if(second == '2') newName = newName +'tar';
	if(second == '3') newName = newName +'mal';
	if(second == '4') newName = newName +'tal';
	if(second == '5') newName = newName +'i';
	if(second == '6') newName = newName +'quo';
	if(second == '7') newName = newName +'fer';
	if(second == '8') newName = newName +'s';
	if(second == '9') newName = newName +'il';

	if(third == '0') newName = newName +'icious';
	if(third == '1') newName = newName +'terious';
	if(third == '2') newName = newName +'us';
	if(third == '3') newName = newName +'shon';
	if(third == '4') newName = newName +'ius';
	if(third == '5') newName = newName +'kwon';
	if(third == '6') newName = newName +'ondo';
	if(third == '7') newName = newName +'quel';
	if(third == '8') newName = newName +'eo';
	if(third == '9') newName = newName +'miah';

	if(fourth == '0') newName = newName +' Jones';
	if(fourth == '1') newName = newName +' Smith';
	if(fourth == '2') newName = newName +' Williams';
	if(fourth == '3') newName = newName +' Robinson';
	if(fourth == '4') newName = newName +' Harris';
	if(fourth == '5') newName = newName +' Washington';
	if(fourth == '6') newName = newName +' Jackson';
	if(fourth == '7') newName = newName +' Carter';
	if(fourth == '8') newName = newName +' Brown';
	if(fourth == '9') newName = newName +' Johnson';

	return newName;
}