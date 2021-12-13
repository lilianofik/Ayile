'use strict'

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var userEmail = '';
var numInCart = 0;
var totalCost = 1;
const itemSet = new Set();
itemSet.add('Tie-Dye Cropped Shirt');
itemSet.add('Colorful Tie-Dye Shirt');
itemSet.add('Striped Shirt');
itemSet.add('Washed Shirt');
itemSet.add('ACDC Shirt');
itemSet.add('Jersey Long-Sleeved Shirt');
itemSet.add('Slime Shirt');
itemSet.add('Dyed Cropped Shirt');

window.onload = function() {

    //Monitor when user signs in/out
    onLogin( user => {

        
        if(user){
            
            userEmail = user.email;
            alterScreenDisplayWhenSignedIn();

            fetchNumInCart();
        }
        else{

            alterScreenDisplayWhenSignedOut();
        }

    });

    $('.logoImage').onclick = () => {
        $('.userChoices').style.display = 'none';
        $('.signInDiv').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.continueAsGuestDiv').style.display = 'block';
        $('.openShoppingCart').style.display = 'none';
        $('.userCheckedOut').style.display = 'none';

        $('.allTshirtsDiv').style.display = 'none';
    }

    $('#signInButton').onclick = () => {

        $('.signInDiv').style.display = 'block';
        $('.userChoices').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.continueAsGuestDiv').style.display = 'none';
        $('.openShoppingCart').style.display = 'none';
        $('.userCheckedOut').style.display = 'none';
    }

    $('#signIn').onclick = () => {

        $('.signInDiv').style.display = 'block';
        $('.userChoices').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.continueAsGuestDiv').style.display = 'none';
        $('.openShoppingCart').style.display = 'none';
        $('.userCheckedOut').style.display = 'none';
    }

    $('#backBtnSignInForm').onclick = () => {

        $('.userChoices').style.display = 'block';
        $('.signInDiv').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.continueAsGuestDiv').style.display = 'none';
        $('.openShoppingCart').style.display = 'none';
        $('.userCheckedOut').style.display = 'none';
    }

    $$('.registerNow').forEach( (registerEm) => {

        registerEm.addEventListener('click', () => {

            $('.registerDiv').style.display = 'block';
            $('.userChoices').style.display = 'none';
            $('.signInDiv').style.display = 'none';
            $('.continueAsGuestDiv').style.display = 'none';
            $('.openShoppingCart').style.display = 'none';
            $('.userCheckedOut').style.display = 'none';
        });

    });

    $('#backBtnRegForm').onclick = () => {

        $('.userChoices').style.display = 'block';
        $('.signInDiv').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.continueAsGuestDiv').style.display = 'none';
        $('.userCheckedOut').style.display = 'none';
    }

    //User Auth Functionality

    $('#registerFormSubmit').onclick = function( event ) { //create new user functionality

        const userPswdSignUp = $('#registerPswd').value;

        if(userPswdSignUp.length < 6) $('#badPswdSignUp').style.display = 'block';
        
        else {

            $('#badPswdSignUp').style.display = 'none'; 
        }

        signup( $('#registerEmail').value, $('#registerPswd').value )
        .then( () => {
            $('#registerEmail').value = '';
            $('#registerPswd').value = '';

            $('#reusedEmail').style.display = 'none';//assume email is correct

            numInCart = 0;
        })
        .catch((err) => {
            if(('Firebase: Error (auth/email-already-in-use).') == err.message) {

                $('#reusedEmail').style.display = 'block';
                $('#registerEmail').value = '';
                $('#registerPswd').value = '';
            } 

        });

        event.preventDefault();
    }

    $('#signInFormSubmit').onclick = function( event ) { //login user functionality

        login( $('#signInEmail').value, $('#signInPswd').value )
        .then( () => {
            $('#signInEmail').value = '';
            $('#signInPswd').value = '';

            $('#wrongPassword').style.display = 'none';
        })
        .catch((err) => {
            console.log(err.message);
            if(('Firebase: Error (auth/wrong-password).') == err.message || ('Firebase: Error (auth/user-not-found).') == err.message) {

                $('#wrongPassword').style.display = 'block';
                $('#signInEmail').value = '';
                $('#signInPswd').value = '';
            }
             

        });

        event.preventDefault();
    }

    $('#signOut').onclick = function() {

        logout();

    }

    //Start displaying products
    $('#contAsGuest').onclick = () => {

        $('.continueAsGuestDiv').style.display = 'block';
        $('.openShoppingCart').style.display = 'none';
        $('.userChoices').style.display = 'none';
        $('.signInDiv').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.userCheckedOut').style.display = 'none';
    }

    takeCareOfAllShirtOnclick();

    addItemsToShoppingCart();

    whenYouAddToCart();

    removingFromCartImmediately();

    $$('.backToGrid').forEach( (backBtn) => {

        backBtn.onclick = () => {

            $('.userChoices').style.display = 'none';
            $('.signInDiv').style.display = 'none';
            $('.registerDiv').style.display = 'none';
            $('.openShoppingCart').style.display = 'none';
            $('.continueAsGuestDiv').style.display = 'block';
        
            $('.allTshirtsDiv').style.display = 'none';
            $('.userCheckedOut').style.display = 'none';
        }
        
    }

    );

    $('#shoppingBag').onclick = () => {

        fetchUserCart();

        $('.userChoices').style.display = 'none';
        $('.signInDiv').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.continueAsGuestDiv').style.display = 'none';
        $('.allTshirtsDiv').style.display = 'none';
        $('.userCheckedOut').style.display = 'none';

        $$('.userItemFromCart').forEach( (eachCartThing) => {

            eachCartThing.remove();
        })

        fetchNumInCart();
        $('.openShoppingCart').style.display = 'block';

    }

    $('#checkUserOut').onclick = () => {
        fetchUserCartForDeletingLater();

        $('.userCheckedOut').style.display = 'block';

        $('.userChoices').style.display = 'none';
        $('.signInDiv').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.openShoppingCart').style.display = 'none';
        $('.continueAsGuestDiv').style.display = 'none';
        $('.allTshirtsDiv').style.display = 'none';
    }

    $('#backFromCart').onclick = () => {

        fetchItemsCollectionToFilterProductsPage( );
        
        $('.continueAsGuestDiv').style.display = 'block';
        $('.openShoppingCart').style.display = 'none';
        $('.userChoices').style.display = 'none';
        $('.signInDiv').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.userCheckedOut').style.display = 'none';

    }

    $('#keepShoppingAfterCheckout').onclick = () => {

        fetchItemsCollectionToFilterProductsPage( );

        $('.continueAsGuestDiv').style.display = 'block';
        $('.openShoppingCart').style.display = 'none';
        $('.userChoices').style.display = 'none';
        $('.signInDiv').style.display = 'none';
        $('.registerDiv').style.display = 'none';
        $('.userCheckedOut').style.display = 'none';

    }

}

