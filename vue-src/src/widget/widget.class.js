export default class Widget {
    constructor( data ) {
        this.proc_url = data.proc_url;
        this.pay_params = data.pay_params;
        this.frame_id = data.frame_id;
        this.frame_name = data.frame_name;
        this.closeWidget = this.closeWidget.bind(this);
        this.createFrame();
        this.createFormData();
        this.openWidget();
    }

    createFrame() {
        let cont = document.createElement('DIV');
        cont.id = this.frame_id;
        cont.style = 'z-index: 9997; text-align: left; height: 100%; width: 100%; position: fixed; left: 0px; top: 0px; transition: opacity 0.15s ease 0s; overflow: auto; pointer-events: all; opacity: 1;';
        let frame = `<iframe allowpaymentrequest="" name="${this.frame_name}" src="${this.proc_url}" class=" with-appled" style="height: 100% !important; 
                    width: 100% !important; position: fixed !important; z-index: 9999 !important; border: 0px !important; inset: 0px !important; max-height: 100% !important;"></iframe>`
        cont.innerHTML = frame;
        this.frame = cont;

    }
    createFormData() {  
        this.form = document.createElement('FORM');
        this.form.id = `form_${this.frame_id}`;
        this.form.target = this.frame_name;
        this.form.action = this.proc_url;
        this.form.method = 'post';
        this.form.innerHTML = `<input type="hidden" name="pay_params" value=${this.prepareParams()}/><input type="submit">`;
        this.form.style.display = 'none';
        document.querySelector('body').append(this.form); 
    }
    prepareParams() {
        return JSON.stringify(this.pay_params);
    }
    openWidget() {
        document.querySelector('body').append(this.frame);  
        this.form.submit();
        window.addEventListener('message', this.closeWidget) ;
        document.querySelector(`#form_${this.frame_id}`).remove();
    }
    closeWidget() {
        document.querySelector(`#${this.frame.id}`).remove();
    }
}

