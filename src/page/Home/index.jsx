import Slider from "../../components/Carousel";
import Courses from "../../components/Courses";
import Facts from "../../components/Facts";
import Question from "../../components/Question";

const Home = () => {
  return (
    <div>
      <Slider />
      <Facts />
      <Question />
      <Courses />
    </div>
  );
};

export default Home;
