 <script type="text/javascript">
        window.gdprSetGlobalValues = function() {
            window.omcore_gdpr_optnanon_groups = "undefined" !== typeof OptanonActiveGroups ? OptanonActiveGroups : " ";
            window.omcore_gdpr_consent_performance = -1 < omcore_gdpr_optnanon_groups.indexOf(",2,");
            window.omcore_gdpr_consent_functional = -1 < omcore_gdpr_optnanon_groups.indexOf(",3,");
            window.omcore_gdpr_consent_targeting = -1 < omcore_gdpr_optnanon_groups.indexOf(",4,");
            window.omcore_gdpr_consent_social = -1 < omcore_gdpr_optnanon_groups.indexOf(",5,");
            window.omcore_gdpr_consent_anyactive = omcore_gdpr_consent_performance || omcore_gdpr_consent_functional || omcore_gdpr_consent_targeting || omcore_gdpr_consent_social;
            window.omcore_gdpr_consent_noneactive = !omcore_gdpr_consent_anyactive;
            window.omcore_gdpr_settrackvalue = omcore_gdpr_consent_performance ? "true" : "false";
            "undefined" == typeof OptanonActiveGroups && console.error("Invalid OneTrust script identified")
        };
        window.gdprSetTrackCookie = function() {
            var b = omcore_gdpr_settrackvalue,
                a = new Date;
            a.setMonth(a.getMonth() + 12);
            document.cookie = "sat_track\x3d" + b + ";expires\x3d" + a + ";domain\x3d.elvia.ch;path\x3d/"
        };
        window.gdprSetGlobalValues();
        window.gdprSetTrackCookie();
    </script>
    <script type="text/javascript">
        var gdprExists = typeof gdprEnabled !== 'undefined' ? gdprEnabled : true;
        var gdprCookieExists = typeof omcore_gdpr_consent_anyactive !== 'undefined' ? omcore_gdpr_consent_anyactive : true;
        var dtmEnabled = (!gdprExists) || (gdprExists && gdprCookieExists);
    </script>
    <script type="text/javascript">
        if (dtmEnabled) {
            
          var a; 
          a = document.createElement("script");
          a.setAttribute("charset", "utf-8");
          a.setAttribute("src", "//assets.adobedtm.com\/launch-ENe5822c4e781449539acdac66324cc3b8.min.js")
          a.async = true;
  		  document.head.appendChild(a)
          
          	//_satellite.pageBottom();
        }
    </script>
