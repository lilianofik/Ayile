// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { getFirestore, collection, setDoc, doc , deleteDoc, getDocs, onSnapshot , query, where } 
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3-njSsfnCc9nkoAkYwS9EbomaKb9YGwA",
  authDomain: "ayile-99219.firebaseapp.com",
  projectId: "ayile-99219",
  storageBucket: "ayile-99219.appspot.com",
  messagingSenderId: "55853787935",
  appId: "1:55853787935:web:90e751b4f5bed6d9d41e2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);//initialize fireStore

// Create a reference to the SF doc.
const itemsCollection = collection(db, "items");

window.signup = function(email, password) {//create new user

  return createUserWithEmailAndPassword(auth, email, password);

}

window.login = function(email, password) { //login user

    return signInWithEmailAndPassword(auth, email, password);

}

window.logout = function(){
  auth.signOut();
}


window.onLogin = function(f) {

  onAuthStateChanged(auth, (user) => {
  
    f( user );
  
  });

}

// window.setUserEmail = function(f) {

//   onAuthStateChanged(auth, (user) => {
  
//     if(user)
//     // console.log('cheat: ' + user.email);

//     userEmail = user.email;
//     console.log('cheat: ' + user.email);

//     return user.email;
//   });

// }

window.addItemToCart = function( itemName , userEmail ) {//add ratings to firestore db

  return setDoc(doc(db, "items", (itemName + "-" + userEmail)), { itemName, userEmail } );
}

window.increaseNumInCart = function( userEmail ) {

  numInCart += 1;
  totalCost = numInCart * 10;

  if(numInCart > 0) {
    $('#shoppingBag').style.display = 'inherit';
    $('#checkUserOut').style.display = 'inherit';
  }

  return setDoc(doc(db, "numberOfItemsInCart", userEmail), { numInCart, totalCost , userEmail } );

}

window.decreaseNumInCart = function( userEmail ) {

  numInCart -= 1;
  totalCost = numInCart * 10;

  if(numInCart === 0) {
    $('#shoppingBag').style.display = 'none';
    $('#checkUserOut').style.display = 'none';
  }

  return setDoc(doc(db, "numberOfItemsInCart", userEmail), { numInCart, totalCost , userEmail } );

}

window.fetchNumInCart = function () {

  var cartDocRef = doc(db, "numberOfItemsInCart", userEmail);

  onSnapshot(cartDocRef, (doc) => {
    
    if(doc.data())  {
      numInCart = doc.data().numInCart;
      totalCost = doc.data().totalCost;
      $('#putHere').innerText = doc.data().numInCart;
      $('#totalCost').innerText = 'Total: ' + totalCost;
    }
});

}

