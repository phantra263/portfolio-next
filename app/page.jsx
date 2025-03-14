import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">Hi, I'm <span className="text-accent">TeaZ</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-code">I'm a frontend developer with a passion for building web applications.</p>

            {/* btn and social media */}
            <div className="flex flex-col xl:flex-row gap-4 items-center">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 rounded-full text-accent border-accent hover:bg-accent hover:text-black transition-all duration-300">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              {/* social media */}
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 text-accent" />
              </div>
            </div>
          </div>


          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        <Stats />
      </div>
    </section >
  );
}

export default Home;
