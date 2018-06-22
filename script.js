//Déclaration de la fonction pour l'attribut onmouseover
function mouseOver(){
  //Fonction qui permet de changer l'image en passant la souris dessus
  document.getElementById('image1').src = 'images/image1_2.jpg';
}
//Déclaration de la pour l'attribut onmouseout
function mouseOut(){
  //Fonction qui permet de revenir à l'image de base en retirant le curseur de l'image
  document.getElementById('image1').src = 'images/image1.jpg';
}
