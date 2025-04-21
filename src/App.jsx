import { useState } from "react";
import "./App.css";
import avatarImage from "./assets/react.svg";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card-container">
      <div className="profile-card">
        <div className="left-column">
          <div className="avatar-container">
            <img
              src={avatarImage}
              alt="个人头像"
              className="avatar"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            {isHovered && <div className="avatar-overlay">你好！</div>}
          </div>
          <h1 className="name">张三</h1>
          <p className="title">前端开发工程师</p>
          <div className="social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:example@email.com" className="social-link">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>

        <div className="right-column">
          <div className="section">
            <h2>关于我</h2>
            <p className="bio">
              热爱技术，专注于Web开发，致力于创造优秀的用户体验。拥有丰富的前端开发经验，善于解决复杂问题。
            </p>
          </div>

          <div className="section">
            <h2>技能专长</h2>
            <div className="skills">
              <div className="skill-tag">React</div>
              <div className="skill-tag">Vue.js</div>
              <div className="skill-tag">TypeScript</div>
              <div className="skill-tag">Node.js</div>
              <div className="skill-tag">Webpack</div>
              <div className="skill-tag">CSS3</div>
            </div>
          </div>

          <div className="section">
            <h2>项目经历</h2>
            <div className="projects">
              <div className="project-item">
                <h3>电商平台重构</h3>
                <p>
                  使用React和TypeScript重构老旧的电商系统，提升了50%的性能表现
                </p>
              </div>
              <div className="project-item">
                <h3>企业管理系统</h3>
                <p>基于Vue.js开发的现代化企业管理系统，服务超过100家企业客户</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