function alterScreenDisplayWhenSignedOut() {

    $('#signIn').style.display = 'inherit';
    $('#signOut').style.display = 'none';
    userEmail = '';//reset userEmail
    numInCart = 0;//reset totals in cart
    totalCost = 0;

    $('.userChoices').style.display = 'block';
    $('.signInDiv').style.display = 'none';
    $('.registerDiv').style.display = 'none';
    $('.continueAsGuestDiv').style.display = 'none';
    $('.allTshirtsDiv').style.display = 'none';
    $('.openShoppingCart').style.display = 'none';
    $('.userCheckedOut').style.display = 'none';

    $('#putHere').innerText = '0';

    $$('.onlyIfSignedIn').forEach( (eachSpan) => {
        eachSpan.style.display = 'none';
      });

    $('#addToCartTee1').style.display = 'none';
    $('#addToCartTee2').style.display = 'none';
    $('#addToCartTee3').style.display = 'none';
    $('#addToCartTee4').style.display = 'none';
    $('#addToCartTee5').style.display = 'none';
    $('#addToCartTee6').style.display = 'none';
    $('#addToCartTee7').style.display = 'none';
    $('#addToCartTee8').style.display = 'none';


    //so these don't reappear on the page when they hit sign out button
    // $('#addedToCartTee1').style.display = 'none';
    // $('#removeFromCartTee1').style.display = 'none';
    // $('#itemRemoved1').style.display = 'none';
}

