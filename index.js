'use strict';
/* global $ */

//submit, preventdefault, toggleclass, closest
function handleAdd (text){
  $('ul').append(`
  <li>
  <span class="shopping-item">${text}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>
  `);
}

function handleCheck() {

}

function handleDelete() {

}

function main() {
  //listen to the form for added items
  $('form').submit(event => {
    event.preventDefault();
    const userInput = $('input[name=shopping-list-entry]').val();
    console.log(userInput);
    $('input[name=shopping-list-entry]').val('');
    handleAdd(userInput);
    addCheckEvent(event);
    addDeleteEvent(event);
  });
  // listen to all check boxes for checking items
  function addCheckEvent (event){
    $('.shopping-item-toggle').click(event => {
      const checkedItem = $(event.target).closest('li').find('.shopping-item');
      console.log(checkedItem);
      handleCheck(checkedItem);
    });
  }
  // listen to all delete buttons for deleting items
  function addDeleteEvent (event) {
    $('.shopping-item-delete').click(event => {
      const deletedItem = $(event.target).closest('li');
      console.log(deletedItem);
      handleDelete(deletedItem);
    });
  }
}

$(main);