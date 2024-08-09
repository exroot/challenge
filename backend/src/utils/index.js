const toString = (ab) => {
  return String.fromCharCode.apply(null, new Uint8Array(ab));
};

const csvToJSON = (csv) => {
  if (!csv) return;

  const lines = csv.split("\n");
  if (lines.length < 2) return;

  const result = [];

  const headers = lines[0].split(",");
  headers.shift();
  const filename = lines[1].split(",", 1)[0];

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentlines = lines[i].split(",");
    currentlines.shift();

    if (currentlines.length !== 3) continue;

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = j === 1 ? Number(currentlines[j]) : currentlines[j];
    }

    result.push(obj);
  }

  return {
    file: filename,
    lines: result,
  };
};

module.exports = { toString, csvToJSON };
