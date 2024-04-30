




# Adventure Axis
This document serves as documentation for the Tourism Management Website project, which aims to create a tourism-focused website with specific features and functionalities. The project focuses on creating a website tailored to tourism management, allowing users to explore tourist spots, add new spots, and manage their own lists.


## Features Overview:
- **Responsive Design**: The website is designed to be responsive, ensuring optimal viewing experience across different devices such as mobile phones, tablets, and desktop computers.
- **Private Routes**: User sessions are maintained even after page reloads, ensuring seamless navigation within the website without constantly redirecting to the login page.
- **Environment Variables**: Sensitive information such as Firebase configuration keys and MongoDB credentials are hidden using environment variables.
- **Customized Navbar**: The navigation bar includes essential links such as Home, All Tourist Spots, Add Tourist Spot (accessible through private route), My List (accessible through private route), and conditional Login/Register buttons.
- **Authentication**: Users can log in using email and password authentication, with additional support for Google login and social media logins (GitHub/Facebook/Twitter).
- **Registration**: Registration requires password and email, with password verification criteria ensuring security.
- **Home Page**: The home page features various sections including Banner/Slider, Tourist Spots, Countries, Extra Sections, and Footer.
- **Banner**: A slider displays meaningful information with at least three slides.
- **Tourist Spots Section**: Displays tourist spot cards with relevant information and a "View Details" button for detailed viewing.
- **Add Tourist Spot Page**: Users can add new tourist spots via a form, with success messages displayed upon successful addition.
- **All Tourist Spot Page**: Displays all tourist spots added by users with sorting functionality based on average cost.
- **View Details Page**: Detailed view of tourist spot information, accessible via private route.
- **My List Page**: Users can view their specific tourist spots in tabular form, with options to update or delete each entry.
- **Update Page**: Allows users to update tourist spot information via a form, with success messages displayed upon successful update.
- **Delete Button**: Confirmation required before deleting a tourist spot.
- **Footer**: Includes essential website information such as name, copyright, contact details, and social media links.
- **404 Page**: Custom page for Not Found errors.
- **Loading Spinner**: Displayed during data loading states.


## Technologies Used

- React.js
- Vite
- React Router DOM
- Firebas Authentication
- Tailwind CSS
- Tailwind UI
- Headless UI
- Heroicons
- React icons
- Sonnar Toast
- React loader Spiner
- Google Maps


## Demo
Check out the live demo of Paradice Cove [here](https://adventure-axis.web.app).

## Installation:
1. Clone the repository:
    ```bash
    https://github.com/programming-hero-web-course-4/B9A10-client-side-smais007
2. Navigate to the project directory:
    ```bash
    cd B9A10-client-side-smais007
3. Install dependencies:
    ```bash
    npm install
## Getting Started:
1. Start the development server:
    ```bash
    npm run dev
2. Open your browser and go to `http://localhost:5173` to view the website.
## npm package name which is used for the challenges task.

>- React-tooltip
>- Lottie React
>- React-simple-typewriter


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`VITE_APIKEY`

`VITE_AUTHDOMAIN`

`VITE_PROJECTID`

`VITE_STORAGEBUCKET`

`VITE_MESSAGINGSENDERID`

`VITE_APPID`

`VITE_GOOGLEAPIKEY`
## Deployment

1. First initialized firebase
```bash
sudo npm install -g firebase-tools
  ```
2. Login to your firebase consol
```bash
firebase Login
  ```
3. initialized firebase in this project
```bash
firebase init
```
4. Then Press Space to select features, then Enter to confirm your choices.
>- Select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`

5. Now enter foollowing command
>- What do you want to use as your public directory? `dist`
>- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `yes`
>- Set up automatic builds and deploys with GitHub? (y/N) `no`

6. Now buld the dist folder
```bash
npm run build
```
7. Finally this time to deploy website in firebase, now enter this command
```bash
firebase deploy
```



## Contact

- For any inquiries or support, please contact [Smais Shawon](https://www.github.com/smais007)