
document.getElementById('year').textContent = new Date().getFullYear();


const totalModules = 6; 
let completedModules = 0;


function nextModule(nextId) {
    const currentModule = document.querySelector('.module:not(.hidden)');
    currentModule.classList.add('hidden');
    document.getElementById(nextId).classList.remove('hidden');
    
   
    if (nextId !== 'intro') {
        completedModules++;
        updateProgress();
    }
    
   
    window.scrollTo(0, 0);
}

function prevModule(prevId) {
    const currentModule = document.querySelector('.module:not(.hidden)');
    currentModule.classList.add('hidden');
    document.getElementById(prevId).classList.remove('hidden');
    
   
    window.scrollTo(0, 0);
}


function updateProgress() {
    const progress = Math.round((completedModules / totalModules) * 100);
    document.getElementById('progress-bar').style.width = progress + '%';
}


function showAnswer(elementId, isCorrect) {
    const answerElement = document.getElementById(elementId);
    answerElement.classList.remove('hidden');
    
    if (isCorrect) {
        answerElement.innerHTML = '<strong>Correct!</strong> ' + 
            (elementId === 'answer1' ? 'Phishing can happen through email, text messages, phone calls, and even social media.' : 
             elementId === 'answer3a' ? 'The third URL is suspicious because it uses "apple.com" as a subdomain of "verify-account.com" rather than the main domain.' :
             'You should always log in directly through the official website or app rather than clicking links in emails.');
        answerElement.style.color = 'green';
    } else {
        answerElement.textContent = 'Not quite right. Think about the red flags we discussed.';
        answerElement.style.color = 'red';
    }
}


document.getElementById('completionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('submitMessage').classList.remove('hidden');
    this.reset();
    
});