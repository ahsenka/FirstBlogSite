// JavaScript source code
// Yazıları tutmak için yerel depolama kontrolü
let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Sayfa yüklendiğinde yazıları göster
window.onload = function() {
    renderPosts();
};

// Yeni yazı ekleme
document.getElementById('add-post').addEventListener('click', function() {
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    
    if (title && content) {
        const post = { title, content };
        posts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(posts));
        renderPosts();
        clearForm();
    } else {
        alert('Lütfen başlık ve içerik giriniz!');
    }
});

// Yazıları render etme
function renderPosts() {
    const postsList = document.getElementById('posts');
    postsList.innerHTML = '';
    
    posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${post.title}</strong> - ${post.content}
            <button onclick="deletePost(${index})">Sil</button>
        `;
        postsList.appendChild(li);
    });
}

// Yazı silme
function deletePost(index) {
    posts.splice(index, 1);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    renderPosts();
}

// Formu temizleme
function clearForm() {
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-content').value = '';
}
