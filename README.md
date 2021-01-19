<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">magazine-maker</h3>

  <p align="center">
    An app that allows anyone to share their magazines in an easy, free, self-hosted way!
    <br />
    <br />
    <a href="https://raspandacul.besttm.ro/">View Demo</a>
    ·
    <a href="https://github.com/stoicaandrei/magazine-maker/issues">Report Bug</a>
    ·
    <a href="https://github.com/stoicaandrei/magazine-maker/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project started when I had to update an website for an online magazine and realized how hard it was to maintain it, since it was built with bad wordpress.

It's purpose is to allow anyone who wishes to host an online magazine on their own domain, to do this for free and without headache.

### Built With

* [React](https://reactjs.org/)
* [Ant Design](http://ant.design/)
* [Firebase](https://firebase.google.com/)

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/stoicaandrei/magazine-maker.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Create a new project at [https://console.firebase.google.com](https://console.firebase.google.com)
4. Go to the `Cloud Firestore` section, and under `Data`, create a new `collection` called `magazines`
5. Then create a new `Document` with a string field called `title`
6. Not go to the `Rules` Tab and replace the permissions
    ```
    allow read: if true;
    allow create, update, delete: if false;
    ```
7. Go to the `Hosting` section and follow the instructions
8. Enter your own firebaseConfig in `src/firebase_config/index.ts`
   ```JS
   const firebaseConfig = {
     apiKey: "",
     authDomain: "",
     projectId: "",
     storageBucket: "",
     messagingSenderId: "",
     appId: "",
     measurementId: ""
   };
   ```



<!-- USAGE EXAMPLES -->
## Usage

To start the project use `yarn start`

You should be able to see the created document in the list, go ahead and edit it.

The format is:
```typescript
type Magazine = {
  title: string;
  thumbnailUrl: string;
  pageUrls: string[];
  backgroundUrl: string;
};
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/stoicaandrei/magazine-maker/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Andrei Stoica - [@your_twitter](https://twitter.com/stoic_ndrei) - andrei00stoica@gmail.com

Project Link: [https://github.com/stoicaandrei/magazine-maker](https://github.com/stoicaandrei/magazine-maker)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/stoicaandrei/magazine-maker.svg?style=for-the-badge
[contributors-url]: https://github.com/stoicaandrei/magazine-maker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/stoicaandrei/magazine-maker.svg?style=for-the-badge
[forks-url]: https://github.com/stoicaandrei/magazine-maker/network/members
[stars-shield]: https://img.shields.io/github/stars/stoicaandrei/magazine-maker.svg?style=for-the-badge
[stars-url]: https://github.com/stoicaandrei/magazine-maker/stargazers
[issues-shield]: https://img.shields.io/github/issues/stoicaandrei/magazine-maker.svg?style=for-the-badge
[issues-url]: https://github.com/stoicaandrei/magazine-maker/issues
[license-shield]: https://img.shields.io/github/license/stoicaandrei/magazine-maker.svg?style=for-the-badge
[license-url]: https://github.com/stoicaandrei/magazine-maker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/andrei-stoica-4056a5171
[product-screenshot]: screenshots/magazineView.png
