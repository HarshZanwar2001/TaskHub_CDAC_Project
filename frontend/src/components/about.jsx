import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>TaskHub Pro</h1>
      <hr style={styles.hr} />
      <hr style={styles.hr} />

      <p style={styles.paragraph}>
        Welcome to our Task Management System, a platform designed to streamline task management, enhance productivity, 
        and ensure seamless collaboration among teams. Our mission is to provide an intuitive, efficient, and reliable 
        solution that helps individuals and businesses stay organized while meeting their goals. Whether you're a freelancer 
        managing personal projects or a large enterprise handling multiple teams, our system simplifies task tracking, 
        prioritization, and workflow automation to help you stay on top of your work.
      </p>

      <p style={styles.paragraph}>
        Our platform was built with user experience in mind, integrating modern web technologies like Spring Boot, MySQL, 
        and React to offer a smooth and responsive interface. With real-time task updates, notifications, role-based access, 
        and project tracking, we ensure that every team member stays informed and aligned. Our system allows users to create, 
        assign, and monitor tasks effortlessly, making it easier to manage deadlines, track progress, and collaborate efficiently. 
        We believe that task management should be simple yet powerful, allowing teams to focus on execution rather than worrying 
        about tracking responsibilities manually.
      </p>

      <p style={styles.paragraph}>
        At the core of our platform is a commitment to efficiency, flexibility, and scalability. Built with a robust backend 
        powered by Spring Boot and MySQL, it ensures data security and optimal performance, even for large-scale projects. 
        The React-based frontend provides a seamless user experience, making navigation and task handling intuitive for all users. 
        Our vision is to create a smart, AI-driven task management system that can predict deadlines, suggest workflow 
        improvements, and integrate effortlessly with third-party tools. As we continue to evolve, our goal is to empower teams 
        with cutting-edge solutions that make work simpler, faster, and more organized.
      </p>
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    textAlign: "center",
    padding: "20px",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#333",
  },
  hr: {
    width: "60%",
    margin: "10px auto",
    border: "1px solid #bbb",
  },
  paragraph: {
    fontSize: "18px",
    color: "#555",
    textAlign: "justify",
    marginBottom: "20px",
  },
};

export default About;
