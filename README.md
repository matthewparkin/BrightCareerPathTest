# Career Path Test

This is a prototype of the new "Career Path Test".

This is a short list of questions which our members can complete and will be given suggested career paths in response.

## Getting Started

Prerequisites:
Node: v22.18.0 (as specified in .nvmrc)


### Using Node Version Manager (nvm)

```bash
nvm install && nvm use
```

### Install dependencies

First, run the development server:

```bash
yarn dev
```

### To launch

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Career Path Test.
This will open the app with a user logged out message

Open [http://localhost:3000?user=fudge](http://localhost:3000?user=fudge) to see the user fudges questions.


## Choices I made and limitations

Start and approach: In the interest of time, I decided to add a skeleton of the app to get started quickly and achieve the brief without missing key components in the user journey.

## Challenges
Unfortunately when I got to doing the submission of the form and displaying the results the api stopped spinning up the environment, meaning I ran out of time to complete the quiz. 
It got stuck on the "Steady hands. Clean logs. Your app is almost live" step. I tried to troubleshoot but couldn't get it to work in the Three hour period. 

I had a plan to use the answers given to filter the career paths and display them on the results page. However, I only managed to set up the structure for the submission and results page.

Didn't get to displaying the zoom feature on the cards. or displaying each question one at a time.

Clean up wise if given more time I'd have removed the log statements and cleaned up the code a bit more. Particularly on the test page as this didn't really have serparation of concerns due to time restraints.

## Tech Stack
- React
- TypeScript
- Vite
- CSS/SCSS
- URLSearchParams

## Core set up

I created using vite template for React, TypeScript. Vite was chosen as it is a fast and modern build tool that supports React and TypeScript out of the box. I've used it in some projects and prefer to use it over next when not using server-side rendering.

## Testing approach

Given more time I would have added Unit Tests, but I wanted to focus on the user journey and the key components of the app. Tests were not specified in the brief. Realistically I would have aimed for at least a 70% coverage. I feel adding test would have provided assurance and helped demonstrate intent and functionality to future editors. I would have used Jest and React Testing Library for unit tests.

## Css

To start with I used plain CSS not wanting to delay set up. Realistically it probably would have been quicker to start with a CSS framework such as Tailwind. I wanted to get closer to the original designs. I mainly chose plain css to show that I understood core concepts.

Later starting to implement scss (with a couple nested styles here and there).

## Form

I use a simple layout to display the questions and answers. The form is designed to be user-friendly and easy to navigate. I used a simple state management approach to handle the form data.

Ideally given more time I'd have implemented react hook form, but decided against it to save time on set up and focus on the user journey. Now looking back it seems slightly more complicated handling state. I think it would have made the code cleaner and easier to manage especially with the validation logic which was out of scope.

## Query String

For this solution, I opted for `URLSearchParams` as it provided a simple and straightforward approach without unnecessary complexity and is free out of the box.
In previous apps I have built I mainly preferred using `qs` to handle query string data because I find it more readable and appriciate it offers better support for more complicated nested objects and arrays.

## TypeScript
I used typescript as I am most comfortable with it and it is a good fit for this project. 
On running out of time within the breif I did have to cut a few corners with types using a few as anys, but I feel the core types are in place and provide a good foundation for future development.

## State
I opted to use React's built-in state management for this project. Given more time I would have considered using a state management library like Redux or Zustand for more complex state management, but I felt for this project, React's built-in state is sufficient.

