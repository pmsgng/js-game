for (let i=0; i<9; i++) (
    document.getElementById('game').innerHTML+='<div class="block"></div>'

)
let hod = 0;
document.getElementById('game').onclick = function(event) {
    console.log(event);
    if (event.target.className == 'block') {
        if(hod %2 == 0) {
            event.target.innerHTML = 'x';
        }else {
            event.target.innerHTML = 'o';
        }
        hod++;
        checkWinner()
    }
}

function checkWinner() {
    let allblock = document.getElementsByClassName('block')
    //console.log(allblock);
    if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') {
        alert('Крестики победили')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
      }  
    
    if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') {
        alert('Крестики победили')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
      } 
    
    if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') {
        alert('Крестики победили')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
      } 
    if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x') {
        alert('Крестики победили')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
      }  
    if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x') {
        alert('Крестики победили')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
      } 
    if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x') {
        alert('Крестики победили')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
      }  
    if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x') {
        alert('Крестики победили')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
      } 
    if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x') {
        alert('Крестики победили')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
      } 
    //----------------------нолики
    if (allblock[0].innerHTML=='o' && allblock[1].innerHTML=='o' && allblock[2].innerHTML=='o') {
        alert('Победили нолики')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
      } 
    if (allblock[3].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[5].innerHTML=='o') {
        alert('Победили нолики')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
    }
    if (allblock[6].innerHTML=='o' && allblock[7].innerHTML=='o' && allblock[8].innerHTML=='o') {
        alert('Победили нолики')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
    }
    if (allblock[0].innerHTML=='o' && allblock[3].innerHTML=='o' && allblock[6].innerHTML=='o') {
        alert('Победили нолики')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
    }
    if (allblock[1].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[7].innerHTML=='o') {
        alert('Победили нолики')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
    }
    if (allblock[2].innerHTML=='o' && allblock[5].innerHTML=='o' && allblock[8].innerHTML=='o') {
        alert('Победили нолики')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
    }
    if (allblock[0].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[8].innerHTML=='o') {
        alert('Победили нолики')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
    }
    if (allblock[2].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[6].innerHTML=='o') {
        alert('Победили нолики')
        function showModal(id) {
            return document.getElementById(id).style.display = 'flex';
        }
        showModal('modal');
    }
    document.getElementById('button').onclick = function() {
        return document.getElementById('modal').style.display = 'none' && window.location.reload();
    }
}

//012 
//345
//678
// document.getElementById('modal') = function(event) {

// }
// function showStuff(id) {
//     document.getElementById(id).style.display = 'block';
//   }