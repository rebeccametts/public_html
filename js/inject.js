// be sure extension version gets sent to pin/create form
//
// (function(){
//
//   var version, defaultVersion;
//     defaultVersion = '1.35';
//
//       var debug = function (str) {
//           if (showDebug) {
//                 console.log(str);
//                     }
//                       };
//
//                         var showDebug = false;
//
//                           safari.self.addEventListener("message", function (e) {
//                               debug('inject.js: message arrived: ' + e.name);
//
//                                   switch(e.name) {
//
//                                         case 'inject':
//                                                 debug('inject.js: injecting background js');
//                                                         eval(e.message);
//                                                                 break;
//
//                                                                       case 'grid':
//                                                                               version = e.message || defaultVersion;
//                                                                                       debug('inject.js: pop the grid');
//                                                                                               if (window.top === window) {
//                                                                                                         debug('popping the grid');
//                                                                                                                   var s = document.createElement('script');
//                                                                                                                             s.setAttribute('type','text/javascript');
//                                                                                                                                       s.setAttribute('charset','UTF-8');
//                                                                                                                                                 s.setAttribute('pinMethod','extension');
//                                                                                                                                                           s.setAttribute('extensionVer',version);
//                                                                                                                                                                     s.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?'+Math.random()*99999999);
//                                                                                                                                                                               document.body.appendChild(s);
//                                                                                                                                                                                       } else {
//                                                                                                                                                                                                 debug('not popping the grid in an iframe');
//                                                                                                                                                                                                         }
//                                                                                                                                                                                                                 break;
//
//                                                                                                                                                                                                                       default:
//                                                                                                                                                                                                                               break;
//                                                                                                                                                                                                                                   };
//
//                                                                                                                                                                                                                                     });
//
//                                                                                                                                                                                                                                       debug('inject.js: listening for messages on safari.self ');
//
//                                                                                                                                                                                                                                       }());
//
//
//
