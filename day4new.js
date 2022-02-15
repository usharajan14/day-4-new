var vampires=[
{
    name : "Stefan Salvatore",
    Age:147,
    Love:"Elena Gilbert",
    DeathAge:170
},
{
	name:"Klaus Mickelson",
	Age:1500,
	Love:"Caroline Forbes",
	DeathAge:50
},
{
	name:"Damon Salvatore",
	Age:149,
	Love:"Katherine Pierce",
	DeathAge:199
},
{
	name:"Elijah Mickelson",
	Age:1506,
	Love:"Hayley",
	DeathAge:30
}
]
for(i=0;i<vampires.length;i++)
{
console.log(vampires[i].name);
console.log(vampires[i].Love);
}
vampires.forEach(
	function(arrayitem)
	{var x=arrayitem.Age;
	console.log(x);
	var y=arrayitem.DeathAge;
	console.log(y);
	}
	)
