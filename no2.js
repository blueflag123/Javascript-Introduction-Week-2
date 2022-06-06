const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
];

function cariNama(pilihKata, limit, callback) {
    if (typeof pilihKata !== "string") {
        return console.log("Input harus string");
      }
      if (typeof limit !== "number") {
        return console.log("Input harus number");
      }
    else {
    return console.log(callback(pilihKata, limit, name)); 
}
};

function batasArray(array, limit) {
    if (array.length > 3) {
        return array.slice(0,limit );
    } else {
        return array;
    }
};

function filterItem(pilihKata, limit, array) {
    return batasArray(array.filter(function(e) {
    return e.toLowerCase().indexOf(pilihKata.toLowerCase()) !== -1;
  }),limit);
};

cariNama("an", 3, filterItem); // [ 'Alexandra', 'Amanda', 'Angela' ]
cariNama(10, 3, filterItem); // Input harus string
cariNama("an", "10", filterItem); // Input harus number