//itemName , addedToCartName, removeFromCartName, itemRemovedName, addToCartTeeName


  window.removeTeeFromCart = function ( itemName ) {

    return deleteDoc(doc(db, "items", (itemName + "-" + userEmail))); 

  }

  function doesMySetHaveItem( item ) {

    if(itemSet.has(item)) itemSet.delete(item);

  }

  window.fetchUserCart = async function( ) {

    const itemsCol = query(itemsCollection, where("userEmail", "==", userEmail));
   
    const snap = await getDocs(itemsCol);

       snap.forEach((doc) => {
          
        appendUserItems( doc.data().itemName );
        
       });
   
   
    }

    window.fetchUserCartForDeletingLater = async function( ) {

      const itemsCol = query(itemsCollection, where("userEmail", "==", userEmail));
     
      const snap = await getDocs(itemsCol);
  
         snap.forEach((doc) => {
            
          removeTeeFromCart( doc.data().itemName );
          decreaseNumInCart( userEmail );
    
         });
     
         fetchNumInCart();
      }

  window.fetchItemsCollectionToFilterProductsPage = async function( ) {

    const itemsCol = query(itemsCollection, where("userEmail", "==", userEmail));
   
    const snap = await getDocs(itemsCol);
   
    console.log(userEmail);

    if(snap._snapshot.docChanges.length !== 0) {


//make a set of clothes, and at the end deduct from it n compare
       snap.forEach((doc) => {
           
        switch (doc.data().itemName) {
          case 'Tie-Dye Cropped Shirt':
                                      $('#addedToCartTee1').style.display = 'block';
                                      $('#removeFromCartTee1').style.display = 'block';
                                      $('#itemRemoved1').style.display = 'none';
    
                                      $('#addToCartTee1').style.display = 'none';
                                      doesMySetHaveItem(doc.data().itemName);
                                      break;
          case 'Colorful Tie-Dye Shirt':
                                      $('#addedToCartTee2').style.display = 'block';
                                      $('#removeFromCartTee2').style.display = 'block';
                                      $('#itemRemoved2').style.display = 'none';
    
                                      $('#addToCartTee2').style.display = 'none';
                                      doesMySetHaveItem(doc.data().itemName);
                                      break;
          case 'Striped Shirt':
                              $('#addedToCartTee3').style.display = 'block';
                              $('#removeFromCartTee3').style.display = 'block';
                              $('#itemRemoved3').style.display = 'none';
    
                              $('#addToCartTee3').style.display = 'none';
                              doesMySetHaveItem(doc.data().itemName);
                              break;
          case 'Washed Shirt':
                              $('#addedToCartTee4').style.display = 'block';
                              $('#removeFromCartTee4').style.display = 'block';
                              $('#itemRemoved4').style.display = 'none';
    
                              $('#addToCartTee4').style.display = 'none';
                              doesMySetHaveItem(doc.data().itemName);
                              break;
          case 'ACDC Shirt':
                              $('#addedToCartTee5').style.display = 'block';
                              $('#removeFromCartTee5').style.display = 'block';
                              $('#itemRemoved5').style.display = 'none';
    
                              $('#addToCartTee5').style.display = 'none';
                              doesMySetHaveItem(doc.data().itemName);
                              break;
          case 'Jersey Long-Sleeved Shirt':
                              $('#addedToCartTee6').style.display = 'block';
                              $('#removeFromCartTee6').style.display = 'block';
                              $('#itemRemoved6').style.display = 'none';
    
                              $('#addToCartTee6').style.display = 'none';
                              doesMySetHaveItem(doc.data().itemName);
                              break;
          case 'Slime Shirt':
                              $('#addedToCartTee7').style.display = 'block';
                              $('#removeFromCartTee7').style.display = 'block';
                              $('#itemRemoved7').style.display = 'none';
    
                              $('#addToCartTee7').style.display = 'none';
                              doesMySetHaveItem(doc.data().itemName);
                              break;
          case 'Dyed Cropped Shirt':
                              $('#addedToCartTee8').style.display = 'block';
                              $('#removeFromCartTee8').style.display = 'block';
                              $('#itemRemoved8').style.display = 'none';
    
                              $('#addToCartTee8').style.display = 'none';
                              doesMySetHaveItem(doc.data().itemName);
                              break;
          default:
            console.log(`Seems it matches none.`);
        }

        
       });

       if(itemSet.size != 0 && itemSet.size < 8) {

          itemSet.forEach( (item) => {

            switch ( item ) {
              case 'Tie-Dye Cropped Shirt':
                                          $('#addedToCartTee1').style.display = 'none';
                                          $('#removeFromCartTee1').style.display = 'none';
                                          $('#itemRemoved1').style.display = 'none';
        
                                          $('#addToCartTee1').style.display = 'block';
                                          break;
              case 'Colorful Tie-Dye Shirt':
                                          $('#addedToCartTee2').style.display = 'none';
                                          $('#removeFromCartTee2').style.display = 'none';
                                          $('#itemRemoved2').style.display = 'none';
        
                                          $('#addToCartTee2').style.display = 'block';
                                          break;
              case 'Striped Shirt':
                                  $('#addedToCartTee3').style.display = 'none';
                                  $('#removeFromCartTee3').style.display = 'none';
                                  $('#itemRemoved3').style.display = 'none';
        
                                  $('#addToCartTee3').style.display = 'block';
                                  break;
              case 'Washed Shirt':
                                  $('#addedToCartTee4').style.display = 'none';
                                  $('#removeFromCartTee4').style.display = 'none';
                                  $('#itemRemoved4').style.display = 'none';
        
                                  $('#addToCartTee4').style.display = 'block';
                                  break;
              case 'ACDC Shirt':
                                  $('#addedToCartTee5').style.display = 'none';
                                  $('#removeFromCartTee5').style.display = 'none';
                                  $('#itemRemoved5').style.display = 'none';
        
                                  $('#addToCartTee5').style.display = 'block';
                                  break;
              case 'Jersey Long-Sleeved Shirt':
                                  $('#addedToCartTee6').style.display = 'none';
                                  $('#removeFromCartTee6').style.display = 'none';
                                  $('#itemRemoved6').style.display = 'none';
        
                                  $('#addToCartTee6').style.display = 'block';
                                  break;
              case 'Slime Shirt':
                                  $('#addedToCartTee7').style.display = 'none';
                                  $('#removeFromCartTee7').style.display = 'none';
                                  $('#itemRemoved7').style.display = 'none';
        
                                  $('#addToCartTee7').style.display = 'block';
                                  break;
              case 'Dyed Cropped Shirt':
                                  $('#addedToCartTee8').style.display = 'none';
                                  $('#removeFromCartTee8').style.display = 'none';
                                  $('#itemRemoved8').style.display = 'none';
        
                                  $('#addToCartTee8').style.display = 'block';
                                  break;
              default:
                console.log(`Seems it matches none.`);
                console.log(item);
            }

          });

       }
  
      }

      else closeAllNecessaryDeets();
   
    }

