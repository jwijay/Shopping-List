/*
  ShoppingList class
*/

function ShoppingList (items) {
  this.items = [];

  this.addItem = function (item) {
    if (!(item instanceof ShoppingListItem)) {
      console.log("What the math was that?! Computer does not understand.");
      return false;
    }
    this.items.push(item);
  };

  this.removeItem = function (item) {
    if (item === undefined) {
      items.pop();
    } 
    if (!(item instanceof ShoppingListItem)) {
      console.log("What the math was that?! Computer does not understand.");
      return false;
    }
    var itemIndex = this.items.indexOf(item);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  };

  this.render = function () {
    var itemsHTML = '<ul>';
    //TODO: figure out how to do this without any loops :O
    for (var i = 0; i < this.items.length; i++) {
      itemsHTML += this.items[i].render();
    }
    itemsHTML += '</ul>';

    return itemsHTML;
  };
}