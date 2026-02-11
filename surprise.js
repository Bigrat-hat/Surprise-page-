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

// Fun Facts
const letterBtn = document.getElementById('letterBtn');
const letterContent = document.getElementById('letterContent');
letterBtn.addEventListener('click', () => {
    letterContent.classList.toggle('show');
    letterBtn.textContent = letterContent.classList.contains('show') ? '🌟 Close Facts' : '🌟 Fun Facts About Nikki';
});

// Inspirational Quotes
const quotes = [
    "Nikki, you are braver than you believe, stronger than you seem! 💪",
    "The world is better because Nikki is in it! 🌍",
    "Nikki's kindness creates ripples of joy everywhere! 🌊",
    "Every day is brighter with Nikki around! ☀️",
    "Nikki, you are a masterpiece! 🎨"
];

const quoteBtn = document.getElementById('quoteBtn');
const quoteEl = document.getElementById('quote');
quoteBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = randomQuote;
    quoteEl.style.opacity = '0';
    setTimeout(() => quoteEl.style.opacity = '1', 100);
});

// Memory Wall
const addMemoryBtn = document.getElementById('addMemory');
const memoriesList = document.getElementById('memoriesList');

function loadMemories() {
    const memories = JSON.parse(localStorage.getItem('memories') || '[]');
    memoriesList.innerHTML = '';
    memories.forEach((memory, index) => {
        const memoryCard = document.createElement('div');
        memoryCard.className = 'memory-card';
        memoryCard.innerHTML = `
            <p>${memory}</p>
            <button onclick="deleteMemory(${index})">🗑️</button>
        `;
        memoriesList.appendChild(memoryCard);
    });
}

addMemoryBtn.addEventListener('click', () => {
    const memory = prompt('Add a special memory with Nikki:');
    if (memory) {
        const memories = JSON.parse(localStorage.getItem('memories') || '[]');
        memories.push(memory);
        localStorage.setItem('memories', JSON.stringify(memories));
        loadMemories();
    }
});

window.deleteMemory = (index) => {
    const memories = JSON.parse(localStorage.getItem('memories') || '[]');
    memories.splice(index, 1);
    localStorage.setItem('memories', JSON.stringify(memories));
    loadMemories();
};

loadMemories();

// Countdown Timer
const startDate = new Date('2025-01-01');
function updateCountdown() {
    const now = new Date();
    const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').textContent = `${diff} amazing days! 🎉`;
}
updateCountdown();

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.getElementById('floatingHearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 3000);

// Photo Gallery
const preloadedPhotos = [
    'images/nikki1.jpg',
    'images/nikki2.jpg',
    'images/nikki3.jpg'
];

const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const gallery = document.getElementById('gallery');

function loadGallery() {
    const uploadedPhotos = JSON.parse(localStorage.getItem('photos') || '[]');
    const allPhotos = [...preloadedPhotos, ...uploadedPhotos];
    gallery.innerHTML = '';
    
    allPhotos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.className = 'gallery-img';
        img.onclick = () => {
            const modal = document.createElement('div');
            modal.className = 'modal';
            const isPreloaded = index < preloadedPhotos.length;
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
                    <img src="${photo}" style="max-width: 90%; max-height: 90vh;">
                    ${!isPreloaded ? `<button onclick="deletePhoto(${index - preloadedPhotos.length}); this.parentElement.parentElement.remove();">Delete</button>` : ''}
                </div>
            `;
            document.body.appendChild(modal);
        };
        gallery.appendChild(img);
    });
}

uploadBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const photos = JSON.parse(localStorage.getItem('photos') || '[]');
            photos.push(event.target.result);
            localStorage.setItem('photos', JSON.stringify(photos));
            loadGallery();
        };
        reader.readAsDataURL(file);
    }
});

window.deletePhoto = (index) => {
    const photos = JSON.parse(localStorage.getItem('photos') || '[]');
    photos.splice(index, 1);
    localStorage.setItem('photos', JSON.stringify(photos));
    loadGallery();
};

loadGallery();
