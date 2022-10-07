import About from "../../components/About";
import Slider from "../../components/Carousel";
import Courses from "../../components/Courses";
import Facts from "../../components/Facts";
import Question from "../../components/Question";
import Students from "../../components/Students";
import Teachers from "../../components/Teachers";
import Choose from "../../components/WhyChoose";

const Home = () => {
  return (
    <div>
      <Slider />
      <Facts />
      <Question />
      <Courses />
      <About />
      <Choose />
      <Teachers />
      <Students />
    </div>
  );
};

export default Home;
