
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Test Automation Framework",
      description:
        "Developed a comprehensive test automation framework for an e-commerce platform using Selenium WebDriver and Java, reducing regression testing time by 70%.",
      tags: ["Selenium", "Java", "TestNG", "Jenkins", "GitHub Actions"],
      link: "#",
      github: "#",
    },
    {
      title: "Mobile Banking App Testing",
      description:
        "Implemented Appium-based automation suite for a mobile banking application, covering critical user journeys across iOS and Android platforms.",
      tags: ["Appium", "JavaScript", "Mocha", "BrowserStack", "CI/CD"],
      link: "#",
      github: "#",
    },
    {
      title: "API Test Framework",
      description:
        "Built a robust API testing framework with RestAssured and Cucumber, enabling non-technical team members to contribute to test coverage.",
      tags: ["RestAssured", "Cucumber", "Java", "Postman", "Jenkins"],
      link: "#",
      github: "#",
    },
    {
      title: "Performance Testing Dashboard",
      description:
        "Created a real-time performance metrics dashboard using JMeter, Grafana, and InfluxDB to monitor application performance during load testing.",
      tags: ["JMeter", "Grafana", "InfluxDB", "Docker", "AWS"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground text-lg">
            A showcase of my test automation and quality assurance projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </Button>
                  <Button size="sm" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
