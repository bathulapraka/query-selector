var header =document.querySelector('#main-header');
header.style.borderBottom='solid 19px #ccc'

var pointer =document.querySelector('input');
pointer.value='PRAKASH';

var inside=document.querySelector('input[type="submit"]');
inside.value='send';

var second =document.querySelector('.list-group-item:nth-child(2)');
second.style.background='green';

//we can use by using tag name
var seco =document.getElementsByTagName('li')[1];
seco.style.display='none';

var delet =document.querySelector('.list-group-item:nth-child(2)');
delet.style.display='none';


queryselector all

var  change = document.querySelectorAll('.list-group-item:nth-child(2)');
change.style.color='green';

even background color

var even =document.querySelectorAll('.list-group-item:nth-child(even)');

for(var i=0;i<even.length;i++){
    even[i].style.backgroundColor='#fcfc';
}


var titles=document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent='List OF ITEMS';

var odd =document.querySelectorAll('.list-group-item:nth-child(odd)');

for(var i=0;i<odd.length;i++){

    odd[i].style.backgroundColor='#f4f4';
}
