  
    var xhropen = window.XMLHttpRequest.prototype.open,
        xhrsend = window.XMLHttpRequest.prototype.send;

    function openReplacement(method, url, async, user, password) {
        this._url = url;
        return xhropen.apply(this, arguments);
    }
    function sendReplacement(data) {
        if (this.onreadystatechange) {
            this._onreadystatechange = this.onreadystatechange;
        }
        this._request = data;
        this.onreadystatechange = onReadyStateChangeReplacement;
        return xhrsend.apply(this, arguments);
    };

    function onReadyStateChangeReplacement() {
    		
        		this.getResponseHeader("httpHeader-az-token")
            resp = JSON.parse(this.response);
            req = JSON.parse(this._request);
						
						          

            if (this._onreadystatechange) {
                return this._onreadystatechange.apply(this, arguments);
            }
        }
        window.XMLHttpRequest.prototype.open = openReplacement;
        window.XMLHttpRequest.prototype.send = sendReplacement;
