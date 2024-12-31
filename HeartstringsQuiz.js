function displayQuiz() {
    const questions = [
        {
            question: "You wake up on Valentine’s Day morning, and it’s full of surprises. The doorbell rings as you're eating breakfast.",
            choices: ["I'll peek carefully through the curtains and observe who’s there before opening. It always pays to be safe!",
                      "I excitedly open the door, imagining a surprise waiting for me. What could it be?",
                      "Write a quick thank-you note and leave it anonymously for the delivery person.",
                      "Greet the delivery person with a playful comment about being perfectly on time."],
            weights: [
                { types: ["Mysterious Match", "Secret Admirer"], weight: 2 },
                { types: ["Eternal Flame", "Star-Crossed Lover"], weight: 2 },
                { types: ["Intellectual Spark", "Hopeless Romantic"], weight: 2 },
                { types: ["Playful Tease", "Love Skeptic"], weight: 2 }
            ]
        },
        {
            question: "It turns out the delivery is a mysterious package labeled for you.",
            choices: ["I shake it playfully, guessing out loud what it could be.",
                      "Let's open it right away, I'm curious about what’s inside!",
                      "I think I'll tuck it away for now and plan to open it privately later.",
                      "I'll examine the package carefully and make sure it’s safe before opening."],
            weights: [
                { types: ["Playful Tease", "Star-Crossed Lover"], weight: 2 },
                { types: ["Practical Partner", "Hopeless Romantic"], weight: 2 },
                { types: ["Mysterious Match", "Eternal Flame"], weight: 2 },
                { types: ["Intellectual Spark", "Love Skeptic"], weight: 2 }
            ]
        },
        {
            question: "Inside the package, you find a beautiful piece of clothing—a Valentine’s Day outfit!",
            choices: ["Laugh at its unique or quirky design—it’s definitely a conversation starter.",
                      "Try it on immediately and admire how it makes you feel bold and confident.",
                      "Smile at the thoughtfulness and recall a special memory it brings up.",
                      "Appreciate its practicality and plan to wear it for the day."],
            weights: [
                { types: ["Playful Tease", "Star-Crossed Lover"], weight: 2 },
                { types: ["Eternal Flame", "Artistic Flame"], weight: 2 },
                { types: ["Mysterious Match", "Secret Admirer"], weight: 2 },
                { types: ["Practical Partner", "Hopeless Romantic"], weight: 2 }
            ]
        },
        {
            question: "Inspired by the gift, you decide to spend the afternoon doing something fun.",
            choices: ["Call up a few friends for an unplanned meetup—I’ll see where the day takes me.",
                      "How about I plan a spontaneous adventure, like exploring a new part of town?",
                      "Maybe I should revisit a favorite spot from my past to relive some good times...",
                      "I could hunt for a cozy place to relax at, like maybe the library."],
            weights: [
                { types: ["Playful Tease", "Love Skeptic"], weight: 2 },
                { types: ["Star-Crossed Lover", "Intellectual Spark"], weight: 2 },
                { types: ["Hopeless Romantic", "Eternal Flame"], weight: 2 },
                { types: ["Practical Partner", "Artistic Flame"], weight: 2 }
            ]
        },
        {
            question: "During your outing, you spot a romantic gesture meant for someone else.",
            choices: ["I crack a joke about how bold and dramatic it is.",
                      "I smile softly, storing the memory for later when it's my turn to woo someone.",
                      "I whoop loudly and encourage the couple with sincere, heartfelt enthusiasm.",
                      "I just observe quietly, feeling touched by what I'm witnessing."],
            weights: [
                { types: ["Playful Tease", "Love Skeptic"], weight: 2 },
                { types: ["Secret Admirer", "Hopeless Romantic"], weight: 2 },
                { types: ["Eternal Flame", "Star-Crossed Lover"], weight: 2 },
                { types: ["Mysterious Match", "Intellectual Spark"], weight: 2 }
            ]
        },
        {
            question:"While out and about, you accidentally bump into someone who drops their things.",
            choices: ["“Oh gosh, I'm so sorry! Here, I'll help!”",
                      "I quietly pick up their items and hand them back with a polite smile and nod.",
                      "I try to start a conversation in an attempt to ease any awkwardness.",
                      "I carefully observe the situation to make sure they're okay before offering my assistance."],
            weights: [
               { types: ["Practical Partner", "Hopeless Romantic"], weight: 2 },
                { types: ["Mysterious Match", "Artistic Flame"], weight: 2 },
                { types: ["Love Skeptic", "Intellectual Spark"], weight: 2 },
                { types: ["Playful Tease", "Eternal Flame"], weight: 2 }
            ]
        },
        {
            question:"You decide to stop by a cozy café for a break after walking for a while.",
            choices: ["I order the same thing I usually do, can't go wrong with that.",
                      "Oooh, there's a new drink on the menu! That sounds exciting!",
                      "“What would you recommend? Maybe you could tell me why it's so popular...”",
                      "Wow, there's so many different choices! I think I'll pick something to match my mood for the day."],
            weights: [
                { types: ["Practical Partner", "Eternal Flame"], weight: 2 },
                { types: ["Playful Tease", "Star-Crossed Lover"], weight: 2 },
                { types: ["Mysterious Match", "Love Skeptic"], weight: 2 },
                { types: ["Intellectual Spark", "Artistic Flame"], weight: 2 }
            ]
        },
        {
            question:"At the café, there’s a small pop-up shop selling Valentine’s Day gifts.",
            choices: ["I think I'll get something like a handmade trinket or a keepsake. That way it feels personal and meaningful.",
                      "Maybe a playful or fun item? It'll definitely put a smile on some faces.",
                      "I could get the classic bouquet of flowers or chocolates, they're timeless for a reason.",
                      "Oh, I guess I'll get something random for the heck of it."],
            weights: [
                { types: ["Artistic Flame", "Secret Admirer"], weight: 2 },
                { types: ["Playful Tease", "Love Skeptic"], weight: 2 },
                { types: ["Eternal Flame", "Hopeless Romantic"], weight: 2 },
                { types: ["Star-Crossed Lover", "Intellectual Spark"], weight: 2 }
            ]
        },
        {
            question:"As the day winds down, you reflect on your experience.",
            choices: ["There were a lot of thoughtful moments that I shared with the people I encountered today...",
                      "What an exciting day! I can't believe all that happened, wow!",
                      "I really enjoyed how comfortable and familiar this day felt overall.",
                      "Everything that happened today felt so strange, I wonder what tomorrow's going to bring..."],
            weights: [
                { types: ["Hopeless Romantic", "Secret Admirer"], weight: 2 },
                { types: ["Playful Tease", "Star-Crossed Lover"], weight: 2 },
                { types: ["Practical Partner", "Eternal Flame"], weight: 2 },
                { types: ["Mysterious Match", "Love Skeptic"], weight: 2 }
            ]
        },
        {
            question:"After a long day of surprises, you lie down in bed and think about your ideal soulmate.",
            choices: ["I'd like someone who understands the importance of quiet moments, yet knows how to keep life exciting and spontaneous.",
                      "There's nothing better than a person who is loyal, stable, and enjoys the little, meaningful details of life.",
                      "Someone who challenges me intellectually, brings excitement into every moment, and encourages me to step out of my comfort zone.",
                      "I want a person who is emotionally open, deeply connected to their values, and can share a sense of purpose and compassion in life."],
            weights: [
                { types: ["Star-Crossed Lover", "Mysterious Match"], weight: 2 },
                { types: ["Practical Partner", "Hopeless Romantic"], weight: 2 },
                { types: ["Intellectual Spark", "Playful Tease"], weight: 2 },
                { types: ["Eternal Flame", "Artistic Flame"], weight: 2 }
            ]
        },
        {
            question: "Tugging on your heartstrings...",
            choices: ["Find out what kind of romantic I am!"],
            weights: [
                { types: ["Eternal Flame", "Artistic Flame"], weight: 0 }, // placeholder
                { types: ["Eternal Flame", "Artistic Flame"], weight: 0 } //Placeholder
            ]
        },
    ]


    //Variables for scores 
    let currentQuestionIndex = 0;
    let starCrossedLoverScore = 0;
    let mysteriousMatchScore = 0;
    let loveSkepticScore = 0;
    let intellectualSparkScore = 0;
    let hopelessRomanticScore = 0;
    let eternalFlameScore = 0;
    let secretAdmirerScore = 0;
    let practicalPartnerScore = 0;
    let playfulTeaseScore = 0;
    let artisticFlameScore = 0;

    const soulmateScores = {
        "Star-Crossed Lover": 0,
        "Mysterious Match": 0,
        "Love Skeptic": 0,
        "Intellectual Spark": 0,
        "Hopeless Romantic": 0,
        "Eternal Flame": 0,
        "Secret Admirer": 0,
        "Practical Partner": 0,
        "Playful Tease": 0,
        "Artistic Flame": 0
    };



    function displayQuestionImage(questionIndex) {
        const imageURLs = [
            "Q1.png",
            "Q2.png",
            "Q3.png",
            "Q4.png",
            "Q5.png",
            "Q6.png",
            "Q7.png",
            "Q8.png",
            "Q9.png",
            "Q10.png",
            "processing.gif",
        ];
        const questionImageElement = document.getElementById('question-image');
        questionImageElement.src = imageURLs[questionIndex];
    }

    document.getElementById('begin-quiz').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
    });

    //Function to display the current question and choices
    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const progressImageElement = document.getElementById('question-progress-image');
        const choiceContainers = document.getElementById('choices');
        
        choiceContainers.innerHTML = '';
        
        questionElement.textContent = currentQuestion.question;
        progressImageElement.src = getQuestionProgressImage(currentQuestionIndex);
        
        displayQuestionImage(currentQuestionIndex);

        currentQuestion.choices.forEach((choice, index) => {
                //Buttons for choices
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
        }

    //Function to get progress bar image URL for the current question 
    function getQuestionProgressImage(questionIndex) {
        const progressImageURLs = [
            "Q1 progress.svg",
            "Q2 progress.svg",
            "Q3 progress.svg",
            "Q4 progress.svg",
            "Q5 progress.svg",
            "Q6 progress.svg",
            "Q7 progress.svg",
            "Q8 progress.svg",
            "Q9 progress.svg",
            "Q10 progress.svg",
            "Q11 progress.svg",
            "Q12 progress.svg",
        ];
        return progressImageURLs[questionIndex] || "";
    }

    //Function to handle choice click
    function handleChoiceClick(choiceIndex) {
        // Update scores based on user response
        // const currentQuestion = questions[currentQuestionIndex];
        // const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
        // console.log("Selected choice weight:", selectedChoiceWeight);

        // //Update scores based on weight of selected choice
        // if (selectedChoiceWeight.hasOwnProperty('starCrossedLoverScore')) {
        //     starCrossedLoverScore += selectedChoiceWeight.starCrossedLoverScore;
        // }
        // if (selectedChoiceWeight.hasOwnProperty('mysteriousMatchScore')) {
        //     mysteriousMatchScore += selectedChoiceWeight.mysteriousMatchScore;
        // }
        // if (selectedChoiceWeight.hasOwnProperty('loveSkepticScore')) {
        //     loveSkepticScore += selectedChoiceWeight.loveSkepticScore;
        // }
        // if (selectedChoiceWeight.hasOwnProperty('intellectualSparkScore')) {
        //     intellectualSparkScore += selectedChoiceWeight.intellectualSparkScore;
        // }
        // if (selectedChoiceWeight.hasOwnProperty('hopelessRomanticScore')) {
        //     hopelessRomanticScore += selectedChoiceWeight.hopelessRomanticScore;
        // }
        // if (selectedChoiceWeight.hasOwnProperty('eternalFlameScore')) {
        //     eternalFlameScore += selectedChoiceWeight.eternalFlameScore;
        // }
        // if (selectedChoiceWeight.hasOwnProperty('secretAdmirerScore')) {
        //     secretAdmirerScore += selectedChoiceWeight.secretAdmirerScore;
        // }
        // if (selectedChoiceWeight.hasOwnProperty('practicalPartnerScore')) {
        //     practicalPartnerScore += selectedChoiceWeight.practicalPartnerScore;
        // }
        // if (selectedChoiceWeight.hasOwnProperty('playfulTeaseScore')) {
        //     playfulTeaseScore += selectedChoiceWeight.playfulTeaseScore;
        // }
        // if (selectedChoiceWeight.hasOwnProperty('artisticFlameScore')) {
        //     practicalPartnerScore += selectedChoiceWeight.artisticFlameScore;
        // }

            const currentQuestion = questions[currentQuestionIndex]; // Updated to use questionWeights
            const selectedChoice = currentQuestion.weights[choiceIndex]; // Get the selected choice
            console.log("Selected choice mapping:", selectedChoice);
        
            // Dynamically update soulmate type scores
            selectedChoice.types.forEach(type => {
                if (!soulmateScores[type]) {
                    soulmateScores[type] = 0; // Initialize type score if not already defined
                }
                soulmateScores[type] += selectedChoice.weight; // Increment the score for the soulmate type
            });

            //Move to the next question
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                // calculateMBTITypeAndDisplayImage();
                displaySoulmateResult();
            }
        }
        

    //Function to calculate MBTI type based on scores and display image
    function calculateMBTITypeAndDisplayImage() {
        //Calculate introvert/extrovert dimension
        const introextro = introvertScore > extrovertScore ? "I" :"E";
        //Calculate sensing/intuition dimension
        const sensint = sensingScore > intuitionScore ? "S" : "N";
        //Calculate thinking/feeling dimension
        const thinkfeel = thinkingScore > feelingScore ? "T" : "F";
        //Calculate judging/perceiving dimension
        const judgeper = judgingScore > perceivingScore ? "J" : "P";
        //Produce MBTI type string
        const mbtiTypeString = introextro + sensint + thinkfeel + judgeper;

        console.log("MBTI Type:", mbtiTypeString);

        document.getElementById('results').style.display = 'none';
        
        //Remove quiz-related elements from the DOM
        const questionElement = document.getElementById('question');
        const choiceContainers = document.getElementById('choices');
        const quizContainer = document.getElementById('quiz');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();

        displayImage(mbtiTypeString);

        document.getElementById('results').style.display = 'block'
    }

    function displaySoulmateResult() {
        // Find the soulmate type with the highest score
        let highestScore = 0;
        let soulmateType = "";
    
        // Iterate through all soulmate types
        Object.keys(soulmateScores).forEach(key => {
            if (soulmateScores[key] > highestScore) {
                highestScore = soulmateScores[key];
                soulmateType = key; // Remove 'Score' from the key to get the type name
            }
        });
    
        console.log("Soulmate Type:", soulmateType);
        console.log("Highest Score:", highestScore);

        document.getElementById('results').style.display = 'none';
        
        //Remove quiz-related elements from the DOM
        const questionElement = document.getElementById('question');
        const choiceContainers = document.getElementById('choices');
        const quizContainer = document.getElementById('quiz');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();

        displaySoulmateImage(soulmateType);

        document.getElementById('results').style.display = 'block'
    }

    function displaySoulmateImage(soulmateType) {
        const imageMap = {
            "Star-Crossed Lover": "Star-Crossed Lover.png",
            "Mysterious Match": "Mysterious Match.png",
            "Love Skeptic": "Love Skeptic.png",
            "Intellectual Spark": "Intellectual Spark.png",
            "Hopeless Romantic": "Hopeless Romantic.png",
            "Eternal Flame": "Eternal Flame.png",
            "Secret Admirer": "Secret Admirer.png",
            "Practical Partner": "Practical Partner.png",
            "Playful Tease": "Playful Tease.png",
            "Artistic Flame": "Artistic Flame.png"
        };
    
        const imagePath = imageMap[soulmateType];
        // Logic to display the image on your page
        console.log("Displaying image:", imagePath);
    }
    
    //Function to calculate MBTI type and return image URL 
        function getMBTIImageUrl(mbtiTypeString) {
            const MBTIImageUrls = {
                "ENTJ": "Star-Crossed Lover.png",
                "INTJ": "Mysterious Match.png", 
                "ENTP": "Love Skeptic.png",
                "INTP": "Intellectual Spark.png",
                "ENFJ": "Hopeless Romantic.png",
                "INFJ": "Mysterious Match.png",
                "ENFP": "Star-Crossed Lover.png",
                "INFP": "Eternal Flame.png",
                "ESFJ": "Hopeless Romantic.png",
                "ISFJ": "Secret Admirer.png",
                "ESTJ": "Practical Partner.png",
                "ISTJ": "Practical Partner.png",
                "ESTP": "Playful Tease.png",
                "ISTP": "Love Skeptic.png",
                "ESFP": "Eternal Flame.png",
                "ISFP": "Artistic Flame.png",
            };
            return MBTIImageUrls[mbtiTypeString] || ""
        }

        //Display image
        function displayImage(mbtiTypeString) {
            const imageURL = getMBTIImageUrl(mbtiTypeString);
            const mbtiImageContainer = document.getElementById('mbti-image');
            const imageElement = document.createElement('img');
            imageElement.src = imageURL;

            mbtiImageContainer.appendChild(imageElement);
    
    }
        //Display the first question when the quiz starts
        displayCurrentQuestion();
        document.addEventListener('DOMContentLoaded', () => {
        const choiceContainers = document.querySelectorAll('.choice-container');
        choiceContainers.forEach((container) => {
            const choices = container.querySelectorAll('button');
            choices.forEach((choice, choiceIndex) => {
                choice.addEventListener('click', () => {
                    handleChoiceClick(choiceIndex);
                });
            });
        });
    });
}

//Call function to start the quiz
displayQuiz();

// Share quiz button click event handler
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button');

    shareButton.addEventListener('click', function() {
        const url = window.location.href;

        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Quiz URL copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
    });
});

// Select the button element
const backToHomeButton = document.getElementById('back-to-home');

// Add event listener for the button click
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-home');

    backButton.addEventListener('click', function() {
        // Redirect to the home page or perform any other action you want
        window.location.href = 'https://safeyra.github.io/HeartstringsQuiz/'; // Replace 'home.html' with the actual URL of your home page
    });
});

// Function to navigate back to the home page
function navigateToHomePage() {
    // Reset quiz state if needed
    resetQuiz(); // Assuming you have a resetQuiz() function defined

    // Hide quiz page and show the home page
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
}
