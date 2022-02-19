document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container')
    container.style.border = "solid 10px goldenrod";
});

function changeBg() {
    const friend = document.getElementsByClassName('friend');
    for (const frys of friend) {
        frys.style.backgroundColor = 'lightblue';
    }
};

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h3 class="friend-name">Friend-4</h3>
            <p>lorem2</p>
    `;
    container.appendChild(friendDiv);
})