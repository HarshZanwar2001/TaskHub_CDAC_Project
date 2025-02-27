# TaskHub

TaskHub is a comprehensive task management application developed using **React, Spring Boot, and MySQL**. Unlike traditional task management tools, TaskHub includes a built-in meeting feature, eliminating the need for third-party services like Microsoft Teams or Google Meet.

## Features

- **Task Management**: Create, assign, update, and delete tasks.
- **User Roles**: Different user roles with varying levels of permissions.
- **Real-Time Meetings**: Conduct meetings within the application without external dependencies.
- **Notifications**: Receive alerts for task updates and upcoming meetings.
- **Secure Authentication**: User authentication with secure login.

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Spring Boot, Java
- **Database**: MySQL
- **Meeting Integration**: Dyte SDK

## Screenshots

![Login]
![image](https://github.com/user-attachments/assets/d5309266-99f0-44a1-b424-e0e6da52d5db)
![Dashboard]
![image](https://github.com/user-attachments/assets/fc2225de-1019-447a-a822-aa89c243715d)

![Task Management]
![image](https://github.com/user-attachments/assets/22698afe-3f1d-456f-8b60-85e92a1fc6de)

![Meeting Interface]
![image](https://github.com/user-attachments/assets/dd778da2-16cb-48bf-ba41-cdb89fd4cb27)


## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (for frontend)
- Java 17+ (for backend)
- MySQL Server

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/HarshZanwar2001/TaskHub_CDAC_Project.git
cd taskhub
```

#### 2. Backend Setup (Spring Boot)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Configure the `application.properties` file with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/taskhub
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```
3. Build and run the backend:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

#### 3. Frontend Setup (React)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm run dev
   ```

## Usage
1. Open `http://localhost:3000` in your browser.
2. Sign up or log in to access the dashboard.
3. Create, assign, and track tasks.
4. Schedule and conduct meetings within the platform.

## Contributing
Feel free to fork this repository and contribute by submitting pull requests.

## License
This project is licensed under the MIT License.

## Contact
For any queries or support, reach out to zanwarharsh2001@gmail.com or visit the repository's issue section.
