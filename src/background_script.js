// Put all the javascript code here, that you want to execute in background.
import { tabs } from "webextension-polyfill";
import { printOut } from "./additional/index";

tabs.onActivated.addListener(tab => {
  printOut(['tabs info', tab]);
});