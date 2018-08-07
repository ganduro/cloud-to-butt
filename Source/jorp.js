//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function getJorp() {

	var jorp = ["Jorp", "Jorp!", "JPee", "Kermit the Fraud", "an anhedonic frog", "Lobsterman", "Jurassic Parkinson", "\"Air Jordan\" Peterson", "Jordan, son of Peter", "Porbo Jeterson", "Jordy-P", "J. Peeperson", "Jordgie Porgie", "the oldest man named Jordan"]
	
	var index = Math.floor(Math.random() * jorp.length)
	return jorp[index]
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bJordan Peterson\b/g, getJorp());
	v = v.replace(/\bjordan peterson\b/g, getJorp());
	v = v.replace(/\bJordan B Peterson\b/g, getJorp());
	v = v.replace(/\bjordan b peterson\b/g, getJorp());
	v = v.replace(/\bJordan B. Peterson\b/g, getJorp());
	v = v.replace(/\bjordan b. peterson\b/g, getJorp());
	v = v.replace(/\bJordan Bernt Peterson\b/g, getJorp());
	v = v.replace(/\bjordan bernt peterson\b/g, getJorp());
	v = v.replace(/\bJordan_Peterson\b/g, getJorp());
	
	textNode.nodeValue = v;
}
