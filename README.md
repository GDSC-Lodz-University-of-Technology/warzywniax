# 🥒 WARZYWNIAX

## Motivation

The goal of the project is to create an application that helps farmers and smaller local sellers to
sell their products such as fruits, vegetables, nuts, preserves, etc.

With such an application, smaller sellers could reach their customers directly and would not be
burdened with the intermediary markup that cuts into their profits. In addition, the application
would significantly facilitate the sale of products for very small farmers who may not have the
means to advertise and reach a wider audience.

This application could potentially also solve the problem of wasting products that have expired by
allowing sellers to mark offers for such products and sell them at a much lower price or even offer
free pick-up.

Users who use this application will also have the opportunity to eat healthier and support local
businesses. Each user will also be able to contribute to reducing their carbon footprint by better
managing food waste.

## Requirements

Before you will use this repository make sure that you have installed:

- **_Git_**

  - If you are a **Windows** or **macOS** user visit this link
    **[Downloading Git](https://git-scm.com/download/win)** then download appropriate installer and
    install it.
  - If you are a **Linux** (Arch-based distribution) user you can paste bellow scrip into your
    terminal or visit this page
    **[Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**

    ```bash
    pacman -S git
    ```

- **_Node.js_** and **_npm_**

  - If you are a **Windows** or **macOS** user visit this link
    **[Node.js download](https://nodejs.org/en/download/)** then download _LTS_ version for Windows
    and install it.
  - If you are a **Linux** (Arch-based distribution) user you can paste bellow scrip into your
    terminal or visit this page
    **[Node installation instruction](https://aur.archlinux.org/packages/nvm)** or use
    **[nvm](https://github.com/nvm-sh/nvm#install--update-script)**

    ```bash
    paru -S nvm
    nvm install node
    nvm use node
    ```

- **_Java 11+_**

  - If you are a **Windows** or **macOS** user visit this link
    **[Overview of JDK Installation ](https://docs.oracle.com/en/java/javase/20/install/overview-jdk-installation.html)**
    and follow instructions.
  - If you are a **Linux** (Arch-based distribution) user you can follow this instructions
    **[Installation of the JDK on Linux Platforms](https://docs.oracle.com/en/java/javase/20/install/installation-jdk-linux-platforms.html#GUID-737A84E4-2EFF-4D38-8E60-3E29D1B884B8)**
    or use this command

    ```bash
    pacman -S openjdk
    ```

If you followed every step, you should be ready to start using this repository. To make sure that
you have installed everything correctly open your terminal git-bash and run the following commands:

- To check **git**: _`git --version`_ → you should see output with **git** version
- To check **node.js**: _`node --version`_ → you should see output with **node.js** version
- To check **npm**: _`npm --version`_ → you should see output with **npm** version
- To check **java**: _`javac --version`_ → you should see output with **javac** version

## Downloading the repository

- Open your terminal / git-bash in location where you create a directory which will contain this
  repository

- Run the following command in your terminal / git-bash

  ```bash
  git clone https://github.com/GDSC-Lodz-University-of-Technology/warzywniax.git
  cd ./warzywniax
  ```

## Using the repository

### Running project

To run this project locally make sure you are in root directory of **warzywniax** repository. Then
you need to start Firebase emulators first:

```
npm run firebase:start:emulators
```

> Emulator UI should be available under **_[http://127.0.0.1:4000/](http://127.0.0.1:4000/)_**

Then in separated terminal you need run the application:

```
npm run start
```

> App preview should be available under **_[http://localhost:5173/](http://localhost:5173/)_**

### Documentation

To check documentation please visit
**_[wiki page](https://github.com/GDSC-Lodz-University-of-Technology/warzywniax/wiki)_**

## Scripts

- To start a local web server with HMR for development
  ```
  npm run start
  ```
- To create production build
  ```
  npm run build
  ```
- To start a local web server that serves the built solution
  ```
  npm run preview
  ```
- To start eslint static code analysis report
  ```
  npm run lint:ts
  ```
- To start eslint static doe analysis and fix all auto-fixable errors
  ```
  npm run lint:ts:fix
  ```
- To start eslint static doe analysis and fix all auto-fixable errors in watch mode
  ```
  npm run lint:ts:watch
  ```
- To start code formatter analysis report
  ```
  npm run prettyprint
  ```
- To start code formatter analysis and fix all auto-fixable errors
  ```
  npm run prettyprint:fix
  ```
- To start Authentication, Firestore and Storage emulators
  ```
  npm run firebase:start:emulators
  ```
- To deploy all Firestore security rules, storage security rules and Firestore indexes
  ```
  npm run firebase:deploy
  ```
- To deploy all storage security
  ```
  npm run firebase:deploy:storage-rules
  ```
- To deploy all Firestore security rules
  ```
  npm run firebase:deploy:firestore-rules
  ```
- To deploy all Firestore indexes
  ```
  npm run firebase:deploy:firesotre-indexes
  ```
- To stop tracking changes in db-seed
  ```
  npm run git:stop-tracking-db-seed
  ```
  > This can be usefully if you pushed some changes to db-seed, and you want to keep seed ignored
