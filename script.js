var images;


images = ['https://media.istockphoto.com/id/524998707/fr/photo/londres-avec-arc-en-ciel-du-parlement-de-big-ben.webp?a=1&b=1&s=612x612&w=0&k=20&c=LRPgzilb9K4ooAkiMezKQh9W7GGAWvkpsaKs4jorAFo=', 'https://images.unsplash.com/photo-1448906654166-444d494666b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9ufGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D', 'https://media.istockphoto.com/id/1967543722/fr/photo/the-city-of-london-skyline-at-night-united-kingdom.webp?a=1&b=1&s=612x612&w=0&k=20&c=s67bMqw77xBSYn89EzhGbUEh4bG4RWWbTfkgU5EaPTs='];

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
