import { CheckCircle } from "lucide-react";
export const About = () => {
  const skills = ["Selenium WebDriver", "Cypress", "Playwright", "Appium", "API Testing", "CI/CD Integration", "Test Automation Frameworks", "Performance Testing", "Jenkins", "JIRA & Test Management Tools"];
  return <section id="about" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate QA Automation Engineer with extensive experience in designing, 
              implementing, and maintaining test automation frameworks for web, mobile, and API testing.
            </p>
            <p className="text-lg leading-relaxed">
              My approach to quality assurance combines technical expertise with a deep understanding of 
              user experience, ensuring that the applications I test not only function correctly but also 
              provide an exceptional user experience.
            </p>
            <p className="text-lg leading-relaxed">
              With a background in both manual and automated testing, I bring a comprehensive perspective 
              to quality assurance that helps teams deliver high-quality software products.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="font-medium">Bachelor of Science in Computer Science</span>
                  <span className="text-muted-foreground">2022</span>
                </div>
                <div className="flex flex-col">
                  
                  
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{skill}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};