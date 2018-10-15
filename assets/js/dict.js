//don't forget to add <body ondblclick="dictionary()">
function dictionary() {
if (navigator.appName!='Microsoft Internet Explorer') {
	od((typeof(window["getSelection"])=="undefined"?document.getSelection():window.getSelection().toString()));
	}
else {
	var t = document.selection.createRange();
	if(document.selection.type == 'Text' && t.text>'') {
		document.selection.empty();
		od(t.text);}
   }
function od(t) {
t = t.replace(/[́!.:?,;"]/g, '').replace(/[\n\t ]/g, ' ').replace(/^\s+|\s+$/, '');
if (t) window.open('http://www.thefreedictionary.com/_/search.aspx?tab=1&Word=' + encodeURIComponent(t), 'dict', 'width=700,height=500,resizable=1,menubar=1,scrollbars=1,status=1,titlebar=1,toolbar=1,location=1,personalbar=1', "DictionaryFrame");
}   
};
status='double-click any word - get its instant definition in the dictionary.';
if (navigator.appName=='Microsoft Internet Explorer') document.ondblclick=dictionary; //works for IE only. For other browsers add <body ondblclick="dictionary()">
