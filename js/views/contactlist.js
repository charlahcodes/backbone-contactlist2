function processData(data) {
  return data.map(function(item) {
    return `
      <li class='contact-list-item' data-contact-id="${item.objectId}"><i class="fa fa-user"></i>  ${item.name}</li>
    `
  }).join('');
}

function contactListTemplate(data) {
  return `
    <div class="container">
      <div class="title">My Peeps</div>
      <div class="addNewPeep">
        <button class="newButton" data-to="#new">
          Add New Peep
        </button>
      </div>
      <ul>${processData(data)}</ul>
    </div>
  `;
}

export default contactListTemplate