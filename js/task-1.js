const categories = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const titleOfCategory = category.querySelector('h2').textContent;
    const itemsOfCategory = category.querySelectorAll('ul > li').length;
    console.log('Category: ' + titleOfCategory);
    console.log('Elements: ' + itemsOfCategory);
});