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
    return '<div class="row">' +
    '<div class="checkbox col-xs-10">' + 
    '<label>' + 
    '<input type="checkbox" value="" onchange="changeCheckedStatus(' + idx + ');"' + checked + '>' + 
    '<li class="completed_' + this.is_done + '">' + 
    '<span><strong>' + this.name + '</strong></span>' + 
    '<br>' + 
    '<span>' + this.description + '</span>' + 
    '</li>' + 
    '</label>' + 
    '</div>' + 
    '<div class="x-box col-xs-2">' + 
    '<div class="badge">' + 
    '<span class="glyphicon glyphicon-remove" id="remove-button" onclick="removeItemButtonClicked(' + idx + ');">' + 
    '</span>' + 
    '</div>' + 
    '</div>' + 
    '</div>';
  };
}