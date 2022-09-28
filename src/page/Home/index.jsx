import About from "../../components/About";
import Slider from "../../components/Carousel";
import Courses from "../../components/Courses";
import Facts from "../../components/Facts";
import Question from "../../components/Question";
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
    </div>
  );
};

export default Home;
