let textarea = document.querySelector('textarea'),
    post = document.querySelector('#post'),
    bold = document.querySelector('#bold'),
    green = document.querySelector('#green'),
    pub = document.querySelector('#pub');


bold.addEventListener('mousedown', function () {
    let activeEl = document.activeElement,
        start = activeEl.value.slice(0, activeEl.selectionStart),
        selectedText = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd),
        end = activeEl.value.slice(activeEl.selectionEnd, activeEl.value.length);
    activeEl.value = start + "[b]" + selectedText.toString() + "[/b]" + end;

});

green.addEventListener('mousedown', function () {
    let activeEl = document.activeElement,
        start = activeEl.value.slice(0, activeEl.selectionStart),
        selectedText = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd),
        end = activeEl.value.slice(activeEl.selectionEnd, activeEl.value.length);
    activeEl.value = start + "[green]" + selectedText.toString() + "[/green]" + end;

});

post.addEventListener('click', function() {
    let convert = textarea.value.replace(/\[b\]/g, "<span style='font-weight:bold;'>");
    convert = convert.replace(/\[\/b\]/g, "<\/span b>");
    convert = convert.replace(/\[green\]/g, "<span style='color:green;'>");
    convert = convert.replace(/\[\/green\]/g, "<\/span green>");
    
    pub.innerHTML += convert + '<br/><br/>';
    
    textarea.value = '';
});