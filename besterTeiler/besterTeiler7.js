<script type="text/javascript">
!function(){"use strict";function t(t,i){i?(d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function i(i,r,s){var e,n=typeof i;if("string"===n){var o,a=[],u=i.length,c=0;for(e=0;e<u;++e)(o=i.charCodeAt(e))<128?a[c++]=o:o<2048?(a[c++]=192|o>>6,a[c++]=128|63&o):o<55296||o>=57344?(a[c++]=224|o>>12,a[c++]=128|o>>6&63,a[c++]=128|63&o):(o=65536+((1023&o)<<10|1023&i.charCodeAt(++e)),a[c++]=240|o>>18,a[c++]=128|o>>12&63,a[c++]=128|o>>6&63,a[c++]=128|63&o);i=a}else{if("object"!==n)throw new Error(h);if(null===i)throw new Error(h);if(f&&i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(!(Array.isArray(i)||f&&ArrayBuffer.isView(i)))throw new Error(h)}i.length>64&&(i=new t(r,!0).update(i).array());var y=[],p=[];for(e=0;e<64;++e){var l=i[e]||0;y[e]=92^l,p[e]=54^l}t.call(this,r,s),this.update(p),this.oKeyPad=y,this.inner=!0,this.sharedMemory=s}var h="input is invalid type",r="object"==typeof window,s=r?window:{};s.JS_SHA256_NO_WINDOW&&(r=!1);var e=!r&&"object"==typeof self,n=!s.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;n?s=global:e&&(s=self);var o=!s.JS_SHA256_NO_COMMON_JS&&"object"==typeof module&&module.exports,a="function"==typeof define&&define.amd,f=!s.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,u="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],y=[24,16,8,0],p=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=["hex","array","digest","arrayBuffer"],d=[];!s.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!f||!s.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var A=function(i,h){return function(r){return new t(h,!0).update(r)[i]()}},w=function(i){var h=A("hex",i);n&&(h=b(h,i)),h.create=function(){return new t(i)},h.update=function(t){return h.create().update(t)};for(var r=0;r<l.length;++r){var s=l[r];h[s]=A(s,i)}return h},b=function(t,i){var r=eval("require('crypto')"),s=eval("require('buffer').Buffer"),e=i?"sha224":"sha256",n=function(i){if("string"==typeof i)return r.createHash(e).update(i,"utf8").digest("hex");if(null===i||void 0===i)throw new Error(h);return i.constructor===ArrayBuffer&&(i=new Uint8Array(i)),Array.isArray(i)||ArrayBuffer.isView(i)||i.constructor===s?r.createHash(e).update(new s(i)).digest("hex"):t(i)};return n},v=function(t,h){return function(r,s){return new i(r,h,!0).update(s)[t]()}},_=function(t){var h=v("hex",t);h.create=function(h){return new i(h,t)},h.update=function(t,i){return h.create(t).update(i)};for(var r=0;r<l.length;++r){var s=l[r];h[s]=v(s,t)}return h};t.prototype.update=function(t){if(!this.finalized){var i,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(h);if(null===t)throw new Error(h);if(f&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||f&&ArrayBuffer.isView(t)))throw new Error(h);i=!0}for(var s,e,n=0,o=t.length,a=this.blocks;n<o;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),i)for(e=this.start;n<o&&e<64;++n)a[e>>2]|=t[n]<<y[3&e++];else for(e=this.start;n<o&&e<64;++n)(s=t.charCodeAt(n))<128?a[e>>2]|=s<<y[3&e++]:s<2048?(a[e>>2]|=(192|s>>6)<<y[3&e++],a[e>>2]|=(128|63&s)<<y[3&e++]):s<55296||s>=57344?(a[e>>2]|=(224|s>>12)<<y[3&e++],a[e>>2]|=(128|s>>6&63)<<y[3&e++],a[e>>2]|=(128|63&s)<<y[3&e++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++n)),a[e>>2]|=(240|s>>18)<<y[3&e++],a[e>>2]|=(128|s>>12&63)<<y[3&e++],a[e>>2]|=(128|s>>6&63)<<y[3&e++],a[e>>2]|=(128|63&s)<<y[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=a[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,i=this.lastByteIndex;t[16]=this.block,t[i>>2]|=c[3&i],this.block=t[16],i>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,i,h,r,s,e,n,o,a,f=this.h0,u=this.h1,c=this.h2,y=this.h3,l=this.h4,d=this.h5,A=this.h6,w=this.h7,b=this.blocks;for(t=16;t<64;++t)i=((s=b[t-15])>>>7|s<<25)^(s>>>18|s<<14)^s>>>3,h=((s=b[t-2])>>>17|s<<15)^(s>>>19|s<<13)^s>>>10,b[t]=b[t-16]+i+b[t-7]+h<<0;for(a=u&c,t=0;t<64;t+=4)this.first?(this.is224?(e=300032,w=(s=b[0]-1413257819)-150054599<<0,y=s+24177077<<0):(e=704751109,w=(s=b[0]-210244248)-1521486534<<0,y=s+143694565<<0),this.first=!1):(i=(f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),r=(e=f&u)^f&c^a,w=y+(s=w+(h=(l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&d^~l&A)+p[t]+b[t])<<0,y=s+(i+r)<<0),i=(y>>>2|y<<30)^(y>>>13|y<<19)^(y>>>22|y<<10),r=(n=y&f)^y&u^e,A=c+(s=A+(h=(w>>>6|w<<26)^(w>>>11|w<<21)^(w>>>25|w<<7))+(w&l^~w&d)+p[t+1]+b[t+1])<<0,i=((c=s+(i+r)<<0)>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),r=(o=c&y)^c&f^n,d=u+(s=d+(h=(A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7))+(A&w^~A&l)+p[t+2]+b[t+2])<<0,i=((u=s+(i+r)<<0)>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),r=(a=u&c)^u&y^o,l=f+(s=l+(h=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&A^~d&w)+p[t+3]+b[t+3])<<0,f=s+(i+r)<<0;this.h0=this.h0+f<<0,this.h1=this.h1+u<<0,this.h2=this.h2+c<<0,this.h3=this.h3+y<<0,this.h4=this.h4+l<<0,this.h5=this.h5+d<<0,this.h6=this.h6+A<<0,this.h7=this.h7+w<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,i=this.h1,h=this.h2,r=this.h3,s=this.h4,e=this.h5,n=this.h6,o=this.h7,a=u[t>>28&15]+u[t>>24&15]+u[t>>20&15]+u[t>>16&15]+u[t>>12&15]+u[t>>8&15]+u[t>>4&15]+u[15&t]+u[i>>28&15]+u[i>>24&15]+u[i>>20&15]+u[i>>16&15]+u[i>>12&15]+u[i>>8&15]+u[i>>4&15]+u[15&i]+u[h>>28&15]+u[h>>24&15]+u[h>>20&15]+u[h>>16&15]+u[h>>12&15]+u[h>>8&15]+u[h>>4&15]+u[15&h]+u[r>>28&15]+u[r>>24&15]+u[r>>20&15]+u[r>>16&15]+u[r>>12&15]+u[r>>8&15]+u[r>>4&15]+u[15&r]+u[s>>28&15]+u[s>>24&15]+u[s>>20&15]+u[s>>16&15]+u[s>>12&15]+u[s>>8&15]+u[s>>4&15]+u[15&s]+u[e>>28&15]+u[e>>24&15]+u[e>>20&15]+u[e>>16&15]+u[e>>12&15]+u[e>>8&15]+u[e>>4&15]+u[15&e]+u[n>>28&15]+u[n>>24&15]+u[n>>20&15]+u[n>>16&15]+u[n>>12&15]+u[n>>8&15]+u[n>>4&15]+u[15&n];return this.is224||(a+=u[o>>28&15]+u[o>>24&15]+u[o>>20&15]+u[o>>16&15]+u[o>>12&15]+u[o>>8&15]+u[o>>4&15]+u[15&o]),a},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,i=this.h1,h=this.h2,r=this.h3,s=this.h4,e=this.h5,n=this.h6,o=this.h7,a=[t>>24&255,t>>16&255,t>>8&255,255&t,i>>24&255,i>>16&255,i>>8&255,255&i,h>>24&255,h>>16&255,h>>8&255,255&h,r>>24&255,r>>16&255,r>>8&255,255&r,s>>24&255,s>>16&255,s>>8&255,255&s,e>>24&255,e>>16&255,e>>8&255,255&e,n>>24&255,n>>16&255,n>>8&255,255&n];return this.is224||a.push(o>>24&255,o>>16&255,o>>8&255,255&o),a},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),i=new DataView(t);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),i.setUint32(20,this.h5),i.setUint32(24,this.h6),this.is224||i.setUint32(28,this.h7),t},i.prototype=new t,i.prototype.finalize=function(){if(t.prototype.finalize.call(this),this.inner){this.inner=!1;var i=this.array();t.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(i),t.prototype.finalize.call(this)}};var B=w();B.sha256=B,B.sha224=w(!0),B.sha256.hmac=_(),B.sha224.hmac=_(!0),o?module.exports=B:(s.sha256=B.sha256,s.sha224=B.sha224,a&&define(function(){return B}))}();

  	window.gtm_eec = 1;
  
  
  window.setValue = function(selector, value) {
    document.querySelector(selector).value = value;
    document.querySelector(selector).dispatchEvent(new Event('keydown', {
        bubbles: true
    }));
    document.querySelector(selector).dispatchEvent(new Event('keyup', {
        bubbles: true
    }));
    document.querySelector(selector).dispatchEvent(new Event('input', {
        bubbles: true
    }));
    document.querySelector(selector).dispatchEvent(new Event('blur', {
        bubbles: true
    }));
	};
  
     window.diffs=function (arr) {
        var x = []
        for (var i = 0; i < arr.length - 1; i++) {
            x[i] = Math.abs(arr[i] - arr[i + 1])
        }
        var y = 0;
        for (var i = 0; i < x.length; i++) {
            y += x[i];
        }
        return y;
    }

    window.value_counts =function (arr) {
        var a = [],
            b = [],
            prev;
        arr.sort();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== prev) {
                a.push(arr[i]);
                b.push(1);
            } else {
                b[b.length - 1]++;
            }
            prev = arr[i];
        }
        return [a, b];
    }
    
    window.onload = function() {
	    // Add CSS Class 
	    var btnhead = document.head || document.getElementsByTagName('head')[0],
	        btnstyle = document.createElement('style'),
	        btncss = '.buttontiler { background-color: #f5f4f0;border: 3px solid #249A9C; color: #000; padding: 16px; text-align: center; text-decoration: none; display: inline-block; font-size: .8em; margin: 5px 2px; border-radius: 16px; }';
	    btncss += '.buttontiler:hover { background-color: #249A9C;border: 2px solid #249A9C; color: #000; padding: 16px; text-align: center; text-decoration: none; display: inline-block; font-size: .8em; margin: 5px 2px; border-radius: 16px; }';
	    btncss += '.buttontiler:active { background-color: #249A9C;opacity: 0.5;border: 2px solid #249A9C; color: white; padding: 16px; text-align: center; text-decoration: none; display: inline-block; font-size: .8em; margin:5px 2px; border-radius: 16px; }';
	   
	    
	    btnstyle.type = 'text/css';
	    if (btnstyle.styleSheet) {
	        btnstyle.styleSheet.cssText = btncss;
	    } else {
	        btnstyle.appendChild(document.createTextNode(btncss));
	    }
	    btnhead.appendChild(btnstyle);
	    
	    //document.querySelector("body > app-root > app-header > app-main > app-vehicle-form > form > div:nth-child(3) > app-question-header > div > div > div:nth-child(2) > div:nth-child(1) > h3").innerHTML ="FAHRZEUG Marke";
	    
	    document.querySelector("#info_kfz").style.width ="60%";
	    //document.querySelector("#info_kfz").placeholder ="Typenschein-Nr.";
	    
	    
	    window.buttoncreator = function(btntext, callback){
	        var btn = document.createElement("BUTTON");
	        btn.className = "buttontiler";
					var t = document.createTextNode(btntext);
	        btn.appendChild(t);
	        btn.onclick = function() {
	            callback();
	        };      
	        info_kfz = document.querySelector("#info_kfz");
	    		document.querySelector("body > app-root > app-header > app-main > app-vehicle-form > form > div:nth-child(3) > div > app-car-type > div").insertBefore(btn, info_kfz);
	    }
	    
	    window.clearer = function(){
	    		document.querySelector("#info_kfz").style.display ="none";
	    		//document.querySelector("app-car-type > div > div.top-triangle").style.visibility = 'hidden'; 
	    		//document.querySelector("app-car-type > div > div.dropdown").style.visibility = 'hidden';  
	    		info_kfz = document.querySelector("#info_kfz");
	    		info_kfz_parent = document.querySelector("#info_kfz").parentNode;
	    		allbuttons = document.querySelectorAll(".buttontiler")
	    		for (i=0;i<allbuttons.length;i++){
	    			 allbuttons[i].parentNode.removeChild(allbuttons[i])
	    		}
	    		//info_kfz_parent.innerHTML ="";
	    		//info_kfz_parent.appendChild(info_kfz);
	    		
	    		//buttoncreator('BMW', function(){setValue("#info_kfz","BMW")});
	    		//buttoncreator('Audi', function(){setValue("#info_kfz","Audi")});
	    		//buttoncreator('VW', function(){setValue("#info_kfz","VW")});
          //buttoncreator('Aston Martin', function(){setValue("#info_kfz","Aston Martin")});
	    }
	    buttoncreator('Filter', clearer);
    }
  
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
    		
        if (this.readyState == 4 && this.responseURL.search(/.*alllianzservice\/api\/(mfdirekt|mr|kkh)\/premium$/i) !== -1) {
            resp = JSON.parse(this.response);
            req = JSON.parse(this._request);

            if (resp.hasOwnProperty("total")) {
                window.transactionRevenue = resp.total.bruttoPraemie;
                window.productCategory = (req && req.vertrag && req.vertrag.fahrzeug && req.vertrag.fahrzeug.fahrzeugArt ) ? req.kundenInfo.produkt + "-" + req.vertrag.fahrzeug.fahrzeugArt : req.kundenInfo.produkt;
                dataLayer.push({
                    'event': 'productPremiumData',      
                    'transactionRevenue': window.transactionRevenue,
                    'productCategory': window.productCategory
                });
            }
        }
            else if (this.readyState == 4 && this.responseURL.search(/.*alllianzservice\/api\/(mfdirekt|mr|kkh)\/create$/i) !== -1) {
                respCreate = JSON.parse(this.response);
                reqCreate = JSON.parse(this._request);
                var transactionID = sha256.hmac('AFyrhTvvw7', respCreate.vertragsnummer);
                dataLayer.push({
                    'event': 'EECpurchase',
                    'ecommerce': {
                        'purchase': {
                            'actionField': {
                                'id': transactionID,
                                'revenue': window.transactionRevenue
                            },
                            'products': [{
                                'name': window.productCategory,
                                'id': transactionID,
                                'price': window.transactionRevenue,
                                'brand': 'ELVIA',
                                'quantity': 1
                            }]
                        }
                    }
                });
            }
      
    
    
 
    
 if (this.readyState == 4 && this.responseURL.indexOf("/eurotaxservice/api/vehicles/") !== -1) {
    //console.log('Ready state changed to: ', this.readyState +": "+ this.responseURL+":"+ this.response);
    resp = JSON.parse(this.response)
    //req = JSON.parse(this._request);
    // console.log(req.kundenInfo.produkt+":"+req.vertrag.fahrzeug.fahrzeugArt+":"+req.vertrag.bundleName);
    // console.log(resp.region);
    console.log("---> M-Enhance 001");
    cars = resp;

	//	document.querySelector("app-car-type > div > div.top-triangle").style.visibility = 'hidden';  
	//	document.querySelector("app-car-type > div > div.dropdown").style.visibility = 'hidden';  
		
    a_fuelType = [];
    a_numOfDoors = [];
    a_gearBoxType = [];
    a_bodyShape = [];
    a_seatsNumber = [];
    a_listPrice = [];
    a_powerInHp = [];
    for (car in cars) {
        a_fuelType[car] = cars[car].fuelType;
        a_numOfDoors[car] = cars[car].numOfDoors;
        a_gearBoxType[car] = cars[car].gearBoxType;
        a_bodyShape[car] = cars[car].bodyShape;
        a_seatsNumber[car] = cars[car].seatsNumber;
        a_listPrice[car] = cars[car].listPrice;
        a_powerInHp[car] = cars[car].powerInHp;
        //console.log(cars[car].fuelType);
    }
    var teiler = [];
    b_fuelType = value_counts(a_fuelType)
    if (b_fuelType[0].length > 1 && b_fuelType[0].length < 5) teiler.push([diffs(b_fuelType[1]) / b_fuelType[0].length, "Treibstoff", b_fuelType[0]])
    console.log("---> M-Enhance 002");
    console.log(teiler);
    // b_numOfDoors = value_counts(a_numOfDoors)
    //  if ( b_numOfDoors[0].length > 1 && b_numOfDoors[0].length < 5)
    //  teiler.push([diffs(b_numOfDoors[1]) / b_numOfDoors[0].length, "Türen: ", b_numOfDoors[0]]);
    b_gearBoxType = value_counts(a_gearBoxType)
    if (b_gearBoxType[0].length > 1 && b_gearBoxType[0].length < 5) teiler.push([diffs(b_gearBoxType[1]) / b_gearBoxType[0].length, "Schaltung", b_gearBoxType[0]]);
    b_bodyShape = value_counts(a_bodyShape)
    if (b_bodyShape[0].length > 1 && b_bodyShape[0].length < 5) teiler.push([diffs(b_bodyShape[1]) / b_bodyShape[0].length, "Aufbauart", b_bodyShape[0]]);
    // b_seatsNumber = value_counts(a_seatsNumber)
    // if (b_seatsNumber[0].length > 1 && b_seatsNumber[0].length < 5)
    // teiler.push([diffs(b_seatsNumber[1]) / b_seatsNumber[0].length, "Sitzplätze: ", b_seatsNumber[0]]);
    b_listPrice = value_counts(a_listPrice)
    if (b_listPrice[0].length > 1 && b_listPrice[0].length < 5) teiler.push([diffs(b_listPrice[1]) / b_listPrice[0].length, "CHF: ", b_listPrice[0]]);
    //teiler["listPrice"] = diffs(b_listPrice[1])/b_listPrice[0].length;
    b_powerInHp = value_counts(a_powerInHp)
    if (b_powerInHp[0].length > 1 && b_powerInHp[0].length < 10) teiler.push([diffs(b_powerInHp[1]) / b_powerInHp[0].length, "PS: ", b_powerInHp[0]]);
    teiler.sort(function(a, b) {
        return a[0] - b[0]
    });
    //console.log(teiler[0][1] +":"+ teiler[0][2]);
    
    
    //Change Title
    document.querySelector("body > app-root > app-header > app-main > app-vehicle-form > form > div:nth-child(3) > app-question-header > div > div > div:nth-child(2) > div:nth-child(1) > h3").innerHTML = teiler[0][1];
    //document.querySelector("body > app-root > app-header > app-main > app-vehicle-form > form > div:nth-child(3) > app-question-header > div > div > div:nth-child(2) > div:nth-child(1) > div").innerHTML = '<div style="font-weight: 600;font-size: 10px;margin-top: 3px;">Filter ' + teiler[0][1] + ':</div>';
    
    //Reset Node
    info_kfz = document.querySelector("#info_kfz");
	  info_kfz_parent = document.querySelector("#info_kfz").parentNode;
	  allbuttons = document.querySelectorAll(".buttontiler")
	    		for (i=0;i<allbuttons.length;i++){
	    			 allbuttons[i].parentNode.removeChild(allbuttons[i])
	    		}
	  //info_kfz_parent.appendChild(info_kfz);
    
    
    // Add Buttons
    for (var i = 0; i < teiler[0][2].length; i++) {
    	
    	
        var btn = document.createElement("BUTTON");
        btn.className = "buttontiler";
        //var t = document.createTextNode(teiler[0][1] + teiler[0][2][i]);
        var t = document.createTextNode(teiler[0][2][i]);
        console.log("---> M-Enhance 004-" + i);
        var stringToReplace = "" + teiler[0][2][i];
        console.log(stringToReplace);
        var desired = stringToReplace.replace(/[^\w\sÀ-ÿ]/gi, ' ');
        console.log(desired);
        btn.teiler = desired;
        btn.appendChild(t);
        btn.onclick = function() {
            cur_val = document.querySelector("INPUT#info_kfz").value;
            setValue('INPUT#info_kfz', cur_val + " " + this.teiler)
            window.dataLayer.push({'event': 'interaction', 
            								'target': "a/b-test",
            								'action': "marke-filter-interacted-"+teiler[0][1],
														'label':'',
            								'value': desired
            								});
        };
        //Drin
        info_kfz_parent.insertBefore(btn, info_kfz);
        //Darüber
        //document.querySelector("body > app-root > app-header > app-main > app-vehicle-form > form > div:nth-child(3) > app-question-header > div > div > div:nth-child(2) > div:nth-child(1) > div").appendChild(btn);
        //Drunter
        //document.querySelector("#filterdiv").appendChild(btn);
        //document.querySelector("#info_kfz").appendChild(btn);
    }
}
      
       
      
      
            if (this._onreadystatechange) {
                return this._onreadystatechange.apply(this, arguments);
            }
        }
        window.XMLHttpRequest.prototype.open = openReplacement;
        window.XMLHttpRequest.prototype.send = sendReplacement;
  
</script>