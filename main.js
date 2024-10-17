 let isEncryptMode = true;
        const history = [];

        function toggleMode() {
            isEncryptMode = !isEncryptMode;
            updateUI();
        }

        function updateUI() {
            const modeTitle = document.getElementById('modeTitle');
            const toggleButton = document.getElementById('toggleButton');
            const actionButton = document.getElementById('actionButton');
            const inputLabel = document.getElementById('inputLabel');

            if (isEncryptMode) {
                modeTitle.textContent = 'Mode Enkripsi';
                toggleButton.textContent = 'Switch ke Dekripsi';
                actionButton.textContent = 'Enkripsi';
                inputLabel.textContent = 'Pesan untuk dienkripsi';
            } else {
                modeTitle.textContent = 'Mode Dekripsi';
                toggleButton.textContent = 'Switch ke Enkripsi';
                actionButton.textContent = 'Dekripsi';
                inputLabel.textContent = 'Pesan untuk didekripsi';
            }
        }

        function processText() {
            const input = document.getElementById('inputText').value;
            const password = document.getElementById('password').value;
            
            if (!input || !password) {
                alert('Mohon isi pesan dan password!');
                return;
            }

            try {
                let result;
                if (isEncryptMode) {
                    result = CryptoJS.AES.encrypt(input, password).toString();
                } else {
                    const bytes = CryptoJS.AES.decrypt(input, password);
                    result = bytes.toString(CryptoJS.enc.Utf8);
                    if (!result) throw new Error('Dekripsi gagal');
                }

                document.getElementById('outputText').value = result;

                // Add to history
                addToHistory({
                    type: isEncryptMode ? 'Enkripsi' : 'Dekripsi',
                    input,
                    output: result,
                    timestamp: new Date().toLocaleTimeString()
                });

            } catch (error) {
                alert('Terjadi kesalahan! Pastikan input dan password sudah benar.');
            }
        }

        function addToHistory(item) {
            history.unshift(item);
            if (history.length > 10) history.pop();
            updateHistoryUI();
        }

        function updateHistoryUI() {
            const historyList = document.getElementById('historyList');
            historyList.innerHTML = history.map(item => `
                <div class="p-4 bg-gray-50 rounded-lg">
                    <div class="flex justify-between items-start mb-2">
                        <span class="font-medium">${item.type}</span>
                        <span class="text-sm text-gray-500">${item.timestamp}</span>
                    </div>
                    <div class="text-sm">
                        <div class="mb-1">
                            <span class="font-medium">Input:</span> 
                            <span class="text-gray-600">${item.input.substring(0, 30)}${item.input.length > 30 ? '...' : ''}</span>
                        </div>
                        <div>
                            <span class="font-medium">Output:</span> 
                            <span class="text-gray-600">${item.output.substring(0, 30)}${item.output.length > 30 ? '...' : ''}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function copyOutput() {
            const output = document.getElementById('outputText');
            output.select();
            document.execCommand('copy');
            
            // Show feedback
            const originalBg = output.style.backgroundColor;
            output.style.backgroundColor = '#e2e8f0';
            setTimeout(() => {
                output.style.backgroundColor = originalBg;
            }, 200);
        }
