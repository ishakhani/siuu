//selectionner le premier element de la page avec la classe 'sliderWrapper'//
const wrapper = document.querySelector(".sliderWrapper");
//selectionner tout les  éléments avec la classe 'menuItem' //
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

//Assigner le premier produit du tableau d'object nommé products a un variable ayant comme nom 'choosenProducts'// 
let choosenProduct = products[0];

//selectionner les elements des differantes classes et les assigner au diffrantes variables//
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

//Ajouter un click event listener por chaque element de "menuItem"//
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //changer le slide courant en definssant la propriete 'transform' de l'element "wrapper"//
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //changer la variable "choosenProduct" au produit de l'index actuelle//
    choosenProduct = products[index];

    //changer le titre du produit courant au titre du produit choisi(changer le textContent)//
    currentProductTitle.textContent = choosenProduct.title;
    //changer le 'textContent' du 'currentProductPrice' au prix du 'choosenProduct'//
    currentProductPrice.textContent = "$" + choosenProduct.price;
    // changer l'attribut du "currentProductImg" a l'image de la premiere couleur du "choosenProduct"
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

//Ajouter un click event listner por chaque "color"//
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    //changer l'attribut "src" de l'element "currentProductImg" par l'image de la couleur clickee//
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

//Ajouer un click event listner pour chaque element "size" //
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

//Ajouter un click event listner a l'element "productButton"//
productButton.addEventListener("click", () => {
  //type de display pour l'element "payement"//
  payment.style.display = "flex";
});

//Ajouter un click event listner a l'element "close"//
close.addEventListener("click", () => {
  //le type de display 'none' en clickant sur l'element "close"//
  payment.style.display = "none";
});

function format(input) {
  // Supprimer  tous  les characteres non-numeric
  var phoneNumber = input.value.replace(/\D/g, '');

  // Vérifiez la longueur pour insérer les séparateurs appropriés
  if (phoneNumber.length > 3 && phoneNumber.length <= 5) {
    phoneNumber = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3);
  } else if (phoneNumber.length > 5 && phoneNumber.length <= 7) {
    phoneNumber = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 5) + '-' + phoneNumber.slice(5);
  } else if (phoneNumber.length > 6) {
    phoneNumber = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 5) + '-' + phoneNumber.slice(5, 7) + '-' + phoneNumber.slice(7);
  } else if (phoneNumber.length > 7 && phoneNumber.length <= 9){
      phoneNumber = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 4) + '-' + phoneNumber.slice(7, 9) + '-' + phoneNumber.slice(9);
  }
  input.value = phoneNumber;
}

function formt(input) {
    // Supprimer  tous  les characteres non-numeric
    var cardNumber = input.value.replace(/\D/g, '');
  
    // Vérifiez la longueur pour insérer les séparateurs appropriés
    if (cardNumber.length > 0 && cardNumber.length <= 4) {
      cardNumber = cardNumber.slice(0, 4) + '-' + cardNumber.slice(4);
    } else if (cardNumber.length > 4 && cardNumber.length <= 8) {
      cardNumber = cardNumber.slice(0, 4) + '-' + cardNumber.slice(4, 8) + '-' + cardNumber.slice(8);
    } else if (cardNumber.length > 8 && cardNumber.length <= 12) {
      cardNumber = cardNumber.slice(0, 4) + '-' + cardNumber.slice(4, 8) + '-' + cardNumber.slice(8, 12) + '-' + cardNumber.slice(12);
    }  else if (cardNumber.length > 12 && cardNumber.length <= 16){
         cardNumber = cardNumber.slice(0, 4) + '-' + cardNumber.slice(4, 8) + '-' + cardNumber.slice(8, 12) + '-' + cardNumber.slice(12, 16);
    }
    input.value = cardNumber;
  }


function year(input){
  var year = input.value.replace(/\D/g, '');
  if (year.length > 0 && year.length <= 2) {
    year = year.slice(0, 2) + '/' + year.slice(2);
  }else if (year.length > 2 && year.length <= 4) {
    year = year.slice(0, 2) + '/' + year.slice(2, 4);
  }
  input.value = year;
}