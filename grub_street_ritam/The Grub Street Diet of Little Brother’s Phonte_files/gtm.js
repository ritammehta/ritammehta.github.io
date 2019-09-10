
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"153",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_stripWww":false,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],"!==",["escape",["macro",1],8,16],"})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";if(a\u0026\u0026\/GA[0-9]\\.[0-9]\\.[0-9]+\\.[0-9]+$\/.test(a))return a.match(\/GA[0-9]\\.[0-9]\\.(.*)$\/)[1];ga(function(){var a=ga.getAll();if(a\u0026\u0026a[0])return a[0].get(\"clientId\")})})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";if(a=a.match(\/^\\\/[a-z]{2}-[a-z]{2}\/))return a[0].split(\"\/\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=1004,b=756;return window.innerWidth\u003Ea?\"desktop\":window.innerWidth\u003Eb?\"tablet\":\"mobile\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(c,d,e){var a=function(a){return(a=a.replace(\/^\\\/[a-z]{2}-[a-z]{2}\/i,\"\"))?a:\"\/\"},n=function(a,c){var e=a.split(\/[\u0026;]\/),f=[],g=\"\";if(\"\"===a)return\"\";for(var b=0;b\u003Ce.length;b++){var k=e[b].split(\"\\x3d\"),d=k[0];k=k[1];include=!0;for(var l=0;l\u003Cc.length;l++){var h;(h=d.toLowerCase()===c[l].toLowerCase())||(h=\/(([^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))\/,h=h.test(d));h\u0026\u0026(include=\n!1)}include\u0026\u0026f.push({name:d,value:k})}for(b=0;b\u003Cf.length;b++)g+=f[b].name,g+=\"\\x3d\",g+=f[b].value,b!==f.length-1\u0026\u0026(g+=\"\\x26\");return\"?\"+g};a=a(c);var m=a.split(\"?\");c=m[0];a=1\u003Cm.length?a.replace(c,\"\").substring(1):\"\";d=n(a,d);a=c+d;return a=a.replace(\/([a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+(@|%40|%2540)[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+\\.[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^*\\(\\)]+)\/gi,e)}return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a=a.getTimezoneOffset()\/60})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0!==window.AP_Ooyala_Player\u0026\u00260\u003Cwindow.AP_Ooyala_Player.length?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"UA-1-1\";-1\u003C",["escape",["macro",0],8,16],".indexOf(\"nymag.com\")?(a=\"UA-18163580-2\",-1\u003C",["escape",["macro",5],8,16],".indexOf(\"\/intelligencer\")?a=\"UA-18163580-7\":-1\u003C",["escape",["macro",5],8,16],".indexOf(\"\/thecut\")?a=\"UA-18163580-4\":-1\u003C",["escape",["macro",5],8,16],".indexOf(\"\/scienceofus\")?a=\"UA-18163580-8\":-1\u003C",["escape",["macro",5],8,16],".indexOf(\"\/selectall\")?a=\"UA-18163580-9\":-1\u003C",["escape",["macro",5],8,16],".indexOf(\"\/strategist\")\u0026\u0026(a=\"UA-18163580-10\")):-1\u003C",["escape",["macro",0],8,16],".indexOf(\"grubstreet.com\")?a=\"UA-18163580-6\":-1\u003C",["escape",["macro",0],8,16],".indexOf(\"vulture.com\")?\na=\"UA-18163580-5\":-1\u003C",["escape",["macro",0],8,16],".indexOf(\"thecut.com\")?a=\"UA-18163580-4\":-1\u003C",["escape",["macro",0],8,16],".indexOf(\"thecity.nyc\")\u0026\u0026(a=\"UA-18163580-19\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"meta\");for(i=0;i\u003Ca.length;i++)if(\"content.hierarchy\"==a[i].getAttribute(\"name\"))return a[i].getAttribute(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.innerWidth})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.innerHeight})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"youtubeAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"start\"===",["escape",["macro",17],8,16],"?\"video start\":\"complete\"===",["escape",["macro",17],8,16],"?\"video finished\":",["escape",["macro",18],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"youtubeVideoTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",20],8,16],"?",["escape",["macro",20],8,16],"!==",["escape",["macro",21],8,16],"?",["escape",["macro",20],8,16],":",["escape",["macro",21],8,16],":",["escape",["macro",21],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"youtubeVideoDuration"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],"?",["escape",["macro",23],8,16],":",["escape",["macro",24],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=parseFloat(document.querySelector('[class\\x3d\"price info\"]').innerText.split(\"$\"));return a()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products.0.id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";if(\"plan_DpnkuN1s5WbkZE\"===a)return 1;if(\"plan_DpnkBAOChh0gr1\"===a||\"plan_DpnkuN1s5WbkZE\"===a)return 12})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";if(\"plan_DpnkuN1s5WbkZE\"===a)return 5;if(\"plan_DpnkBAOChh0gr1\"===a)return 50;if(\"plan_DvtHWGazmQqke5\"===a)return 70})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",30],8,16],";if(\"plan_DpnkuN1s5WbkZE\"===a)return 1;if(\"plan_DpnkBAOChh0gr1\"===a||\"plan_DpnkuN1s5WbkZE\"===a)return 12})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.split(\".\");return a[a.length-2]+\".\"+a[a.length-1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return localStorage\u0026\u0026!localStorage.getItem(\"talk:auth_token\")\u0026\u0026localStorage.getItem(\"auth0:profile\")?1:0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",34],8,16],";return a=a.replace(\".\",\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelectorAll(\"[type\\x3d'email']\");return a[0].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return sessionStorage.email})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=JSON.parse(localStorage.getItem(\"auth0:profile\"));return a[\"http:\/\/nymag.com\/app_metadata\"]}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"GTM-PWB4S5L\";-1\u003C",["escape",["macro",5],8,16],".indexOf(\"\/intelligencer\")?a=\"GTM-TWK76WN\":-1\u003C",["escape",["macro",5],8,16],".indexOf(\"\/strategist\")?a=\"GTM-WLMN4KL\":-1\u003C",["escape",["macro",0],8,16],".indexOf(\"vulture.com\")?a=\"GTM-PRWD7N6\":-1\u003C",["escape",["macro",0],8,16],".indexOf(\"thecut.com\")?a=\"GTM-K6PJR28\":-1\u003C",["escape",["macro",0],8,16],".indexOf(\"grubstreet.com\")\u0026\u0026(a=\"GTM-P34LWWD\");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",40],8,16],".impressions})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",42],8,16],",b=a.checkout.actionField.step;1===b?a.checkout.actionField.step=2:2===b\u0026\u0026(a.checkout.actionField.step=1);return{ecommerce:a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"pageDetails.pageErrorCode"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.author"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.vertical"
    },{
      "function":"__c",
      "vtp_value":"nymag.com,  vulture.com, grubstreet.com, thecut.com, subs.nymag.com"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"firstname lastname nickname address gender p e profileurl email pwd fname lname user\".split(\" \"),b=\"email_removed\",c=",["escape",["macro",8],8,16],",d=document.location.pathname+document.location.search;return c(d,a,b)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",50],8,16],",b=",["escape",["macro",47],8,16],";\"Homepage\"===b\u0026\u0026(a=",["escape",["macro",48],8,16],"+\" Homepage\");return a})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"firstname lastname nickname address gender p e profileurl email pwd fname lname user\".split(\" \"),b=\"email_removed\",c=",["escape",["macro",8],8,16],";return c(",["escape",["macro",52],8,16],",a,b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userDetails.newYorkMediaUserID"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.pageUri"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageZone"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"verticalPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userDetails.loyaltyLevel"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"nymcid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"first-nymcid"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",62],
      "vtp_defaultValue":["macro",62],
      "vtp_map":["list",["map","key","undefined","value",["macro",63]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.contentChannel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.featureTypes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.wordCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.headline"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.publishDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.tags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.magazineIssueDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.onSitePromotion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userDetails.totalArticleCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userDetails.standardArticleCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userDetails.featureArticleCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userDetails.magazineArticleCount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",38],8,16],";return a?a.has_subscription?\"subscribed\":\"registered\":\"anonymous\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",38],8,16],",b=\"\";a\u0026\u0026a.stripe\u0026\u0026a.stripe.some(function(a){if(a.subscriptions)return a.subscriptions.some(function(a){if(a\u0026\u0026\"active\"===a.status\u0026\u0026a.plan\u0026\u0026a.plan.interval)return b=a.plan.interval,!0})});return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",38],8,16],",b;a\u0026\u0026a.stripe\u0026\u0026a.stripe.some(function(a){if(a.subscriptions)return a.subscriptions.some(function(a){if(a\u0026\u0026\"active\"===a.status\u0026\u0026a.plan\u0026\u0026a.plan.nickname)return b=a.plan.nickname.split(\"(\")[0].trim().toLowerCase(),!0})});return b||a\u0026\u0026\"both\"===a.pcd_account_type?\"print\":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",38],8,16],",b,c=Date.now();a\u0026\u0026a.stripe\u0026\u0026a.stripe instanceof Array\u0026\u0026a.stripe.forEach(function(a){(a.subscriptions||[]).forEach(function(a){a\u0026\u0026a.current_period_start\u0026\u0026(!b||a.current_period_start\u003Cb)\u0026\u0026(b=a.current_period_start)})});return b?Math.floor((c\/1E3-b)\/60\/60\/24):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",38],8,16],",b=[];a\u0026\u0026(a.has_pcd_subscription\u0026\u0026b.push(\"pcd\"),a.has_apple_subscription\u0026\u0026b.push(\"apple\"),a.has_google_subscription\u0026\u0026b.push(\"google\"),a.has_staff_subscription\u0026\u0026b.push(\"staff\"),a.has_giveaway_subscription\u0026\u0026b.push(\"giveaway\"));return b.join(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",38],8,16],";return(a=a\u0026\u0026a.newsletter_subscriptions)?a.join(\",\").toLowerCase():\"\"})();"]
    },{
      "function":"__dbg"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",83],
      "vtp_map":["list",["map","key","true","value","UA-18163580-14"],["map","key","false","value",["macro",13]]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":true,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",46]],["map","index","2","group",["macro",47]],["map","index","3","group",["macro",48]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",49],
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","page","value",["macro",51]],["map","fieldName","referrer","value",["macro",53]],["map","fieldName","userId","value",["macro",54]],["map","fieldName","allowLinker","value","true"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",50]],["map","index","8","dimension",["macro",52]],["map","index","9","dimension",["macro",4]],["map","index","10","dimension",["macro",55]],["map","index","11","dimension",["macro",56]],["map","index","16","dimension",["macro",7]],["map","index","17","dimension",["macro",9]],["map","index","18","dimension",["macro",57]],["map","index","20","dimension",["macro",10]],["map","index","21","dimension",["macro",11]],["map","index","13","dimension",["macro",54]],["map","index","28","dimension",["macro",14]],["map","index","29","dimension",["macro",58]],["map","index","15","dimension",["macro",47]],["map","index","34","dimension",["macro",48]],["map","index","41","dimension",["macro",15]],["map","index","42","dimension",["macro",59]],["map","index","43","dimension",["macro",60]],["map","index","27","dimension",["macro",61]],["map","index","60","dimension",["macro",64]],["map","index","6","dimension",["macro",65]],["map","index","52","dimension",["macro",66]],["map","index","59","dimension",["macro",67]],["map","index","80","dimension",["macro",46]],["map","index","81","dimension",["macro",68]],["map","index","82","dimension",["macro",69]],["map","index","83","dimension",["macro",70]],["map","index","84","dimension",["macro",71]],["map","index","85","dimension",["macro",72]],["map","index","68","dimension",["macro",73]],["map","index","69","dimension",["macro",74]],["map","index","70","dimension",["macro",75]],["map","index","71","dimension",["macro",76]],["map","index","93","dimension",["macro",77]],["map","index","94","dimension",["macro",78]],["map","index","95","dimension",["macro",79]],["map","index","96","dimension",["macro",80]],["map","index","98","dimension",["macro",81]],["map","index","92","dimension",["macro",82]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"url",
      "vtp_customUrlSource":["macro",87],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(.*)go\\.redirectingat(.*)\/.test(",["escape",["macro",87],8,16],")?",["escape",["macro",90],8,16],":",["escape",["macro",87],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clickLocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAction"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",93],
      "vtp_defaultValue":"true",
      "vtp_map":["list",["map","key","play","value","false"],["map","key","pause","value","false"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.metrics.videoSecondsWatched"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.metrics.videoPlays"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.metrics.videoCompletions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.metrics.videoStarts"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.metrics.videoRequests"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.videoId"
    },{
      "function":"__c",
      "vtp_value":["macro",0]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.duration"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.videoType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.videoLocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.videoSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialShares"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialOutboundClicks"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"milestone-value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.name"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",90],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(.*)go\\.redirectingat(.*)\/.test(",["escape",["macro",1],8,16],")?",["escape",["macro",114],8,16],":",["escape",["macro",1],8,16],"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gtmgatest",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"edit",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-18163580-12",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adUnit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adCampaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newsletter"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",122],
      "vtp_map":["list",["map","key","nl sub display","value","11"],["map","key","nl modal display","value","11"],["map","key","nl sub submit","value","10"],["map","key","nl modal submit","value","10"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newsletterId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customEventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customEventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customEventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd23"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"podcastName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd61"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd62"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd63"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd73"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"q"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd86"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd76"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"totalArticleCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"totalArticleCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"standardArticleCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"featureArticleCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"magazineArticleCount"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"imageGalleryId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"imageGalleryVariant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"imageGalleryIndex"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"youtubeChannelName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"youtubeVideoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"youtubeVideoType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"youtubeVideoLocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"blockmeasure"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.actionField.step"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",153],
      "vtp_map":["list",["map","key","2","value","1"],["map","key","1","value","2"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.actionField.list"
    },{
      "function":"__c",
      "vtp_value":"o18xi"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",41],8,16],",c=[],b,d=\",\";if(a){for(b=0;b\u003Ca.length;b++)a[b].variant\u0026\u0026c.push(a[b].variant);a=c.join(d);return a=a.includes(\"image\")||a.includes(\"recirc\")||a.includes(\"button\")}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",41],8,16],",c=[],b,d=\",\";if(a){for(b=0;b\u003Ca.length;b++)a[b].variant\u0026\u0026c.push(a[b].variant);a=c.join(d);return a.includes(\"recirc\")?\"recirc\":\"product tile\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.variant"
    },{
      "function":"__c",
      "vtp_value":"2613858691227"
    },{
      "function":"__vis",
      "vtp_elementSelector":".subscription-order-summary",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1"
    },{
      "function":"__hid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",32],8,16],";\"nymag.com\"===a\u0026\u0026(-1\u003C",["escape",["macro",5],8,16],".indexOf(\"\/intelligencer\")?a=\"intelligencer.\"+a:-1\u003C",["escape",["macro",5],8,16],".indexOf(\"\/strategist\")\u0026\u0026(a=\"strategist.\"+a));return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.variant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.quantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products.0.quantity"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.pageType"
    },{
      "function":"__d",
      "vtp_elementId":"comments",
      "vtp_attributeName":"class",
      "vtp_selectorType":"ID"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",86],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"fced570fc1954abf24b9a31e73d65390",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","http(s?):\\\/\\\/nymag\\.com\\\/strategist\\\/.*","value","0f2ff487fe0d4e1995a109854779bd76"],["map","key","http(s?):\\\/\\\/nymag\\.com\\\/intelligencer\\\/.*","value","8f8c74f5b8265429eea4c27bd136dbe2"],["map","key","http(s?):\\\/\\\/www\\.thecut\\.com.*","value","bfa2e1545594c70c03a9d3cc7f20ba96"],["map","key","http(s?):\\\/\\\/www\\.vulture\\.com.*","value","2ba63174508fb99b0aed1af7614c7b59"],["map","key","http(s?):\\\/\\\/www\\.grubstreet\\.com.*","value","c599def1ab159a886357ef7e7b861502"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",86],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"3248c411-3543-47eb-9708-de5d9e5d3388",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","http(s?):\\\/\\\/subs\\.nymag\\.com.*","value","e72544f9-25d2-4c4f-9d64-30ba3de8448f"],["map","key","http(s?):\\\/\\\/nymag\\.com\\\/intelligencer\\\/.*","value","b778f1ba-8a6b-4055-92de-f53954b11294"],["map","key","http(s?):\\\/\\\/www\\.thecut\\.com.*","value","1306ae05-034b-4c4a-bc13-14e8cfc57604"],["map","key","http(s?):\\\/\\\/www\\.vulture\\.com.*","value","e3e4b19e-83dd-40f1-99b2-372470d6321a"],["map","key","http(s?):\\\/\\\/www\\.grubstreet\\.com.*","value","b0f09752-e0c5-45f4-9731-b061bab2530c"],["map","key","http(s):\\\/\\\/nymag\\.com.*","value","3248c411-3543-47eb-9708-de5d9e5d3388"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products.0.variant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDetails.visitorLoyaltyLevel"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.dimension1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.dimension3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.dimension2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.dimension19"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.variant"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eec.promotionView"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"page error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["template",["macro",44]," on:",["macro",86]],
      "vtp_eventLabel":["template","frompage=",["macro",52]],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",44]],["map","index","12","dimension","GA - Event - Error Pages - Error Pageviews"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1
    },{
      "function":"__ua",
      "setup_tags":["list",["tag",90,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",85],
      "vtp_dimension":["list",["map","index","12","dimension","GA - Pageview - Core Pageview - All Pages"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":6
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"outbound link click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","8","metric",["macro",89]]],
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["template","to=",["macro",91]],
      "vtp_eventLabel":["template",["macro",92]," frompage: ",["macro",5]],
      "vtp_dimension":["list",["map","index","12","dimension","GA - Event - Outbound Link Click - Outbound click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "vtp_nonInteraction":["macro",94],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",93],
      "vtp_eventLabel":["macro",95],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_metric":["list",["map","index","1","metric",["macro",96]],["map","index","2","metric",["macro",97]],["map","index","3","metric",["macro",98]],["map","index","6","metric",["macro",99]],["map","index","7","metric",["macro",100]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","14","dimension",["macro",101]],["map","index","22","dimension",["macro",102]],["map","index","24","dimension",["macro",103]],["map","index","25","dimension",["macro",104]],["map","index","26","dimension",["macro",105]],["map","index","30","dimension",["macro",106]],["map","index","12","dimension","GA - Event - Video Tracking - Video Engagement Events"],["map","index","39","dimension",["macro",107]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["template","widget: ",["macro",108]],
      "vtp_eventLabel":["template",["macro",92]," sharing: ",["macro",5]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_metric":["list",["map","index","4","metric",["macro",109]],["map","index","5","metric",["macro",110]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Event - Social - Social Sharing Widget Interaction"],["map","index","31","dimension",["macro",92]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"affiliate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["template","to=",["macro",87]],
      "vtp_eventLabel":["macro",1],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Event - Affiliate - Affiliate Link Click"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",111],
      "vtp_eventLabel":["template","on=",["macro",86]],
      "vtp_dimension":["list",["map","index","12","dimension","GA - Event - Scroll Tracking - Quartiles"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":18
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"product click",
      "vtp_eventLabel":["template","on=",["macro",86]],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Ecommerce Event - Article Click"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"product detail",
      "vtp_eventLabel":["macro",112],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Ecommerce Event - Article Detail View"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",115],
      "vtp_eventLabel":["template","sharing: ",["macro",5]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_metric":["list",["map","index","4","metric",["macro",109]],["map","index","5","metric",["macro",110]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Event - Social - Social Outbound Link"],["map","index","31","dimension",["macro",92]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",118],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"advertising",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["template",["macro",119]," ",["macro",120]],
      "vtp_eventLabel":["macro",121],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_metric":["list",["map","index","4","metric",["macro",121]],["map","index","5","metric",["macro",120]],["map","index","6","metric",["macro",119]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Event - Advertising - Interaction"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"product click",
      "vtp_eventLabel":["template","on=",["macro",86]],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Ecommerce Event - Product Click"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"product impression",
      "vtp_eventLabel":["template","to=",["macro",87]],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","12","value","GA - Ecommerce Event - Product Impressions"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"product impression",
      "vtp_eventLabel":["template","on=",["macro",86]],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Ecommerce Event - Component Impressions"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"newsletter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",123],"metric","1"]],
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",122],
      "vtp_eventLabel":["macro",124],
      "vtp_dimension":["list",["map","index","42","dimension",["macro",59]],["map","index","43","dimension",["macro",60]],["map","index","12","dimension","GA - Event - Newsletter - Newsletter Impressions"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",125],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",126],
      "vtp_eventLabel":["macro",127],
      "vtp_dimension":["list",["map","index","23","dimension",["macro",128]],["map","index","38","dimension",["macro",129]],["map","index","61","dimension",["macro",130]],["map","index","62","dimension",["macro",131]],["map","index","63","dimension",["macro",132]],["map","index","73","dimension",["macro",133]],["map","index","74","dimension",["macro",134]],["map","index","86","dimension",["macro",135]],["map","index","76","dimension",["macro",136]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"product click",
      "vtp_eventLabel":"on={Page URL}",
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Ecommerce Event - Component Click"],["map","index","42","dimension",["macro",59]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"promo click",
      "vtp_eventLabel":["template","on=",["macro",86]],
      "vtp_dimension":["list",["map","index","64","dimension",["macro",137]],["map","index","68","dimension",["macro",0]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"promo view",
      "vtp_eventLabel":["template","on=",["macro",86]],
      "vtp_dimension":["list",["map","index","12","dimension","GA - Ecommerce Event - Promo View"],["map","index","64","dimension",["macro",138]],["map","index","65","dimension",["macro",139]],["map","index","66","dimension",["macro",140]],["map","index","67","dimension",["macro",141]],["map","index","72","dimension",["macro",0]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"872557511",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",142],
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"imageGalleryView",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",143],
      "vtp_eventLabel":["macro",143],
      "vtp_dimension":["list",["map","index","44","dimension",["macro",144]],["map","index","35","dimension",["macro",145]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"youtubeVideo",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["macro",22],
      "vtp_dimension":["list",["map","index","25","dimension",["macro",22]],["map","index","14","dimension",["macro",147]],["map","index","24","dimension",["macro",25]],["map","index","40","dimension",["macro",148]],["map","index","30","dimension",["macro",149]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Subscription Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Form Submit Click",
      "vtp_eventLabel":"Subscribe to New York Magazine",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":53
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5819061",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":54
    },{
      "function":"__baut",
      "setup_tags":["list",["tag",26,0]],
      "once_per_event":true,
      "vtp_tagId":"5819061",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":57
    },{
      "function":"__awct",
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",150],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"872557511",
      "vtp_conversionLabel":"te56CP3xgHYQx9eIoAM",
      "vtp_url":["macro",142],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"measurement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",151],
      "vtp_eventLabel":["macro",127],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Subscription Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Form Submit Success",
      "vtp_eventLabel":"Subscribe to New York Magazine",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":73
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":78
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",152],
      "vtp_dimension":["list",["map","index","64","dimension",["macro",138]],["map","index","65","dimension",["macro",139]],["map","index","66","dimension",["macro",140]],["map","index","67","dimension",["macro",141]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",43],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["template","check out ",["macro",154]],
      "vtp_eventLabel":["macro",155],
      "vtp_dimension":["list",["map","index","64","dimension",["macro",138]],["map","index","65","dimension",["macro",139]],["map","index","66","dimension",["macro",140]],["map","index","67","dimension",["macro",141]],["map","index","12","dimension","GA - Ecommere Event - Check out"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"product view - subs",
      "vtp_eventLabel":["macro",156],
      "vtp_dimension":["list",["map","index","64","dimension",["macro",138]],["map","index","65","dimension",["macro",139]],["map","index","66","dimension",["macro",140]],["map","index","67","dimension",["macro",141]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":["macro",157],
      "tag_id":92
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"optimize",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"impression",
      "vtp_eventLabel":["macro",159],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","12","value","GA - Optimize Event - Impressions"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":126
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"optimize",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",160],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","12","dimension","GA - Optimize Event - Click"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":127
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":["macro",161],
      "vtp_eventName":"pagevisit",
      "tag_id":128
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":["macro",161],
      "vtp_eventName":"custom",
      "tag_id":129
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6771955_8",
      "tag_id":132
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6771955_9",
      "tag_id":133
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6771955_10",
      "tag_id":134
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6771955_18",
      "tag_id":135
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6771955_19",
      "tag_id":136
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6771955_35",
      "tag_id":137
    },{
      "function":"__ytl",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":false,
      "vtp_capturePause":false,
      "vtp_captureProgress":false,
      "vtp_uniqueTriggerId":"6771955_113",
      "vtp_enableTriggerStartOption":true,
      "tag_id":138
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".post-purchase",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"6771955_117",
      "tag_id":139
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".subscription-button.submit-button:not([disabled])",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"6771955_184",
      "tag_id":140
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".post-purchase",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"6771955_196",
      "tag_id":141
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":["macro",162],
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"6771955_219",
      "tag_id":142
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div.subscription-subscribed",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"6771955_340",
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(g){function e(a,b){dataLayer.push({event:\"ooyala\",videoAction:b.action,videoTitle:h(a),videoDetails:{title:h(a),videoId:r(a),playerId:c,uploadDate:c,author:c,duration:k(a),currentTime:q(a),muted:c,fullscreened:c,autoPlay:c,playerLocation:c,show:c,season:c,brand:c,preRoll:a.APVideo.willPlayAds,country:c,playlistId:c,playlistTitle:c,playlistSize:c,playlistIndex:c,channel:c,subChannel:c,authorType:c,publishDate:c,interactable:c,sourceFile:c,publishedBy:c,publisherType:c,videoType:a.APVideo.videoPlayerType,\nvideoLocation:a.APVideo.videoLocation,videoSource:a.APVideo.videoSource,metrics:{videoSecondsWatched:b.videoSecondsWatched,videoPlays:b.videoPlays,videoCompletions:b.videoCompletions,videoStarts:b.videoStarts,videoRequests:b.videoRequests}}})}function l(){if(void 0===g.AP_Ooyala_Videos)m++,window.setTimeout(l,n);else{if(0==g.AP_Ooyala_Videos.length){m++;if(m\u003Et)return;window.setTimeout(l,n)}for(var a=0;a\u003CAP_Ooyala_Videos.length;a++)u(AP_Ooyala_Videos[a])}}function u(a){void 0===a.APVideo?a.APVideo=\n{milestones:[.25,.5,.75],firstPlay:!0,lastState:\"PAUSE\",willPlayAds:!1,justChangedCC:!1,justFullscreened:!1}:(a.APVideo.milestones=[.25,.5,.75],a.APVideo.firstPlay=!0,a.APVideo.lastState=\"PAUSE\",a.APVideo.willPlayAds=!1,a.APVideo.justChangedCC=!1,a.APVideo.justFullscreened=!1);a.mb.subscribe(\"*\",\"example\",function(b){var d=a;switch(b){case OO.EVENTS.PAUSED:b={category:\"video - ooyala\",action:\"pause\",label:void 0,value:void 0,nonInteraction:!1};if(!0!==d.APVideo.firstPlay\u0026\u0026\"PAUSE\"!==d.APVideo.lastState){var c=\np(d);c=Math.round(100*c)+\"%\";\"SEEK\"===d.APVideo.lastState?d.APVideo.lastState=\"PAUSE\":\"100%\"!==c\u0026\u0026(d.APVideo.lastState=\"PAUSE\",b.label=c,e(d,b))}break;case OO.EVENTS.PLAYING:b={category:\"video - ooyala\",action:\"start\",label:void 0,value:void 0,nonInteraction:!1,videoPlays:1};c=p(d);c=Math.round(100*c)+\"%\";\"SEEK\"===d.APVideo.lastState?d.APVideo.lastState=\"PLAY\":(d.APVideo.lastState=\"PLAY\",!0===d.APVideo.firstPlay?(d.APVideo.milestones=[.25,.5,.75],d.APVideo.firstPlay=!1,b.label=h(d),b.videoStarts=\n1):(b.action=\"play\",b.label=c),e(d,b));break;case OO.EVENTS.SCRUBBED:d.APVideo.lastState=\"SEEK\";break;case OO.EVENTS.PLAYED:b={category:\"video - ooyala\",action:\"finished\",label:void 0,value:void 0,nonInteraction:!1,videoCompletions:1,videoSecondsWatched:k(d)};d.APVideo.firstPlay=!0;d.APVideo.milestones=[.25,.5,.75];d.APVideo.lastState=\"PAUSE\";b.label=h(d);e(d,b);break;case OO.EVENTS.PLAYHEAD_TIME_CHANGED:if(!0!==d.APVideo.firstPlay\u0026\u0026(b={category:\"video - ooyala\",action:void 0,label:void 0,value:void 0,\nnonInteraction:!1},!(1\u003Ed.APVideo.milestones.length))){var f=p(d);for(c=void 0;f\u003E=d.APVideo.milestones[0];)c=100*d.APVideo.milestones.splice(0,1)[0];void 0!==c\u0026\u0026(f=k(d),25===c\u0026\u0026(b.action=\"progress 25%\",b.videoSecondsWatched=f\/4),50===c?(b.action=\"progress 50%\",b.videoSecondsWatched=f\/2):75===c\u0026\u0026(b.action=\"progress 75%\",b.videoSecondsWatched=f\/4*3),e(d,b))}break;case OO.EVENTS.FULLSCREEN_CHANGED:v(d);break;case OO.EVENTS.SET_CLOSED_CAPTIONS_LANGUAGE:w(d);break;case OO.EVENTS.PLAYBACK_READY:b={category:\"video - ooyala\",\naction:\"player ready\",label:void 0,value:void 0,nonInteraction:!1,videoRequests:1};e(d,b);break;case OO.EVENTS.SAVE_PLAYER_SETTINGS:!0===d.APVideo.justChangedCC\u0026\u0026(b={category:\"video - ooyala\",action:\"closed captioning toggled\",label:void 0,value:void 0,nonInteraction:!1},e(d,b));break;case OO.EVENTS.AD_POD_STARTED:b={category:\"video - ooyala\",action:\"pre-roll start\",label:void 0,value:void 0,nonInteraction:!1},e(d,b)}})}function v(a){var b={category:\"video - ooyala\",action:\"full screen changed\",label:void 0,\nvalue:void 0,nonInteraction:!1};!0!==a.justFullscreened\u0026\u0026(a.isFullscreen()?b.action=\"full screen enabled\":b.action=\"full screen disabled\",e(a,b),a.justFullscreened=!0,a.fullScreenTimer=g.setTimeout(function(){a.justFullscreened=!1},250))}function w(a){a.APVideo.justChangedCC=!0;a.APVideo.ccTimer=g.setTimeout(function(){a.APVideo.justChangedCC=!1},200)}function k(a){try{return a.getDuration()}catch(b){return c}}function q(a){try{return a.getPlayheadTime()}catch(b){return c}}function p(a){try{var b=\nq(a),d=k(a);return b\/d}catch(x){return c}}function h(a){try{return a.getTitle()}catch(b){return c}}function r(a){try{return a.getEmbedCode()}catch(b){return c}}var c=void 0,n=500,t=10,m=0;window.setTimeout(l,n)})(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(l,m){function n(c,a){var d=c.innerHeight||(a.documentElement?a.documentElement.clientHeight:a.body.clientHeight)||a.body.clientHeight;var b=a.body;var f=a.documentElement;b=a.height||e(e(b.scrollHeight,f.scrollHeight),e(b.offsetHeight,f.offsetHeight),e(b.clientHeight,f.clientHeight));f=c.pageYOffset||(a.documentElement?a.documentElement.scrollTop:a.body.scrollTop)||a.body.scrollTop;d=b-(d+f);return d=d\/b*100}dataLayer=window.dataLayer||[];var p=l,c=m,g=0,h,k=0,e=Math.max,q=Math.round;window.onscroll=\nfunction(){for(var e=100-n(window,document),a=c.length;a;)if(a--,q(e)\u003E=c[a]\u0026\u0026k\u003Cc[a]){currentMilestone=k=c[a];if(currentMilestone!=g){var d=function(){var a=c[b].toString()+\"%\";dataLayer.push({category:\"scroll tracking\",event:\"scroll-milestone\",\"milestone-value\":a})};g=currentMilestone;var b=a;window.clearTimeout(h);h=window.setTimeout(d,p)}a=0}}})(2E3,[0,25,50,75,100]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/javascript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10041677\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1149741648399382\");fbq(\"track\",\"PageView\");window.google_tag_manager[",["escape",["macro",55],8,16],"].onHtmlSuccess(",["escape",["macro",163],8,16],");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1149741648399382\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "setup_tags":["list",["tag",56,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\");fbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1149741648399382\u0026amp;ev=AddToCart\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "setup_tags":["list",["tag",55,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10041677\",qstrings:{et:\"custom\",el:\"Subscription Orders\"}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"http:\/\/p.liadm.com\/p?c=21329\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar site=\"",["escape",["macro",48],7],"\",siteUrl=window.location.href,delayPrompt=5E3,oneSignalStorageKey=\"push-notification-pageview\",oneSignalPageview=1;function setPageview(){localStorage.setItem(oneSignalStorageKey,oneSignalPageview)}function getPageview(){return localStorage.getItem(oneSignalStorageKey)\u003ConeSignalPageview}\nfunction loadOneSignalSDK(){var a=document.createElement(\"script\");a.async=!0;a.type=\"text\/javascript\";a.src=\"https:\/\/cdn.onesignal.com\/sdks\/OneSignalSDK.js\";document.body.appendChild(a)}\nfunction initOneSignal(){var a=window.OneSignal||[],c=-1\u003CsiteUrl.indexOf(\"localhost.nymag.com\"),d=-1\u003CsiteUrl.indexOf(\"sites.aws.nymetro.com\");switch(site){case \"The Strategist\":var b=c?\"dfc8c3dd-039d-400d-aa14-6deb62a3cfea\":d?\"00b44f79-27ee-41d4-a2bc-c7d7acc6ed43\":\"2d3f9107-1d04-4985-837e-aba2ff72b615\";break;default:b=\"2d3f9107-1d04-4985-837e-aba2ff72b615\"}a.init\u0026\u0026a.push(function(){a.init({appId:b})})}\n\"The Strategist\"!==site||window.oneSignalAdded||(getPageview()?setPageview():(loadOneSignalSDK(),window.setTimeout(function(){initOneSignal()},delayPrompt),window.oneSignalAdded=!0));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function k(a){var b,d=document.cookie.split(\";\");a+=\"\\x3d\";var g=0;for(b=d.length;g\u003Cb;g++){var e=d[g].trim();if(0===e.indexOf(a))return e.substring(a.length,e.length)}}function q(a,b){var d=new Date;d.setTime(d.getTime()+15768E7);document.cookie=a+\"\\x3d\"+b+\";expires\\x3d\"+d.toGMTString()+\";max-age\\x3d157680000;domain\\x3d.\"+p+\";path\\x3d\/;\"}function r(a){return parseInt(a,10)||0}function t(a,b){var d=document.createElement(\"img\");d.setAttribute(\"src\",\"https:\/\/nymag.com\/pixel.gif?first-nymcid\\x3d\"+\na+\"\\x26nymcid\\x3d\"+b);document.body.appendChild(d)}function v(){var a=window.location.hostname,b=a.split(\".\");b=b[b.length-2]+\".\"+b[b.length-1];var d=-1\u003Ca.indexOf(\"localhost\");a=d?\"https:\/\/\"+a+\"\/client\":e+b;b=new XMLHttpRequest;b.open(\"GET\",a+\"\/_nymcid\/extend\",!0);b.withCredentials=!0;b.send(null)}function w(a){var b=a,d=r(b.substr(b.indexOf(\".\")+1)),e=l.join(\"\"),f=function(a){var c=a.data\u0026\u0026\"string\"===typeof a.data\u0026\u0026a.data.indexOf(h),m=-1\u003Cc,g=a.origin;c=m\u0026\u0026a.data.substr(c+h.length);-1\u003Cl.indexOf(g)\u0026\u0026\n(c?c!==b\u0026\u0026(m=r(c.substr(c.indexOf(\".\")+1)),m\u003Cd?(t(b,c),b=c,d=m,q(n,b),k.forEach(function(a){a.contentWindow.postMessage(h+b,\"*\")})):(t(c,b),a.source.postMessage(h+b,\"*\"))):a.source.postMessage(h+b,\"*\"),e=e.replace(g,\"\"),\"\"===e\u0026\u0026(q(n,b),document.cookie=u+\"\\x3d;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;max-age\\x3d-99999999;domain\\x3d.\"+p+\";path\\x3d\/;\",v(),window.dispatchEvent(x),window.removeEventListener(\"message\",f,!1),k.forEach(function(a){a.contentWindow.postMessage(y+b,\"*\")})))};window.addEventListener(\"message\",\nf,!1);var k=l.map(function(a){var c=document.createElement(\"iframe\");c.setAttribute(\"src\",a+\"\/_nymcid?nymcid\\x3d\"+b);c.style.display=\"none\";c.style.width=\"0\";c.style.height=\"0\";document.body.appendChild(c);return c})}function z(){var a=k(n);a||(a=k(u))\u0026\u0026w(a)}var u=\"first-nymcid\",n=\"nymcid\",h=n+\":\",y=\"final-\"+h,f=document.location.hostname.split(\".\"),p=f[f.length-2]+\".\"+f[f.length-1],e=\"https:\/\/client.\",l=[e+\"nymag.com\",e+\"vulture.com\",e+\"thecut.com\",e+\"grubstreet.com\"],x=new Event(\"nymcid-set\");l.splice(l.indexOf(e+\np),1);z()})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var e=\"6034623\",f=new Image,c=document.querySelector('meta[property\\x3d\"og:title\"]');c=c\u0026\u0026c.content||document.title;var b=document.location.href,a=b.indexOf(\"?\"),d=b.indexOf(\"#\");a=-1\u003Ca?a:-1\u003Cd?d:b.length;a=b.substr(0,a);d=(new Date).getTime();var g=screen.width+\"x\"+screen.height;f.src=(\"https:\"===document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\")+\".scorecardresearch.com\/b?c1\\x3d2\\x26c2\\x3d\"+e+\"\\x26c3\\x3dnymag.dev\\x26c4\\x3d\"+a+\"\\x26c5\\x3d\\x26c6\\x3d\\x26c7\\x3d\"+encodeURIComponent(b)+\"\\x26c8\\x3d\"+\nencodeURIComponent(c)+\"\\x26c9\\x3d\"+encodeURIComponent(document.referrer)+\"\\x26c10\\x3d\"+encodeURIComponent(g)+\"\\x26c15\\x3d\\x26rn\\x3d\"+d})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.fbAsyncInit=function(){var a=document.querySelector('meta[property\\x3d\"fb:app_id\"]');a=a\u0026\u0026a.getAttribute(\"content\");!a\u0026\u0026console.warn(\"Facebook appId not found\");FB.init({appId:a,xfbml:!0,version:\"v2.0\"})};(function(a,c,d){var e=a.getElementsByTagName(c)[0];a.getElementById(d)||(a=a.createElement(c),a.id=d,a.src=\"\/\/connect.facebook.net\/en_US\/sdk.js\",e.parentNode.insertBefore(a,e))})(document,\"script\",\"facebook-jssdk\");\n(function(){!function(a,c,d,e,b,f,g){a.fbq||(b=a.fbq=function(){b.callMethod?b.callMethod.apply(b,arguments):b.queue.push(arguments)},a._fbq||(a._fbq=b),b.push=b,b.loaded=!0,b.version=\"2.0\",b.queue=[],f=c.createElement(d),f.async=!0,f.src=e,g=c.getElementsByTagName(d)[0],g.parentNode.insertBefore(f,g))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1149741648399382\");fbq(\"track\",\"PageView\")})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"http:\/\/www.grubstreet.com\/grubfc.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.vulture.com\/vulturefc.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.thecut.com\/thecutfc.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/nymag.com\/nymfc.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"order_complete event fired\");dataLayer.push({price:parseFloat(document.querySelector('[class\\x3d\"subs-first-charge\"]').innerText.split(\"$\")[1]),event:\"order_complete\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cdiv id=\"parsely-root\" style=\"display: none\"\u003E\n\u003Cspan id=\"parsely-cfg\" data-parsely-site=\"",["escape",["macro",164],3],"\"\u003E\u003C\/span\u003E\n\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.PARSELY=window.PARSELY||{autotrack:!1,onload:function(){PARSELY.updateDefaults({data:{_sub_status:\"",["escape",["macro",77],7],"\"}});PARSELY.beacon.trackPageView()}};(function(d,b,c){var e=c.location.protocol,f=b+\"-\"+d,a=c.getElementById(f),g=c.getElementById(b+\"-root\");b=\"https:\"===e?\"d1z2jf7jlzjs58.cloudfront.net\":\"static.\"+b+\".com\";a||(a=c.createElement(d),a.id=f,a.async=!0,a.src=e+\"\/\/\"+b+\"\/p.js\",g.appendChild(a))})(\"script\",\"parsely\",document);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{(function(a,e,f,g,b,c,d){\"undefined\"===typeof a.MovableInkTrack\u0026\u0026(a.MovableInkTrack=b,c=e.createElement(f),d=e.getElementsByTagName(f)[0],c.type=\"text\/javascript\",c.async=!0,c.src=\"\/\/\"+g+\"\/p\/js\/1.js\",a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)},d.parentNode.insertBefore(c,d))})(window,document,\"script\",\"bmibg7og.micpn.com\",\"mitr\")}catch(a){console.warn(\"Movable Ink failed:\",a.message)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:",["escape",["macro",165],8,16],",currency:\"USD\",content_name:\"nym-sfnra\",content_category:\"",["escape",["macro",152],7],"\",content_ids:\"sfnra\",contents:[{id:\"",["escape",["macro",166],7],"\",quantity:",["escape",["macro",167],8,16],",item_price:",["escape",["macro",34],8,16],"}],content_type:\"product\",duration:",["escape",["macro",31],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\",{content_ids:\"sfnra\",content_category:\"",["escape",["macro",155],7],"\",content_name:\"nym-sfnra\",value:",["escape",["macro",29],8,16],",currency:\"USD\",num_items:",["escape",["macro",168],8,16],",duration:",["escape",["macro",28],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{currency:\"USD\",content_name:\"",["escape",["macro",169],7],"\",content_category:\"",["escape",["macro",48],7],"\",content_ids:\"",["escape",["macro",58],7],"\",content_type:",["escape",["macro",170],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction report(a,b,c){var d=document.createElement(\"img\");d.src=\"https:\/\/nymag.com\/pixel.gif?t\\x3d\"+encodeURIComponent(a)+\"\\x26s\\x3d\"+encodeURIComponent(b)+\"\\x26m\\x3d\"+encodeURIComponent(c)}function checkJwt(a){return(a=a.match(\/[A-Za-z0-9\\-_+=\/\\.]+\/))?0\u003Ca.index?(localStorage.setItem(TALK_JWT,a[0]),1):0:2}\nif(localStorage){var TALK_JWT=\"talk:auth_token\",AUTH0_TALK=\"http:\/\/nymag.com\/coral_talk\",AUTH0_PROFILE=\"auth0:profile\",talkJwt=localStorage.getItem(TALK_JWT),auth0profile=localStorage.getItem(AUTH0_PROFILE),auth0coral,auth0status=0,coralStatus=0,talkStatus=0,chkStatus=0,result;auth0status=auth0profile?1:0;coralStatus=auth0profile\u0026\u0026auth0profile[AUTH0_TALK]?1:0;(talkStatus=talkJwt?1:0)?auth0status?(console.log(\"check 2\"),chkStatus=checkJwt(localStorage.getItem(TALK_JWT)),msg=\"auth0 and jwt present: \"+\nlocalStorage.getItem(TALK_JWT)):(localStorage.removeItem(TALK_JWT),msg=\"no auth0 profile, so remove jwt\"):auth0profile?(auth0coral=JSON.parse(auth0profile)[AUTH0_TALK])?(localStorage.setItem(TALK_JWT,auth0coral),console.log(\"check 1\"),chkStatus=checkJwt(auth0coral),msg=\"talk jwt repaired: \"+auth0coral):msg=\"no coral found in auth0: \"+auth0profile:msg=\"no auth or jwt\";result=auth0status\u003C\u003C6;result+=coralStatus\u003C\u003C5;result+=talkStatus\u003C\u003C4;report(\"commenting\",(result+chkStatus).toString(16),msg)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.integration(\"purchase\",{items:[{url:",["escape",["macro",86],8,16],",qty:",["escape",["macro",167],8,16],",sku:",["escape",["macro",30],8,16],",title:",["escape",["macro",152],8,16],",price:",["escape",["macro",35],8,16],",images:{full:\"\"},vars:{variant:",["escape",["macro",166],8,16],"}}],vars:{free_shipping:\"yes\"},onSuccess:function(){displayMessage(\"Purchase recorded\")},onError:function(){displayMessage(\"Error\")}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.init({customerId:\"",["escape",["macro",172],7],"\",iscustom:!0,autoTrackPageview:!1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.track(\"pageview\",{url:\"",["escape",["macro",86],7],"\",onSuccess:function(){console.log(\"trackPageView success\")},onError:function(){console.log(\"trackPageView failure\")}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template"," \u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"",["escape",["macro",173],7],"\");snaptr(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"",["escape",["macro",173],7],"\",{user_email:",["escape",["macro",37],8,16],"});\nsnaptr(\"track\",\"PURCHASE\",{currency:\"USD\",price:",["escape",["macro",34],8,16],",transaction_id:",["escape",["macro",174],8,16],",item_category:",["escape",["macro",152],8,16],",item_ids:",["escape",["macro",175],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EsessionStorage.email=",["escape",["macro",36],8,16],";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(localStorage.getItem(\"__storejs_expire_mixin_auth0:expiration\")\u0026\u0026localStorage.getItem(\"__storejs_expire_mixin_auth0:expiration\")\u0026\u0026localStorage.getItem(\"__storejs_expire_mixin_auth0:expiration\"))try{var storeAuth0expiry=new Date(parseInt(localStorage.getItem(\"__storejs_expire_mixin_auth0:expiration\"))),nextMonth=(new Date).setDate((new Date).getDate()+30),now=new Date;storeAuth0expiry\u003Enow\u0026\u0026(localStorage.setItem(\"__storejs_expire_mixin_auth0:expiration\",nextMonth),localStorage.setItem(\"__storejs_expire_mixin_auth0:access_token\",\nnextMonth),localStorage.setItem(\"__storejs_expire_mixin_auth0:profile\",nextMonth))}catch(a){console.log(\"error on expiry check\")};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdn.logrocket.io\/LogRocket.min.js\" crossorigin=\"anonymous\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar logRocketId=\"njjqab\/clay-demo\";\ntry{var nymcid=document.cookie.split(\";\").map(function(a){var b={};b[a.split(\"\\x3d\")[0].trim()]=a.split(\"\\x3d\")[1];return b}).filter(function(a){return\"nymcid\"in a}),firstNymcid=document.cookie.split(\";\").map(function(a){var b={};b[a.split(\"\\x3d\")[0].trim()]=a.split(\"\\x3d\")[1];return b}).filter(function(a){return\"first-nymcid\"in a}),cid=nymcid?nymcid[0].nymcid:firstNymcid?firstNymcid[0][\"first-nymcid\"]:\"anonymous\";nymcid\u0026\u00261==nymcid.length\u0026\u0026!navigator.userAgent.match(\/comscore\/i)\u0026\u0026window.LogRocket\u0026\u0026\n!window.LogRocket.NYMInit\u0026\u0026(window.LogRocket\u0026\u0026window.LogRocket.init(logRocketId),LogRocket.identify(cid))}catch(a){console.log(\"Could not initialize log rocket\"),console.log(a),LogRocket.identify()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o1ist\",{tw_sale_amount:",["escape",["macro",165],8,16],",tw_order_quantity:",["escape",["macro",167],8,16],"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=l4vs0\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=",["escape",["macro",165],12],"\u0026amp;tw_order_quantity=",["escape",["macro",167],12],"\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=l4vs0\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=",["escape",["macro",165],12],"\u0026amp;tw_order_quantity=",["escape",["macro",167],12],"\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid=40ed1d97-a77f-4807-b268-3360dac304f1\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ekenshoo.trackConversion(\"3763\",\"40ed1d97-a77f-4807-b268-3360dac304f1\",{conversionType:\"",["escape",["macro",152],7],"\",revenue:",["escape",["macro",165],8,16],",currency:\"USD\",orderId:\"\",promoCode:\"\"});\u003C\/script\u003E \n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/3763.xg4ken.com\/pixel\/v1?track=1\u0026amp;token=40ed1d97-a77f-4807-b268-3360dac304f1\u0026amp;conversionType=",["escape",["macro",152],12],"\u0026amp;revenue=",["escape",["macro",165],12],"\u0026amp;currency=USD\u0026amp;orderId=\u0026#39;\u0026#39;\u0026amp;promoCode=\u0026#39;\u0026#39;\" width=\"1\" height=\"1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid=40ed1d97-a77f-4807-b268-3360dac304f1\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ekenshoo.trackConversion(\"3763\",\"40ed1d97-a77f-4807-b268-3360dac304f1\",{conversionType:\"clickin\",revenue:",["escape",["macro",165],8,16],",currency:\"USD\",orderId:\"\",promoCode:\"\"});\u003C\/script\u003E \n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/3763.xg4ken.com\/pixel\/v1?track=1\u0026amp;token=40ed1d97-a77f-4807-b268-3360dac304f1\u0026amp;conversionType=viewcontentsub\u0026amp;revenue=",["escape",["macro",165],12],"\u0026amp;currency=USD\u0026amp;orderId=\u0026#39;\u0026#39;\u0026amp;promoCode=\u0026#39;\u0026#39;\" width=\"1\" height=\"1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":119
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d,g,e,a,f,b){c.ktag||(a=function(){a.sendEvent?a.sendEvent(arguments):a.ktq.push(arguments)},a.ktq=[],c.ktag=a,f=d.getElementsByTagName(e)[0],b=d.createElement(e),b.async=!0,b.src=g,f.parentNode.appendChild(b))}(window,document,\"https:\/\/resources.xg4ken.com\/js\/v2\/ktag.js?tid\\x3dKT-N35C3-3EB\",\"script\");ktag(\"setup\",\"KT-N35C3-3EB\",\"",["escape",["macro",54],7],"\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/events.xg4ken.com\/pixel\/v2?tid=KT-N35C3-3EB\u0026amp;noscript=1\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid=40ed1d97-a77f-4807-b268-3360dac304f1\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ekenshoo.trackConversion(\"3763\",\"40ed1d97-a77f-4807-b268-3360dac304f1\",{conversionType:\"clickout\",revenue:",["escape",["macro",165],8,16],",currency:\"USD\",orderId:\"\",promoCode:\"\"});\u003C\/script\u003E \n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/3763.xg4ken.com\/pixel\/v1?track=1\u0026amp;token=40ed1d97-a77f-4807-b268-3360dac304f1\u0026amp;conversionType=clickout\u0026amp;revenue=",["escape",["macro",165],12],"\u0026amp;currency=USD\u0026amp;orderId=\u0026#39;\u0026#39;\u0026amp;promoCode=\u0026#39;\u0026#39;\n    \" width=\"1\" height=\"1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(localStorage.getItem(\"auth0:profile\"))try{var auth0=JSON.parse(localStorage.getItem(\"auth0:profile\")),subscriptionID=auth0[\"http:\/\/nymag.com\/app_metadata\"].stripe[0].subscriptions[0].id,zetaIframe=document.createElement(\"iframe\"),TRANSACTION_ID=subscriptionID;zetaIframe.setAttribute(\"src\",\"https:\/\/gztkr.mobi\/?gmid\\x3d3O\\x26axid\\x3d1359\\x26trxid\\x3d\"+TRANSACTION_ID);zetaIframe.setAttribute(\"id\",\"zeta\");zetaIframe.setAttribute(\"width\",0);zetaIframe.setAttribute(\"height\",0);zetaIframe.setAttribute(\"style\",\n\"display:none;visibility:hidden;\");document.body.appendChild(zetaIframe);console.log(\"sub id\",auth0[\"http:\/\/nymag.com\/app_metadata\"].stripe[0].subscriptions[0].id)}catch(a){console.log(a)};\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.id=\"funnel-relay-installer\";a.dataset.customerId=\"nymag_0oRbAZ02Kk_thestrategist\";a.dataset.propertyId=\"PROPERTY_ID\";a.dataset.autorun=\"true\";a.async=\"true\";a.src=\"\/\/cdn-magiclinks.trackonomics.net\/client\/static\/v2\/nymag_0oRbAZ02Kk_thestrategist.js\";document.head.appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__opt",
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":["macro",39],
      "vtp_gaSettings":["macro",85],
      "tag_id":114
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"^$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"dataLayer-initialized"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"javascript"
    },{
      "function":"_sw",
      "arg0":["macro",87],
      "arg1":"#"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"mailto"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"facebook|twitter|googleplus|pinterest|linkedin|reddit|instagram|tumblr|amazon|skimlinks|bam",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)6771955_10($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"ooyala"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"social-share-widget"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"amazon|skimlinks|(shop\\-links\\.co)"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)6771955_19($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"scroll-milestone"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"\/search-listings.html"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/search-listings.html"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"search-listings.html"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"articleImpressions"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"articleClick"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"productDetail"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"articleDetail"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"facebook|twitter|googleplus|pinterest|linkedin|reddit|instagram|tumblr",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",113],
      "arg1":"share-(link|button-link)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)6771955_35($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",116],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",117],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"advertising"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"productClick"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"productImpressions"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"componentImpressions"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"newsletter"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"universalCustomEvent"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"componentClick"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"eec.promotionClick"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"eec.promotionView"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"imageGalleryView"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"youtubeVideo"
    },{
      "function":"_re",
      "arg0":["macro",146],
      "arg1":"New York Magazine|Vulture"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)6771955_113($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"\/magazine\/subscribe\/"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)6771955_117($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"\/wes\/servlet\/Order"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"https:\/\/subs.nymag.com\/magazine"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"order_complete"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"blockmeasure"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)6771955_219($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"eec.purchase"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"eec.checkout"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"eec.detail"
    },{
      "function":"_eq",
      "arg0":["macro",158],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",160],
      "arg1":".*(image|button|recirc|price)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"nymag.com\/strategist"
    },{
      "function":"_sw",
      "arg0":["macro",86],
      "arg1":"http:\/\/www.grubstreet.com"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"www.vulture.com"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"www.thecut.com"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"nymag.com"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)6771955_196($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\/magazine\/subscribe\/official-subscription.html",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",171],
      "arg1":"coralXXXXXXX"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"\/XXXXXXXmagazine\/subscribe\/official-subscription.html"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"The Strategist"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"strategist\/article\/best-everlane-clothing-shoes.html"
    }],
  "rules":[
    [["if",1],["unless",0],["add",0]],
    [["if",1],["add",1,60]],
    [["if",5,7,8],["unless",2,3,4,6],["add",2]],
    [["if",9],["add",3]],
    [["if",10],["add",4]],
    [["if",7,11,12,13],["add",5]],
    [["if",14],["add",6]],
    [["if",19],["add",7]],
    [["if",20],["add",8]],
    [["if",21],["add",9]],
    [["if",22],["add",9,77,78]],
    [["if",5,7,23,25],["unless",2,3,4,24],["add",10]],
    [["if",26,27,28],["add",11]],
    [["if",29],["add",12]],
    [["if",30],["add",13,87]],
    [["if",31],["add",14]],
    [["if",32],["add",15]],
    [["if",33],["add",16]],
    [["if",34],["add",17]],
    [["if",35],["add",18]],
    [["if",36],["add",19]],
    [["if",37],["add",20]],
    [["if",38],["add",21,81]],
    [["if",39],["add",22]],
    [["if",40],["add",23]],
    [["if",41,42,43],["add",23]],
    [["if",44,45,46],["add",24,27,57,58,59]],
    [["if",15,47],["add",25,26,55,56]],
    [["if",15,48],["add",25,26,55,56,70]],
    [["if",49],["add",28]],
    [["if",50],["add",29]],
    [["if",45,51],["add",30]],
    [["if",52],["add",31,69]],
    [["if",53],["add",32,68,71,75,79,83,84,88]],
    [["if",54],["add",33,72,80,34]],
    [["if",55],["add",35,78]],
    [["if",15],["add",36,53,54,61,62,63,76,86,41,42,43,44,45,46,47,48,49,50,51,52],["block",6]],
    [["if",31,56],["add",37]],
    [["if",30,57],["add",38]],
    [["if",38,58],["add",39]],
    [["if",30,58],["add",40]],
    [["if",15,59],["add",64]],
    [["if",15,60],["add",65]],
    [["if",15,61],["add",66]],
    [["if",15,62],["add",67]],
    [["if",45,63],["add",68]],
    [["if",38,64],["add",73]],
    [["if",38,65],["add",74]],
    [["if",38,66],["add",82]],
    [["if",38,67],["add",85]],
    [["if",15,68],["add",89]],
    [["if",15,16,17,18],["block",6]]]
},
"runtime":[
[],[50,"__pntr",[46,"a"],[52,"b",["require","copyFromWindow"]],[52,"c",["require","createArgumentsQueue"]],[52,"d",["require","injectScript"]],[52,"e",["require","logToConsole"]],[52,"f",["require","makeTableMap"]],["e",[0,"Pinterest tagId: ",[17,[15,"a"],"tagId"]]],[52,"g",[28,["b","pintrk"]]],[52,"h",["c","pintrk","pintrk.queue"]],[22,[15,"g"],[46,[53,[52,"k",[8,"np","gtm"]],[22,[17,[15,"a"],"em"],[46,[43,[15,"k"],"em",[17,[15,"a"],"em"]]]],["h","load",[2,[17,[15,"a"],"tagId"],"toString",[7]],[15,"k"]],["h","page",[15,"k"]]]]],[52,"i",[51,"",[7],[22,[21,[17,[15,"a"],"eventName"],""],[46,["e",[0,"Firing Pinterest event: ",[17,[15,"a"],"eventName"]]]]],[41,"k"],[3,"k",[8]],[22,[17,[15,"a"],"setCustomParams"],[46,[3,"k",["f",[17,[15,"a"],"values"],"name","value"]]]],[43,[15,"k"],"np","gtm"],[52,"l",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[43,[15,"k"],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[52,"m",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[22,[20,[17,[15,"k"],"line_items"],[44]],[46,[43,[15,"k"],"line_items",[7,[8]]]]],[43,[16,[17,[15,"k"],"line_items"],0],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[38,[17,[15,"a"],"eventName"],[46,"pagevisit","watchvideo","viewcategory","custom","signup","lead","search","addtocart","checkout"],[46,[5,[46]],[5,[46]],[5,[46]],[5,[46,[4]]],[5,[46]],[5,[46,["l","lead_type"],[4]]],[5,[46,["l","search_query"],[4]]],[5,[46]],[5,[46,["l","order_id"],["l","order_quantity"],["l","value"],["l","currency"],["m","product_id"],["m","product_category"],[4]]],[9,[46,[4]]]]],[22,[21,[17,[15,"a"],"eventName"],""],[46,["h","track",[17,[15,"a"],"eventName"],[15,"k"]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]],[52,"j",[51,"",[7],["e","Pinterest Error: Loading JS failed!"],[2,[15,"a"],"gtmOnFailure",[7]]]],["d","https://s.pinimg.com/ct/core.js",[15,"i"],[15,"j"],"PinterestJS"]],
[]
]
,"permissions":{"__pntr":{"access_globals":{"keys":[{"key":"pintrk","read":true,"write":true,"execute":true},{"key":"pintrk.queue","read":true,"write":true,"execute":true}]},"logging":{"environments":"debug"},"inject_script":{"urls":["https:\/\/s.pinimg.com\/ct\/core.js"]}},
"null":0}


};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,ea=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ia=function(a,b){this.L=a;this.xg=b};ia.prototype.Lg=function(){return this.L};ia.prototype.getData=function(){return this.xg};ia.prototype.getData=ia.prototype.getData;ia.prototype.getType=ia.prototype.Lg;var ja=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ka=function(){this.H={};this.vb=!1;this.dd={}};ka.prototype.get=function(a){return this.H["dust."+a]};ka.prototype.set=function(a,b){this.vb||(a="dust."+a,this.dd.hasOwnProperty(a)||(this.H[a]=b))};ka.prototype.has=function(a){return this.H.hasOwnProperty("dust."+a)};var la=function(a){var b=[],c;for(c in a.H)a.H.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ka.prototype.remove=function(a){a="dust."+a;this.vb||this.dd.hasOwnProperty(a)||delete this.H[a]};ka.prototype.U=function(){this.vb=!0};var g=function(a){this.Za=new ka;this.i=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ja(b)?this.i[Number(b)]=a[Number(b)]:this.Za.set(b,a[b]))};aa=g.prototype;aa.toString=function(){for(var a=[],b=0;b<this.i.length;b++){var c=this.i[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};aa.set=function(a,b){if("length"==a){if(!ja(b))throw Error("RangeError: Length property must be a valid integer.");this.i.length=Number(b)}else ja(a)?this.i[Number(a)]=b:this.Za.set(a,b)};
aa.get=function(a){return"length"==a?this.length():ja(a)?this.i[Number(a)]:this.Za.get(a)};aa.length=function(){return this.i.length};aa.Aa=function(){for(var a=la(this.Za),b=0;b<this.i.length;b++)a.push(b+"");return new g(a)};aa.remove=function(a){ja(a)?delete this.i[Number(a)]:this.Za.remove(a)};aa.pop=function(){return this.i.pop()};aa.push=function(a){return this.i.push.apply(this.i,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.i.shift()};
aa.splice=function(a,b,c){return new g(this.i.splice.apply(this.i,arguments))};aa.unshift=function(a){return this.i.unshift.apply(this.i,Array.prototype.slice.call(arguments))};aa.has=function(a){return ja(a)&&this.i.hasOwnProperty(a)||this.Za.has(a)};g.prototype.unshift=g.prototype.unshift;g.prototype.splice=g.prototype.splice;g.prototype.shift=g.prototype.shift;g.prototype.push=g.prototype.push;g.prototype.pop=g.prototype.pop;g.prototype.remove=g.prototype.remove;g.prototype.getKeys=g.prototype.Aa;
g.prototype.get=g.prototype.get;g.prototype.set=g.prototype.set;var ma=function(){function a(f,h){if(b[f]){if(b[f].$b+h>b[f].max)throw Error("Quota exceeded");b[f].$b+=h}}var b={},c=void 0,d=void 0,e={hh:function(f){c=f},qe:function(){c&&a(c,1)},jh:function(f){d=f},za:function(f){d&&a(d,f)},Kh:function(f,h){b[f]=b[f]||{$b:0};b[f].max=h},Jg:function(f){return b[f]&&b[f].$b||0},reset:function(){b={}},og:a};e.onFnConsume=e.hh;e.consumeFn=e.qe;e.onStorageConsume=e.jh;e.consumeStorage=e.za;e.setMax=e.Kh;e.getConsumed=e.Jg;e.reset=e.reset;e.consume=e.og;return e};var na=function(a,b){this.ca=a;this.nc=function(c,d,e){return c.apply(d,e)};this.Da=b;this.i=new ka;this.ba=this.ic=void 0};na.prototype.add=function(a,b){oa(this,a,b,!1)};na.prototype.Sc=function(a,b){oa(this,a,b,!0)};var oa=function(a,b,c,d){if(!a.i.vb)if(a.ca.za(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.dd["dust."+b]=!0}else a.i.set(b,c)};
na.prototype.set=function(a,b){this.i.vb||(!this.i.has(a)&&this.Da&&this.Da.has(a)?this.Da.set(a,b):(this.ca.za(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};na.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.Da?this.Da.get(a):void 0};na.prototype.has=function(a){return!!this.i.has(a)||!(!this.Da||!this.Da.has(a))};var pa=function(a){var b=new na(a.ca,a);a.ic&&b.Ha(a.ic);b.ra(a.nc);b.ba=a.ba;return b};na.prototype.N=function(){return this.ca};
na.prototype.Ha=function(a){this.ic=a};na.prototype.ra=function(a){this.nc=a};na.prototype.U=function(){this.i.U()};na.prototype.has=na.prototype.has;na.prototype.get=na.prototype.get;na.prototype.set=na.prototype.set;na.prototype.addImmutable=na.prototype.Sc;na.prototype.add=na.prototype.add;var qa=function(){},ra=function(a){return"function"==typeof a},sa=function(a){return"string"==typeof a},ta=function(a){return"number"==typeof a&&!isNaN(a)},va=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},wa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},xa=function(a,b){if(a&&va(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ya=function(a,b){if(!ta(a)||
!ta(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Aa=function(a,b){for(var c=new za,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ba=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ca=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Da=function(a){return Math.round(Number(a))||0},Ea=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Fa=function(a){var b=[];if(va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ga=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ha=function(){return(new Date).getTime()},za=function(){this.prefix="gtm.";this.values={}};za.prototype.set=function(a,b){this.values[this.prefix+a]=b};za.prototype.get=function(a){return this.values[this.prefix+a]};za.prototype.contains=function(a){return void 0!==this.get(a)};
var Ia=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ja=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ka=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Na=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Oa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};var Pa=function(a,b){ka.call(this);this.Ne=a;this.Fg=b};ha(Pa,ka);var Ra=function(a,b){for(var c,d=0;d<b.length&&!(c=Qa(a,b[d]),c instanceof ia);d++);return c},Qa=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof Pa))throw Error("Attempting to execute non-function "+b[0]+".");return c.s.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.ic;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};Pa.prototype.toString=function(){return this.Ne};Pa.prototype.getName=function(){return this.Ne};
Pa.prototype.getName=Pa.prototype.getName;Pa.prototype.Aa=function(){return new g(la(this))};Pa.prototype.getKeys=Pa.prototype.Aa;Pa.prototype.s=function(a,b){var c=this;a.N().qe();return this.Fg.apply({evaluate:function(d){var e=a;return va(d)?Qa(e,d):d},Zc:function(d){return Ra(a,d)},getName:function(){return c.getName()},N:function(){return a.N()},h:function(){return a}},Array.prototype.slice.call(arguments,1))};Pa.prototype.invoke=Pa.prototype.s;
Pa.prototype.Fa=function(a,b){try{return this.s.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};Pa.prototype.safeInvoke=Pa.prototype.Fa;var Sa=function(){ka.call(this)};ha(Sa,ka);Sa.prototype.Aa=function(){return new g(la(this))};Sa.prototype.getKeys=Sa.prototype.Aa;var Ta=/^([a-z]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,Ua={Fn:"function",Map:"Object",List:"Array"},Va=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ta.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],h="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(h)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof Pa?n="Fn":l instanceof g?n="List":l instanceof Sa&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(Ua[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Wa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Xa=function(a){if(null==a)return String(a);var b=Wa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ya=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Za=function(a){if(!a||"object"!=Xa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ya(a,"constructor")&&!Ya(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ya(a,b)},u=function(a,b){var c=b||("array"==Xa(a)?[]:{}),d;for(d in a)if(Ya(a,d)){var e=a[d];"array"==Xa(e)?("array"!=Xa(c[d])&&(c[d]=[]),c[d]=u(e,c[d])):Za(e)?(Za(c[d])||(c[d]={}),c[d]=u(e,c[d])):c[d]=e}return c};var ab=function(a,b){var c=[],d=[],e=function(h,k){for(var l=la(h),m=0;m<l.length;m++)k[l[m]]=f(h.get(l[m]))},f=function(h){var k=wa(c,h);if(-1<k)return d[k];if(h instanceof g){var l=[];c.push(h);d.push(l);for(var m=h.Aa(),n=0;n<m.length();n++)l[m.get(n)]=f(h.get(m.get(n)));return l}if(h instanceof Sa){var p={};c.push(h);d.push(p);e(h,p);return p}if(h instanceof Pa){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),r=0;r<q.length;r++)q[r]=$a(q[r],b);var v=b?b.N():ma(),w=new na(v);
b&&(w.ba=b.ba);return f(h.s.apply(h,[w].concat(q)))};c.push(h);d.push(t);e(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return f(a)},$a=function(a,b){var c=[],d=[],e=function(h,k){for(var l in h)h.hasOwnProperty(l)&&k.set(l,f(h[l]))},f=function(h){var k=wa(c,h);if(-1<k)return d[k];if(va(h)||Ca(h)){var l=new g([]);c.push(h);d.push(l);for(var m in h)h.hasOwnProperty(m)&&l.set(m,f(h[m]));return l}if(Za(h)){var n=
new Sa;c.push(h);d.push(n);e(h,n);return n}if("function"===typeof h){var p=new Pa("",function(q){for(var r=Array.prototype.slice.call(arguments,0),v=0;v<r.length;v++)r[v]=ab(this.evaluate(r[v]),b);return f((0,this.h().nc)(h,h,r))});c.push(h);d.push(p);e(h,p);return p}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h};return f(a)};var bb={control:function(a,b){return new ia(a,this.evaluate(b))},fn:function(a,b,c){var d=this.h(),e=this.evaluate(b);if(!(e instanceof g))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.N().za(a.length+f.length);return new Pa(a,function(){return function(h){var k=pa(d);void 0===k.ba&&(k.ba=this.h().ba);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.evaluate(l[m]),l[m]instanceof ia)return l[m];
for(var n=e.get("length"),p=0;p<n;p++)p<l.length?k.set(e.get(p),l[p]):k.set(e.get(p),void 0);k.set("arguments",new g(l));var t=Ra(k,f);if(t instanceof ia)return"return"===t.L?t.getData():t}}())},list:function(a){var b=this.N();b.za(arguments.length);for(var c=new g,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.za(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.N(),c=new Sa,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+
"",f=this.evaluate(arguments[d+1]),h=e.length;h+="string"===typeof f?f.length:1;b.za(h);c.set(e,f)}return c},undefined:function(){}};function cb(a,b){var c=Qa(a,b);if(c instanceof ia||c instanceof Pa||c instanceof g||c instanceof Sa||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var db=function(){this.ca=ma();this.Ba=new na(this.ca)};aa=db.prototype;aa.ya=function(a,b){var c=new Pa(a,b);c.U();this.Ba.set(a,c)};aa.ne=function(a,b){bb.hasOwnProperty(a)&&this.ya(b||a,bb[a])};aa.N=function(){return this.ca};aa.uc=function(){this.ca=ma();this.Ba.ca=this.ca};aa.Ha=function(a){this.Ba.Ha(a)};
aa.ra=function(a){this.Ba.ra(a)};aa.Va=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.xd(c)};aa.xd=function(a){for(var b,c=0;c<arguments.length;c++)b=cb(this.Ba,arguments[c]);return b};aa.vc=function(a,b){var c=pa(this.Ba);c.ba=a;for(var d,e=1;e<arguments.length;e++)d=cb(c,arguments[e]);return d};aa.U=function(){this.Ba.U()};db.prototype.makeImmutable=db.prototype.U;db.prototype.run=db.prototype.xd;db.prototype.execute=db.prototype.Va;db.prototype.setJavaScriptProxy=db.prototype.ra;
db.prototype.resetQuota=db.prototype.uc;db.prototype.getQuota=db.prototype.N;db.prototype.addNativeInstruction=db.prototype.ne;db.prototype.addInstruction=db.prototype.ya;var eb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ib={Nh:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof g)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new g(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.s(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.s(a,this.get(e),e,this)&&d.push(this.get(e));return new g(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.s(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.s(a,this.get(e),e,this));return new g(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");var h;for(h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.s(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
var h;for(h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.s(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=eb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?
d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new g(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.s(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=eb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.s(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var jb={ADD:0,AND:1,APPLY:2,ASSIGN:3,BITWISE_AND:56,BITWISE_LEFT_SHIFT:57,BITWISE_NOT:58,BITWISE_OR:59,BITWISE_RIGHT_SHIFT:60,BITWISE_UNSIGNED_RIGHT_SHIFT:61,BITWISE_XOR:62,BLOCK:53,BREAK:4,CASE:5,CONST:52,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,FOR_IN_CONST:54,FOR_IN_LET:55,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,
IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42},kb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),lb=new ia("break"),mb=new ia("continue"),
nb=function(a,b){return this.evaluate(a)+this.evaluate(b)},ob=function(a,b){return this.evaluate(a)&&this.evaluate(b)},pb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof g))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");
}if("string"==typeof a){if(0<=wa(kb,b))return $a(a[b].apply(a,eb(c)),this.h());throw Error("TypeError: "+b+" is not a function");}if(a instanceof g){if(a.has(b)){var d=a.get(b);if(d instanceof Pa){var e=eb(c);e.unshift(this.h());return d.s.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=wa(ib.Nh,b)){var f=eb(c);f.unshift(this.h());return ib[b].apply(a,f)}}if(a instanceof Pa||a instanceof Sa){if(a.has(b)){var h=a.get(b);if(h instanceof Pa){var k=eb(c);k.unshift(this.h());return h.s.apply(h,
k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof Pa?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,eb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},qb=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.h();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d},rb=function(a){var b=pa(this.h()),
c=Ra(b,Array.prototype.slice.apply(arguments));if(c instanceof ia)return c},sb=function(){return lb},tb=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof ia)return d}},ub=function(a){for(var b=this.h(),c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.evaluate(arguments[c+1]);b.Sc(d,e)}}},wb=function(){return mb},xb=function(a,b,c){var d=new g;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[jb.FN,
a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.h().set(a,this.evaluate(f))},yb=function(a,b){return this.evaluate(a)/this.evaluate(b)},zb=function(a,b){return this.evaluate(a)==this.evaluate(b)},Ab=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
function Bb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=Ra(e,c);if(f instanceof ia){if("break"==f.L)break;if("return"==f.L)return f}}else if(b instanceof Sa||b instanceof g||b instanceof Pa)for(var h=b.Aa(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=Ra(m,c);if(n instanceof ia){if("break"==n.L)break;if("return"==n.L)return n}}}
var Cb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Bb(function(e){d.set(a,e);return d},b,c)},Db=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Bb(function(e){var f=pa(d);f.Sc(a,e);return f},b,c)},Fb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Bb(function(e){var f=pa(d);f.add(a,e);return f},b,c)},Gb=function(a){return this.h().get(this.evaluate(a))},
Hb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof Sa||a instanceof g||a instanceof Pa?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ja(b)&&(c=a[b]));return c},Ib=function(a,b){return this.evaluate(a)>this.evaluate(b)},Jb=function(a,b){return this.evaluate(a)>=this.evaluate(b)},Kb=function(a,b){return this.evaluate(a)===this.evaluate(b)},Lb=function(a,b){return this.evaluate(a)!==this.evaluate(b)},
Mb=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.Zc(d);if(e instanceof ia)return e},Nb=function(a,b){return this.evaluate(a)<this.evaluate(b)},Ob=function(a,b){return this.evaluate(a)<=this.evaluate(b)},Pb=function(a,b){return this.evaluate(a)%this.evaluate(b)},Qb=function(a,b){return this.evaluate(a)*this.evaluate(b)},Rb=function(a){return-this.evaluate(a)},Sb=function(a){return!this.evaluate(a)},Tb=function(a,b){return this.evaluate(a)!=this.evaluate(b)},
Ub=function(){return null},Vb=function(a,b){return this.evaluate(a)||this.evaluate(b)},Wb=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c},Xb=function(a){return this.evaluate(a)},Yb=function(a){return Array.prototype.slice.apply(arguments)},Zb=function(a){return new ia("return",this.evaluate(a))},$b=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof Pa||a instanceof
g||a instanceof Sa)&&a.set(b,c);return c},ac=function(a,b){return this.evaluate(a)-this.evaluate(b)},bc=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!va(b)||!va(c))throw Error("Error: Malformed switch instruction.");for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof ia){var h=d.L;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof
ia&&("return"==d.L||"continue"==d.L)))return d},cc=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)},dc=function(a){a=this.evaluate(a);return a instanceof Pa?"function":typeof a},ec=function(a){for(var b=this.h(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},fc=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.Zc(f),e instanceof ia)){if("break"==e.L)return;if("return"==e.L)return e}for(;this.evaluate(a);){e=this.Zc(f);
if(e instanceof ia){if("break"==e.L)break;if("return"==e.L)return e}this.evaluate(b)}},gc=function(a){return~Number(this.evaluate(a))},hc=function(a,b){return Number(this.evaluate(a))<<Number(this.evaluate(b))},ic=function(a,b){return Number(this.evaluate(a))>>Number(this.evaluate(b))},jc=function(a,b){return Number(this.evaluate(a))>>>Number(this.evaluate(b))},lc=function(a,b){return Number(this.evaluate(a))&Number(this.evaluate(b))},mc=function(a,b){return Number(this.evaluate(a))^Number(this.evaluate(b))},
nc=function(a,b){return Number(this.evaluate(a))|Number(this.evaluate(b))};var pc=function(){this.He=!1;this.Z=new db;oc(this);this.He=!0};pc.prototype.Zg=function(){return this.He};pc.prototype.isInitialized=pc.prototype.Zg;pc.prototype.Va=function(a){return this.Z.xd(a)};pc.prototype.execute=pc.prototype.Va;pc.prototype.vc=function(a,b){return this.Z.vc(a,b)};pc.prototype.runProgram=pc.prototype.vc;pc.prototype.U=function(){this.Z.U()};pc.prototype.makeImmutable=pc.prototype.U;
var oc=function(a){function b(f,h){e.Z.ne(f,String(h))}function c(f,h){e.Z.ya(String(d[f]),h)}var d=jb,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",nb);c("AND",ob);c("APPLY",pb);c("ASSIGN",qb);c("BLOCK",rb);c("BREAK",sb);c("CASE",tb);c("CONST",ub);c("CONTINUE",wb);c("DEFAULT",tb);c("DEFN",xb);c("DIVIDE",yb);c("EQUALS",zb);c("EXPRESSION_LIST",Ab);c("FOR_IN",Cb);c("FOR_IN_CONST",Db);c("FOR_IN_LET",Fb);c("GET",Gb);c("GET_INDEX",
Hb);c("GET_PROPERTY",Hb);c("GREATER_THAN",Ib);c("GREATER_THAN_EQUALS",Jb);c("IDENTITY_EQUALS",Kb);c("IDENTITY_NOT_EQUALS",Lb);c("IF",Mb);c("LESS_THAN",Nb);c("LESS_THAN_EQUALS",Ob);c("MODULUS",Pb);c("MULTIPLY",Qb);c("NEGATE",Rb);c("NOT",Sb);c("NOT_EQUALS",Tb);c("NULL",Ub);c("OR",Vb);c("POST_DECREMENT",Wb);c("POST_INCREMENT",Wb);c("PRE_DECREMENT",Xb);c("PRE_INCREMENT",Xb);c("QUOTE",Yb);c("RETURN",Zb);c("SET_PROPERTY",$b);c("SUBTRACT",ac);c("SWITCH",bc);c("TERNARY",cc);c("TYPEOF",dc);c("VAR",ec);c("WHILE",
fc);c("BITWISE_NOT",gc);c("BITWISE_LEFT_SHIFT",hc);c("BITWISE_RIGHT_SHIFT",ic);c("BITWISE_UNSIGNED_RIGHT_SHIFT",jc);c("BITWISE_AND",lc);c("BITWISE_XOR",mc);c("BITWISE_OR",nc)};pc.prototype.ya=function(a,b){this.Z.ya(a,b)};pc.prototype.addInstruction=pc.prototype.ya;pc.prototype.N=function(){return this.Z.N()};pc.prototype.getQuota=pc.prototype.N;pc.prototype.uc=function(){this.Z.uc()};pc.prototype.resetQuota=pc.prototype.uc;pc.prototype.Ha=function(a){this.Z.Ha(a)};pc.prototype.ra=function(a){this.Z.ra(a)};
pc.prototype.setJavaScriptProxy=pc.prototype.ra;var C=window,D=document,qc=navigator,rc=D.currentScript&&D.currentScript.src,sc=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},tc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},uc=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;tc(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var f=ba.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},vc=function(){if(rc){var a=rc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},wc=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);tc(c,b);void 0!==a&&(c.src=a);return c},xc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},yc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},zc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},F=function(a){C.setTimeout(a,0)},Ac=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Bc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Cc=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Dc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Ec=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Fc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Gc={},Hc=function(a,b){Gc[a]=Gc[a]||[];Gc[a][b]=!0},Ic=function(a){for(var b=[],c=Gc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Jc=/:[0-9]+$/,Kc=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Nc=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Lc(a.protocol)||Lc(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||C.location.hostname).replace(Jc,"").toLowerCase());return Mc(a,b,c,d,e)},Mc=function(a,b,c,d,e){var f,h=Lc(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Oc(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Jc,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||Hc("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=wa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Kc(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Lc=function(a){return a?a.replace(":",
"").toLowerCase():""},Oc=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Pc=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Hc("TAGGING",1),c="/"+c);var d=b.hostname.replace(Jc,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Qc=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Tc=function(a,b,c,d){var e=Rc(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Sc(e,function(f){return f.fc},b);if(1===e.length)return e[0].id;e=Sc(e,function(f){return f.yb},c);return e[0]?e[0].id:void 0}};
function Uc(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Qc(b,e).indexOf(c)}
var Yc=function(a,b,c,d,e){var f;if(void 0==b)f=a+"=deleted; expires="+(new Date(0)).toUTCString();else{d&&(b=encodeURIComponent(b));var h=b;h&&1200<h.length&&(h=h.substring(0,1200));b=h;f=a+"="+b}var k=void 0,l=void 0,m;for(m in c)if(c.hasOwnProperty(m)){var n=c[m];if(null!=n)switch(m){case "secure":n&&(f+="; secure");break;case "domain":k=n;break;default:"path"==m&&(l=n),"expires"==m&&n instanceof Date&&(n=n.toUTCString()),f+="; "+m+"="+n}}if("auto"===k){for(var p=Wc(),t=void 0,q=0,r=0;r<p.length;++r){var v=
"none"!=p[r]?p[r]:void 0;if(e){c.domain=v;try{e(a,c)}catch(w){t=w;continue}}q+=1;if(!Xc(v,l)&&Uc(f+(v?"; domain="+v:""),a,b))return!0}if(t&&!q)throw t;return!1}e&&e(a,c);k&&"none"!=k&&(f+="; domain="+k);return!Xc(k,l)&&Uc(f,a,b)},Zc=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);return Yc(a,b,h,f)};
function Sc(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Rc(a,b){for(var c=[],d=Qc(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),fc:1*k[0]||1,yb:1*k[1]||1}))}}return c}
var $c=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ad=/(^|\.)doubleclick\.net$/i,Xc=function(a,b){return ad.test(document.location.hostname)||"/"===b&&$c.test(a)},Wc=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};var bd=function(a,b,c){var d=a.h().ba;if(!d)throw Error("invalid program state");d.ag.apply(null,Array.prototype.slice.call(arguments,1))},cd=function(a,b){Va(this.getName(),["path:!string"],[a]);bd(this,"access_globals","execute",a);for(var c=a.split("."),d=C,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"===Xa(e)){for(var h=[],k=1;k<arguments.length;k++)h.push(ab(arguments[k],this.h()));return $a((0,this.h().nc)(e,d,h),this.h())}},dd=function(a){Va(this.getName(),["fn:!Fn"],arguments);
var b=this.h();F(function(){a instanceof Pa&&a.Fa(b)})},ed=function(a){Va(this.getName(),["path:!string"],arguments);bd(this,"access_globals","read",a);var b=a.split("."),c=C,d;for(d=0;d<b.length-1;d++)if(c=c[b[d]],null==c)return;return $a(c[b[d]],this.h())},fd=function(a,b){b=void 0===b?!0:b;Va(this.getName(),["name:!string","decode:?boolean"],arguments);bd(this,"get_cookies",a);return $a(Qc(a,void 0,!!b),this.h())},gd=function(a){Va(this.getName(),["component:?string"],arguments);bd(this,"get_referrer",
a);return Mc(Pc(C.document.referrer),a)},hd=function(a){Va(this.getName(),["component:?string"],arguments);bd(this,"get_url",a);return Nc(Pc(C.location.href),a)},jd=function(a,b){Va(this.getName(),["queryKey:!string","retrieveAll:?boolean"],arguments);bd(this,"get_url","query",a);return id(this.h(),C.location.href,a,b)},kd=function(a,b){Va(this.getName(),["queryKey:!string","retrieveAll:?boolean"],arguments);bd(this,"get_referrer","query",a);return id(this.h(),C.document.referrer,a,b)};
function id(a,b,c,d){var e=Nc(Pc(b),"query"),f=Kc(e,c,d);return $a(f,a)}
var ld=function(a,b){Va(this.getName(),["url:!string","onSuccess:?Fn"],arguments);bd(this,"inject_hidden_iframe",a);var c=this.h();wc(a,function(){b instanceof Pa&&b.Fa(c)})},md={},nd=function(a,b,c,d){Va(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);bd(this,"inject_script",a);var e=this.h(),f=function(){b instanceof Pa&&b.Fa(e)},h=function(){c instanceof Pa&&c.Fa(e)};if(d){var k=d;md[k]?(md[k].onSuccess.push(f),md[k].onFailure.push(h)):(md[k]={onSuccess:[f],
onFailure:[h]},f=function(){for(var l=md[k].onSuccess,m=0;m<l.length;m++)F(l[m]);l.push=function(n){F(n);return 0}},h=function(){for(var l=md[k].onFailure,m=0;m<l.length;m++)F(l[m]);md[k]=null},uc(a,f,h))}else uc(a,f,h)},od=function(){try{bd(this,"logging")}catch(c){return}if(console){for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=ab(a[b],this.h());console.log.apply(console,a)}},pd=function(a,b,c){Va(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);
bd(this,"send_pixel",a);var d=this.h();xc(a,function(){b instanceof Pa&&b.Fa(d)},function(){c instanceof Pa&&c.Fa(d)})},qd=function(a,b,c,d){var e=this;d=void 0===d?!0:d;Va(this.getName(),["name:!string","value:?string","options:?Map","encode:?boolean"],arguments);var f=c?ab(c,this.h()):void 0;return Yc(a,b,f,!!d,function(h,k){return bd(e,"set_cookies",h,k)})},rd=function(a,b,c){Va(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);bd(this,"access_globals","readwrite",
a);var d=a.split("."),e=C,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=ab(b,this.h()),!0):!1},td=function(a){Va(this.getName(),["path:!string"],arguments);bd(this,"access_globals","readwrite",a);var b=a.split("."),c=sd(b),d=b[b.length-1];if(void 0===c)throw Error("Path "+a+" does not exist.");var e=c[d];void 0===e&&(e=[],c[d]=e);return $a(function(){if(!ra(e.push))throw Error("Object at "+a+" in window is not an array.");e.push.apply(e,Array.prototype.slice.call(arguments,
0))},this.h())},ud=function(a,b){Va(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);bd(this,"access_globals","readwrite",a);bd(this,"access_globals","readwrite",b);var c=a.split("."),d=sd(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];if(f&&!ra(f))return null;if(f)return $a(f,this.h());var h;f=function(){if(!ra(h.push))throw Error("Object at "+b+" in window is not an array.");h.push.call(h,arguments)};d[e]=f;var k=b.split("."),l=sd(k),
m=k[k.length-1];if(void 0===l)throw Error("Path "+k+" does not exist.");h=l[m];void 0===h&&(h=[],l[m]=h);return $a(function(){f.apply(f,Array.prototype.slice.call(arguments,0))},this.h())},vd=function(a,b){Va(this.getName(),["toPath:!string","fromPath:!string"],arguments);bd(this,"access_globals","write",a);bd(this,"access_globals","read",b);var c=a.split("."),d=b.split("."),e=sd(c),f=sd(d);if(void 0===e||void 0===f)return!1;e[c[c.length-1]]=f[d[d.length-1]];return!0};
function sd(a){for(var b=C,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b}var wd=function(a,b){Va(this.getName(),["permission:!string"],[a]);for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;++d)c[d]=ab(c[d],this.h());c.unshift(this);try{return bd.apply(null,c),!0}catch(e){return!1}};
var xd=[],yd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},zd=function(a){return yd[a]},Ad=/[\x00\x22\x26\x27\x3c\x3e]/g;xd[3]=function(a){return String(a).replace(Ad,zd)};var Ed=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Fd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Gd=function(a){return Fd[a]};xd[7]=function(a){return String(a).replace(Ed,Gd)};
xd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ed,Gd)+"'"}};var Md=/['()]/g,Nd=function(a){return"%"+a.charCodeAt(0).toString(16)};xd[12]=function(a){var b=
encodeURIComponent(String(a));Md.lastIndex=0;return Md.test(b)?b.replace(Md,Nd):b};var Od=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Pd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Qd=function(a){return Pd[a]};xd[16]=function(a){return a};var Sd,Td=[],Ud=[],Vd=[],Wd=[],Xd=[],Yd={},Zd,$d,ae,be=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ce=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Yd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[d?f:f.substr(4)]=a[f]);return d?Yd[c](e):Sd(c,e,b)},ee=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=de(a[e],b,c));return d},
fe=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Yd[b];return c?c.priorityOverride||0:0},de=function(a,b,c){if(va(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(de(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Td[f];if(!h||b.fd(h))return;c[f]=!0;try{var k=ee(h,b,c);k.vtp_gtmEventId=b.id;d=ce(k,b);ae&&(d=ae.qg(d,k))}catch(w){b.Le&&b.Le(w,Number(f)),d=!1}c[f]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[de(a[l],b,c)]=de(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=de(a[n],b,c);$d&&(m=m||p===$d.Rb);d.push(p)}return $d&&m?$d.ug(d):d.join("");case "escape":d=de(a[1],b,c);if($d&&va(a[1])&&"macro"===a[1][0]&&$d.$g(a))return $d.rh(d);d=String(d);for(var t=2;t<a.length;t++)xd[a[t]]&&(d=xd[a[t]](d));return d;case "tag":var q=a[1];if(!Wd[q])throw Error("Unable to resolve tag reference "+q+".");return d={we:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=ge(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ge=function(a,b,c){try{return Zd(ee(a,b,c))}catch(d){JSON.stringify(a)}return null};var he=function(){var a=function(b){return{toString:function(){return b}}};return{Jd:a("convert_case_to"),Kd:a("convert_false_to"),Ld:a("convert_null_to"),Md:a("convert_true_to"),Nd:a("convert_undefined_to"),ai:a("debug_mode_metadata"),xa:a("function"),Gf:a("instance_name"),Hf:a("live_only"),If:a("malware_disabled"),Jf:a("metadata"),ci:a("original_vendor_template_id"),Kf:a("once_per_event"),fe:a("once_per_load"),he:a("setup_tags"),ie:a("tag_id"),je:a("teardown_tags")}}();var ie=function(a,b,c){this.ph=a;this.mh=b;this.fh=c};ha(ie,Error);ie.prototype.getParameters=function(){return this.mh};var je=function(a,b){if(va(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)je(a[c],b[c])}};var le=function(){return function(a,b){a instanceof ke||(a=new ke(a));b&&a.te.push(b);throw a;}},ke=function(a){this.kh=a;this.te=[]};ha(ke,Error);var me=null,pe=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];me=ne(a);for(var e=0;e<Ud.length;e++){var f=Ud[e],h=oe(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<Wd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},oe=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=me(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],f=0;f<e.length;f++){var h=me(e[f]);if(null===h)return null;
if(h)return!1}return!0},ne=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ge(Vd[c],a));return b[c]}};function qe(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new ie(c,{},h);}}var te=function(a){var b=re,c=se.o;return function(){var d=arguments[0];if(d){var e=b.zb[d],f=b.zb.all;if(e||f){var h=a.apply(void 0,Array.prototype.slice.call(arguments,0));qe(e,c,d,h);qe(f,c,d,h)}}}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ue,ve=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.bg&&(l["fix_"+m]=!0),l.xe=l.xe||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,M:q.M,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,x,y,z){var B=x||y||z||f.test(w)&&w||null,A=document.createElement("div");A.innerHTML=B;r[w]=A.textContent||A.innerText||B});return{tagName:q[1],M:r,Eb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.xe&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Ke=function(){return this[this.length-1]};v.kd=function(A){var E=this.Ke();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.pg=
function(A){for(var E=0,G;G=this[E];E++)if(G.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.Eb=q.test(A.tagName)||A.Eb);return A},x=t,y=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.kd("TABLE")?(k="<TBODY>"+k,B()):l.ki&&r.test(E)&&v.pg(E)?v.kd(E)?y():(k="</"+A.tagName+">"+k,B()):A.Eb||v.push(A)},endTag:function(A){v.Ke()?l.Eg&&!v.kd(A.tagName)?y():v.pop():l.Eg&&(x(),B())}},B=function(){var A=k,E=w(x());k=A;if(E&&
z[E.type])z[E.type](E)};t=function(){B();return w(x())}}();return{append:function(q){k+=q},Ah:t,si:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},ui:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Ai="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.wi=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Bi=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.M){var t=m.M[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Eb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.ji=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.gg=a.gg||!b[h]&&h;ue=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function f(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Rf:a,Sf:a,Tf:a,Uf:a,cg:a,dg:function(p){return p},done:a,error:function(p){throw p;},Eh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var x=q.getAttribute(w);return b(x)?String(x):x}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,Fb:v.defaultView||v.parentWindow,Ta:v,qc:ue("",{bg:!0}),Rc:[q],td:"",ud:v.createElement(q.nodeName),Cb:[],Ja:[]});p(this.ud,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ja,arguments);for(var q;!this.cc&&this.Ja.length;)q=this.Ja.shift(),"function"===typeof q?this.kg(q):this.Fd(q)};t.prototype.kg=function(q){var r={type:"function",value:q.name||q.toString()};this.qd(r);q.call(this.Fb,this.Ta);this.Pe(r)};
t.prototype.Fd=function(q){this.qc.append(q);for(var r,v=[],w,x;(r=this.qc.Ah())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(x=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.Zh(v);w&&this.Ng(r);x&&this.Og(r)};t.prototype.Zh=function(q){var r=this.hg(q);r.me&&(r.cd=this.td+r.me,this.td+=r.wh,this.ud.innerHTML=r.cd,this.Xh())};t.prototype.hg=function(q){var r=this.Rc.length,v=[],w=[],x=[];c(q,function(y){v.push(y.text);if(y.M){if(!/^noscript$/i.test(y.tagName)){var z=
r++;w.push(y.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==y.M.id&&"ps-style"!==y.M.id&&x.push("atomicTag"===y.type?"":"<"+y.tagName+" data-ps-proxyof="+z+(y.Eb?" />":">"))}}else w.push(y.text),x.push("endTag"===y.type?y.text:"")});return{Ci:q,raw:v.join(""),me:w.join(""),wh:x.join("")}};t.prototype.Xh=function(){for(var q,r=[this.ud];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.Rc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.Rc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Ng=function(q){var r=this.qc.clear();r&&this.Ja.unshift(r);q.src=q.M.src||q.M.di;q.src&&this.Cb.length?this.cc=q:this.qd(q);var v=this;this.Yh(q,function(){v.Pe(q)})};t.prototype.Og=function(q){var r=this.qc.clear();r&&this.Ja.unshift(r);q.type=q.M.type||q.M.ei||"text/css";this.$h(q);r&&this.write()};t.prototype.$h=function(q){var r=this.jg(q);this.Xg(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Ta.createTextNode(q.content)))};t.prototype.jg=function(q){var r=this.Ta.createElement(q.tagName);r.setAttribute("type",q.type);d(q.M,function(v,w){r.setAttribute(v,w)});return r};t.prototype.Xg=function(q){this.Fd('<span id="ps-style"/>');var r=this.Ta.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.qd=function(q){q.lh=this.Ja;this.Ja=[];this.Cb.unshift(q)};t.prototype.Pe=function(q){q!==this.Cb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Cb.shift(),this.write.apply(this,q.lh),!this.Cb.length&&this.cc&&(this.qd(this.cc),this.cc=null))};t.prototype.Yh=function(q,r){var v=this.ig(q),w=this.Lh(v),x=this.options.Rf;q.src&&(v.src=q.src,this.Ih(v,w?x:function(){r();x()}));try{this.Wg(v),q.src&&!w||r()}catch(y){this.options.error(y),r()}};t.prototype.ig=function(q){var r=this.Ta.createElement(q.tagName);d(q.M,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.Wg=function(q){this.Fd('<span id="ps-script"/>');
var r=this.Ta.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.Ih=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var x={message:"remote script failed "+q.src};v();w(x);r()}})};t.prototype.Lh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Eh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var w=r.shift(),x;w&&(x=w[w.length-1],x.Sf(),w.stream=t.apply(null,w),x.Tf())}function t(w,x,y){function z(G){G=y.dg(G);v.write(G);y.Uf(G)}v=new n(w,y);v.id=q++;v.name=y.name||v.id;var B=w.ownerDocument,A={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.Fb.onerror||a;v.Fb.onerror=function(G,I,S){y.error({ni:G+
" - "+I+":"+S});E.apply(v.Fb,arguments)};v.write(x,function(){e(B,A);v.Fb.onerror=E;y.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(w,x,y){"function"===typeof y&&(y={done:y});y=f(y,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.li?w[0]:w;var z=[w,x,y];w.qh={cancel:function(){z.stream?z.stream.abort():z[1]=a}};y.cg(z);r.push(z);v||p();return w.qh},{streams:{},ri:r,fi:n})}();ve=l.postscribe}})();var we=function(a){Va(this.getName(),["uri:!string"],arguments);try{return decodeURI(a)}catch(b){}};var xe=function(a){Va(this.getName(),["uri:!string"],arguments);try{return decodeURIComponent(a)}catch(b){}};var ye=function(a){Va(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var ze=function(a){Va(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var Ae=function(a,b){Va(this.getName(),["min:!number","max:!number"],arguments);return ya(a,b)};var Be=function(){return(new Date).getTime()};var Ce=function(a){return null===a?"null":a instanceof g?"array":a instanceof Pa?"function":typeof a};var De=function(a){return Da(ab(a,this.h()))};var Ee=function(a){return Number(ab(a,this.h()))};var Fe=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ge=function(a,b,c){Va(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);for(var d=new Sa,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof Sa&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null};function He(){var a=Math[Ie].bind(Math);return function(){for(var b=[],c=this.h(),d=0;d<arguments.length;++d)b.push(ab(arguments[d],c));return a.apply(null,b)}}for(var Je="floor ceil round max min abs pow sqrt".split(" "),Ke={},Le=0;Le<Je.length;Le++){var Ie=Je[Le];Math.hasOwnProperty(Ie)&&(Ke[Ie]=He())};var Me=function(){this.sc={}};Me.prototype.get=function(a){return this.sc.hasOwnProperty(a)?this.sc[a]:void 0};Me.prototype.add=function(a,b){if(this.sc.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(!b)throw"Attempting to add an undefined implementation: "+a+".";var c=this.sc,d;if(ra(b))d=Ne(a,b);else{var e=new Sa,f;for(f in b)if(b.hasOwnProperty(f)){var h=b[f];ra(h)?e.set(f,Ne(a+"_"+f,h)):(ta(h)||sa(h)||"boolean"==typeof h)&&e.set(f,h)}e.U();d=e}c[a]=d};
Me.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var Ne=function(a,b){var c=new Pa(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.evaluate(d[e]);return b.apply(this,d)});c.U();return c};var H={Gc:"event_callback",hb:"event_timeout",fa:"gtag.config",V:"allow_ad_personalization_signals",X:"cookie_expires",gb:"cookie_update",Oa:"session_duration"};var af=/[A-Z]+/,bf=/\s/,cf=function(a){if(sa(a)&&(a=Ga(a),!bf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(af.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],T:d}}}}},ef=function(a){for(var b={},c=0;c<a.length;++c){var d=cf(a[c]);d&&(b[d.id]=d)}df(b);var e=[];Ba(b,function(f,h){e.push(h)});return e};
function df(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.T[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var se={},ff=null,gf=Math.random();se.o="GTM-NL7LR9Z";se.Vb="8l2";var hf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},jf="www.googletagmanager.com/gtm.js";var kf=jf,lf=null,mf=null,nf=null,of="//www.googletagmanager.com/a?id="+se.o+"&cv=153",pf={},qf={},rf=function(){var a=ff.sequence||0;ff.sequence=a+1;return a};
var sf=function(){return"&tc="+Wd.filter(function(a){return a}).length},Cf=function(){tf&&(C.clearTimeout(tf),tf=void 0);void 0===uf||vf[uf]&&!wf||(xf[uf]||yf.bh()||0>=zf--?(Hc("GTM",1),xf[uf]=!0):(yf.Ch(),xc(Bf()),vf[uf]=!0,wf=""))},Bf=function(){var a=uf;if(void 0===a)return"";var b=Ic("GTM"),c=Ic("TAGGING");return[Df,vf[a]?"":"&es=1",Ef[a],b?"&u="+b:"",c?"&ut="+c:"",sf(),wf,"&z=0"].join("")},Ff=function(){return[of,"&v=3&t=t","&pid="+ya(),"&rv="+se.Vb].join("")},Gf="0.005000">
Math.random(),Df=Ff(),Hf=function(){Df=Ff()},vf={},wf="",uf=void 0,Ef={},xf={},tf=void 0,yf=function(a,b){var c=0,d=0;return{bh:function(){if(c<a)return!1;Ha()-d>=b&&(c=0);return c>=a},Ch:function(){Ha()-d>=b&&(c=0);c++;d=Ha()}}}(2,1E3),zf=1E3,If=function(a,b){if(Gf&&!xf[a]&&uf!==a){Cf();uf=a;wf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Ef[a]="&e="+c+"&eid="+a;tf||(tf=C.setTimeout(Cf,500))}},Jf=function(a,b,c){if(Gf&&!xf[a]&&b){a!==uf&&(Cf(),uf=a);var d=String(b[he.xa]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;wf=wf?wf+"."+e:"&tr="+e;tf||(tf=C.setTimeout(Cf,500));2022<=Bf().length&&Cf()}};var Kf={},Lf=new za,Mf={},Nf={},Rf={name:"dataLayer",set:function(a,b){u(Of(a,b),Mf);Pf()},get:function(a){return Qf(a,2)},reset:function(){Lf=new za;Mf={};Pf()}},Qf=function(a,b){if(2!=b){var c=Lf.get(a);if(Gf){var d=Sf(a);c!==d&&Hc("GTM",5)}return c}return Sf(a)},Sf=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Uf(d)},Uf=function(a){for(var b=Mf,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Xf=function(a,b){Nf.hasOwnProperty(a)||(Lf.set(a,b),u(Of(a,b),Mf),Pf())},Of=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Pf=function(a){Ba(Nf,function(b,c){Lf.set(b,c);u(Of(b,void 0),Mf);u(Of(b,c),Mf);a&&delete Nf[b]})},Yf=function(a,b,c){Kf[a]=Kf[a]||{};var d=1!==c?Sf(b):Lf.get(b);"array"===Xa(d)||"object"===Xa(d)?Kf[a][b]=u(d):Kf[a][b]=d},Zf=function(a,b){if(Kf[a])return Kf[a][b]};var $f=function(){var a=!1;return a};var L=function(a,b,c,d){return(2===ag()||d||"http:"!=C.location.protocol?a:b)+c},ag=function(){var a=vc(),b;if(1===a)a:{var c=kf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var og=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),pg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},qg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},rg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var tg=function(a){var b=Qf("gtm.whitelist");b&&Hc("GTM",9);var c=b&&Oa(Fa(b),pg),d=Qf("gtm.blacklist");d||(d=Qf("tagTypeBlacklist"))&&Hc("GTM",3);
d?Hc("GTM",8):d=[];sg()&&(d=Fa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=wa(Fa(d),"google")&&Hc("GTM",2);var e=d&&Oa(Fa(d),qg),f={};return function(h){var k=h&&h[he.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=qf[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>wa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
wa(c,l[p])){Hc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=wa(e,k);if(q)t=q;else{var r=Aa(e,l||[]);r&&Hc("GTM",10);t=r}}var v=!m||t;v||!(0<=wa(l,"sandboxedScripts"))||c&&-1!==wa(c,"sandboxedScripts")||(v=Aa(e,rg));return f[k]=v}},sg=function(){return og.test(C.location&&C.location.hostname)};var ug={qg:function(a,b){b[he.Jd]&&"string"===typeof a&&(a=1==b[he.Jd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(he.Ld)&&null===a&&(a=b[he.Ld]);b.hasOwnProperty(he.Nd)&&void 0===a&&(a=b[he.Nd]);b.hasOwnProperty(he.Md)&&!0===a&&(a=b[he.Md]);b.hasOwnProperty(he.Kd)&&!1===a&&(a=b[he.Kd]);return a}};var vg={active:!0,isWhitelisted:function(){return!0}},wg=function(a){var b=ff.zones;!b&&a&&(b=ff.zones=a());return b};var xg=!1,yg=0,zg=[];function Ag(a){if(!xg){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){xg=!0;for(var e=0;e<zg.length;e++)F(zg[e])}zg.push=function(){for(var f=0;f<arguments.length;f++)F(arguments[f]);return 0}}}function Bg(){if(!xg&&140>yg){yg++;try{D.documentElement.doScroll("left"),Ag()}catch(a){C.setTimeout(Bg,50)}}}var Cg=function(a){xg?a():zg.push(a)};var Dg={},Eg={},Fg=function(a,b,c,d){if(!Eg[a]||hf[b]||"__zone"===b)return-1;var e={};Za(d)&&(e=u(d,e));e.id=c;e.status="timeout";return Eg[a].tags.push(e)-1},Gg=function(a,b,c,d){if(Eg[a]){var e=Eg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Hg(a){for(var b=Dg[a]||[],c=0;c<b.length;c++)b[c]();Dg[a]={push:function(d){d(se.o,Eg[a])}}}
var Kg=function(a,b,c){Eg[a]={tags:[]};ra(b)&&Ig(a,b);c&&C.setTimeout(function(){return Hg(a)},Number(c));return Jg(a)},Ig=function(a,b){Dg[a]=Dg[a]||[];Dg[a].push(Ja(function(){return F(function(){b(se.o,Eg[a])})}))};function Jg(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ja(function(){b++;d&&b>=c&&Hg(a)})},Zf:function(){d=!0;b>=c&&Hg(a)}}};var Lg=function(){function a(d){return!ta(d)||0>d?0:d}if(!ff._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=ta(Rf.get("gtm.start"))?Rf.get("gtm.start"):0;ff._li={cst:a(c-b),cbt:a(mf-b)}}};var Pg=!1,Qg=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},Rg=!1;
var Sg=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||Hc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}Lg();return C[b]},Tg=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Qg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Vg=function(){},Ug=function(){return C.GoogleAnalyticsObject||"ga"};var bh=function(a){};function ah(a,b,c){b.containerId=se.o;var d={type:a,value:b};c.length&&(d.trace=c);return d};function ch(a,b,c,d){var e=Wd[a],f=dh(a,b,c,d);if(!f)return null;var h=de(e[he.he],c,[]);if(h&&h.length){var k=h[0];f=ch(k.index,{O:f,aa:1===k.we?b.terminate:f,terminate:b.terminate},c,d)}return f}
function dh(a,b,c,d){function e(){if(f[he.If])k();else{var w=ee(f,c,[]),x=Fg(c.id,String(f[he.xa]),Number(f[he.ie]),w[he.Jf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=Ha()-B;Jf(c.id,Wd[a],"5");Gg(c.id,x,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=Ha()-B;Jf(c.id,Wd[a],"6");Gg(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Jf(c.id,f,"1");var z=function(A){var E=Ha()-B;bh(A);Jf(c.id,f,"7");Gg(c.id,x,"exception",E);y||(y=!0,k())};var B=Ha();try{ce(w,c)}catch(A){z(A)}}}var f=Wd[a],h=b.O,k=b.aa,l=b.terminate;if(c.fd(f))return null;var m=de(f[he.je],c,[]);if(m&&m.length){var n=m[0],p=ch(n.index,{O:h,aa:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.we?l:p}if(f[he.fe]||f[he.Kf]){var t=f[he.fe]?Xd:c.Oh,q=h,r=k;if(!t[a]){e=Ja(e);var v=eh(a,t,e);h=v.O;k=v.aa}return function(){t[a](q,r)}}return e}
function eh(a,b,c){var d=[],e=[];b[a]=fh(d,e,c);return{O:function(){b[a]=gh;for(var f=0;f<d.length;f++)d[f]()},aa:function(){b[a]=hh;for(var f=0;f<e.length;f++)e[f]()}}}function fh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function gh(a){a()}function hh(a,b){b()};var kh=function(a,b){for(var c=[],d=0;d<Wd.length;d++)if(a.xb[d]){var e=Wd[d];var f=b.add();try{var h=ch(d,{O:f,aa:f,terminate:f},a,d);h?c.push({bf:d,Te:fe(e),Va:h}):(ih(d,a),f())}catch(l){f()}}b.Zf();c.sort(jh);for(var k=0;k<c.length;k++)c[k].Va();return 0<c.length};function jh(a,b){var c,d=b.Te,e=a.Te;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.bf,k=b.bf;f=h>k?1:h<k?-1:0}return f}
function ih(a,b){if(!Gf)return;var c=function(d){var e=b.fd(Wd[d])?"3":"4",f=de(Wd[d][he.he],b,[]);f&&f.length&&c(f[0].index);Jf(b.id,Wd[d],e);var h=de(Wd[d][he.je],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var lh=!1,mh=function(a,b,c,d,e){if("gtm.js"==b){if(lh)return!1;lh=!0}If(a,b);var f=Kg(a,d,e);Yf(a,"event",1);Yf(a,"ecommerce",1);Yf(a,"gtm");var h={id:a,name:b,fd:tg(c),xb:[],Oh:[],Le:function(n){Hc("GTM",6);bh(n)}};h.xb=pe(h);var k=kh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Vg();if(!k)return k;for(var l=0;l<h.xb.length;l++)if(h.xb[l]){var m=
Wd[l];if(m&&!hf[String(m[he.xa])])return!0}return!1};var oh=function(a,b,c){var d=this;this.eventModel=a;this.targetConfig=b||{};this.globalConfig=c||{};this.getWithConfig=function(e){if(d.eventModel.hasOwnProperty(e))return d.eventModel[e];if(d.targetConfig.hasOwnProperty(e))return d.targetConfig[e];if(d.globalConfig.hasOwnProperty(e))return d.globalConfig[e]}};function ph(){var a=ff;return a.gcq=a.gcq||new qh}
var rh=function(a,b){ph().register(a,b)},sh=function(a,b,c,d){ph().push("event",[b,a],c,d)},th=function(){this.status=1;this.Wc={};this.Ue=null;this.Ge=!1},uh=function(a,b,c,d,e){this.type=a;this.Th=b;this.Ia=c||"";this.Yb=d;this.defer=e},qh=function(){this.cf={};this.Be={};this.rb=[]},vh=function(a,b){return a.cf[b]=a.cf[b]||new th},wh=function(a,b,c,d){var e=vh(a,d.Ia).Ue;if(e){var f=u(c),h=u(vh(a,d.Ia).Wc),k=u(a.Be),l=new oh(f,h,k);try{e(b,d.Th,l)}catch(m){}}};
qh.prototype.register=function(a,b){3!==vh(this,a).status&&(vh(this,a).Ue=b,vh(this,a).status=3,this.flush())};qh.prototype.push=function(a,b,c,d){var e=Math.floor(Ha()/1E3);if(c&&1===vh(this,c).status&&(vh(this,c).status=2,this.push("require",[],c),!$f())){var f=encodeURIComponent(c);uc(("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+f+"&l=dataLayer&cx=c"))}this.rb.push(new uh(a,e,c,b,d));d||this.flush()};
qh.prototype.flush=function(a){for(var b=this;this.rb.length;){var c=this.rb[0];if(c.defer)c.defer=!1,this.rb.push(c);else switch(c.type){case "require":if(3!==vh(this,c.Ia).status&&!a)return;break;case "set":Ba(c.Yb[0],function(h,k){b.Be[h]=k});break;case "config":var d=c.Yb[0],e=!!d[H.Pb];delete d[H.Pb];var f=vh(this,c.Ia);e||(f.Wc={});f.Ge&&e||wh(this,H.fa,d,c);f.Ge=!0;u(d,f.Wc);break;case "event":wh(this,c.Yb[1],c.Yb[0],c)}this.rb.shift()}};var Ah=function(a,b,c){var d=this;Va(this.getName(),["input:!string","onSuccess:!Fn","onFailure:?Fn"],arguments);c=c||new Pa("emptyFn",function(){});var e=C.msCrypto,f=C.crypto,h=xh(a);if(f&&f.subtle)f.subtle.digest("SHA-256",h).then(function(l){return void b.s(d.h(),yh(l))},function(l){return void c.s(d.h(),zh(l.name,l.message))});else if(e&&e.subtle){var k=e.subtle.digest("SHA-256",h);k.oncomplete=function(l){return void b.s(d.h(),yh(l.target.result))};k.onerror=function(l){return void c.s(d.h(),
zh(l.target.result.name,l.target.result.message))}}else c.s(this.h(),zh("BrowserNotSupported","This method is not supported in this browser."))};function yh(a){for(var b=new Uint8Array(a),c=Array(b.length),d=0;d<b.length;d++)c[d]=b[d];var e=c.map(function(f){return String.fromCharCode(f)}).join("");return C.btoa(e)}function zh(a,b){var c=new Sa;c.set("name",a);c.set("message",b);return c}
function xh(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}for(var f=new Uint8Array(b.length),h=0;h<b.length;h++)f[h]=b[h];return f};function Bh(a){Va(this.getName(),["callback:!Fn"],arguments);bd(this,"read_event_metadata");var b=this.h().ba;if(!b)throw Error("invalid program state");var c=b.eventId;ta(c)&&Ig(c,ab(a))}function Ch(a,b){Va(this.getName(),["key:!string","dataLayerVersion:?number"],arguments);bd(this,"read_data_layer",a);return $a(Qf(a,b||2),this.h())}function Dh(){bd(this,"read_character_set");return D.characterSet||""}function Eh(){bd(this,"read_title");return D.title||""}
var Fh=function(){var a=new Me;$f()?a.addAll({injectHiddenIframe:qa,injectScript:qa}):a.addAll({injectHiddenIframe:ld,injectScript:nd});var b=pd;a.addAll({aliasInWindow:vd,addEventCallback:Bh,callInWindow:cd,callLater:dd,copyFromDataLayer:Ch,copyFromWindow:ed,createQueue:td,createArgumentsQueue:ud,encodeUri:ye,encodeUriComponent:ze,
generateRandom:Ae,getCookieValues:fd,getQueryParameters:jd,getReferrerQueryParameters:kd,getReferrerUrl:gd,getTimestamp:Be,getUrl:hd,logToConsole:od,makeInteger:De,makeString:Fe,makeTableMap:Ge,queryPermission:wd,readCharacterSet:Dh,readTitle:Eh,sendPixel:b,setCookie:qd,setInWindow:rd});a.add("Math",Ke);a.add("decodeUri",we),a.add("decodeUriComponent",
xe);a.add("sha256",Ah);a.add("makeNumber",Ee);a.add("getType",Ce);return function(c){var d=a.get(c);if(d)return d;throw Error(c+" is not a valid API name.");
}};var Gh,re=new function(){this.zb={}};function Hh(){var a=data.runtime||[],b=data.runtime_lines;Gh=new pc;Ih();Sd=function(e,f,h){Jh(f);var k=new Sa;Ba(f,function(m,n){k.set(m,$a(n))});Gh.Ha(le());var l=Gh.vc({ag:Kh[e]||Lh,eventId:void 0!==h?h.id:void 0},[e,k]);Gh.Ha(void 0);l instanceof ia&&"return"===l.L&&(l=l.getData());return ab(l)};Gh.ya("require",Fh());for(var c=0;c<a.length;c++){var d=a[c];if(!va(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&je(d,b[c]);Gh.Va(d)}}
function Jh(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;ra(b)&&(a.gtmOnSuccess=function(){F(b)});ra(c)&&(a.gtmOnFailure=function(){F(c)})}var Kh={};function Lh(a){throw Mh(a,{},"The requested permission is not configured.");}
function Nh(a){var b={},c=te(function(){var d=arguments[0];return d&&b[d]?b[d].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ba(a,function(d,e){var f={};Ba(e,function(h,k){var l,m=be(h,k);m.vtp_permissionName=h;m.vtp_createPermissionError=Mh;l=ce(m);f[h]=l.assert;b[h]||(b[h]=l.K)});Kh[d]=function(h,k){var l=f[h]||Lh,m=Array.prototype.slice.call(arguments,0);l.apply(void 0,m);c.apply(void 0,m)}})}function Mh(a,b,c){return new ie(a,b,c)}
function Ih(){var a=Gh;ff.SANDBOXED_JS_SEMAPHORE=ff.SANDBOXED_JS_SEMAPHORE||0;a.ra(function(b,c,d){ff.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{ff.SANDBOXED_JS_SEMAPHORE--}})};var Oh=null,Ph={},Qh={},Rh,Sh=function(a,b){var c={event:a};b&&(c.eventModel=u(b),b[H.Gc]&&(c.eventCallback=b[H.Gc]),b[H.hb]&&(c.eventTimeout=b[H.hb]));return c};
var Yh={config:function(a){},event:function(a){var b=a[1];if(sa(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Za(a[2]))return;c=a[2]}var d=Sh(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=re;d.zb[b]?d.zb[b].push(c):d.zb[b]=[c]}},set:function(a){var b;2==a.length&&Za(a[1])?b=u(a[1]):3==a.length&&sa(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},Zh={policy:!0};var ai=function(a){return $h?D.querySelectorAll(a):null},bi=function(a,b){if(!$h)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ci=!1;if(D.querySelectorAll)try{var di=D.querySelectorAll(":root");di&&1==di.length&&di[0]==D.documentElement&&(ci=!0)}catch(a){}var $h=ci;var ki=function(a){if(ji(a))return a;this.Wh=a};ki.prototype.Mg=function(){return this.Wh};var ji=function(a){return!a||"object"!==Xa(a)||Za(a)?!1:"getUntrustedUpdateValue"in a};ki.prototype.getUntrustedUpdateValue=ki.prototype.Mg;var li=!1,mi=[];function ni(){if(!li){li=!0;for(var a=0;a<mi.length;a++)F(mi[a])}}var oi=function(a){li?F(a):mi.push(a)};var qi=[],ri=!1,si=function(a){return C["dataLayer"].push(a)},ti=function(a){var b=ff["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},vi=function(a){var b=a._clear;Ba(a,function(f,h){"_clear"!==f&&(b&&Xf(f,void 0),Xf(f,h))});lf||(lf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=rf(),a["gtm.uniqueEventId"]=d,Xf("gtm.uniqueEventId",d));nf=c;var e=ui(a);
nf=null;switch(c){case "gtm.init":Hc("GTM",19),e&&Hc("GTM",20)}return e};function ui(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=ff.zones;d=e?e.checkState(se.o,c):vg;return d.active?mh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var wi=function(){for(var a=!1;!ri&&0<qi.length;){ri=!0;delete Mf.eventModel;Pf();var b=qi.shift();if(null!=b){var c=ji(b);if(c){var d=b;b=ji(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Qf(h,1);if(va(k)||Za(k))k=u(k);Nf[h]=k}}try{if(ra(b))try{b.call(Rf)}catch(r){}else if(va(b)){var l=b;if(sa(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=Qf(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(r){}}}else{if(Ca(b)){a:{if(b.length&&sa(b[0])){var q=Yh[b[0]];if(q&&(!c||!Zh[b[0]])){b=q(b);break a}}b=void 0}if(!b){ri=!1;continue}}a=vi(b)||a}}finally{c&&Pf(!0)}}ri=!1}return!a},xi=function(){var a=wi();try{var b=se.o,c=C["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=
!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(f){}return a},yi=function(){var a=sc("dataLayer",[]),b=sc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Cg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});oi(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<ff.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=
new ki(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);qi.push.apply(qi,d);if(300<this.length)for(Hc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return wi()&&h};qi.push.apply(qi,a.slice(0));F(xi)};var zi;var Vi={};Vi.Rb=new String("undefined");
var Wi=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Vi.Rb?b:a[d]);return c.join("")}};Wi.prototype.toString=function(){return this.resolve("undefined")};Wi.prototype.valueOf=Wi.prototype.toString;Vi.Mf=Wi;Vi.Pc={};Vi.ug=function(a){return new Wi(a)};var Xi={};Vi.Dh=function(a,b){var c=rf();Xi[c]=[a,b];return c};Vi.se=function(a){var b=a?0:1;return function(c){var d=Xi[c];if(d&&"function"===typeof d[b])d[b]();Xi[c]=void 0}};Vi.$g=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Vi.rh=function(a){if(a===Vi.Rb)return a;var b=rf();Vi.Pc[b]=a;return'google_tag_manager["'+se.o+'"].macro('+b+")"};Vi.eh=function(a,b,c){a instanceof Vi.Mf&&(a=a.resolve(Vi.Dh(b,c)),b=qa);return{cd:a,O:b}};var Yi=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ac(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Zi=function(a){ff.hasOwnProperty("autoEventsSettings")||(ff.autoEventsSettings={});var b=ff.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},$i=function(a,b,c){Zi(a)[b]=c},aj=function(a,b,c,d){var e=Zi(a),f=Ia(e,b,d);e[b]=c(f)},bj=function(a,b,c){var d=Zi(a);return Ia(d,b,c)};var cj=function(){for(var a=qc.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ha()/1E3)].join(".")},fj=function(a,b,c,d){var e=dj(b);return Tc(a,e,ej(c),d)},gj=function(a,b,c,d){var e=""+dj(c),f=ej(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},dj=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ej=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var hj=["1"],ij={},mj=function(a,b,c,d){var e=jj(a);ij[e]||kj(e,b,c)||(lj(e,cj(),b,c,d),kj(e,b,c))};function lj(a,b,c,d,e){var f=gj(b,"1",d,c);Zc(a,f,c,d,0==e?void 0:new Date(Ha()+1E3*(void 0==e?7776E3:e)))}function kj(a,b,c){var d=fj(a,b,c,hj);d&&(ij[a]=d);return d}function jj(a){return(a||"_gcl")+"_au"};var nj=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Cd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].Cd]||(f[a[h].Cd]=[]),f[a[h].Cd].push({timestamp:k[1],Hg:k[2]}))}return f};function oj(){for(var a=pj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var pj,rj,sj=function(a){pj=pj||qj();rj=rj||oj();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(pj[l],pj[m],pj[n],pj[p])}return b.join("")},tj=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=rj[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}pj=pj||qj();rj=rj||
oj();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var uj;function vj(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var zj=function(){var a=wj,b=xj,c=yj(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){yc(D,"mousedown",d);yc(D,"keyup",d);yc(D,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},yj=function(){var a=sc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Aj=/(.*?)\*(.*?)\*(.*)/,Bj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Cj=/^(?:www\.|m\.|amp\.)+/,Dj=/([^?#]+)(\?[^#]*)?(#.*)?/,Ej=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Gj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sj(String(d))))}var e=b.join("*");return["1",Fj(e),e].join("*")},Fj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=uj)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}uj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^uj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ij=function(){return function(a){var b=Pc(C.location.href),c=b.search.replace("?",""),d=Kc(c,"_gl",!1,!0)||"";a.query=Hj(d)||{};var e=Nc(b,"fragment").match(Ej);a.fragment=Hj(e&&
e[3]||"")||{}}},Jj=function(){var a=Ij(),b=yj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ka(c,d.query),Ka(c,d.fragment));return c},Hj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Aj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Fj(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=tj(t[q+1]);return p}}}}catch(r){}};
function Kj(a,b,c){function d(m){var n=m,p=Ej.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Dj.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Lj(a,b,c){for(var d={},e={},f=yj().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&vj(k.domains,b)&&(k.fragment?Ka(e,k.callback()):Ka(d,k.callback()))}if(Na(d)){var l=Gj(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Kj(l,a.action);Fc.test(v)&&(a.action=v)}}}else Mj(l,a,!1)}if(!c&&Na(e)){var w=Gj(e);Mj(w,a,!0)}}function Mj(a,b,c){if(b.href){var d=Kj(a,b.href,void 0===c?!1:c);Fc.test(d)&&(b.href=d)}}
var wj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Lj(e,e.hostname,!1)}}catch(h){}},xj=function(a){try{if(a.action){var b=Nc(Pc(a.action),"host");Lj(a,b,!0)}}catch(c){}},Nj=function(a,b,c,d){zj();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};yj().decorators.push(e)},Oj=function(){var a=D.location.hostname,b=Bj.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Cj,""),l=e.replace(Cj,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Pj=function(a,b){return!1===a?!1:a||b||Oj()};var Qj={};var Rj=/^\w+$/,Sj=/^[\w-]+$/,Tj=/^~?[\w-]+$/,Uj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Vj(a){return a&&"string"==typeof a&&a.match(Rj)?a:"_gcl"}var Xj=function(){var a=Pc(C.location.href),b=Nc(a,"query",!1,void 0,"gclid"),c=Nc(a,"query",!1,void 0,"gclsrc"),d=Nc(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Kc(e,"gclid",!1,void 0);c=c||Kc(e,"gclsrc",!1,void 0)}return Wj(b,c,d)};
function Wj(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};if(void 0!==a&&a.match(Sj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Qj.gtm_3pds?0:Qj.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Yj(a,b,c){function d(p,t){var q=Zj(p,e);q&&Zc(q,t,h,f,l,!0)}b=b||{};var e=Vj(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Me?7776E3:b.Me;c=c||Ha();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Ei?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Zj=function(a,b){var c=Uj[a];if(void 0!==c)return b+c},ak=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function bk(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ck=function(a,b,c,d,e){if(va(b)){var f=Vj(e);Nj(function(){for(var h={},k=0;k<a.length;++k){var l=Zj(a[k],f);if(l){var m=Qc(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},dk=function(a){return a.filter(function(b){return Tj.test(b)})},ek=function(a){for(var b=["aw","dc"],c=Vj(a&&a.prefix),d={},e=0;e<b.length;e++)Uj[b[e]]&&(d[b[e]]=Uj[b[e]]);Ba(d,function(f,h){var k=Qc(c+h,D.cookie);if(k.length){var l=k[0],m=ak(l),n={};n[f]=[bk(l)];Yj(n,a,m)}})};var fk=/^\d+\.fls\.doubleclick\.net$/;function gk(a){var b=Pc(C.location.href),c=Nc(b,"host",!1);if(c&&c.match(fk)){var d=Nc(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function hk(a,b){if("aw"==a||"dc"==a){var c=gk("gcl"+a);if(c)return c.split(".")}var d=Vj(b);if("_gcl"==d){var e;e=Xj()[a]||[];if(0<e.length)return e}var f=Zj(a,d),h;if(f){var k=[];if(D.cookie){var l=Qc(f,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=bk(l[m]);n&&-1===wa(k,n)&&k.push(n)}h=dk(k)}else h=k}else h=k}else h=[];return h}
var ik=function(){var a=gk("gac");if(a)return decodeURIComponent(a);var b=nj(),c=[];Ba(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].Hg);f=dk(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},jk=function(a,b,c,d,e){mj(b,c,d,e);var f=ij[jj(b)],h=Xj().dc||[],k=!1;if(f&&0<h.length){var l=ff.joined_au=ff.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+f;qc.sendBeacon&&qc.sendBeacon(t)||xc(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var q=jj(b),r=ij[q];r&&lj(q,r,c,d,e)}};var kk;if(3===se.Vb.length)kk="g";else{var lk="G";kk=lk}
var mk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:kk,OPT:"o"},nk=function(a){var b=se.o.split("-"),c=b[0].toUpperCase(),d=mk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===se.Vb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+se.Vb+e};var sk=["input","select","textarea"],tk=["button","hidden","image","reset","submit"],uk=function(a){var b=a.tagName.toLowerCase();return!xa(sk,function(c){return c===b})||"input"===b&&xa(tk,function(c){return c===a.type.toLowerCase()})?!1:!0},vk=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):Dc(a,["form"],100)},wk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(uk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var zk=!!C.MutationObserver,Ak=void 0,Bk=function(a){if(!Ak){var b=function(){var c=D.body;if(c)if(zk)(new MutationObserver(function(){for(var e=0;e<Ak.length;e++)F(Ak[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;yc(c,"DOMNodeInserted",function(){d||(d=!0,F(function(){d=!1;for(var e=0;e<Ak.length;e++)F(Ak[e])}))})}};Ak=[];D.body?b():F(b)}Ak.push(a)};
var Ek=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Fk=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Ek(b,"/*")&&(b=b.slice(0,-2));Ek(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},Gk=/^[a-z0-9-]+$/i,Hk=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Ik=function(a,b){for(var c=0;c<b.length;c++){var d;var e=a,f=b[c];if(!Hk.exec(f))throw Error("Invalid Wildcard");var h=Pc(e),k;if(!(k="https:"!=h.protocol||h.port&&"443"!=h.port)){var l;b:{var m=h.hostname.split(".");if(2>m.length)l=!1;else{for(var n=0;n<m.length;n++)if(!Gk.exec(m[n])){l=!1;break b}l=!0}}k=!l}if(k)d=!1;else{var p=f.slice(8),t=p.slice(0,p.indexOf("/")),q;var r=h.hostname,v=t;if(0!==v.indexOf("*."))q=r.toLowerCase()===v.toLowerCase();else{v=v.slice(2);var w=r.toLowerCase().indexOf(v.toLowerCase());
q=-1===w?!1:r.length===v.length?!0:r.length!==v.length+w?!1:"."===r[w-1]}if(q){var x=p.slice(p.indexOf("/"));d=Fk(h.pathname+h.search,x)?!0:!1}else d=!1}if(d)return!0}return!1};
var Tk=function(){var a=D.body,b=D.documentElement||a&&a.parentElement,c,d;if(D.compatMode&&"BackCompat"!==D.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};Hc("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Uk=function(a){var b=Tk(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Vk=function(a){if(D.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var Wk=[],Xk=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),Yk=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Wk.length;f++)if(!Wk[f])return Wk[f]=d,f;return Wk.push(d)-1},Zk=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ha()};F(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Uk(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},$k=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Xk){var e=!1;F(function(){e||Zk(a,b,c)()});return Yk(function(f){e=!0;for(var h={ab:0};h.ab<f.length;h={ab:h.ab},h.ab++)F(function(k){return function(){return a(f[k.ab])}}(h))},b,c)}return C.setInterval(Zk(a,b,c),1E3)},al=function(a){Xk?0<=a&&a<Wk.length&&Wk[a]&&(Wk[a].disconnect(),Wk[a]=void 0):C.clearInterval(a)};
var bl=function(a,b,c){function d(){var h=a();f+=e?(Ha()-e)*h.playbackRate/1E3:0;e=Ha()}var e=0,f=0;return{gc:function(h,k,l){var m=a(),n=m.ue,p=void 0!==l?Math.round(l):void 0!==k?Math.round(m.ue*k):Math.round(m.vg),t=void 0!==k?Math.round(100*k):0>=n?0:Math.round(p/n*100),q=D.hidden?!1:.5<=Uk(c);d();var r=Yi(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(n);r["gtm.videoCurrentTime"]=
Math.round(p);r["gtm.videoElapsedTime"]=Math.round(f);r["gtm.videoPercent"]=t;r["gtm.videoVisible"]=q;si(r)},Fh:function(){e=Ha()},Qc:function(){d()}}};var cl=C.clearTimeout,dl=C.setTimeout,M=function(a,b,c){if($f()){b&&F(b)}else return uc(a,b,c)},el=function(){return new Date},fl=function(){return C.location.href},gl=function(a){return Nc(Pc(a),"fragment")},hl=function(a){return Oc(Pc(a))},il=null;
var jl=function(a,b){return Qf(a,b||2)},kl=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return si(a)},ll=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},ml=function(a,b,c){return Qc(a,b,void 0===c?!0:!!c)},nl=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Me:d},f=Xj();Yj(f,e);ek(e)},ol=function(a,b,c,d,e){for(var f=Jj(),h=Vj(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Uj[l]){var m=Zj(l,h),
n=f[m];if(n){var p=Math.min(ak(n),Ha()),t;b:{for(var q=p,r=Qc(m,D.cookie),v=0;v<r.length;++v)if(ak(r[v])>q){t=!0;break b}t=!1}t||Zc(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Yj(Wj(f.gclid,f.gclsrc),w);},pl=function(a,b,c,d,e){ck(a,b,c,d,e);},ql=function(a,b){if($f()){
b&&F(b)}else wc(a,b)},rl=function(a){return!!bj(a,"init",!1)},sl=function(a){$i(a,"init",!0)},tl=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":kf;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&Ba(b,function(e,f){f&&(d+="&"+e+"="+encodeURIComponent(f))});M(L("https://","http://",d))},ul=function(a,b){var c=a[b];return c};
var wl=Vi.eh;
var xl=new za,yl=function(a,b){function c(h){var k=Pc(h),l=Nc(k,"protocol"),m=Nc(k,"host",!0),n=Nc(k,"port"),p=Nc(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0},zl=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&va(c)){for(var d=0;d<c.length;d++)if(zl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=wa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=xl.get(q);r||(r=new RegExp(c,t),xl.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return yl(b,c)}return!1};var Bl=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Cl={},Dl=encodeURI,Y=encodeURIComponent,El=xc;var Fl=function(a,b){if(!a)return!1;var c=Nc(Pc(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Gl=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Cl.ah=function(){var a=!1;return a};var fm=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||ya();return a.hid};var Om=window,Pm=document,Qm=function(a){var b=Om._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Om["ga-disable-"+a])return!0;try{var c=Om.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Qc("AMP_TOKEN",Pm.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Pm.getElementById("__gaOptOutExtension")?!0:!1};var Vm=function(a,b,c){sh(b,c,a)},Wm=function(a,b,c){sh(b,c,a,!0)},Ym=function(a,b){},Xm=function(a,b){},
Zm=function(a){return"_"===a.charAt(0)},$m=function(a){Ba(a,function(c){Zm(c)&&delete a[c]});var b=a[H.Qb]||{};Ba(b,function(c){Zm(c)&&delete b[c]})};var Z={a:{}};

Z.a.vis=["google"],function(){var a={};(function(b){Z.__vis=b;Z.__vis.b="vis";Z.__vis.g=!0;Z.__vis.priorityOverride=0})(function(b){var c,d=[];d.push("CSS"===b.vtp_selectorType?b.vtp_elementSelector:"#"+b.vtp_elementId);d.push(b.vtp_outputMethod);"BOOLEAN"==b.vtp_outputMethod&&d.push(b.vtp_onScreenRatio);c=d.join("&");var e=a[c],f=Number(el());if(e&&250>f-e.time)return e.value;e={time:f,value:null};var h=b.vtp_outputMethod,k=null;if("CSS"==b.vtp_selectorType){var l=ai(b.vtp_elementSelector);l&&0<
l.length&&(k=l[0])}else k=D.getElementById(b.vtp_elementId);if(k)switch(h){case "BOOLEAN":var m=(Number(b.vtp_onScreenRatio)||50)/100;e.value=Uk(k)>=m&&!Vk(k);break;case "PERCENT":e.value=0,Vk(k)||(e.value=Math.round(1E3*Uk(k))/10)}a[c]=e;return e.value})}();Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"153"})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=a.vtp_gtmOnFailure;Lg();M("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=W("google_trackConversion");if(ra(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Gl(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),
a.vtp_eventValue&&(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:nk()})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=ai(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=D.getElementById(a.vtp_elementId);b&&(c=d?Ac(b,d):Bc(b));return Ga(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Zf(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=jl("gtm.referrer",1)||D.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Nc(Pc(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):hl(String(b)):String(b)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return ml(a.vtp_name,jl("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.b="access_globals";Z.__access_globals.g=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],h=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&h.push(m)}return{assert:function(n,p,t){if(!sa(t))throw d(n,{},"Key must be a string.");if("read"===p){if(-1<wa(e,t))return}else if("write"===p){if(-1<wa(f,t))return}else if("readwrite"===p){if(-1<wa(f,t)&&-1<wa(e,t))return}else if("execute"===p){if(-1<wa(h,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+p);throw d(n,{},"Prohibited "+p+" on global variable: "+
t+".");},K:a}})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return ya(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:jl("gtm.url",1))||fl();var d=b[a("vtp_component")];if(!d||"URL"==d)return hl(String(c));var e=Pc(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?va(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=Nc(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){f=p;break a}}f=void 0}else f=Nc(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=jl(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;u(Gl(n.vtp_fieldsToSet,"fieldName","value"),f);u(Gl(n.vtp_contentGroup,"index","group"),h);u(Gl(n.vtp_dimension,"index","dimension"),k);u(Gl(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=u(n);d=u(d,p)}u(Gl(d.vtp_fieldsToSet,"fieldName","value"),f);u(Gl(d.vtp_contentGroup,
"index","group"),h);u(Gl(d.vtp_dimension,"index","dimension"),k);u(Gl(d.vtp_metric,"index","metric"),l);var t=Sg(d.vtp_functionName);if(ra(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+rf(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},x=function(R){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},y=function(R,O){return void 0===O?O:R(O)},z=function(R,O){if(O)for(var ua in O)O.hasOwnProperty(ua)&&x("set",R+ua,O[ua])},B=function(){
var R=function(bn,pi,cn){if(!Za(pi))return!1;for(var Vc=Ia(Object(pi),cn,[]),Af=0;Vc&&Af<Vc.length;Af++)x(bn,Vc[Af]);return!!Vc&&0<Vc.length},O;if(d.vtp_useEcommerceDataLayer){var ua=!1;ua||(O=jl("ecommerce",1))}else d.vtp_ecommerceMacroData&&(O=d.vtp_ecommerceMacroData.ecommerce);if(!Za(O))return;O=Object(O);var fb=Ia(f,"currencyCode",O.currencyCode);
void 0!==fb&&x("set","&cu",fb);R("ec:addImpression",O,"impressions");if(R("ec:addPromo",O[O.promoClick?"promoClick":"promoView"],"promotions")&&O.promoClick){x("ec:setAction","promo_click",O.promoClick.actionField);return}for(var La="detail checkout checkout_option click add remove purchase refund".split(" "),gb="refund purchase remove checkout checkout_option add click detail".split(" "),hb=0;hb<La.length;hb++){var vb=O[La[hb]];if(vb){R("ec:addProduct",vb,"products");x("ec:setAction",La[hb],vb.actionField);
if(Gf)for(var Eb=0;Eb<gb.length;Eb++){var kc=O[gb[Eb]];if(kc){kc!==vb&&Hc("GTM",13);break}}break}}},A=function(R,O,ua){var fb=0;if(R)for(var La in R)if(R.hasOwnProperty(La)&&(ua&&v[La]||!ua&&void 0===v[La])){var gb=w[La]?Ea(R[La]):R[La];"anonymizeIp"!=La||gb||(gb=void 0);O[La]=gb;fb++}return fb},E={name:r};A(f,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",nk(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(R,O){void 0!==d[O]&&x("set",R,d[O])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var G={};A(f,G,!1)&&x("set",G);var I;
d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var R=f&&f.hitCallback;ra(R)&&R();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());var S={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Da,d.vtp_eventValue||
e.value)};A(I,S,!1);x("send",S);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var X=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var da="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:da})}I?x("send","pageview",I):x("send","pageview");d.vtp_autoLinkDomains&&Tg(q,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var fa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(fa="internal/"+fa);a=!0;var Ma=L("https:","http:","//www.google-analytics.com/"+fa,f&&f.forceSSL);M(Ma,function(){var R=Qg();R&&R.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else F(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();

Z.a.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.b="inject_script";Z.__inject_script.g=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!sa(f))throw d(e,{},"Script URL must be a string.");try{if(Ik(f,c))return}catch(h){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return D.getElementById(w)?a():w}function b(w,x){if(!w)return!1;for(var y=0;y<t.length;y++)if(0<=w.indexOf("//"+t[y]+"/"+x))return!0;return!1}function c(w){var x=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+x+"enablejsapi=1";if(!r){var y=W("document");r=y.location.protocol+"//"+y.location.hostname;y.location.port&&(r+=":"+y.location.port)}return w+x+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(w,
x){var y=w.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(x)return w.setAttribute("src",c(y)),!0}return!1}function e(w,x){if(!w.getAttribute("data-gtm-yt-inspected-"+x.Dd)&&(w.setAttribute("data-gtm-yt-inspected-"+x.Dd,"true"),d(w,x.ye))){w.id||(w.id=a());var y=W("YT"),z=y.get(w.id);z||(z=new y.Player(w.id));var B=h(z,x),A={},E;for(E in B)A.cb=E,B.hasOwnProperty(A.cb)&&z.addEventListener(A.cb,function(G){return function(I){return B[G.cb](I.data)}}(A)),A={cb:A.cb}}}
function f(w){F(function(){function x(){for(var z=y.getElementsByTagName("iframe"),B=z.length,A=0;A<B;A++)e(z[A],w)}var y=W("document");x();Bk(x)})}function h(w,x){var y,z;function B(){N=bl(function(){return{url:P,title:U,ue:J,vg:w.getCurrentTime(),playbackRate:X}},x.Dd,w.getIframe());J=0;U=P="";X=1;return A}function A(R){switch(R){case q.PLAYING:J=Math.round(w.getDuration());P=w.getVideoUrl();if(w.getVideoData){var O=w.getVideoData();U=O?O.title:""}X=w.getPlaybackRate();x.ng?N.gc("start"):N.Qc();
K=m(x.uh,x.th,w.getDuration());return E(R);default:return A}}function E(){da=w.getCurrentTime();fa=el().getTime();N.Fh();Q();return G}function G(R){var O;switch(R){case q.ENDED:return S(R);case q.PAUSED:O="pause";case q.BUFFERING:var ua=w.getCurrentTime()-da;O=1<Math.abs((el().getTime()-fa)/1E3*X-ua)?"seek":O||"buffering";w.getCurrentTime()&&(x.mg?N.gc(O):N.Qc());V();return I;case q.UNSTARTED:return B(R);default:return G}}function I(R){switch(R){case q.ENDED:return S(R);case q.PLAYING:return E(R);
case q.UNSTARTED:return B(R);default:return I}}function S(){for(;z;){var R=y;cl(z);R()}x.lg&&N.gc("complete",1);return B(q.UNSTARTED)}function T(){}function V(){z&&(cl(z),z=0,y=T)}function Q(){if(K.length&&0!==X){var R=-1,O;do{O=K[0];if(O.Ga>w.getDuration())return;R=(O.Ga-w.getCurrentTime())/X;if(0>R&&(K.shift(),0===K.length))return}while(0>R);y=function(){z=0;y=T;0<K.length&&K[0].Ga===O.Ga&&(K.shift(),N.gc("progress",O.Se,O.Ze));Q()};z=dl(y,1E3*R)}}var N,K=[],J,P,U,X,da,fa,Ma=B(q.UNSTARTED);z=0;
y=T;return{onStateChange:function(R){Ma=Ma(R)},onPlaybackRateChange:function(R){da=w.getCurrentTime();fa=el().getTime();N.Qc();X=R;V();Q()}}}function k(w){for(var x=w.split(","),y=x.length,z=[],B=0;B<y;B++){var A=parseInt(x[B],10);isNaN(A)||100<A||0>A||z.push(A/100)}z.sort(function(E,G){return E-G});return z}function l(w){for(var x=w.split(","),y=x.length,z=[],B=0;B<y;B++){var A=parseInt(x[B],10);isNaN(A)||0>A||z.push(A)}z.sort(function(E,G){return E-G});return z}function m(w,x,y){var z=w.map(function(E){return{Ga:E,
Ze:E,Se:void 0}});if(!x.length)return z;var B=x.map(function(E){return{Ga:E*y,Ze:void 0,Se:E}});if(!z.length)return B;var A=z.concat(B);A.sort(function(E,G){return E.Ga-G.Ga});return A}function n(w){w.vtp_triggerStartOption?p(w):Cg(function(){p(w)})}function p(w){var x=!!w.vtp_captureStart,y=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,B=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(x||y||z||B.length||A.length){var G={ng:x,lg:y,mg:z,
th:B,uh:A,ye:E,Dd:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},I=W("YT"),S=function(){f(G)};F(w.vtp_gtmOnSuccess);if(I)I.ready&&I.ready(S);else{var T=W("onYouTubeIframeAPIReady");ll("onYouTubeIframeAPIReady",function(){T&&T();S()});F(function(){for(var V=W("document"),Q=V.getElementsByTagName("script"),N=Q.length,K=0;K<N;K++){var J=Q[K].getAttribute("src");if(b(J,"iframe_api")||b(J,"player_api"))return}for(var P=V.getElementsByTagName("iframe"),U=P.length,X=0;X<U;X++)if(!v&&d(P[X],G.ye)){M("https://www.youtube.com/iframe_api");
v=!0;break}})}}else F(w.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,v=!1;Z.__ytl=n;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();
Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;u(Gl(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=u(e);c=u(c,f)||{}}u(Gl(c.vtp_fieldsToSet,"fieldName","value"),d);var h=Sg(c.vtp_functionName);if(ra(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+rf(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},p=function(x,y,z){var B=0,A;for(A in x)if(x.hasOwnProperty(A)&&
(z&&m[A]||!z&&void 0===m[A])){var E=n[A]?Ea(x[A]):x[A];"anonymizeIp"!==A||E||(E=void 0);y[A]=E;B++}return B},t={name:l};p(d,t,!0);var q={"&gtm":nk(!0)};p(d,q,!1);var r=encodeURI(L("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",q);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,M(r,function(){return Qg().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=W("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else F(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();
Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return se.o})}();
Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){F(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
Oj())&&ol(a,h,k,l));nl(e,c,d);jk(f,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");pl(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();Z.a.pntr=["nonGoogleScripts"];

Z.a.aev=["google"],function(){function a(q,r){var v=Zf(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var x=q+"."+r,y;if(n.hasOwnProperty(x))y=n[x];else{var z=a(q,w);if(z&&(y=v(z),n[x]=y,p.push(x),35<p.length)){var B=p.shift();delete n[B]}}return y}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(fl());va(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<r.length;x++)if(r[x]instanceof RegExp){if(r[x].test(q))return!1}else{var y=
r[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;w.push(e(y))}}return!Fl(q,w)}function e(q){m.test(q)||(q="http://"+q);return Nc(Pc(q),"HOST",!0)}function f(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(r,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(r,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Ac(q,"value");case "button":return Bc(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)uk(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Ac(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var x=a(r,"element");return x&&x.tagName||
v;case "TEXT":return b(r,w,Bc)||v;case "URL":var y;a:{var z=String(a(r,"elementUrl")||v||""),B=Pc(z),A=String(q.vtp_component||"URL");switch(A){case "URL":y=z;break a;case "IS_OUTBOUND":y=d(z,q.vtp_affiliatedDomains);break a;default:y=Nc(B,A,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var G=q.vtp_attribute,I=a(r,"element");E=I&&Ac(I,G)||v||""}return E;case "MD":var S=q.vtp_mdValue,T=b(r,"MD",Pk);return S&&T?Sk(T,S)||
v:T||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=u(a),c=b;c[he.xa]=null;c[he.Gf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){Lg();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:nk()},m=function(t){return function(q,r,v){var w="DATA_LAYER"==t?jl(v):k[r];w&&(l[q]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var p=!0;p&&b.push(l);a||(a=!0,M("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.b="baut";Z.__baut.g=!0;Z.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=W(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(h,k){void 0!==b[h]&&(e[k]=b[h])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction","ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);
b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{M("//bat.bing.com/bat.js",function(){var h=Bl(W("UET"),{ti:b.vtp_tagId,q:d});C[c]=h;h.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){F(b.vtp_gtmOnFailure)}})}();Z.a.logging=["google"],function(){function a(){return{}}(function(b){Z.__logging=b;Z.__logging.b="logging";Z.__logging.g=!0;Z.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){if("all"!==c&&!Cl.ah())throw d(e,{},"Logging is not enabled in all environments");},K:a}})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Gl(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){F(a.vtp_gtmOnFailure)})}();Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return Vi.Rb})}();
Z.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Z.__twitter_website_tag=a;Z.__twitter_website_tag.b="twitter_website_tag";Z.__twitter_website_tag.g=!0;Z.__twitter_website_tag.priorityOverride=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],M("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=Gl(a.vtp_event_parameters,"param_table_key_column",
"param_table_value_column");b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);F(a.vtp_gtmOnSuccess)})}();

Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,tc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){F(h)}}}var b=function(d,e,f){Cg(function(){var h,k=ff;k.postscribe||(k.postscribe=ve);h=k.postscribe;var l={done:e},m=D.createElement("div");m.style.display="none";m.style.visibility="hidden";D.body.appendChild(m);try{h(m,d,l)}catch(n){F(f)}})};var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,f=wl(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.cd,k=f.O;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,Cc(h),k,e)()}else dl(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();
Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&(!f.timeStamp||f.timeStamp!==d)){d=f.timeStamp;h=Dc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=bj("lcl",k?"nv.mwt":"mwt",0),m;m=k?bj("lcl","nv.ids",[]):bj("lcl","ids",[]);if(m.length){var n=Yi(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var p=W((ul(h,"target")||"_self").substring(1)),t=!0;if(kl(n,ti(function(){t&&p&&(p.location.href=ul(h,
"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else kl(n,function(){},l||2E3);return!0}}};yc(c,"click",e,!1);yc(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=ul(d,"href"),h=f.indexOf("#"),k=ul(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=hl(f),m=hl(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};aj("lcl","mwt",k,0);e||aj("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};aj("lcl","ids",l,[]);e||aj("lcl","nv.ids",l,[]);rl("lcl")||(a(),sl("lcl"));F(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(jl("gtm.start"))||0;return el().getTime()-f}function c(f,h,k,l){function m(){if(!Vk(f.target)){h.has(e.Ub)||h.set(e.Ub,""+b());h.has(e.Oc)||h.set(e.Oc,""+b());var p=0;h.has(e.Wb)&&(p=Number(h.get(e.Wb)));p+=100;h.set(e.Wb,""+p);if(p>=k){var t=Yi(f.target,"gtm.elementVisibility",[h.uid]),q=Uk(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.Oc));
t["gtm.visibleLastTime"]=Number(h.get(e.Ub));kl(t);l()}}}if(!h.has(e.ob)&&(0==k&&m(),!h.has(e.Pa))){var n=W("self").setInterval(m,100);h.set(e.ob,n)}}function d(f){f.has(e.ob)&&(W("self").clearInterval(Number(f.get(e.ob))),f.remove(e.ob))}var e={ob:"polling-id-",Oc:"first-on-screen-",Ub:"recent-on-screen-",Wb:"total-visible-time-",Pa:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.remove=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var x=!1,y=null;if("CSS"===l){try{y=ai(m)}catch(G){}x=!!y&&v.length!=y.length}else if("ID"===l){var z=D.getElementById(m);z&&(y=[z],x=1!=v.length||v[0]!==z)}y||(y=[],x=0<v.length);if(x){for(var B=0;B<v.length;B++){var A=
new a(v[B],q);d(A)}v=[];for(var E=0;E<y.length;E++)v.push(y[E]);0<=w&&al(w);0<v.length&&(w=$k(k,v,[t]))}}function k(x){var y=new a(x.target,q);x.intersectionRatio>=t?y.has(e.Pa)||c(x,y,p,"ONCE"===r?function(){for(var z=0;z<v.length;z++){var B=new a(v[z],q);B.set(e.Pa,"1");d(B)}al(w);if(n&&Ak)for(var A=0;A<Ak.length;A++)Ak[A]===h&&Ak.splice(A,1)}:function(){y.set(e.Pa,"1");d(y)}):(d(y),"MANY_PER_ELEMENT"===r&&y.has(e.Pa)&&(y.remove(e.Pa),y.remove(e.Wb)),y.remove(e.Ub))}var l=f.vtp_selectorType,m;"ID"===
l?m=String(f.vtp_elementId):"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,p=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,r=f.vtp_firingFrequency,v=[],w=-1;h();n&&Bk(h);F(f.vtp_gtmOnSuccess)})}();

var an={};an.macro=function(a){if(Vi.Pc.hasOwnProperty(a))return Vi.Pc[a]},an.onHtmlSuccess=Vi.se(!0),an.onHtmlFailure=Vi.se(!1);an.dataLayer=Rf;an.callback=function(a){pf.hasOwnProperty(a)&&ra(pf[a])&&pf[a]();delete pf[a]};an.eg=function(){ff[se.o]=an;Ka(qf,Z.a);$d=$d||Vi;ae=ug};
an.Vg=function(){Qj.gtm_3pds=!0;ff=C.google_tag_manager=C.google_tag_manager||{};if(ff[se.o]){var a=ff.zones;a&&a.unregisterChild(se.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Td.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Wd.push(e[f]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Vd.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Ud.push(p)}Yd=Z;Zd=zl;var q=data.permissions||{},r=data.sandboxed_scripts;Hh();Nh(q);if(void 0!==r)for(var v=["sandboxedScripts"],w=0;w<r.length;w++){var x=r[w].replace(/^_*/,"");qf[x]=v}an.eg();yi();xg=!1;yg=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)Ag();else{yc(D,"DOMContentLoaded",Ag);yc(D,"readystatechange",
Ag);if(D.createEventObject&&D.documentElement.doScroll){var y=!0;try{y=!C.frameElement}catch(E){}y&&Bg()}yc(C,"load",Ag)}li=!1;"complete"===D.readyState?ni():yc(C,"load",ni);a:{if(!Gf)break a;C.setInterval(Hf,864E5);}
mf=(new Date).getTime();}};(0,an.Vg)();

})()
