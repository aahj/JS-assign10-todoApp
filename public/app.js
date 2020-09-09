var inputs = document.getElementById('prompt')
var ul = document.getElementById('list')
function addItem(){
    //for li tag and its text
    var li = document.createElement('li');
    var liText = document.createTextNode(inputs.value);
    li.setAttribute('class','listClass')
    li.appendChild(liText);
    
    //for delete button tag and its text
    var dltbtn = document.createElement('button');
    var dltbtnText = document.createTextNode("DELETE");
    dltbtn.setAttribute('class','btn btn-primary btn-sm')
    dltbtn.setAttribute('id','btn')
    dltbtn.setAttribute('onclick','deleteItem(this)')
    dltbtn.appendChild(dltbtnText);
    li.appendChild(dltbtn);

    //for edit button tag and its text
    var editbtn = document.createElement('button');
    var editbtnText = document.createTextNode("EDIT");
    editbtn.setAttribute('class','btn btn-primary btn-sm')
    editbtn.setAttribute('id','btn')
    editbtn.setAttribute('onclick','editItem(this)')
    editbtn.appendChild(editbtnText);
    li.appendChild(editbtn);
    
    ul.appendChild(li);
    inputs.value = "";
    inputs.focus();
}

function deleteall(){
    ul.innerHTML = '';
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var valedit = prompt('Enter value to be Update ',val)
    e.parentNode.firstChild.nodeValue = valedit;
}
function deleteItem(e){
    e.parentNode.remove();
}