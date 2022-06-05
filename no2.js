const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
];

function cariNama(pilihKata, limit, callback) {
    return console.log(callback(pilihKata, limit, name)); 
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

cariNama("an", 3, filterItem);

