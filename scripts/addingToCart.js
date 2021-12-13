'use script'

function addItemsToShoppingCart() {

    $('#addToCartTee1').onclick = () => {

        addItemToCart( 'Tie-Dye Cropped Shirt', userEmail )
        .then( () => {

            $('#addedToCartTee1').style.display = 'block';
            $('#removeFromCartTee1').style.display = 'block';
            $('#itemRemoved1').style.display = 'none';

            $('#addToCartTee1').style.display = 'none';

            increaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    }   

    $('#addToCartTee2').onclick = () => {

        addItemToCart( 'Colorful Tie-Dye Shirt', userEmail )
        .then( () => {

            $('#addedToCartTee2').style.display = 'block';
            $('#removeFromCartTee2').style.display = 'block';
            $('#itemRemoved2').style.display = 'none';

            $('#addToCartTee2').style.display = 'none';

            increaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    }   

    $('#addToCartTee3').onclick = () => {

        addItemToCart( 'Striped Shirt', userEmail )
        .then( () => {

            $('#addedToCartTee3').style.display = 'block';
            $('#removeFromCartTee3').style.display = 'block';
            $('#itemRemoved3').style.display = 'none';

            $('#addToCartTee3').style.display = 'none';

            increaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    }   

    $('#addToCartTee4').onclick = () => {

        addItemToCart( 'Washed Shirt', userEmail )
        .then( () => {

            $('#addedToCartTee4').style.display = 'block';
            $('#removeFromCartTee4').style.display = 'block';
            $('#itemRemoved4').style.display = 'none';

            $('#addToCartTee4').style.display = 'none';

            increaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    }   

    $('#addToCartTee5').onclick = () => {

        addItemToCart( 'ACDC Shirt', userEmail )
        .then( () => {

            $('#addedToCartTee5').style.display = 'block';
            $('#removeFromCartTee5').style.display = 'block';
            $('#itemRemoved5').style.display = 'none';

            $('#addToCartTee5').style.display = 'none';

            increaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    }   

    $('#addToCartTee6').onclick = () => {

        addItemToCart( 'Jersey Long-Sleeved Shirt', userEmail )
        .then( () => {

            $('#addedToCartTee6').style.display = 'block';
            $('#removeFromCartTee6').style.display = 'block';
            $('#itemRemoved6').style.display = 'none';

            $('#addToCartTee6').style.display = 'none';

            increaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    }   

    $('#addToCartTee7').onclick = () => {

        addItemToCart( 'Slime Shirt', userEmail )
        .then( () => {

            $('#addedToCartTee7').style.display = 'block';
            $('#removeFromCartTee7').style.display = 'block';
            $('#itemRemoved7').style.display = 'none';

            $('#addToCartTee7').style.display = 'none';

            increaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    }   

    $('#addToCartTee8').onclick = () => {

        addItemToCart( 'Dyed Cropped Shirt', userEmail )
        .then( () => {

            $('#addedToCartTee8').style.display = 'block';
            $('#removeFromCartTee8').style.display = 'block';
            $('#itemRemoved8').style.display = 'none';

            $('#addToCartTee8').style.display = 'none';

            increaseNumInCart( userEmail );
            fetchNumInCart();
        })
        .catch((err) => {
            console.log(err.message);

        });

    }   

}

