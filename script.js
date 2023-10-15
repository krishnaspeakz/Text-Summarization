        document.getElementById('summarize-button').addEventListener('click', function() {
            const inputText = document.getElementById('input-text').value;
            const summaryContainer = document.getElementById('summary-container');

            // Preprocess the text
            const preprocessedText = preprocess(inputText);

            // Calculate sentence importance
            const sentenceImportance = calculateSentenceImportance(preprocessedText);

            // Select the most important sentences
            const topSentences = selectTopSentences(sentenceImportance);

            // Generate the summary
            const summary = generateSummary(topSentences, preprocessedText);

            // Display the summary
            summaryContainer.textContent = summary;
        });

        function preprocess(text) {
            // Example: Convert to lowercase and remove special characters
            text = text.toLowerCase();
            text = text.replace(/[^a-zA-Z0-9. ]/g, '');
            return text;
        }

        function calculateSentenceImportance(text) {
            // Example: Calculate sentence importance based on sentence length
            const sentences = text.split('. ');
            const sentenceImportance = sentences.map(sentence => sentence.split(' ').length);
            return sentenceImportance;
        }

        function selectTopSentences(sentenceImportance) {
            // Example: Select the top 3 important sentences
            const numSentences = 3;
            const sortedIndexes = sentenceImportance.map((value, index) => ({ value, index }))
                .sort((a, b) => b.value - a.value)
                .slice(0, numSentences)
                .map(item => item.index);
            return sortedIndexes;
        }

        function generateSummary(sentences, text) {
            // Example: Generate the summary by joining selected sentences
            const summary = sentences.map(index => text.split('. ')[index]).join('. ');
            return summary;
        }
        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle('light-mode');
            body.classList.toggle('dark-mode');
        }

        // Event listener for the dark mode toggle button
        document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
