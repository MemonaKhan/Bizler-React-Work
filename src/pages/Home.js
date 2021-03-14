import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Slider from "../sections/Slider";
import Ourteam from "../sections/Ourteam";
import BlogPost from "../sections/BlogPost";
export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Topbar />
        <Navbar />
        <Slider />
        <Ourteam />
        <BlogPost />
      </div>
    </>
  );
}
