// SCRIPT FOR MENU ITEMS
function startList() {
	if (document.all&&document.getElementById) {
		searchRoot = document.getElementById('email');
		for (i=0; i<searchRoot.childNodes.length; i++) {
			node = searchRoot.childNodes[i];
			if (node.nodeName=="INPUT") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}

window.onload=startList;




