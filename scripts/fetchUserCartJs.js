'use strict'

function appendUserItems( item ) {

    switch (item) {
        case 'Tie-Dye Cropped Shirt':
                                    appendTee1( item );
                                    break;
        case 'Colorful Tie-Dye Shirt':
                                    appendTee2( item );
                                    break;

        case 'Striped Shirt':
                              appendTee3( item );
                              break;
          case 'Washed Shirt':
                              appendTee4( item );
                              break;
          case 'ACDC Shirt':
                            appendTee5( item );
                            break;
          case 'Jersey Long-Sleeved Shirt':
                            appendTee6( item );
                            break;
          case 'Slime Shirt':
                            appendTee7( item );
                            break;
          case 'Dyed Cropped Shirt':
                            appendTee8( item );
                              break;
          default:
            console.log(`Seems it matches none.`);
    }

}

function appendTee1 ( item ) {

    var div = document.createElement('div');
    div.className = 'userItemFromCart';

    var img = document.createElement('img');
    var teePic = `clothings/tshirt1.jpeg`;
    img.src = teePic;
    
    var span = document.createElement('span');
    span.className = 'flexDeetsToRight';

    var productLabel = document.createElement('p');
    productLabel.innerText = item;

    var productPrice = document.createElement('p');
    productPrice.innerText = '$10';

    span.appendChild(productLabel);
    span.appendChild(productPrice);
    //p.id = 'userReview';

    var deleteBtn = document.createElement('img');

    var imagePath = `imagesUsed/trashCanPick.png`;

    deleteBtn.src = imagePath;

    deleteBtn.className = 'trashUserElement';

    deleteBtn.addEventListener('click', event => {

        //deleteBtn.remove();
        div.remove();

        removeTeeFromCart( item )
        .then(() => {
            decreaseNumInCart( userEmail );
            fetchNumInCart();
        });

      });

    span.appendChild(deleteBtn);

    div.appendChild(img);
    div.appendChild(span);

    $('.userCartItems').appendChild(div);

}


function appendTee2 ( item ) {

    var div = document.createElement('div');
    div.className = 'userItemFromCart';

    var img = document.createElement('img');
    var teePic = `clothings/tshirt2.jpeg`;
    img.src = teePic;
    
    var span = document.createElement('span');
    span.className = 'flexDeetsToRight';

    var productLabel = document.createElement('p');
    productLabel.innerText = item;

    var productPrice = document.createElement('p');
    productPrice.innerText = '$10';

    span.appendChild(productLabel);
    span.appendChild(productPrice);
    //p.id = 'userReview';

    var deleteBtn = document.createElement('img');

    var imagePath = `imagesUsed/trashCanPick.png`;

    deleteBtn.src = imagePath;

    deleteBtn.className = 'trashUserElement';

    deleteBtn.addEventListener('click', event => {

        removeTeeFromCart( item )
        .then(() => {
            decreaseNumInCart( userEmail );
            fetchNumInCart();
        });

        div.remove();
      });

    span.appendChild(deleteBtn);

    div.appendChild(img);
    div.appendChild(span);

    $('.userCartItems').appendChild(div);

}

function appendTee3 ( item ) {

    var div = document.createElement('div');
    div.className = 'userItemFromCart';

    var img = document.createElement('img');
    var teePic = `clothings/tshirt3.jpeg`;
    img.src = teePic;
    
    var span = document.createElement('span');
    span.className = 'flexDeetsToRight';

    var productLabel = document.createElement('p');
    productLabel.innerText = item;

    var productPrice = document.createElement('p');
    productPrice.innerText = '$10';

    span.appendChild(productLabel);
    span.appendChild(productPrice);
    //p.id = 'userReview';

    var deleteBtn = document.createElement('img');

    var imagePath = `imagesUsed/trashCanPick.png`;

    deleteBtn.src = imagePath;

    deleteBtn.className = 'trashUserElement';

    deleteBtn.addEventListener('click', event => {

        removeTeeFromCart( item )
        .then(() => {
            decreaseNumInCart( userEmail );
            fetchNumInCart();
        });

        div.remove();
      });

    span.appendChild(deleteBtn);

    div.appendChild(img);
    div.appendChild(span);

    $('.userCartItems').appendChild(div);

}

function appendTee4 ( item ) {

    var div = document.createElement('div');
    div.className = 'userItemFromCart';

    var img = document.createElement('img');
    var teePic = `clothings/tshirt4.jpeg`;
    img.src = teePic;
    
    var span = document.createElement('span');
    span.className = 'flexDeetsToRight';

    var productLabel = document.createElement('p');
    productLabel.innerText = item;

    var productPrice = document.createElement('p');
    productPrice.innerText = '$10';

    span.appendChild(productLabel);
    span.appendChild(productPrice);
    //p.id = 'userReview';

    var deleteBtn = document.createElement('img');

    var imagePath = `imagesUsed/trashCanPick.png`;

    deleteBtn.src = imagePath;

    deleteBtn.className = 'trashUserElement';

    deleteBtn.addEventListener('click', event => {

        removeTeeFromCart( item )
        .then(() => {
            decreaseNumInCart( userEmail );
            fetchNumInCart();
        });

        //deleteBtn.remove();
        div.remove();
      });

    span.appendChild(deleteBtn);

    div.appendChild(img);
    div.appendChild(span);

    $('.userCartItems').appendChild(div);

}

