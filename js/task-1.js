const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);
// АБО із додат.змінною ??
// const categories = document.querySelector('#categories');
// const categoriesCount = categories.children.length;
// console.log(`Number of categories: ${categoriesCount}`);

const categoriesItem = document.querySelectorAll('.item');

categoriesItem.forEach(category => {
  const title = category.querySelector('.category-title').textContent;
  const element = category.querySelectorAll('.category-item');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${element.length}`);
});

// '.category-title' = можна замінити на h2 ?
// '.category-item' = можна замінити на li ?

// АБО (треба перетворити категорії у масив)
// [...categories.children].forEach(elem => {
//   const title = elem.querySelector('.category-title').textContent;
//   const elements = elem.querySelectorAll('.category-item');
//   console.log(`Category: ${title}`);
//   console.log(`Elements: ${elements.length}`);
// });
