import React, { useState, useEffect } from 'react';
import './CareerRoadmap.css';

// Import Ionicons
const IonIcon = ({ name, className }) => {
  return <ion-icon name={name} class={className}></ion-icon>;
};

const CareerRoadmap = () => {
  const roadmapData = [
    {
      id: 1,
      years: "Year 1-2",
      phase: "Early Foundation",
      icon: "school-outline",
      goal: "Establish a strong AI/ML foundation while gaining hands-on experience.",
      sections: [
        {
          title: "Academics & Research",
          items: [
            "Deepen specialization in Artificial Intelligence at Mapúa",
            "Work on applied AI projects (health tech, disaster prediction)"
          ]
        },
        {
          title: "Skills to Sharpen",
          items: [
            "Machine Learning algorithms (implement from scratch)",
            "Data Engineering basics (handling large-scale datasets)"
          ]
        },
        {
          title: "Possible Role",
          items: [
            "AI Intern / Junior ML Engineer",
            "Internship at startup or research lab"
          ]
        }
      ]
    },
    {
      id: 2,
      years: "Year 3-4",
      phase: "Emerging Professional",
      icon: "briefcase-outline",
      goal: "Transition from student to AI professional.",
      sections: [
        {
          title: "Industry Experience",
          items: [
            "Land role as AI/ML Engineer in tech company",
            "Focus on real-world problem solving (predictive analytics)"
          ]
        },
        {
          title: "Projects & Contributions",
          items: [
            "Develop open-source AI tools (advanced Read My Face project)",
            "Participate in AI hackathons and Kaggle competitions"
          ]
        },
        {
          title: "Skills to Master",
          items: [
            "Deep Learning frameworks (TensorFlow, PyTorch)",
            "NLP (chatbots, document AI, voice recognition)"
          ]
        }
      ]
    },
    {
      id: 3,
      years: "Year 5-6",
      phase: "Specialization & Recognition",
      icon: "flask-outline",
      goal: "Carve out a niche in AI and become recognized in that space.",
      sections: [
        {
          title: "Focus Areas",
          items: [
            "Computer Vision → medical imaging, disaster monitoring",
            "NLP → Filipino/English bilingual AI, low-resource language models"
          ]
        },
        {
          title: "Professional Growth",
          items: [
            "Publish research papers in IEEE/ACM journals",
            "Give talks at conferences about projects"
          ]
        },
        {
          title: "Possible Role",
          items: [
            "Senior AI Engineer / Research Scientist",
            "Leading AI projects in healthcare, fintech, or gov-tech"
          ]
        }
      ]
    },
    {
      id: 4,
      years: "Year 7-8",
      phase: "Leadership & Innovation",
      icon: "rocket-outline",
      goal: "Move into leadership while innovating in AI solutions.",
      sections: [
        {
          title: "Leadership Development",
          items: [
            "Lead an AI research team or become AI project manager",
            "Mentor students and younger developers in AI communities"
          ]
        },
        {
          title: "Innovation",
          items: [
            "Build AI startup (health monitoring, job market analytics)",
            "Develop disaster early-warning systems"
          ]
        },
        {
          title: "Possible Role",
          items: [
            "AI Lead / Research Lead / Founder"
          ]
        }
      ]
    },
    {
      id: 5,
      years: "Year 9-10",
      phase: "Expert & Visionary",
      icon: "globe-outline",
      goal: "Establish myself as an AI leader in the Philippines and globally.",
      sections: [
        {
          title: "Global Recognition",
          items: [
            "Recognized as thought leader in AI",
            "Publish influential research on AI for developing countries"
          ]
        },
        {
          title: "Career Possibilities",
          items: [
            "Chief AI Officer (CAIO): Driving AI strategy in corporation",
            "Startup Founder: Running successful AI-driven company"
          ]
        },
        {
          title: "Vision",
          items: [
            "Develop AI systems that improve society (healthcare, disaster management)",
            "Build AI initiatives positioning Philippines as regional AI hub"
          ]
        }
      ]
    }
  ];

  return (
    <>
    <div className="roadmap-container">
      <div className="timeline">
        {roadmapData.map((phase, index) => (
          <div key={phase.id} className="phase-card">
            {/* Idle State - Only Year Label */}
            <div className="phase-idle">
              <div className="phase-year-label">
                <IonIcon name={phase.icon} className="phase-icon" />
                <span className="year-text">{phase.years}</span>
              </div>
            </div>
            
            {/* Hover State - Full Content */}
            <div className="phase-expanded">
              <div className="phase-header">
                <IonIcon name={phase.icon} className="phase-icon-large" />
                <div className="phase-info">
                  <h2 className="phase-years">{phase.years}</h2>
                  <h3 className="phase-title">{phase.phase}</h3>
                </div>
              </div>
              
              <div className="phase-goal">
                <IonIcon name="target-outline" className="goal-icon" />
                <strong>Goal:</strong> {phase.goal}
              </div>
              
              <div className="phase-sections">
                {phase.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="section">
                    <h4 className="section-title">{section.title}</h4>
                    <ul className="section-items">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="section-item">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {index < roadmapData.length - 1 && (
              <div className="connector-arrow">
                <IonIcon name="arrow-forward-outline" className="arrow-icon" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
    <div className="typewriter-footer">
      <TypewriterText />
    </div>
    </>
  );
};

const TypewriterText = () => {
  const texts = [
    "road map by carl emmanuel macabales",
    "road map by a computer science student"
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (!isDeleting && currentIndex < currentText.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === currentText.length) {
      // Finished typing, wait 5 seconds then start deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 5000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting backward
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Finished deleting, switch to next text
      setIsDeleting(false);
      setTextIndex(prev => (prev + 1) % texts.length);
    }
  }, [currentIndex, textIndex, isDeleting, texts]);

  return <span className="typewriter-text">{displayText}</span>;
};

export default CareerRoadmap;