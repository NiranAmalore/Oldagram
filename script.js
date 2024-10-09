const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const oldagramPost = document.getElementById("post")

let oldagramPostText = ""

for(let i = 0; i < posts.length; i++){
    oldagramPostText += 
        `
        <section>
            <div class="section-container">
                <div class="user-section">
                    <div class="padding-for-user-follower-avatar">
                        <img class="avatar-resize" src="${posts[i].avatar}" alt="Avatar of user's follower">
                    </div>
                    <div class="user-details">
                        <h3>${posts[i].name}</h3>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                <img class="post-resize lyk-button" src="${posts[i].post}" alt="Post of a user follower" data-index="${i}">
                <div class="appeals-bar">
                    <img class="button-resizer like-button" src="images/icon-heart.png" alt="like button" data-index="${i}">
                    <img class="button-resizer" src="images/icon-comment.png" alt="comment button">
                    <img class="button-resizer" src="images/icon-dm.png" alt="share button"> 
                </div>
                <h3 id="likes-${i}">${posts[i].likes} likes</h3>
                <div class="following-info">
                    <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
                <div class='seperator'>
                </div>
            </div>
        </section>
        `
}


oldagramPost.innerHTML = oldagramPostText

function likesUp(postIndex){
    posts[postIndex].likes += 1

    const likesElement = document.getElementById(`likes-${postIndex}`)
    likesElement.textContent = `${posts[postIndex].likes} likes`
}

function dblykUp(postIndex){
    posts[postIndex].likes += 1

    const likesElement = document.getElementById(`likes-${postIndex}`)
    likesElement.textContent = `${posts[postIndex].likes} likes`
}

document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        likesUp(index);
    });
});

document.querySelectorAll('.lyk-button').forEach(image => {
    image.addEventListener('dblclick', (event) => {
        const index = event.target.getAttribute('data-index');
        dblykUp(index);
    });
});