var inputs = document.getElementById('prompt')
var ul = document.getElementById('list')
var ref = firebase.database().ref('Task');


firebase.database().ref('Task').on('child_added', function (snapshot) {
    //for li tag and its text
    var li = document.createElement('li');
    var liText = document.createTextNode(snapshot.val().values);
    li.setAttribute('class', 'listClass')
    li.appendChild(liText);

    //for delete button tag and its text
    var dltbtn = document.createElement('button');
    var dltbtnText = document.createTextNode("DELETE");
    dltbtn.setAttribute('class', 'btn btn-primary btn-sm')
    dltbtn.setAttribute('id', snapshot.val().key)
    dltbtn.setAttribute('onclick', 'deleteItem(this)')
    dltbtn.appendChild(dltbtnText);
    li.appendChild(dltbtn);

    //for edit button tag and its text
    var editbtn = document.createElement('button');
    var editbtnText = document.createTextNode("EDIT");
    editbtn.setAttribute('class', 'btn btn-primary btn-sm')
    editbtn.setAttribute('id', snapshot.val().key)
    editbtn.setAttribute('onclick', 'editItem(this)')
    editbtn.appendChild(editbtnText);
    li.appendChild(editbtn);

    ul.appendChild(li);
})

function addItem() {
    let promi = new Promise(function (resolve, reject) {
        //---------------push to database---------------
        var key = firebase.database().ref('Tasks').push().key;
        var userValue = {
            values: inputs.value,
            key: key
        }
        ref.child(key).set(userValue);            
            resolve('It is Passed')            
            
    })
    inputs.value = "";
    inputs.focus();

    promi
    .then(function(data){
        console.log('data',data)
    })
    .catch(function(error){
        console.log('error de rha',error)
    })
}

function deleteall() {
    ul.innerHTML = '';
    firebase.database().ref('Task/').remove();
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var valedit = prompt('Enter value to be Update ', val)
    var edit_userValue = {
        values: valedit,
        key: e.id
    }
    firebase.database().ref('Task').child(e.id).set(edit_userValue)
    e.parentNode.firstChild.nodeValue = valedit;
}

function deleteItem(e) {
    e.parentNode.remove();
    ref.child(e.id).remove();
}
