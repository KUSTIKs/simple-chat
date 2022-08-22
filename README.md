<div id="top"></div>

<div align="center">
  <a href="https://lslang-demo.netlify.app/">
    <img src="/public/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Simple Chat</h3>

  <p align="center">
    Application that helps you to communicate with other in real time
    <br/>
    <br/>
    <a href="https://simple-chat-71ab0.web.app/">Live Demo</a>
    ·
    <a href="https://youtu.be/Iubl6Bh2obI">Video Demo</a>
    ·
    <a href="https://github.com/KUSTIKs/simple-chat/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/KUSTIKs/simple-chat/issues/new">Request Feature</a>
  </p>
</div>

## About this project

![preview](/public/screenshot.png)

Simple chat is an application that helps you to communicate with other in real time

### Built With

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Styled Components](https://styled-components.com/)

### Additional Tools

- [Storybook](https://storybook.js.org/)
- [Figma](https://www.figma.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

In this project yarn is used, so make sure, you have it installed

```sh
npm install yarn@latest -g
```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/KUSTIKs/simple-chat.git
   ```

   or

   ```sh
   git clone git@github.com:KUSTIKs/simple-chat.git
   ```

1. Install dependencies

   ```sh
   yarn
   ```

1. To start a project run

   ```sh
   yarn dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Mobile adaptive

This application is fully mobile responsive
![mobile_chat-page](https://user-images.githubusercontent.com/62993891/185960537-a4d4ad3a-5ab9-49af-937b-911a9b27c0a4.png) | ![mobile_chats-page](https://user-images.githubusercontent.com/62993891/185962139-7d04a01d-afad-4629-95f7-ae41bb90021d.png) | ![mobile_auth-page](https://user-images.githubusercontent.com/62993891/185960587-74ddfbe8-573b-4d75-8841-02b89d1ac620.png)
---|---|---

<p align="right">(<a href="#top">back to top</a>)</p>

## Bot

Bot is just a user, which responds with joke from [chucknorris.io](https://api.chucknorris.io/) api on every user message

<p align="right">(<a href="#top">back to top</a>)</p>

## Data

This project is using Firebase auth for authentication and Firestore to manage data. Interfaces of entities look look like so

```typescript
type Account = {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
  lastTimeOnlineAt: Timestamp;
  email: string;
};

type Chat = {
  id: string;
  members: [Account, Account];
  messages: Message[];
};

type Message = {
  id: string;
  author: Account;
  content: string;
  createdAt: Timestamp;
};
```

By the help of firebase `onSnapshot` function, real time updating is working. For example, when you send message, it immediately appears on both accounts

<p align="right">(<a href="#top">back to top</a>)</p>

## Storybook

To start storybook locally, use following command

```sh
  yarn storybook
```

![storybook preview](/public/storybook-screenshot.png)

there are two groups of components here: components, and widgets, that can use other components and have some side effects

<p align="right">(<a href="#top">back to top</a>)</p>
