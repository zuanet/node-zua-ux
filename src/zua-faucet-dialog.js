import {html, css, ZuaDialog, ZUA} from './zua-dialog.js';

class ZuaFaucetDialog extends ZuaDialog{
	static get properties(){
		return {
			address:{type:String}
		}
	}
	static get styles(){
		return [Dialog.styles, 
		css`
			.container{max-height:400px}
			.buttons{justify-content:flex-end}
			flow-input flow-btn{margin-bottom:0px;}
		`]
	}
	renderHeading(){
		return 'Faucet';
	}
	renderBody(){
        return html`
            ${ this.status ? html`<div>${this.status}</div>` : html`
                <div is="i18n">Available:</div>
                <div>${ZUA(available)} ZUA</div>

                ${this.period ? html`
                    <div><span is="i18n">Additional funds will be<br/>available in</span> ${FlowFormat.duration(this.period)}</div>
                `:``}
              
                ${ !available ? html`` : html`
                    <flow-btn class="primary" @click="${this.request}">Request Funds from Faucet</flow-btn>
                `})

            ` }
        `;
    }

	renderButtons(){
		return html`<flow-btn @click="${this.hide}">CLOSE</flow-btn>`
	}
	open(args, callback){
		this.callback = callback;
		this.args = args;
		const {address} = args;
		this.qrdata = address;
		this.address = address;
		this.show();
	}
	copyAddress(){
		let input = this.renderRoot.querySelector("input.address");
		input.select();
		input.setSelectionRange(0, 99999)
		document.execCommand("copy");
		FlowDialog.alert("Address has been copied to the clipboard", input.value);
	}
}

KDXWalletReceiveDialog.define("kdx-wallet-receive-dialog");
