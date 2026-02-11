const surpriseMessages = [
    "Nikki, you're absolutely amazing! 💖",
    "Nikki, you light up every room you enter! ✨",
    "Nikki, you're one in a million! 🌟",
    "Your smile is contagious, Nikki! 😊",
    "Nikki, you make the world better! 🌍",
    "You're incredibly special, Nikki! 💝"
];

const compliments = [
    "Nikki, you're beautiful inside and out! 🌸",
    "Your kindness knows no bounds, Nikki! 💕",
    "You're stronger than you know, Nikki! 💪",
    "Nikki, your presence is a gift! 🎁",
    "You're absolutely radiant, Nikki! ✨",
    "Nikki, you inspire everyone around you! 🌟",
    "Your heart is pure gold, Nikki! 💛",
    "Nikki, you're a true gem! 💎"
];

const moodResponses = {
    happy: [
        "That's wonderful! Keep spreading that positive energy! 🌟",
        "Your happiness is contagious! Stay amazing! 💖",
        "So glad you're feeling great! You deserve all the joy! ✨"
    ],
    low: [
        "It's okay to feel this way. You're stronger than you think! 💪",
        "This too shall pass. I believe in you! 🌈",
        "Remember, tough times don't last, but tough people do! 💝"
    ],
    angry: [
        "Take a deep breath. You've got this! 🌸",
        "It's okay to feel angry. Let it out, then let it go! 💙",
        "Your feelings are valid. Tomorrow is a new day! 🌅"
    ]
};

const gift = document.getElementById('gift');
const giftMessage = document.getElementById('giftMessage');
const flowers = document.getElementById('flowers');
const compliment = document.getElementById('compliment');
const moodButtons = document.querySelectorAll('.mood-btn');
const moodMessage = document.getElementById('moodMessage');
const lastMood = document.getElementById('lastMood');

gift.addEventListener('click', () => {
    const randomMessage = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    giftMessage.textContent = randomMessage;
    gift.style.transform = 'scale(1.3) rotate(360deg)';
    setTimeout(() => gift.style.transform = 'scale(1)', 500);
});

flowers.addEventListener('click', () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    compliment.textContent = randomCompliment;
    flowers.style.transform = 'scale(1.2) rotate(5deg)';
    setTimeout(() => flowers.style.transform = 'scale(1)', 500);
});

moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const mood = btn.dataset.mood;
        const responses = moodResponses[mood];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        moodMessage.textContent = randomResponse;
        
        const timestamp = new Date().toLocaleString();
        localStorage.setItem('lastMood', mood);
        localStorage.setItem('lastMoodTime', timestamp);
        
        displayLastMood();
    });
});

function displayLastMood() {
    const savedMood = localStorage.getItem('lastMood');
    const savedTime = localStorage.getItem('lastMoodTime');
    
    if (savedMood && savedTime) {
        const moodEmoji = savedMood === 'happy' ? '😊' : savedMood === 'low' ? '😔' : '😠';
        lastMood.textContent = `Last mood: ${moodEmoji} ${savedMood} (${savedTime})`;
    }
}

displayLastMood();
