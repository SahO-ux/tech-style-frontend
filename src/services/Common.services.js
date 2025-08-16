export function displayName(fullName) {
  if (fullName) {
    const name = fullName.split(" ");
    const lname = name[1];
    const fname = name[0];
    if (lname) {
      return (
        fname.substr(0, 1).toUpperCase() + lname.substr(0, 1).toUpperCase()
      );
    } else return fname.substr(0, 2).toUpperCase();
  }
  return "";
}

export function getStorage(key) {
  let value = localStorage.getItem(key);
  if (key === "timeZone") {
    value = value === "null" ? `America/New_York` : value;
  }
  return value;
}
