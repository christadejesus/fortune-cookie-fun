const data = [
  "Great things are on the horizon for you.",
  "Your hard work will soon pay off.",
  "Expect a pleasant surprise this week.",
  "A new opportunity is headed your way.",
  "Good fortune will come your way soon.",
  "Trust your instincts — they're guiding you right.",
  "Your kindness will lead to unexpected rewards.",
  "Happiness is closer than you think.",
  "Your creativity will bring you success.",
  "Someone appreciates your efforts more than you know.",
  "A positive attitude will take you far.",
  "You are capable of achieving greatness.",
  "Something wonderful is about to happen.",
  "An exciting journey is ahead of you.",
  "Your persistence will lead to success.",
  "A meaningful connection is in your future.",
  "New experiences will bring you joy.",
  "Your dreams are within reach.",
  "You are stronger than any challenge.",
  "Good news is coming your way.",
  "Success is just around the corner.",
  "Your positivity is contagious.",
  "You are on the path to greatness.",
  "A fresh start will bring new energy.",
  "Believe in yourself and all will be well.",
  "Your talents will open new doors.",
  "A small act of kindness will go a long way.",
  "Good vibes are heading your way.",
  "You are about to make a new friend.",
  "A happy surprise awaits you soon.",
  "Your goals are closer than you think.",
  "You have the power to change your future.",
  "A smile will bring you luck today.",
  "Your future is filled with endless possibilities.",
  "The best is yet to come.",
  "You are destined for greatness.",
  "A new chapter in life is about to begin.",
  "Your efforts will be rewarded.",
  "You are surrounded by positive energy.",
  "Good things are on their way to you."
];

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
  const randomFortune = document.getElementById("random-fortune");
  const button = document.getElementById("more-btn");
  const reset = document.getElementById("reset-btn");
  
  const getRandomQuote = () => Math.floor(Math.random() * data.length);

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
    randomFortune.innerHTML = data[getRandomQuote()];
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
  