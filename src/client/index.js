import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

let value = document.getElementById('name');
const url_article = value.getAttribute('value');

(function h (){
  console.log(url_article)

})();

window.addEventListener('DOMContentLoaded', () => {
  const click_submit = document.getElementById('submit')
  if (click_submit) {
    click_submit.addEventListener('click', () => {
      console.log(url_article)

      // Client.handleSubmit();
    })
  }
})


export {
  checkForName,
  handleSubmit
}


