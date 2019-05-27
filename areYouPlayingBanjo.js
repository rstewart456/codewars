/*
function areYouPlayingBanjo(name) {
    if (name[0] == "R" || name[0] == "r") {
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }
}
*/
function areYouPlayingBanjo(name) {
  var x = name
  if (x[0] == "R" || x[0] == "r") {
    return name + " plays banjo"
  } else {
    return name + " does not play banjo"
  }
}
console.log(areYouPlayingBanjo("Ronald Stewart"));
