import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faRedhat, } from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "RHEL",
    "Ubuntu",
    "CentOS",
    "Amazon Linux",  
];

const labelsSecond = [
    "Git",
    "GitLab",
    "Docker",
   "Jenkins",
   "SonarQube",
   "Zabbix",
   "MySql",
   "Apache",
   "Nginx",
   "MongoDB"
  
];

const labelsThird = [
   
    "EC2", "RDS", "S3", "VPC","IAM", "Load Balancers", "Subnets", "Route 53", "CloudWatch",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                <FontAwesomeIcon icon={faRedhat} style={{color: "#f70838",}} size="3x" />
                                    <h3>RedHat</h3>
                                    <p>
                                    I am a certified Red Hat System Administrator with proven expertise in Linux system management, including user management, security, and network configuration. This certification reflects my ability to handle enterprise-level tasks efficiently in Red Hat Enterprise Linux environments.
                                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Linux Distributions:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker}  style={{color: "#0b8ff4",}} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>"Experienced in deploying projects on Linux servers using Docker for containerization, ensuring seamless and scalable application deployment. Proficient in setting up CI/CD pipelines with Jenkins to automate build, test, and deployment processes, improving efficiency and reliability. "</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} style={{color: "#ffffff",}} size="3x" />
                    <h3>AWS </h3>
                    <p>"Experienced in designing and deploying scalable, secure, and efficient cloud architectures. Proficient in managing compute resources, storage solutions, and networking configurations to ensure high availability and fault tolerance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Services:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;