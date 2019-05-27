var data = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
  ]
  var song = data.map(name => {
    
    return name.name;
  })
  console.log(song);
  //getNames(data) // should return ['Joe', 'Bill', 'Kate']