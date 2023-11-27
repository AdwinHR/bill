  const sourceText = 'how are you';
            const targetLanguage = 'kn';

            // Your Google Translate API key
            const apiKey = 'AIzaSyDSCVusfrTcAfGTWr1WhOffqRxJ682j3UQ';

            // Google Translate API URL
            const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

            // Request payload
            const data = {
                q: sourceText,
                source: 'en',  // Source language code (English)
                target: targetLanguage,
            };

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.translations && data.data.translations.length > 0) {
                    document.getElementById('translatedText').innerText = data.data.translations[0].translatedText;
                } else {
                    console.error('Translation error:', data.error.message);
                    document.getElementById('translatedText').innerText = 'Translation failed.';
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
                document.getElementById('translatedText').innerText = 'Translation failed.';
            });
        
