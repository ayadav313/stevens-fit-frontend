# Front-end Overview for Stevens Fit

## Objective
Create an intuitive and visually appealing front-end design for the Stevens Fit app that caters to the unique needs of Stevens students.

## Technologies
- React.js for a responsive, component-based UI
- Redux for state management
- CSS and SASS for styling
- Chart.js for data visualization (graphs and charts)
- Axios for AJAX requests

## Design Guidelines
- Mobile-first design approach
- Consistent color scheme and branding
- Clear and easy-to-understand navigation
- Use of cards and modals for displaying information
- Accessible design with appropriate contrast and font sizes

## Components

### Landing Page
- Stevens Fit logo and tagline
- Login / Sign Up button with Stevens.edu email
- Brief introduction of core features

### Login / Sign Up Page
- Form for creating an account or logging in with Stevens.edu email
- Use of client-side validation and error messages

### Dashboard
- Overview of user's progress and recent activities
- Upcoming scheduled workouts and reminders
- Links to core features (exercise catalog, workout catalog, tracker, etc.)

### Exercise Catalog
- Searchable list of exercises with images and brief descriptions
- Modal for exercise details including:
  - YT video explanation
  - User history with that exercise
  - Fun stats

### Workout Tracker
- Interface to track exercises, sets, reps, weights per workout
- Save workout at the end of the session
- Graphs and stats using user-inputted data

### Workout Catalog
- List of pre-built workouts tailored to UCC Gym
- Interface to create custom workouts and save them

### Social Platform
- Friend list and friend search functionality
- View friends' progress and workout history
- Coordinate workouts and find workout partners/spotters
- Gym check-in and friend notifications

### Calendar
- Integration with the user's class schedule
- Workout scheduling and reminders

### Food Intake Tracking
- Interface to track food intake
- Database of food items from Stevens Dining Hall and local popular food places
- Recommendations for healthy meals based on fitness goals

## Responsiveness
- Design should adapt to various screen sizes and devices (mobile, tablet, desktop)

## Security
- Basic defense against XSS attacks
- Client-side validation and error handling

## Testing
- Use Jest and React Testing Library for unit and integration testing
- Test UI components, Redux actions, and reducers
- Ensure app is responsive and accessible

By following this front-end overview, you will create a seamless user experience for the Stevens Fit app, allowing students to effectively plan, track, and achieve their fitness goals while engaging with the social aspects of the app.
