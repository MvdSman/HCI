<script>
 (function(w, d, ns) {
  var _ns = "_" + ns;
 
  w[_ns] = w[_ns] || {
   elements: [],
   addElements: function(selector, onShow, onHide) {
     var elements = d.querySelectorAll(selector);
 
     for (var i = 0; i < elements.length; i++) {
      w[_ns].elements.push({
        element: elements[i],
        onShow: onShow,
        onHide: onHide,
        wasShown: false,
        wasHidden: false
       });
      }
 
      w[_ns].checkElements();
     },
     checkElements: function() {
      for (var i = 0; i < w[_ns].elements.length; i++) {
       var rect = { top: 0, left: 0 },
         isVisible = false;
 
         if (typeof w[_ns].elements[i].element.getBoundingClientRect === "function") {
         rect = w[_ns].elements[i].element.getBoundingClientRect();
      }
 
      if (rect.top + w[_ns].getWindowOffset() > w[_ns].getWindowOffset()) {
       if (rect.top + w[_ns].getWindowOffset() < w[_ns].getWindowOffset() + w[_ns].getWindowHeight()) {
        isVisible = true;
       }
      }
 
      if (rect.top + w[_ns].getWindowOffset() + w[_ns].elements[i].element.offsetHeight > w[_ns].getWindowOffset()) {
       if (rect.top + w[_ns].getWindowOffset() + w[_ns].elements[i].element.offsetHeight < w[_ns].getWindowOffset() + w[_ns].getWindowHeight()) {
        isVisible = true;
       }
      }
 
      if (isVisible) {
       if (!w[_ns].elements[i].wasShown) {
         w[_ns].elements[i].wasShown = true;
 
          if (typeof w[_ns].elements[i].onShow === "function") {
           w[_ns].elements[i].onShow(w[_ns].elements[i].element);
            }
           } 
          } else {
           if (w[_ns].elements[i].wasShown) {
            if (!w[_ns].elements[i].wasHidden) {
             w[_ns].elements[i].wasHidden = true;
 
              if (typeof w[_ns].elements[i].onHide === "function") {
               w[_ns].elements[i].onHide(w[_ns].elements[i].element);
              }
             }
            }
           }
          }
         },
         getWindowOffset: function() {
          return (w.pageYOffset || d.documentElement.scrollTop) - (d.documentElement.clientTop || 0);
         },
         getWindowHeight: function() {
          return w.innerHeight || d.documentElement.clientHeight || d.body.clientHeight;
         },
         bindWindow: function() {
          if (typeof w[_ns].onWindowResize !== "function" || typeof w[_ns].onWindowScroll !== "function") {
           w[_ns].onWindowResize = function() {
            w[_ns].checkElements();
           };
 
         w.attachEvent ? w.attachEvent("onresize", w[_ns].onWindowResize) : w.addEventListener("resize", w[_ns].onWindowResize, false);
          w[_ns].onWindowScroll = function() {
           w[_ns].checkElements();
          };
 
         w.attachEvent ? w.attachEvent("onscroll", w[_ns].onWindowScroll) : w.addEventListener("scroll", w[_ns].onWindowScroll, false);
         }
        }
       };
 
         w[ns] = w[ns] || function(selector, onShow, onHide) {
          if (d.readyState === "complete") {
           w[_ns].bindWindow();
            w[_ns].addElements(selector, onShow, onHide);
          } else if (d.attachEvent) {
            d.attachEvent("onreadystatechange", function() {
             if (d.readyState === "complete") {
              w[_ns].bindWindow();
               setTimeout(function() {
                w[_ns].addElements(selector, onShow, onHide);
               }, 500);
              }
             });
            } else {
             d.addEventListener("readystatechange", function() {
              if (d.readyState === "complete") {
               w[_ns].bindWindow();
                setTimeout(function() {
                 w[_ns].addElements(selector, onShow, onHide);
                }, 500);
               }
              });
             }
            };
           })(window, document, "watchElements");
 
   watchElements("section", function(element) { //change the CSS Selector
     window.dataLayer = window.dataLayer || [];
     window.dataLayer.push({
       'event': 'elementVisibility',
       'visibilityStatus': 'shown',
       'elementAttribute': element.getAttribute("id") //change the attribute (optional)
     });
   }, function(element) {
     window.dataLayer = window.dataLayer || [];
     window.dataLayer.push({
       'event': 'elementVisibility',
       'visibilityStatus': 'hidden',
       'elementAttribute': element.getAttribute("id") //change the attribute (optional)
     });
 });
 </script>
