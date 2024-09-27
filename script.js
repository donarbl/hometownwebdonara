var images;


images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhA2d6Vyt08Qb5Se6ZxKyjeVRJpcRxMzeBA&s', 'https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fHww', 'https://plus.unsplash.com/premium_photo-1679470310712-82c0a39cd41d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fHww'];

let element_london = document.getElementById('london');
element_london.setAttribute("src", images[0]);


document.getElementById('next_image').addEventListener('click', (event) => {
  let element_london2 = document.getElementById('london');
  images.push(images[0]);
  images.shift();
  let element_london3 = document.getElementById('london');
  element_london3.setAttribute("src", images[0]);

});

document.getElementById('previous_image').addEventListener('click', (event) => {
  let element_london4 = document.getElementById('london');
  images.unshift(images.slice(-1)[0]);
  images.pop();
  let element_london5 = document.getElementById('london');
  element_london5.setAttribute("src", images[0]);

});

document.getElementById('previous_image').addEventListener('click', (event) => {
  let element_london6 = document.getElementById('london');
  images.unshift(images[0]);
  images.shift();
  let element_london7 = document.getElementById('london');
  images.unshift(images[0]);

});
