import $ from 'jquery';
import ContactsModel from '../contacts_model';





function newTemplate(data) {
  
  return `
    <div class="formContainer">
      <div class="formTitle">Add New Peep</div>
      <form>
        <ul>
          <li><input type="text" placeholder="name" id="name"></li>
          <li><input type="text" placeholder="email" id="email"></li>
          <li><input type="text" placeholder="phone" id="phone"></li>
          <li><input type="text" placeholder="location" id="location"></li>
        </ul>
          <button class="back-button" data-to="" type="submit" id="submit">Submit</button>
      </form>
    </div>
  `
};











export default newTemplate;