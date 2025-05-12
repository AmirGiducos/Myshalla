let heartCount = 10; 

function validateName() {
    const nameInput = document.getElementById('name').value.trim().toLowerCase();

    if (nameInput === "shaina") {
        document.getElementById('quiz-form').style.display = 'none';
        document.getElementById('welcome-message').innerHTML =
            '<h1 style="text-align: center; color: white; font-family: \'Courier New\', Courier, monospace;">Hi my baby! Welcome to the quiz!! :></h1>';
        document.getElementById('rules-form').style.display = 'block';
        return false;
    } else {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('name').value = '';
        return false;
    }
}

function startQuiz() {
    document.getElementById('rules-form').style.display = 'none';
    document.getElementById('quiz-question-form').style.display = 'block';
    document.getElementById('hearts-container').innerHTML = "💖".repeat(heartCount);
}

document.addEventListener('DOMContentLoaded', function () {
    // Question 1
    document.getElementById('quiz-question').addEventListener('submit', function (event) {
        event.preventDefault();

        const selected = document.querySelector('input[name="date"]:checked');
        const allOptions = document.querySelectorAll('input[name="date"]');
        const heartsContainer = document.getElementById('hearts-container');
        const emojiContainer = document.getElementById('emoji-container');
        const nextBtn = document.getElementById('next-btn');

        if (!selected) return;

        allOptions.forEach(option => {
            option.disabled = true;
            const label = option.parentElement;
            label.innerHTML = label.textContent.replace("✅", "").replace("❌", "");

            if (option.value === "March 6 2024") {
                label.innerHTML += " ✅";
            } else if (option.checked) {
                label.innerHTML += " ❌";
            }
        });

        if (selected.value !== "March 6 2024") {
            heartCount = Math.max(0, heartCount - 1);
            emojiContainer.innerHTML = "😭";
        } else {
            emojiContainer.innerHTML = "";
        }

        heartsContainer.innerHTML = "💖".repeat(heartCount);
        nextBtn.style.display = "inline-block";
    });

    // Next to Question 2
    document.getElementById('next-btn').addEventListener('click', function () {
        document.getElementById('quiz-question-form').style.display = 'none';
        document.getElementById('quiz-question-2').style.display = 'block';
        document.getElementById('hearts-container-2').innerHTML = "💖".repeat(heartCount);
    });

    // Question 2
    document.getElementById('question-2-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const selected = document.querySelector('input[name="place"]:checked');
        const allOptions = document.querySelectorAll('input[name="place"]');
        const heartsContainer = document.getElementById('hearts-container-2');
        const emojiContainer = document.getElementById('emoji-container-2');
        const nextBtn2 = document.getElementById('next-btn-2');

        if (!selected) return;

        allOptions.forEach(option => {
            option.disabled = true;
            const label = option.parentElement;
            label.innerHTML = label.textContent.replace("✅", "").replace("❌", "");

            if (option.value === "Sm nova") {
                label.innerHTML += " ✅";
            } else if (option.checked) {
                label.innerHTML += " ❌";
            }
        });

        if (selected.value !== "Sm nova") {
            heartCount = Math.max(0, heartCount - 1);
            emojiContainer.innerHTML = "😭";
        } else {
            emojiContainer.innerHTML = "";
        }

        heartsContainer.innerHTML = "💖".repeat(heartCount);
        nextBtn2.style.display = "inline-block";
    });

    // Next to question number 3
    document.getElementById('next-btn-2').addEventListener('click', function () {
        document.getElementById('quiz-question-2').style.display = 'none';
        document.getElementById('quiz-question-3').style.display = 'block';
        document.getElementById('hearts-container-3').innerHTML = "💖".repeat(heartCount);
    });

    // Question 3
    document.getElementById('question-3-form').addEventListener('submit', function (event){
        event.preventDefault();
        const selected = document.querySelector('input[name="Grade"]:checked');
        const allOptions = document.querySelectorAll('input[name="Grade"]');
        const heartsContainer = document.getElementById('hearts-container-3');
        const emojiContainer = document.getElementById('emoji-container-3');
        const nextBtn3 = document.getElementById('next-btn-3');

        if (!selected) return;

        allOptions.forEach(option => {
            option.disabled = true;
            const label = option.parentElement;
            label.innerHTML = label.textContent.replace("✅", "").replace("❌", "");

            if (option.value === "Grade 10") {
                label.innerHTML += " ✅";
            } else if (option.checked) {
                label.innerHTML += " ❌";
            }
        });

        if (selected.value !== "Grade 10") {
            heartCount = Math.max(0, heartCount - 1);
            emojiContainer.innerHTML = "😭";
        } else {
            emojiContainer.innerHTML = "";
        }

        heartsContainer.innerHTML = "💖".repeat(heartCount);
        nextBtn3.style.display = "inline-block";
    });

    // Next to question number 4
    document.getElementById('next-btn-3').addEventListener('click', function () {
        document.getElementById('quiz-question-3').style.display = 'none';
        document.getElementById('quiz-question-4').style.display = 'block';
        document.getElementById('hearts-container-4').innerHTML = "💖".repeat(heartCount);
    });

    // Question 4
    // Question 4 form submit handler
    document.getElementById('question-4-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const selected = document.querySelector('input[name="Emotion"]:checked');
        const quoteContainer = document.getElementById('quote-container');
        
        if (!selected) return;
    
        
        const quotes = {
            "Great": "I'm so proud of you for feeling this way today.",
            "Bad": "Even on the worst days, I want you to know that you're still my favorite person, and I will always be here by your side.",
            "Good": "Good is good, but I'll do my best to make it even better, Because of how much I love you.",
            "Worried": "It's okay to feel worried, but I'm always going to be here to hold your hand through anything."
        };
    
        // Get the selected emotion
        const emotionValue = selected.value;
    
        
        quoteContainer.innerHTML = `<h2>${quotes[emotionValue]}</h2>`;

        
        document.querySelectorAll('input[name="Emotion"]').forEach(option => {
            option.disabled = true;
        });
        
       
        document.querySelector('#question-4-form input[type="submit"]').style.display = 'none';
        
        
        const monthsaryBtn = document.createElement('button');
        monthsaryBtn.innerText = "Happy Monthsary, love →";
        monthsaryBtn.id = "monthsary-btn";
        monthsaryBtn.style.position = "absolute";
        monthsaryBtn.style.bottom = "20px";
        monthsaryBtn.style.right = "20px";
        monthsaryBtn.style.backgroundColor = "#FF6B8B";
        monthsaryBtn.style.color = "white";
        monthsaryBtn.style.padding = "10px 20px";
        monthsaryBtn.style.borderRadius = "10px";
        monthsaryBtn.style.border = "none";
        monthsaryBtn.style.cursor = "pointer";
        monthsaryBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        monthsaryBtn.style.fontSize = "16px";
        monthsaryBtn.style.fontWeight = "bold";
        
        
        monthsaryBtn.onmouseover = function() {
            this.style.backgroundColor = "#FF4D7F";
            this.style.transform = "scale(1.05)";
            this.style.transition = "all 0.3s ease";
        };
        
        monthsaryBtn.onmouseout = function() {
            this.style.backgroundColor = "#FF6B8B";
            this.style.transform = "scale(1)";
        };
        
        
        monthsaryBtn.addEventListener('click', function() {
            showLetterPage();
        });
        
        document.getElementById('quiz-question-4').appendChild(monthsaryBtn);
    });
    
    
    function showLetterPage() {
        
        document.querySelectorAll('.quiz-container').forEach(container => {
            container.style.display = 'none';
        });
        
        
        document.getElementById('welcome-message').innerHTML =
            '<h1 style="text-align: center; color: white; font-family: \'Courier New\', Courier, monospace;">Happy Monthsary, My babyyyy! ❤️</h1>';
        
        
        const letterPage = document.createElement('div');
        letterPage.id = 'letter-page';
        letterPage.className = 'quiz-container';
        letterPage.style.height = '70vh';
        letterPage.style.width = '60%';
        letterPage.style.maxWidth = '800px';
        letterPage.style.overflow = 'auto';
        letterPage.style.display = 'flex';
        letterPage.style.flexDirection = 'column';
        letterPage.style.alignItems = 'center';
        letterPage.style.justifyContent = 'flex-start';
        letterPage.style.padding = '40px';
        
        
        letterPage.innerHTML = `
            <h2 style="margin-bottom: 20px;">My Letter to You</h2>
            <h3 style="margin-bototm: 10px;">Happy monthsary my loveeee I MISS YOU!!</h3>
            <div id="letter-content" style="text-align: left; line-height: 1.6; font-size: 16px;">
                <!-- Your personalized letter goes here -->
                <p>Dear Baby,</p>
                <p>I love you so much, my love for you will never fade. You're the most wonderful lady I've ever met and you will always have the number 1 spot in my heart, my love.</p>
                <p>Last month was very confusing, lots of stressful events that happened and many other difficult situations that we had to go through, but you know what? The both of us stayed strong deepening our bond,  love  even further... and I'm so proud for the both of us for that.  I deeply got to know you even more, and what's the best to celebrate it with a blast right? That's why I made this for you 😘 because you're a special girl and you have a special place in my heart 😘 Thank you so much for being a blessing to my life and I'm happy that our May, my birthmonth started off with a blast. I love you so much my baby. To every days, months, and years that we will spend with eachother for the rest of our lives, cheers. My love. 😘 </p>
                <p>With all my love,</p>
                <p>Your baby, Amir</p>
            </div>
            <div style="margin-top: 30px; display: flex; justify-content: center;">
                <div style="font-size: 40px; color: #FF6B8B;">❤️</div>
            </div>
        `;
        
        
        document.body.appendChild(letterPage);
        
        
        addFloatingHearts();
    }
    
    
    function addFloatingHearts() {
        const heartContainer = document.createElement('div');
        heartContainer.style.position = 'fixed';
        heartContainer.style.top = '0';
        heartContainer.style.left = '0';
        heartContainer.style.width = '100%';
        heartContainer.style.height = '100%';
        heartContainer.style.pointerEvents = 'none';
        heartContainer.style.zIndex = '-1';
        document.body.appendChild(heartContainer);
        
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'absolute';
                heart.style.fontSize = `${Math.random() * 20 + 10}px`;
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.opacity = '0';
                heart.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
                
                
                const keyframes = `
                    @keyframes float {
                        0% {
                            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                            opacity: ${Math.random() * 0.5 + 0.3};
                        }
                        100% {
                            transform: translateY(-10vh) rotate(${Math.random() * 360}deg);
                            opacity: 0;
                        }
                    }
                `;
                
                const styleElement = document.createElement('style');
                styleElement.innerHTML = keyframes;
                document.head.appendChild(styleElement);
                
                heartContainer.appendChild(heart);
                
                
                setTimeout(() => {
                    heart.remove();
                    styleElement.remove();
                }, (Math.random() * 10 + 5) * 1000);
                
            }, i * 300); 
        }
        
        
        setInterval(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 20 + 10}px`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.bottom = '-10px';
            heart.style.opacity = '0';
            heart.style.animation = `float ${Math.random() * 10 + 5}s linear`;
            
            const keyframes = `
                @keyframes float {
                    0% {
                        transform: translateY(0) rotate(${Math.random() * 360}deg);
                        opacity: ${Math.random() * 0.5 + 0.3};
                    }
                    100% {
                        transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
            
            const styleElement = document.createElement('style');
            styleElement.innerHTML = keyframes;
            document.head.appendChild(styleElement);
            
            heartContainer.appendChild(heart);
            
            
            setTimeout(() => {
                heart.remove();
                styleElement.remove();
            }, (Math.random() * 10 + 5) * 1000);
            
        }, 1000); 
    }
});
