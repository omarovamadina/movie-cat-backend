# Movie-Cat API

This is the backend repository for the Movie-Cat API, which provides endpoints to retrieve information about movies and actors from a MongoDB database.

## Installation

To set up the project, follow the instructions below:

### Prerequisites

Ensure you have Node.js installed on your machine. Then, install `pnpm` globally if you haven't already:

```shell
npm install -g pnpm
```

### Clone the repository

Clone the repository to your local machine:

```shell
git clone <repository-url>
cd <repository-name>
```

### Install dependencies

Navigate to the repository directory and install the necessary dependencies:

```shell
pnpm install
```

## Environment Variables

Create a `.env` file in the root of the project directory with the below variables to run the project locally. For non-local environments, ensure the same variables are available in your configuration.

```plaintext
PORT=4000
PRODUCTION_MODE=no
PROD_MONGO_URI=<Your MongoDB Connection URI for Production Database>
TEST_MONGO_URI=<Your MongoDB Connection URI for Development Database>
RESET_TEST_DB=yes
```

- **PORT**: The port the server will run on. The default is 4000.
- **PRODUCTION_MODE**: Set to `no` for development mode and `yes` for production mode.
- **PROD_MONGO_URI**: The URI for the production MongoDB database.
- **TEST_MONGO_URI**: The URI for the test MongoDB database.
- **RESET_TEST_DB**: If set to `yes`, the test database will be wiped and repopulated with mock data.

When running the server in production, you should set `PRODUCTION_MODE` to `yes`.

Here's how to get your Connection String/URI for MongoDB if you are using MongoDB Atlas: [Get Connection String](https://www.mongodb.com/docs/guides/atlas/connection-string/).

## Running the Server

Once you have configured the environment variables and installed the dependencies, you can start the server.

### Local Development

For development purposes, you can start the server with hot reloading:

```shell
pnpm dev
```

This command will start the server on the port specified in your `.env` file and enable hot reloading, so changes to the code will automatically restart the server.

### Production

To run the server in production mode:

- Set `PRODUCTION_MODE` to `yes` in your `.env` file.
- Start the server using the following command:

```shell
pnpm start
```

This command will start the server in production mode, which will disable hot reloading and use optimized settings.

## Endpoints

This API provides endpoints to retrieve data on movies and actors from the MongoDB database. For a detailed overview of available endpoints, please refer to the API documentation.

- `get` **/api/movies/:id**: Retrieves all the detals about a single movie in JSON format.
- `get` **/api/movies/search**: Retrieves all the movies matching the text passed as the `q` Query Parameter.

## License

This project is licensed under the [Creative Commons Attribution License (CC BY)](https://creativecommons.org/licenses/by/4.0/). See the [LICENSE](LICENSE) file for more details.

Created by **Madina Omarova**.

## Learn More

If you have any questions, feel free to reach out to `madinaomarovart@gmail.com`.