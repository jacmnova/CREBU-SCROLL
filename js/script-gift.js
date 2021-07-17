var panorama, panorama_video, viewer, container, infospot;

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( './img/gift-room/CREBU_GIFT-ROOM-CENTER.png' );

panorama_video = new PANOLENS.VideoPanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/video/1941-battle-low.mp4' );

panorama.link( panorama_video, new THREE.Vector3(126.94, 1312.17, 4814.32) );
panorama_video.link( panorama, new THREE.Vector3(4608.48, 1889.67, -375.46) );



viewer = new PANOLENS.Viewer( { container: container, output: 'console' } );
viewer.add( panorama );



// Wonder women custom item
var posterInfospot = new PANOLENS.Infospot(1000, 'https://images-na.ssl-images-amazon.com/images/I/91nELBuo3kL._RI_SX200_.jpg');
posterInfospot.position.set(-4774.9, 0, 0);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);


// 2
var posterInfospot = new PANOLENS.Infospot(1000, './img/gift-room/1.png');
posterInfospot.position.set(-4774.9, 0, 2000);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);


// 3
var posterInfospot = new PANOLENS.Infospot(1000, './img/gift-room/2.png');
posterInfospot.position.set(-4774.9, 0, 5000);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);


//4
var posterInfospot = new PANOLENS.Infospot(1000, './img/gift-room/3.png');
posterInfospot.position.set(-4774.9, 0, -2000);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);


//5
var posterInfospot = new PANOLENS.Infospot(1000, './img/gift-room/5.png');
posterInfospot.position.set(-4774.9, 0, -6000);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);



//6
var posterInfospot = new PANOLENS.Infospot(1000, './img/gift-room/6.png');
posterInfospot.position.set(-4774.9, 0, 10000);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);


//7
var posterInfospot = new PANOLENS.Infospot(1000, './img/gift-room/4.png');
posterInfospot.position.set(4774.9, 0, 0);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);


//8
var posterInfospot = new PANOLENS.Infospot(1000, './img/gift-room/7.png');
posterInfospot.position.set(4774.9, 0, 2000);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);


//8
var posterInfospot = new PANOLENS.Infospot(1000, './img/gift-room/8.jpg');
posterInfospot.position.set(4774.9, 0, 5000);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);


//9
var posterInfospot = new PANOLENS.Infospot(1000, './img/gift-room/9.jpg');
posterInfospot.position.set(4774.9, 0, -3000);
posterInfospot.addEventListener( 'click', function(){ 
    container = document.querySelector( '#contact' );
    container.classList.add("click");
 });
panorama.add(posterInfospot);



