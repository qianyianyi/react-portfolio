import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      title: 'OpenClaw 配置指南',
      description: '完整的 AI 助手部署和配置方案',
      tech: ['Node.js', 'Systemd', 'Docker'],
      githubUrl: 'https://github.com/qianyianyi/openclaw',
      demoUrl: 'https://github.com/qianyianyi/openclaw'
    },
    {
      id: 2,
      title: 'OpenCode 卸载工具',
      description: '彻底清理 OpenCode 及其组件的自动化脚本',
      tech: ['Bash', 'Systemd', '包管理'],
      githubUrl: 'https://github.com/qianyianyi/opencode-uninstall',
      demoUrl: 'https://github.com/qianyianyi/opencode-uninstall'
    },
    {
      id: 3,
      title: '联网搜索工具',
      description: '多引擎搜索集成，支持浏览器自动化和 API',
      tech: ['Python', 'Playwright', 'API'],
      githubUrl: '#',
      demoUrl: '#'
    }
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Git',
    'Docker', 'Linux', 'Bash', 'HTML/CSS', 'GitHub Actions'
  ];

  return (
    <div className="App">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>🌸 椿卷</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">首页</a></li>
            <li><a href="#about">关于</a></li>
            <li><a href="#projects">项目</a></li>
            <li><a href="#skills">技能</a></li>
            <li><a href="#contact">联系</a></li>
          </ul>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            你好，我是 <span className="highlight">椿卷</span>
          </h1>
          <p className="hero-subtitle">
            全栈开发者 & 技术爱好者
          </p>
          <p className="hero-description">
            专注于创建优秀的数字体验，热爱探索新技术和解决复杂问题
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">查看项目</a>
            <a href="#contact" className="btn btn-secondary">联系我</a>
          </div>
        </div>
      </section>

      {/* 关于区域 */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">关于我</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                我是一名充满激情的开发者，专注于现代 Web 技术和自动化工具。
                喜欢构建实用的解决方案，优化开发流程。
              </p>
              <p>
                在 GitHub 上维护多个开源项目，包括 AI 助手配置、系统管理工具等。
                致力于分享知识和帮助社区成长。
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">开源项目</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">代码提交</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2</span>
                  <span className="stat-label">GitHub 仓库</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 项目区域 */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">我的项目</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    className="project-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.demoUrl !== '#' && (
                    <a 
                      href={project.demoUrl} 
                      className="project-link demo"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      演示
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技能区域 */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">技术技能</h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系区域 */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">联系我</h2>
          <div className="contact-content">
            <p>有兴趣合作或交流技术？欢迎通过以下方式联系：</p>
            <div className="contact-links">
              <a 
                href="https://github.com/qianyianyi" 
                className="contact-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="contact-icon">🐙</span>
                GitHub
              </a>
              <a 
                href="mailto:your-email@example.com" 
                className="contact-link"
              >
                <span className="contact-icon">📧</span>
                邮箱
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 椿卷. 使用 React 和 GitHub Actions 构建.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;