import { tabs } from "webextension-polyfill";
import { printOut } from "../additional/index";

document.getElementById("myHeading").style.color = "red";

document.getElementById('show-tabid').addEventListener('click', (e)=>{
  printOut(['tab info: ', 'it is that it is']);
  tabs.query({
    active: true,
    currentWindow: true
  })
  .then(result => printOut(['tabs query active: ', result]))
  .catch(error => printOut(['error: ', error]));
});