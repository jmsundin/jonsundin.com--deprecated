import React from "react";
import "../assets/Main.css";

const Main = () => {
  const aboutSection = (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am a software engineer with a passion for data visualization and for creating human-centric user interfaces that are intuitive and easy to use. I am self-motivated, detail-oriented, and a creative problem solver. I am lifelong learner, and I continually look for opportunities to improve my skills and to learn new technologies. I am currently seeking a full-time position as a software engineer -- specializing in frontend web development and data visualization.
      </p>
    </section>
  );

  const skillsSection = (
    <section id="skills">
      <h2>My Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>R</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Java</li>
        <li>Kotlin</li>
      </ul>
    </section>
  );

  const experienceSection = (
    <section id="experience">
      <h2>Experience</h2>
      <h4>Frontend Web Developer - infoverse.ai - 2022 Oct - Present</h4>
      <p>
        Using React.js, D3.js, and Vis.js Vis-Network to build a front-end data
        visualization dashboard. The app uses the Wikidata SPARQL endpoint to
        retrieve structured data, which is then transformed into the necessary
        data models for the Vis-Network Diagram (directed graph) and D3 Tree
        diagram (https://github.com/jmsundin/Visualize-Wikidata).
      </p>
      <h4>
        Winner of AI LA Open Innovation Challenge (OIC) Hackathon with All of Us
        - 2022 Sept - Oct
      </h4>
      <p>
        Created an interactive collapsible tree diagram with D3.js to visualize
        a Scikit-learn decision tree classifier model on All of Us participant
        data. The project’s goal was to show a correlation between worsening
        symptoms of diabetes mellitus and post-acute COVID-19
        (https://tinyurl.com/Hackathon-Winner).
      </p>
      <h4>Frontend Web Browser Extension Developer - 2022 Aug - Oct</h4>
      <p>
        Utilized the Chrome Web API to create a browser extension to extract
        text from web pages and manipulate the DOM (highlighting user-selected
        text). Persistence of data was accomplished using the Chrome API sync
        storage (https://github.com/jmsundin/Web-Annotator-Chrome-Ext).
      </p>
      <h4>Financial Market Analyst – Ditamus LLC - 2022 Apr - Jul</h4>
      <p>
        Created a weekly audio report on investment opportunities based on
        macroeconomic reports.
      </p>
      <h4>
        Android Developer – TwoPlus: event-based social app - 2022 Jan - Jun
      </h4>
      <p>
        Utilized Kotlin, Java and Google Firebase API to create an informal
        social activity app. JetPack compose was used for the user interface.
        The software architecture was MVVM
        (https://github.com/jmsundin/TwoPlus).
      </p>
      <h4>Contributing Author - NLP in Action (NLPIA) - 2021 Apr - Aug</h4>
      <p>
        Contributed to Ch. 6 for the 2nd edition of NLPIA. The section I wrote
        is about creating a graph structure of the chapter to visualize the noun
        phrases and their similarity (cosine similarity)
        (https://www.manning.com/books/natural-language-processing-in-action).
      </p>
      <h4>Python & NLP Intern - Tangible AI; San Diego, CA - 2021 Jan - Mar</h4>
      <p>
        Learned Python3, Git version control, Bash, Linux, NLP techniques (regex
        w/ Python and word/vector embeddings with spaCy), unsupervised learning
        algorithms (K-means clustering, T-SNE for dimensionality reduction), and
        data science libraries (Pandas, NumPy, matplotlib and seaborn).
        Completed a capstone project (https://gitlab.com/jonsundin/wordmap/).
      </p>
    </section>
  );

  const projectsSection = (
    <section id="projects">
      <h2>Projects</h2>
      <h4>
        <a href="https://infoverse.ai">infoverse.ai</a>
      </h4>
      <p>
        Infoverse.ai provides a simple web application interface with the
        structured database of Wikidata.org. It is a free and open source
        project, and it is available at infoverse.ai as well as infoverseai.com.
        <br />
        <br />
        Infoverse.ai uses these technologies:
        <ul>
          <li>
            <a href="https://reactjs.org/" target="_blank">
              React.js
            </a>
          </li>
          <li>
            <a
              href="https://visjs.github.io/vis-network/docs/network/"
              target="_blank"
            >
              Vis.js (network graph)
            </a>
          </li>
          <li>
            <a href="https://d3js.org/" target="_blank">
              D3.js
            </a>
          </li>
          <li>
            <a href="https://query.wikidata.org/" target="_blank">
              Wikidata Query Service (WDQS) API
            </a>
          </li>
          <li>
            <a href="https://www.nginx.com/" target="_blank">
              Nginx web server
            </a>
          </li>
        </ul>
      </p>
    </section>
  );

  const contactSection = (
    <section id="contact">
      <h2>Contact Me</h2>
      <ul>
        <li>
          Twitter:{" "}
          <a href="https://twitter.com/JonSundin" target="_blank">
            @JonSundin
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/jmsundin" target="_blank">
            jmsundin
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/jonsundin/" target="_blank">
            Jon Sundin
          </a>
        </li>
      </ul>
    </section>
  );

  return (
    <main>
      {aboutSection}
      {skillsSection}
      {experienceSection}
      {projectsSection}
      {contactSection}
    </main>
  );
};

export default Main;
