$('#flash').hide().fadeIn(2500);
$('#flash').on('click', function(){
    $('h1').css('backgroundColor', 'tomato');
});

// console.log(`Hi, my name is ${tree.nickname} and I am a ${tree.species}.`);

// BELOW: inserts tree objects from mytrees.js into the page
let html = '';
for (let i = 0; i < trees.length; i++){
   let tree = trees[i];
   html += `
   <h2>${tree.nickname}</h2>
   <h4>${tree.treeType} | ${tree.species}</h4>
   <p>Age: ${tree.age}</p>
   <br>
   `
}
document.querySelector('main').insertAdjacentHTML('beforeend', html);
// ABOVE: inserts tree objects from mytrees.js into the page