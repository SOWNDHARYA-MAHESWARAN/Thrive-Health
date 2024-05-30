# Thrive-Health
# Thrive Health Hackathon

## Streamline Patient Onboarding for Family Practices

This project aims to streamline patient onboarding processes for family practices through a web-based enrollment form and PDF generation capabilities.

### 1.Technologies Used:

* React.js: Frontend development.
* Node.js: Server-side runtime environment. 
* Express.js: Backend development.
* MongoDB: Database. 
* Postman: Endpoint testing. 
* Visual Studio Code: Primary IDE. 
* pdf-lib: npm module for PDF generation.

### 2.Server Side: The server manages CRUD operations in MongoDB and establishes connections between the frontend and backend, as well as with MongoDB. To install all functionalities, type the command npm install in the terminal of server folder. Each section is considered as a separate collection(models) and they have their corresponding controllers, routes and middlewares.

### 3.Routes: /post: POST endpoint for storing patient data in MongoDB. /get: Endpoint for retrieving patient details and generating PDFs using stored data.

### 4.Client Side: Responsible for user interface

### 5.Installation: To run this project locally: Clone the project to your local machine.

Install dependencies: Run npm install in the terminal of server folder and client folder.

To Start the server: Run npm run dev. Navigate to the client directory and start the client: Run npm start.

### 6.Usage and Functionalities:

Access the webpage via the localhost URL. Users can log in and register. All the fields (optional:middlename) must be filled in all sections to generate the pdf(optional:section2B). Users can send messages, which are stored in the database. Upon submission, patient details are saved in the database, and a PDF is generated. Generated pdf is stored in output.pdf. sample output is included.

### 7.Future Enhancements:

1. Customized Doctor Enrollment: Enhance user experience by allowing patients to select specific doctors according to their preferences and department requirements. Incorporate detailed information about doctors, including their specialties and credentials.

2. Comprehensive Doctor Profiles: Provide thorough profiles of doctors, showcasing their expertise, specialties, and availability. This feature enables patients to make informed decisions when choosing their healthcare provider.

3. Centralized Admin Dashboard: Develop an administrative dashboard to streamline management tasks. This dashboard will serve as a centralized hub for accessing and managing messages and patient enrollments efficiently.

4. Doctor Portal: Implement dedicated login portals for doctors, enabling them to access specialized functionalities. Through their accounts, doctors can monitor patient numbers, manage schedules, and interact with patient records, facilitating better patient care and appointment scheduling.
