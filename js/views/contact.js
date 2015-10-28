function contactTemplate(data) {
  
  return `
    <div class="personContainer">
      <div class="personTitle">
        <button class="back-button" data-to="">
          <i class="fa fa-arrow-left"></i>
        </button>
      </div>
      <ul>
        <li><i class="fa fa-user"></i>  ${data.name}</li>
        <li><i class="fa fa-envelope"></i> ${data.email}</li>
        <li><i class="fa fa-mobile"></i> ${data.phone}</li>
        <li><i class="fa fa-globe"></i> ${data.location}</li>
      </ul>
    </div>
  `
}

export default contactTemplate;