function alterScreenDisplayWhenSignedIn() {

    $('#signOut').style.display = 'inherit';
    $('#signIn').style.display = 'none';

    $$('.onlyIfSignedIn').forEach( (eachSpan) => {
        eachSpan.style.display = 'block';
      });

    $('.userChoices').style.display = 'none';
    $('.signInDiv').style.display = 'none';
    $('.registerDiv').style.display = 'none';
    $('.openShoppingCart').style.display = 'none';
    $('.continueAsGuestDiv').style.display = 'block';
    $('.userCheckedOut').style.display = 'none';

    // $('#addToCartTee1').style.display = 'block';
    // $('#addToCartTee2').style.display = 'block';
    // $('#addToCartTee3').style.display = 'block';
    // $('#addToCartTee4').style.display = 'block';
    // $('#addToCartTee5').style.display = 'block';
    // $('#addToCartTee6').style.display = 'block';
    // $('#addToCartTee7').style.display = 'block';
    // $('#addToCartTee8').style.display = 'block';

    itemSet.add('Tie-Dye Cropped Shirt');
    itemSet.add('Colorful Tie-Dye Shirt');
    itemSet.add('Striped Shirt');
    itemSet.add('Washed Shirt');
    itemSet.add('ACDC Shirt');
    itemSet.add('Jersey Long-Sleeved Shirt');
    itemSet.add('Slime Shirt');
    itemSet.add('Dyed Cropped Shirt');

    fetchItemsCollectionToFilterProductsPage( );
    // canNoLongerAddToCart( 'Tie-Dye Cropped Shirt' , returnedEmail );
    // canNoLongerAddToCart3( 'Striped Shirt' , returnedEmail );
    // canNoLongerAddToCart6( 'Jersey Long-Sleeved Shirt' , returnedEmail);

    //canNoLongerAddToCart();

    // canNoLongerAddToCart( 'Tie-Dye Cropped Shirt' , 'addedToCartTee1', 'removeFromCartTee1', 'itemRemoved1', 'addToCartTee1');
    // canNoLongerAddToCart( 'Colorful Tie-Dye Shirt' , 'addedToCartTee2', 'removeFromCartTee2', 'itemRemoved2', 'addToCartTee2');
    // canNoLongerAddToCart( 'Striped Shirt' , 'addedToCartTee3', 'removeFromCartTee3', 'itemRemoved3', 'addToCartTee3');
    // canNoLongerAddToCart( 'Washed Shirt' , 'addedToCartTee4', 'removeFromCartTee4', 'itemRemoved4', 'addToCartTee4');
    // canNoLongerAddToCart( 'ACDC Shirt' , 'addedToCartTee5', 'removeFromCartTee5', 'itemRemoved5', 'addToCartTee5');
    // canNoLongerAddToCart( 'Jersey Long-Sleeved Shirt' , 'addedToCartTee6', 'removeFromCartTee6', 'itemRemoved6', 'addToCartTee6');
    // canNoLongerAddToCart( 'Slime Shirt' , 'addedToCartTee7', 'removeFromCartTee7', 'itemRemoved7', 'addToCartTee7');
    // canNoLongerAddToCart( 'Dyed Cropped Shirt' , 'addedToCartTee8', 'removeFromCartTee8', 'itemRemoved8', 'addToCartTee8');
}