function appendTee5 ( item ) {

    var div = document.createElement('div');
    div.className = 'userItemFromCart';

    var img = document.createElement('img');
    var teePic = `clothings/tshirt5.jpeg`;
    img.src = teePic;
    
    var span = document.createElement('span');
    span.className = 'flexDeetsToRight';

    var productLabel = document.createElement('p');
    productLabel.innerText = item;

    var productPrice = document.createElement('p');
    productPrice.innerText = '$10';

    span.appendChild(productLabel);
    span.appendChild(productPrice);
    //p.id = 'userReview';

    var deleteBtn = document.createElement('img');

    var imagePath = `imagesUsed/trashCanPick.png`;

    deleteBtn.src = imagePath;

    deleteBtn.className = 'trashUserElement';

    deleteBtn.addEventListener('click', event => {

        removeTeeFromCart( item )
        .then(() => {
            decreaseNumInCart( userEmail );
            fetchNumInCart();
        });

        //deleteBtn.remove();
        div.remove();
      });

    span.appendChild(deleteBtn);

    div.appendChild(img);
    div.appendChild(span);

    $('.userCartItems').appendChild(div);

}

function appendTee6 ( item ) {

    var div = document.createElement('div');
    div.className = 'userItemFromCart';

    var img = document.createElement('img');
    var teePic = `clothings/tshirt6.jpeg`;
    img.src = teePic;
    
    var span = document.createElement('span');
    span.className = 'flexDeetsToRight';

    var productLabel = document.createElement('p');
    productLabel.innerText = item;

    var productPrice = document.createElement('p');
    productPrice.innerText = '$10';

    span.appendChild(productLabel);
    span.appendChild(productPrice);
    //p.id = 'userReview';

    var deleteBtn = document.createElement('img');

    var imagePath = `imagesUsed/trashCanPick.png`;

    deleteBtn.src = imagePath;

    deleteBtn.className = 'trashUserElement';

    deleteBtn.addEventListener('click', event => {

        removeTeeFromCart( item )
        .then(() => {
            decreaseNumInCart( userEmail );
            fetchNumInCart();
        });

        //deleteBtn.remove();
        div.remove();
      });

    span.appendChild(deleteBtn);

    div.appendChild(img);
    div.appendChild(span);

    $('.userCartItems').appendChild(div);

}

function appendTee7 ( item ) {

    var div = document.createElement('div');
    div.className = 'userItemFromCart';

    var img = document.createElement('img');
    var teePic = `clothings/tshirt7.jpeg`;
    img.src = teePic;
    
    var span = document.createElement('span');
    span.className = 'flexDeetsToRight';

    var productLabel = document.createElement('p');
    productLabel.innerText = item;

    var productPrice = document.createElement('p');
    productPrice.innerText = '$10';

    span.appendChild(productLabel);
    span.appendChild(productPrice);
    //p.id = 'userReview';

    var deleteBtn = document.createElement('img');

    var imagePath = `imagesUsed/trashCanPick.png`;

    deleteBtn.src = imagePath;

    deleteBtn.className = 'trashUserElement';

    deleteBtn.addEventListener('click', event => {

        removeTeeFromCart( item )
        .then(() => {
            decreaseNumInCart( userEmail );
            fetchNumInCart();
        });

        //deleteBtn.remove();
        div.remove();
      });

    span.appendChild(deleteBtn);

    div.appendChild(img);
    div.appendChild(span);

    $('.userCartItems').appendChild(div);

}

function appendTee8 ( item ) {

    var div = document.createElement('div');
    div.className = 'userItemFromCart';

    var img = document.createElement('img');
    var teePic = `clothings/tshirt8.jpeg`;
    img.src = teePic;
    
    var span = document.createElement('span');
    span.className = 'flexDeetsToRight';

    var productLabel = document.createElement('p');
    productLabel.innerText = item;

    var productPrice = document.createElement('p');
    productPrice.innerText = '$10';

    span.appendChild(productLabel);
    span.appendChild(productPrice);
    //p.id = 'userReview';

    var deleteBtn = document.createElement('img');

    var imagePath = `imagesUsed/trashCanPick.png`;

    deleteBtn.src = imagePath;

    deleteBtn.className = 'trashUserElement';

    deleteBtn.addEventListener('click', event => {

        removeTeeFromCart( item )
        .then(() => {
            decreaseNumInCart( userEmail );
            fetchNumInCart();
        });

        //deleteBtn.remove();
        div.remove();
      });

    span.appendChild(deleteBtn);

    div.appendChild(img);
    div.appendChild(span);

    $('.userCartItems').appendChild(div);

}