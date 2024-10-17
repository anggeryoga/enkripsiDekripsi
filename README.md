# Super Secure Encryption Tool

Simple yet powerful encryption tool built with JavaScript and Tailwind CSS. This tool allows users to encrypt and decrypt messages using AES-256 encryption algorithm.

## Features

- AES-256 encryption
- Client-side processing
- No server storage
- Responsive design
- Activity history
- Modern UI with Tailwind CSS

## Prerequisites

- Modern web browser
- Text editor
- Internet connection (for CDN)

## Installation

1. Clone the repository
```bash
git clone https://github.com/anggeryoga/enkripsiDekripsi.git
cd enkripsiDekripsi
```

2. Open index.html in your browser
   - Double click index.html, or
   - Use VS Code's live server, or
   - Run a local server:
   ```bash
   python -m http.server 8000
   ```

## Usage

### Encryption
1. Enter the message you want to encrypt
2. Enter a strong password
3. Click "Encrypt" button
4. Copy the encrypted result

### Decryption
1. Click "Switch to Decrypt"
2. Paste the encrypted message
3. Enter the same password used for encryption
4. Click "Decrypt" button

## Technical Stack

- Crypto-JS: JavaScript encryption library
- Tailwind CSS: Utility-first CSS framework
- Vanilla JavaScript
- HTML5

## Security Features

- Uses secure AES-256 algorithm
- Passwords never sent to server
- No data storage on server
- All processing done in user's browser

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a Pull Request

## Bug Reports

If you find a bug, please create an issue with:
- Bug description
- Steps to reproduce
- Browser and OS information

## License
