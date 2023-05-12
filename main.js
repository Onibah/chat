
import {BUTTONS} from './modules/const';
import {patch, getInfo, validMailSend} from './modules/fetch';
import {checkCode, addClassPopup} from './modules/DOM';
import {buttonDown, scrollDown} from './modules/scroll';
// Import {sendMessage} from './modules/messages';
import {authCheck} from './modules/DOM';
BUTTONS.applyName.addEventListener('click', patch);
BUTTONS.entry.addEventListener('click', getInfo);
BUTTONS.getCode.addEventListener('click', validMailSend);
BUTTONS.entry.addEventListener('click', checkCode);
// BUTTONS.send.addEventListener('click', sendMessage);
document.addEventListener('click', addClassPopup);
buttonDown.addEventListener('click', scrollDown);
authCheck();
