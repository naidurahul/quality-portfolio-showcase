import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <p className="text-primary font-medium">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="block">Rahul Naidu</span>
              <span className="block heading-gradient mt-2">
                QA Automation Engineer
              </span>
            </h1>
            <div className="typing-container animate-typing w-full md:w-3/4">
              <p className="text-lg md:text-xl text-muted-foreground">
                I specialize in building robust and scalable test automation frameworks
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="group">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-background rounded-2xl p-6 h-[400px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-blue-400 mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">QA</span>
                </div>
                <div className="font-mono text-sm">
                  <p className="text-muted-foreground mb-1">function <span className="text-primary">ensureQuality</span>() {`{`}</p>
                  <p className="pl-4 text-foreground">return <span className="text-green-500">'Always Reliable'</span>;</p>
                  <p className="text-muted-foreground">{`}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border border-border">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5V11.2929L10.1464 9.14645C10.3417 8.95118 10.6583 8.95118 10.8536 9.14645C11.0488 9.34171 11.0488 9.65829 10.8536 9.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L4.14645 9.85355C3.95118 9.65829 3.95118 9.34171 4.14645 9.14645C4.34171 8.95118 4.65829 8.95118 4.85355 9.14645L7 11.2929V2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>;
};