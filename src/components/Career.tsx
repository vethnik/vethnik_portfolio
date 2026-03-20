import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CS (Data Science)</h4>
                <h5>Marri Laxman Reddy Institute of Technology</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              CGPA: 8.3 (Current). Technical Coursework: Data Structures & Algorithms,
              Operating Systems, Database Systems, Machine Learning, Distributed Systems,
              Software Engineering, Web Technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Supervised Machine Learning</h4>
                <h5>Coursera & DeepLearning.AI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed the comprehensive Regression and Classification
              certification from Stanford University and DeepLearning.AI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python & Prompt Engineering</h4>
                <h5>Udemy</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Earned technical certifications specializing in Python programming
              and advanced Prompt Engineering techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>TCS Young Professional</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Successfully completed the Young Professional Certificate program
              focused on foundational career and technical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
