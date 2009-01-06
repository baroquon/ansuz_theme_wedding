// CREATE NEW DATE OBJECT
// CREATE NEW DATE OBJECT
function date(get) {
	var mydate=new Date()
	var year=mydate.getFullYear()
	var day=mydate.getDay()
	var month=mydate.getMonth()
	var daym=mydate.getDate()
	var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
	if(get=="month"){document.write(montharray[month]);}
	if(get=="date"){document.write(daym);}
	if(get=="year"){document.write(year);}
}
