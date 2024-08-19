// Create sprites or 'cookies' programmatically to be positioned with CSS 
// and maintain separate interactivity for each

function makeSprites(n) {
    const spritesContainer = document.getElementById("sprites-container");
    const sprite = `<img src="assets/fortune-cookie-A.png" class="sprite"/>`;
    const spriteArr = [];
  
    for (let i = 0; i < n; i++) {
      const newArr = spriteArr.push(sprite);
    }
    
    // Create rows to store sprites
    const spriteRow = document.createElement("div");
    spriteRow.classList.add("sprite-row");

    // Populate rows with clickable sprite buttons
    spriteRow.innerHTML = spriteArr
      .map(
        (item) =>
          `<button class="sprite-btn" onClick="handlePick(this)">${item}</button>`
      )
      .join("");
    // Add each sprite row to the parent container
    spritesContainer.appendChild(spriteRow);
  }

  // Make sprite rows happen!
  makeSprites(2);
  makeSprites(3);
  makeSprites(2);
  
  let totalSprites = 7;
  const overlay =  document.getElementById("overlay");
  const directions = document.getElementById("directions");
  const cookie = document.getElementById("img1");
  const fortune = document.getElementById("img2");
  const button = document.getElementById("more-btn");
  const reset = document.getElementById("reset-btn");

  // When user clicks on a cookie from the plate...
  function handlePick(obj) {
    totalSprites -= 1;
    obj.classList.add("hidden"); //hides the cookie selected 
    cookie.classList.remove("discard"); // needed to clear class for new picks
    fortune.classList.remove("focus"); // needed to clear class for new picks
    button.classList.remove("show"); // needed to clear class for new picks
    reset.classList.remove("show"); // needed to clear class for new picks
    overlay.classList.add("overlay-active");
    directions.classList.add("hidden");
    cookie.classList.add("shake");
  }

  // When user clicks on the expanded cookie...
  function handleMessage() {
    cookie.classList.add("discard");
    fortune.classList.add("focus");
    if (totalSprites > 0) {
      button.classList.add("show");
    } else {
      reset.classList.add("show");
    }
  }

  // When user clicks 'Try Again' button...
  function handleMore() {
   overlay.classList.remove("overlay-active");
   directions.classList.remove("hidden");
 }

  // When all cookies are gone and user clicks 'Reset' button...
  function handleReset() {
    totalSprites = 7;
    overlay.classList.remove("overlay-active");
    directions.classList.remove("hidden");
    const hiddenSprites = document.querySelectorAll(".sprite-btn");
    
    hiddenSprites.forEach(element => {
      element.classList.remove("hidden");
    });
    
  }
  