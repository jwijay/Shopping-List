// (function() {
  var addItemButton = document.getElementById("add_shopping_list_item_button");
  addItemButton.addEventListener("click", add_to_shopping_list);

  var shoppingList = new ShoppingList();
  var shoppingListHTML = "";
  shoppingListHTML = shoppingList.render();
  document.getElementById("content").innerHTML = shoppingListHTML;

  function add_to_shopping_list (event) {
    //need this so that the page doesn't keep refreshing. ARRRR.
    event.preventDefault();

    //read the value of the title and description fields
    //create a new shopping list item with all that junk
    var title = document.getElementById("itemName").value;
    var description = document.getElementById("itemDescription").value;
    var new_shopping_list_item = new ShoppingListItem(title, description);
    shoppingList.addItem(new_shopping_list_item);

    shoppingListHTML = shoppingList.render();
    document.getElementById("content").innerHTML = shoppingListHTML;

    //this is a hack-y way to reset the form... (There's only one form on
    //the page with an index of 0.)
    document.forms[0].reset();
  }

  function changeCheckedStatus (idx) {
    //check whether checkbox (on index.html) is checked or not
    if (document.getElementsByTagName("input")[idx].checked) {
      shoppingList.items[idx].check();
    } else {
      shoppingList.items[idx].uncheck();
    }
    //re-render the shopping list! o__o
    shoppingListHTML = shoppingList.render();
    document.getElementById("content").innerHTML = shoppingListHTML;
  }

  function removeItemButtonClicked (idx) {
    shoppingList.removeItem(shoppingList.items[idx]);
  
    //re-render the shopping list! o__o Why am I repeating myself...
    shoppingListHTML = shoppingList.render();
    document.getElementById("content").innerHTML = shoppingListHTML;
  }


// })();