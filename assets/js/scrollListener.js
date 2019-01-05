
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
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
