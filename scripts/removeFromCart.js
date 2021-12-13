'use strict'

function removingFromCartImmediately() {

    $('#removeFromCartTee1').onclick = () => {

        removeTeeFromCart( 'Tie-Dye Cropped Shirt' )
        .then( () => {

            $('#itemRemoved1').style.display = 'block';
            $('#removeFromCartTee1').style.display = 'none';
            $('#addedToCartTee1').style.display = 'none';

            $('#addToCartTee1').style.display = 'block';

            decreaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    } 
    
    $('#removeFromCartTee2').onclick = () => {

        removeTeeFromCart( 'Colorful Tie-Dye Shirt', userEmail )
        .then( () => {

            $('#itemRemoved2').style.display = 'block';
            $('#removeFromCartTee2').style.display = 'none';
            $('#addedToCartTee2').style.display = 'none';

            $('#addToCartTee2').style.display = 'block';

            decreaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    } 

    $('#removeFromCartTee3').onclick = () => {

        removeTeeFromCart( 'Striped Shirt', userEmail )
        .then( () => {

            $('#itemRemoved3').style.display = 'block';
            $('#removeFromCartTee3').style.display = 'none';
            $('#addedToCartTee3').style.display = 'none';

            $('#addToCartTee3').style.display = 'block';

            decreaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    } 

    $('#removeFromCartTee4').onclick = () => {

        removeTeeFromCart( 'Washed Shirt', userEmail )
        .then( () => {

            $('#itemRemoved4').style.display = 'block';
            $('#removeFromCartTee4').style.display = 'none';
            $('#addedToCartTee4').style.display = 'none';

            $('#addToCartTee4').style.display = 'block';

            decreaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    } 

    $('#removeFromCartTee5').onclick = () => {

        removeTeeFromCart( 'ACDC Shirt', userEmail )
        .then( () => {

            $('#itemRemoved5').style.display = 'block';
            $('#removeFromCartTee5').style.display = 'none';
            $('#addedToCartTee5').style.display = 'none';

            $('#addToCartTee5').style.display = 'block';

            decreaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    } 

    $('#removeFromCartTee6').onclick = () => {

        removeTeeFromCart( 'Jersey Long-Sleeved Shirt', userEmail )
        .then( () => {

            $('#itemRemoved6').style.display = 'block';
            $('#removeFromCartTee6').style.display = 'none';
            $('#addedToCartTee6').style.display = 'none';

            $('#addToCartTee6').style.display = 'block';

            decreaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    } 

    $('#removeFromCartTee7').onclick = () => {

        removeTeeFromCart( 'Slime Shirt', userEmail )
        .then( () => {

            $('#itemRemoved7').style.display = 'block';
            $('#removeFromCartTee7').style.display = 'none';
            $('#addedToCartTee7').style.display = 'none';

            $('#addToCartTee7').style.display = 'block';

            decreaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    } 

    $('#removeFromCartTee8').onclick = () => {

        removeTeeFromCart( 'Dyed Cropped Shirt', userEmail )
        .then( () => {

            $('#itemRemoved8').style.display = 'block';
            $('#removeFromCartTee8').style.display = 'none';
            $('#addedToCartTee8').style.display = 'none';

            $('#addToCartTee8').style.display = 'block';

            decreaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    }

}