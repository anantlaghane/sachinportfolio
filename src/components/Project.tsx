import React from "react";
import mock1 from '../assets/images/4.jpg'
import mock2 from '../assets/images/5.jpg'
import mock3 from '../assets/images/3.jpg'
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
    <div className="project">
        <img src={mock10} className="zoom" alt="thumbnail" />
        <p>Deployed a movie finder app using OpenAI GPT-3.5 Turbo and Qdrant for semantic search and sentiment analysis. Managed the deployment of the React front-end and Flask backend, ensuring scalability and performance on cloud infrastructure.</p>
    </div>
    <div className="project">
        <img src={mock1} className="zoom" alt="thumbnail" />
        <p>Deployed an Inventory Management System using Node.js, MongoDB, and React. The system allows real-time inventory tracking, product management, and updates. </p>
    </div>
    <div className="project">
        <img src={mock2} className="zoom" alt="thumbnail" />
        <p>Deployed an Invoice Management System using Angular and Python, allowing users to create, manage, and track invoices with ease. The application is optimized for performance and scalability.</p>
    </div>
    <div className="project">
        <img src={mock3} className="zoom" alt="thumbnail" />
        <p>eployed an Employee Management System using Angular and Python, enabling efficient management of employee data, roles, and performance.</p>
    </div>   
</div>

    </div>
    );
}

export default Project;