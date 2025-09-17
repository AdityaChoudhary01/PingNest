# PingNest

PingNest is a JavaScript-based project designed to provide fast, reliable, and simple network pinging functionality. Whether you're a developer looking to monitor network connectivity, or a sysadmin wanting to automate uptime checks, PingNest offers an easy-to-integrate solution.
---
## LiveDemo👉https://pingnest.netlify.app/
---


## Features

- 🚀 **Lightweight & Fast**: Minimal dependencies and optimized for speed.
- 📡 **Network Pinging**: Send pings to any host and get instant feedback.
- 📊 **Result Analysis**: Get statistics like average response time, packet loss, and more.
- 🔌 **Simple API**: Easy-to-use functions for quick integration.
- 🛠️ **Customizable**: Configure ping interval, timeout, and retries.
- 📦 **Ready for Automation**: Suitable for scripts, monitoring tools, and dashboards.

---

## Getting Started

### Prerequisites

- Node.js (v12+ recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/AdityaChoudhary01/PingNest.git
cd PingNest
npm install
```

---

## Usage

Here's a simple example to get started:

```javascript
const { pingHost } = require('./src/pingnest');

(async () => {
  const result = await pingHost('google.com');
  console.log(result);
})();
```

### Available Functions

- **pingHost(host, options)**: Pings the specified host and returns a result object.
  - `host` (string): Hostname or IP address.
  - `options` (object, optional): Configure timeout, retries, and interval.
- **analyzeResults(results)**: Returns statistics from multiple ping results.

See the [API documentation](#api-documentation) for more details.

---

## API Documentation

### pingHost(host, options)

- `host`: string. The target host.
- `options`: object (optional)
  - `timeout`: number (ms)
  - `retries`: number
  - `interval`: number (ms)
- **Returns:** Promise\<PingResult\>

### analyzeResults(results)

- `results`: Array\<PingResult\>
- **Returns:** Statistics object (avg latency, success rate, etc.)

---

## Example Output

```json
{
  "host": "google.com",
  "success": true,
  "latency": 32,
  "timestamp": "2025-09-17T13:39:43Z"
}
```

---

## Project Structure

```
PingNest/
├── src/
│   ├── pingnest.js
│   └── utils.js
├── test/
│   └── pingnest.test.js
├── package.json
└── README.md
```

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request. See the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

**Aditya Choudhary**  
[GitHub](https://github.com/AdityaChoudhary01)

---

## Acknowledgements

- Inspired by network monitoring tools.
- Thanks to the open-source community for support and libraries.

---

## Contact

For questions or support, open an [issue](https://github.com/AdityaChoudhary01/PingNest/issues) or contact via [GitHub profile](https://github.com/AdityaChoudhary01).
