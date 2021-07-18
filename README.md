# cinema-catalog-microservice

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/payment.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Cinema-Payment-README</h3>

  <p align="center">
    Responsible for payment of tickets
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Refer to: https://github.com/leoan96/cinema-microservice

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

- create a .env file
- store secrets & environment variables (the values below are just sample values, please replace them with your own credentials)
- ```sh
  SERVER_PORT=3003
  NODE_ENV=development
  BACKEND_TOKEN=865b0e87c145c61d9c5b4682825f8a026017e03380c310273097989769fb
  MONGO_DATABASE_URI=mongodb+srv://<username>:<password>@cluster0.tihvu.mongodb.net/<database>?authSource=admin&replicaSet=atlas-ltmo8u-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true
  EXPRESS_SESSION_SECRET=dfc89d6a182025d62ab2ae3485b0497b4cc9397f1ab820fb3b5f3fa99c45
  REDIS_PORT=15136
  REDIS_HOST=redis-15136.c1.ap-southeast-3-5.ec2.cloud.redislabs.com
  REDIS_PASSWORD=26186baa6eb3d6088925571d166564db0a1f3d5931c7386aa0b08a6d6fa8
  APP_BASE_URL=http://localhost:3003
  JWT_PRIVATE_KEY=yOApKaHZMVnJRbENKVlRPeGpmdGIraHdBY1RUQStGSDhweTRodXZNaW9IMzRGK0xEdUp1cjAyZUxmejJjcmVGbXl2CngyVTk5M0ZwWDFOdXY2SW1GdUVHV1VxL1pvZkgyREd6SndLQ0FRQlhlQlk0Rzd1TTZRR1JDSTV1bjZ1RlJ3NjMKWXFVdFd5Rk9uMDE5czVxVWh2TlRjbEVUNXZoOGY3dlNPb0o5bitnUnZ0YTYyM2t6dlZJby9WNDZvZEs5LzNFWQpJd1NieDk4dmQ0QzR0cnRKdEtaUk5FREVHc0xmS3M4UlhzVmhjMHNGUGR2VTlUZzRDem9NV0svTGxHYUpGeGZQCm53anNGQVhvRWVxZzhUeWQ2S00zVzlOWmpra0dPdHNRUkdZRVFROXZGQUxuRFkyU
  JWT_PUBLIC_KEY=FhRnFLL2dZQVZqeFRkeG9TQlFKaUR5ZVVlWExNCnlpdFJkd00yN1I5UG44TzFXNUxpVGoxMFJSbGJJd0JjN3ZNbWZZYlBlK1dabHpIK3dpNFpQb0tJanVubU5ZSGgKbDZLcUFvays5aHQ1ZVdWVT=
  JWT_EXPIRES_IN=30s
  JWT_ALGORITHM=RS512
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/leoan96/cinema-payment-microservice.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Copy the JWT_PRIVATE_KEY & JWT_PUBLIC_KEY from your cinema-booking-microservice
4. Start server
   ```sh
   npm run start:dev
   ```

<!-- USAGE EXAMPLES -->

## Usage

You can utilize the api endpoints using either Postman or visiting http://localhost:3002/api

To use any endpoints from this or other microservices that require authorization, please use this cinema-account-microservice's login endpoint

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->

## Roadmap

TBA

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [TBA](https://github.com/leoan96/cinema-microservice)
