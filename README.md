# balance-sheet-app

The Bank Balance Sheet Application is a simple tool developed using TypeScript, Node.js, and JSON Placeholder (a fake REST API) that shows the client's monthly balance and cumulative balance. This application contains a simple balance sheet view.
The app is fully tested with Jest.

Key Features:

Monthly balance and cumulative balance
Transaction list: date, description, type and amount


Deployment:

The app is deployed to the Google Cloud VM.
To complete the deployment process, the Virtual Machine on Google Compute Engine was successfully created and configured: 
```gcloud compute instances create test-project-deployment \
>   --image-family=debian-10 --image-project=debian-cloud \
>   --machine-type=f1-micro \
>   --boot-disk-size=10GB

SSH into VM:
```gcloud compute ssh test-project-deployment

The application's Git repository was cloned on the VM. 


## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Yarn Commands](#yarn-commands)
- [Contributing](#contributing)
- [License](#license)


## Prerequisites

List any prerequisites or system requirements here. For example:
- Node.js (v14 or higher)
- Yarn package manager


## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/OlgaNovaPrivate/balance-sheet-app.git

2. Install project dependencies using Yarn:
   ```yarn install
   
3. Start the development server:
   ```yarn start

4. Start the json server:
   ```json-server --watch data.json --port 3002

5. Open your web browser and go to http://localhost:3001 to view the project.
6. Open http://localhost:3002/monthlyBalances to see the data from another team.
   

## Project Structure

src/                 # Source files
|-- api/             # Reusable components
|-- components/      # Page components
|-- hooks/           # Reusable components
|-- tests/           # Jest testing
├── LICENSE
└── README.md


## Yarn Commands

```yarn start: Start the development server.
```yarn build: Build the production-ready version of the project.
```yarn jest: Run tests.
```yarn lint: Run code linters.
```yarn format: Auto-format code based on project standards.
```yarn clean: Remove build artifacts. 


