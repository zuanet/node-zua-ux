export * from './flow-ux.js';

import {ZuaWalletDesktop} from './zua-wallet-desktop.js';
import {ZuaWalletMobile, isMobile, dontInitiatedComponent} from './zua-wallet-mobile.js';

if(isMobile)
	document.body.classList.add('is-mobile');
export {isMobile}

export const ZuaWallet = isMobile ? ZuaWalletMobile : ZuaWalletDesktop;

if(!dontInitiatedComponent)
	ZuaWallet.define("zua-wallet");
