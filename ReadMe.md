# Invest & Fund

This project consists of a React front-end application and a .NET backend application.

## Running the Application

To run the application, follow these steps:

1. Ensure that you have Node.js and .NET SDK installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the root directory of the project in your terminal.
4. Start the .NET backend by running the following command:
   ```bash
   dotnet run
   ```

1 .Once the .NET backend is running, navigate to the "client" directory.
2 .Install dependencies for the React front-end by running:
```bash
npm install
   ```
3. Start the React front-end by running:
4. The React front-end should now be accessible at http://localhost:3000.

## StudioItem Page
The StudioItem page displays a list of studio items fetched from the backend API. Each item in the list includes its name, description, and a link to view its details.

## StudioItem Detail Page
The StudioItem Detail page displays detailed information about a specific studio item. It fetches data for the selected item from the backend API based on the provided item ID.

Please note that both the StudioItem page and the StudioItem Detail page require the backend API to be running on port 5001. Ensure that the .NET backend is running before accessing these pages.