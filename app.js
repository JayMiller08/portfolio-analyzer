document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('grade-form');
    const input = document.getElementById('portfolio-url');
    const resultsContainer = document.getElementById('results-container');
    const regradeBtn = document.getElementById('regrade-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const url = input.value.trim();
        
        if (!url) return;

        // Hide form, show loading
        form.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultsContainer.innerHTML = `
            <div class="loading-state">
                <div class="spinner"></div>
                <span>Analyzing portfolio at ${url}...</span>
            </div>
        `;

        // Simulate API call and analysis
        setTimeout(() => {
            const score = Math.floor(Math.random() * 30) + 70; // Random score 70-99
            
            resultsContainer.innerHTML = `
                <div class="score-card">
                    <div class="score-header">
                        <h2 class="score-title">Portfolio Grade</h2>
                        <div class="score-value">${score}<span style="font-size:1.5rem;color:var(--text-muted);">/100</span></div>
                    </div>
                    
                    <div class="feedback-section">
                        <div class="feedback-item">
                            <h3>First Impression</h3>
                            <p>${score > 85 ? 'Excellent hero section with clear value proposition.' : 'Hero section could be more impactful. Consider refining your main headline.'}</p>
                        </div>
                        <div class="feedback-item">
                            <h3>Proof of Work</h3>
                            <p>Case studies are visible, but ensure you highlight the business impact and your specific role in each project.</p>
                        </div>
                        <div class="feedback-item">
                            <h3>Craft & Execution</h3>
                            <p>Typography and whitespace are handled well. Watch out for minor alignment issues on mobile devices.</p>
                        </div>
                    </div>
                </div>
                <button class="submit-btn" id="analyze-another" style="margin-top: 10px;">Analyze Another Portfolio</button>
            `;

            document.getElementById('analyze-another').addEventListener('click', resetForm);
        }, 2500);
    });

    regradeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetForm();
    });

    function resetForm() {
        form.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        input.value = '';
        input.focus();
    }
});
