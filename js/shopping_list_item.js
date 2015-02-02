/*
  ShoppingListItem class
*/

function ShoppingListItem (name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;

  this.check = function () {
    this.is_done = true;
  };

  this.uncheck = function () {
    this.is_done = false;
  };

  this.render = function (idx) {
    var checked = '';
    if (this.is_done) {
      checked = ' checked';
    }
    return '<div class="checkbox"><label><input type="checkbox" value"" onchange="changeCheckedStatus(' + idx + ');"' + checked + '><li class="completed_' + this.is_done + '">\n<span><strong>' + this.name + '</strong></span>\n<br>\n<span>' + this.description + '</span>\n</li></label></div><div class="badge" id="remove-button"><span class="glyphicon glyphicon-remove"></span></div>';
  };
}