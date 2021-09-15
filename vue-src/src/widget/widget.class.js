// const proc_url = "http://192.168.100.24:80";
const proc_url = "http://192.168.121.5:3300/index.php";

class Widget {
    constructor( data ) {
        this.proc_url = proc_url;
        this.pay_params = data.pay_params;
        this.frame_id = data.frame_id;
        this.frame_name = data.frame_name;
        this.onSuccess = data.onSuccess;
        this.onFail = data.onFail;

        this.getFrameMessageWrapper = this.getFrameMessage.bind(this);
        
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
        this.form.innerHTML = `<input type="hidden" name="pay_params" value='${this.prepareParams()}'/><input type="submit">`;
        this.form.style.display = 'none';
        document.querySelector('body').append(this.form); 
    }
    prepareParams() {
        return JSON.stringify(this.pay_params);
    }
    openWidget() {
        document.querySelector('body').append(this.frame);  
        this.form.submit();
        window.onmessage = (e) => {this.getFrameMessageWrapper(e)} ;
        document.querySelector(`#form_${this.frame_id}`).remove();
    }
    getFrameMessage(e) {
        let msg = JSON.parse(e.data);
        if (msg.result[0] == 0) {
            this.onSuccess(msg.result);
        } else if (msg.result[0] == 1){
            this.onFail(msg.why, msg.result);
        }

        if (msg.command == 'close') {
            this.closeWidget(); 
        }
    }
    closeWidget() {
        this.frame.remove();
    }
}

export function openWidget(data) {
    new Widget(data);
}

