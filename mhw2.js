
function onClick(event) {
  const button = event.currentTarget;
  const answer = button.nextElementSibling;
  const symbol = button.querySelector('.più');

  const isVisible = answer.style.display === 'block';
  answer.style.display = isVisible ? 'none' : 'block';
  symbol.textContent = isVisible ? '+' : 'x';
}
const buttons = document.querySelectorAll('.faq-question');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', onClick);
}


document.querySelectorAll(".locandina").forEach(function(img) {
  img.addEventListener("click", function() {
    var popup = document.createElement("div");
    popup.className = "popup-overlay";

    var content = document.createElement("div");
    content.className = "popup-content";

    var closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "x";
  
    
    closeBtn.addEventListener("click", function() {
      popup.remove(); 
    });

    var image = document.createElement("img");
    image.src = this.src; 

    var title = document.createElement("h2");
    title.textContent = this.dataset.titolo;

    var tags = document.createElement("div");
    tags.textContent = this.dataset.anno + " • " + this.dataset.generi;

    var desc = document.createElement("p");
    desc.textContent = this.dataset.descrizione;

    content.appendChild(closeBtn);
    content.appendChild(image);
    content.appendChild(title);
    content.appendChild(tags);
    content.appendChild(desc);

    popup.appendChild(content);
    document.body.appendChild(popup);
  });
});


var dark = true;
document.getElementById("tema-button").addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
});


document.querySelectorAll(".locandina").forEach(function(img) {
  img.addEventListener("click", function() {
    this.classList.toggle("preferito");
  });
});
