const moviesSort = document.querySelector("#movies_sort");
const cartoonSort = document.querySelector("#cartoon_sort");


function moviesSortFunction(e) {
    e.preventDefault();
    console.log('sorting');
}

function cartoonSortFunction(e) {
    e.preventDefault();
    console.log('sorting');
}

moviesSort.addEventListener('click', moviesSortFunction);
cartoonSort.addEventListener('click', cartoonSortFunction);

