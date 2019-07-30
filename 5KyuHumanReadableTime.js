function humanReadable(seconds) {
  // TODO
  var jam = Math.floor(seconds / 3600);
  var menit = Math.floor(seconds / 60);
  var malih = menit % 60;
  var hh = seconds % 3600;
  var mm = seconds % 60;
//   console.log(mm);
  var detik = mm % 60;
  if (detik < 10) {
    detik = "0" + detik;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (jam < 10) {
    jam = "0" + jam;
  }
  if (menit < 10) {
    return jam + ":0" + menit + ":" + detik;
  } else {
  }
  if (malih < 10) {
    return jam + ":0" + malih + ":" + detik;
  } else {
    return jam + ":" + malih + ":" + detik;
  }
}

console.log(humanReadable(0)); //'00:00:00', 'humanReadable(0)');
console.log(humanReadable(5)); //'00:00:05', 'humanReadable(5)');
console.log(humanReadable(60)); //'00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399)); //'23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999)); //'99:59:59', 'humanReadable(359999)')
