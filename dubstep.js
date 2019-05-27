function songDecoder(song){
  const str0 = song.replace(/WUB/g, " ");
  const str1 = str0.trim();
  const str2 = str1.replace(/ +(?= )/g, '');
  return str2;
}
console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log(songDecoder("WUBAWUBBWUBCWUB"));
