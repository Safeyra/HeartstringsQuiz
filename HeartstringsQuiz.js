function displayQuiz() {
    const questions = [
        {
            question: "You wake up on Valentine’s Day morning, and it’s full of surprises. The doorbell rings as you're eating breakfast.",
            choices: ["I'll peek carefully through the curtains and observe who’s there before opening. It always pays to be safe!",
                      "I excitedly open the door, imagining a surprise waiting for me. What could it be?",
                      "Write a quick thank-you note and leave it anonymously for the delivery person.",
                      "Greet the delivery person with a playful comment about being perfectly on time."],
            weights: [
                {perceivingScore: +2, thinkingScore: +1, introvertScore: +2 }, // Weight for first choice
                {extrovertScore: +2, feelingScore: +1, intuitionScore: +1 }, // Weight for second choice
                {introvertScore: +1, feelingScore: +2, judgingScore: +1 }, // Weight for third choice
                {extrovertScore: +2, thinkingScore: +1, perceivingScore: +2 } // Weight for fourth choice
            ]
        },
        {
            question: "It turns out the delivery is a mysterious package labeled for you.",
            choices: ["I shake it playfully, guessing out loud what it could be.",
                      "Let's open it right away, I'm curious about what’s inside!",
                      "I think I'll tuck it away for now and plan to open it privately later.",
                      "I'll examine the package carefully and make sure it’s safe before opening."],
            weights: [
                {perceivingScore: +2, thinkingScore: +1, extrovertScore: +2 }, // Weight for first choice
                {extrovertScore: +2, feelingScore: +1, intuitionScore: +1 }, // Weight for second choice
                {introvertScore: +1, feelingScore: +2, judgingScore: +1 }, // Weight for third choice
                {introvertScore: +2, thinkingScore: +1, judgingScore: +1 } // Weight for fourth choice
            ]
        },
        {
            question: "Inside the package, you find a beautiful piece of clothing—a Valentine’s Day outfit!",
            choices: ["Laugh at its unique or quirky design—it’s definitely a conversation starter.",
                      "Try it on immediately and admire how it makes you feel bold and confident.",
                      "Smile at the thoughtfulness and recall a special memory it brings up.",
                      "Appreciate its practicality and plan to wear it for the day."],
            weights: [
                {perceivingScore: +2, thinkingScore: +1, extrovertScore: +1 }, // Weight for first choice
                {extrovertScore: +2, feelingScore: +1, intuitionScore: +1 }, // Weight for second choice
                {introvertScore: +2, feelingScore: +2, intuitionScore: +1 }, // Weight for third choice
                {introvertScore: +1, thinkingScore: +1, judgingScore: +2 } // Weight for fourth choice
            ]
        },
        {
            question: "Inspired by the gift, you decide to spend the afternoon doing something fun.",
            choices: ["Call up a few friends for an unplanned meetup—I’ll see where the day takes me.",
                      "How about I plan a spontaneous adventure, like exploring a new part of town?",
                      "Maybe I should revisit a favorite spot from my past to relive some good times...",
                      "I could organize a cozy indoor activity, like crafting or baking, to relax."],
            weights: [
                {perceivingScore: +2, thinkingScore: +1, extrovertScore: +1 }, // Weight for first choice
                {extrovertScore: +1, sensingScore: +2, perceivingScore: +1 }, // Weight for second choice
                {introvertScore: +2, feelingScore: +2, intuitionScore: +1 }, // Weight for third choice
                {judgingScore: +2, sensingScore: +1, feelingScore: +1 } // Weight for fourth choice
            ]
        },
        {
            question: "During your outing, you spot a romantic gesture meant for someone else.",
            choices: ["I crack a joke about how bold and dramatic it is.",
                      "I smile softly, storing the memory for later when it's my turn to woo someone.",
                      "I whoop loudly and encourage the couple with sincere, heartfelt enthusiasm.",
                      "I just observe quietly, feeling touched by what I'm witnessing."],
            weights: [
                {perceivingScore: +2, thinkingScore: +1, extrovertScore: +2 }, // Weight for first choice
                {introvertScore: +1, feelingScore: +2, judgingScore: +1 }, // Weight for second choice
                {extrovertScore: +2, feelingScore: +1, intuitionScore: +1 }, // Weight for third choice
                {introvertScore: +2, thinkingScore: +1, feelingScore: +1 } // Weight for fourth choice
            ]
        },
        {
            question:"While out and about, you accidentally bump into someone who drops their things.",
            choices: ["“Oh gosh, I'm so sorry! Here, I'll help!”",
                      "I quietly pick up their items and hand them back with a polite smile and nod.",
                      "I try to start a conversation in an attempt to ease any awkwardness.",
                      "I carefully observe the situation to make sure they're okay before offering my assistance."],
            weights: [
                {judgingScore: +2, thinkingScore: +1, introvertScore: +2 }, // Weight for first choice
                {extrovertScore: +2, feelingScore: +1, perceivingScore: +1 }, // Weight for second choice
                {introvertScore: +1, feelingScore: +2, judgingScore: +1 }, // Weight for third choice
                {extrovertScore: +2, thinkingScore: +1, perceivingScore: +2 } // Weight for fourth choice
            ]
        },
        {
            question:"You decide to stop by a cozy café for a break after walking for a while.",
            choices: ["",
                      "",
                      "",
                      ""],
            weights: [
                {judgingScore: +2, thinkingScore: +1, introvertScore: +2 }, // Weight for first choice
                {extrovertScore: +2, feelingScore: +1, perceivingScore: +1 }, // Weight for second choice
                {introvertScore: +1, feelingScore: +2, judgingScore: +1 }, // Weight for third choice
                {extrovertScore: +2, thinkingScore: +1, perceivingScore: +2 } // Weight for fourth choice
            ]
        },
        {
            question:"At the café, there’s a small pop-up shop selling Valentine’s Day gifts.",
            choices: ["",
                      "",
                      "",
                      ""],
            weights: [
                {judgingScore: +2, thinkingScore: +1, introvertScore: +2 }, // Weight for first choice
                {extrovertScore: +2, feelingScore: +1, perceivingScore: +1 }, // Weight for second choice
                {introvertScore: +1, feelingScore: +2, judgingScore: +1 }, // Weight for third choice
                {extrovertScore: +2, thinkingScore: +1, perceivingScore: +2 } // Weight for fourth choice
            ]
        },
        {
            question:"As the day winds down, you reflect on your experience.",
            choices: ["",
                      "",
                      "",
                      ""],
            weights: [
                {judgingScore: +2, thinkingScore: +1, introvertScore: +2 }, // Weight for first choice
                {extrovertScore: +2, feelingScore: +1, perceivingScore: +1 }, // Weight for second choice
                {introvertScore: +1, feelingScore: +2, judgingScore: +1 }, // Weight for third choice
                {extrovertScore: +2, thinkingScore: +1, perceivingScore: +2 } // Weight for fourth choice
            ]
        },
        {
            question:"You decide to write a note to your soulmate (whether you’ve met them or not).",
            choices: ["",
                      "",
                      "",
                      ""],
            weights: [
                {judgingScore: +2, thinkingScore: +1, introvertScore: +2 }, // Weight for first choice
                {extrovertScore: +2, feelingScore: +1, perceivingScore: +1 }, // Weight for second choice
                {introvertScore: +1, feelingScore: +2, judgingScore: +1 }, // Weight for third choice
                {extrovertScore: +2, thinkingScore: +1, perceivingScore: +2 } // Weight for fourth choice
            ]
        },
        {
            question:"After a long day of surprises, you lie down in bed and think about your ideal soulmate.",
            choices: ["I'd like someone who understands the importance of quiet moments, yet knows how to keep life exciting and spontaneous.",
                      "There's nothing better than a person who is loyal, stable, and enjoys the little, meaningful details of life.",
                      "Someone who challenges me intellectually, brings excitement into every moment, and encourages me to step out of my comfort zone.",
                      "I want a person who is emotionally open, deeply connected to their values, and can share a sense of purpose and compassion in life."],
            weights: [
                {judgingScore: +2, thinkingScore: +1, introvertScore: +2 }, // Weight for first choice
                {extrovertScore: +2, feelingScore: +1, perceivingScore: +1 }, // Weight for second choice
                {introvertScore: +1, feelingScore: +2, judgingScore: +1 }, // Weight for third choice
                {extrovertScore: +2, thinkingScore: +1, perceivingScore: +2 } // Weight for fourth choice
            ]
        },
        {
            question: "Tugging on your heartstrings...",
            choices: ["Find out what kind of romantic I am!"],
            weights: [
                {extrovertScore: 0, introvertScore: 0 }, // placeholder
                {introvertScore: 0, extrovertScore: 0}, //Placeholder
            ]
        },
    ]


    //Variables for scores 
    let currentQuestionIndex = 0;
    let introvertScore = 0;
    let extrovertScore = 0;
    let judgingScore = 0;
    let perceivingScore = 0;
    let sensingScore = 0;
    let intuitionScore = 0;
    let thinkingScore = 0;
    let feelingScore = 0;


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
            "Q11.png",
            "processing.GIF",
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
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
        console.log("Selected choice weight:", selectedChoiceWeight);

                //Update scores based on weight of selected choice
                if (selectedChoiceWeight.hasOwnProperty('introvertScore')) {
                    introvertScore += selectedChoiceWeight.introvertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('extrovertScore')) {
                    extrovertScore += selectedChoiceWeight.extrovertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('judgingScore')) {
                    judgingScore += selectedChoiceWeight.judgingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('perceivingScore')) {
                    perceivingScore += selectedChoiceWeight.perceivingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('sensingScore')) {
                    sensingScore += selectedChoiceWeight.sensingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('intuitionScore')) {
                    intuitionScore += selectedChoiceWeight.intuitionScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('thinkingScore')) {
                    thinkingScore += selectedChoiceWeight.thinkingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('feelingScore')) {
                    feelingScore += selectedChoiceWeight.feelingScore;
                }

            //Move to the next question
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                calculateMBTITypeAndDisplayImage();
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
        const thumbnailImage = document.querySelector('img[src="Thumbnail.gif"]');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();
        thumbnailImage.remove();

        displayImage(mbtiTypeString);

        document.getElementById('results').style.display = 'block'
    }
    
    //Function to calculate MBTI type and return image URL 
        function getMBTIImageUrl(mbtiTypeString) {
            const MBTIImageUrls = {
                "ENTJ": ".png",
                "INTJ": ".png", 
                "ENTP": ".png",
                "INTP": ".png",
                "ENFJ": ".png",
                "INFJ": ".png",
                "ENFP": ".png",
                "INFP": ".png",
                "ESFJ": ".png",
                "ISFJ": ".png",
                "ESTJ": ".png",
                "ISTJ": ".png",
                "ESTP": ".png",
                "ISTP": ".png",
                "ESFP": ".png",
                "ISFP": ".png",
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
        window.location.href = 'https://Safeyra.github.io/HeartstringsQuiz/'; // Replace 'home.html' with the actual URL of your home page
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