/*
window.canNoLongerAddToCart = function ( ) {

  // const itemDocRef = doc(db, "items", itemName);

  // onSnapshot(itemDocRef, (doc) => {

  //   if(doc.data())  {

  //     $('#'+ addedToCartName).style.display = 'block';
  //     $('#'+ removeFromCartName).style.display = 'block';
  //     $('#'+ itemRemovedName).style.display = 'none';

  //     $('#'+ addToCartTeeName).style.display = 'none';
  //   }

  // });

  const itemCol3 = query(itemsCollection, where("userEmail", "==", userEmail));

  const querySnapshot = await getDocs(itemCol3);

  querySnapshot.forEach((doc) => {

    switch (doc.data().itemName) {
      case 'Tie-Dye Cropped Shirt':
                                  $('#addedToCartTee1').style.display = 'block';
                                  $('#removeFromCartTee1').style.display = 'block';
                                  $('#itemRemoved1').style.display = 'none';

                                  $('#addToCartTee1').style.display = 'none';
                                  break;
      case 'Colorful Tie-Dye Shirt':
                                  $('#addedToCartTee2').style.display = 'block';
                                  $('#removeFromCartTee2').style.display = 'block';
                                  $('#itemRemoved2').style.display = 'none';

                                  $('#addToCartTee1').style.display = 'none';
                                  break;
      case 'Striped Shirt':
                          $('#addedToCartTee3').style.display = 'block';
                          $('#removeFromCartTee3').style.display = 'block';
                          $('#itemRemoved3').style.display = 'none';

                          $('#addToCartTee3').style.display = 'none';
                          break;
      case 'Washed Shirt':
                          $('#addedToCartTee4').style.display = 'block';
                          $('#removeFromCartTee4').style.display = 'block';
                          $('#itemRemoved4').style.display = 'none';

                          $('#addToCartTee4').style.display = 'none';
                          break;
      case 'ACDC Shirt':
                          $('#addedToCartTee5').style.display = 'block';
                          $('#removeFromCartTee5').style.display = 'block';
                          $('#itemRemoved5').style.display = 'none';

                          $('#addToCartTee5').style.display = 'none';
                          break;
      case 'Jersey Long-Sleeved Shirt':
                          $('#addedToCartTee6').style.display = 'block';
                          $('#removeFromCartTee6').style.display = 'block';
                          $('#itemRemoved6').style.display = 'none';

                          $('#addToCartTee6').style.display = 'none';
                          break;
      case 'Jersey Long-Sleeved Shirt':
                          $('#addedToCartTee7').style.display = 'block';
                          $('#removeFromCartTee7').style.display = 'block';
                          $('#itemRemoved7').style.display = 'none';

                          $('#addToCartTee7').style.display = 'none';
                          break;
      case 'Dyed Cropped Shirt':
                          $('#addedToCartTee8').style.display = 'block';
                          $('#removeFromCartTee8').style.display = 'block';
                          $('#itemRemoved8').style.display = 'none';

                          $('#addToCartTee8').style.display = 'none';
                          break;
      default:
        console.log(`Seems it matches none.`);
    }

  });
  
} */