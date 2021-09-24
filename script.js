
//Filter the customers that has not responded
//Loop through the array of the customers that did not respond using for of and for each then log to the console dear(name of customer) Kindly respond to the survey we sent
let customers = [
    {name: 'jane', hasResponded: true},
    {name: 'mary', hasResponded: false},
    {name: 'mark', hasResponded: true},
    {name: 'james', hasResponded: false}
]

let hasNotResponded = customers.filter(value => {
    return value.hasResponded > 0;
})

//FOREACH LOOP
hasNotResponded.forEach((value) => {
    console.log(`dear ${value.name}, kindly respond to the survey we sent`);
}) 

//FOR OF LOOP

for (let values of hasNotResponded) {
    console.log(`dear ${values.name}, kindly respond to the survey we sent`);
}


//loop through the univercities and filter out univercities that has medicine and offer scolarship
let univerities = [
    {name: 'avard', cources: [{name: 'medicine', hasScolarship: true}]},
    {name: 'uniLag', cources: [{name: 'medicine', hasScolarship: false}]},
    {name: 'uniben', cources: [{name: 'phamacy', hasScolarship: true}]},
    {name: 'uniport', cources: [{name: 'medicine', hasScolarship: true}]},
]
