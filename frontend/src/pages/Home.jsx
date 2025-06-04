import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Loader from "../components/Loader";

function Home() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (event) => {
    setCode(event.target.value);
  };

  const handleEnhanceCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      setReview("❌ Something went wrong while enhancing the code.", error);
    } finally {
      setLoading(false);
    }
  };

  const handleExplainCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/ai/explain-code",
        { code }
      );
      setReview(response.data);
    } catch (error) {
      setReview("❌ Something went wrong while explaining the code.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[92vh] bg-gray-800 text-white flex flex-col sm:flex-row justify-evenly items-center gap-y-3 py-[1%] sm:py-[0.5%] overflow-y-auto">
      <div className="left w-[95%] sm:w-[49%] h-[48vh] sm:h-full bg-gray-700 rounded-xl ">
        <div className="input bg-black h-[88%] w-[98%] m-[1%] rounded-xl ">
          <textarea
            onChange={handleInput}
            className="h-full w-full sm:text-lg text-white rounded-xl p-2 overflow-y-auto resize-none "
            placeholder="Enter your Code here..."
          >
            {code}
          </textarea>
        </div>

        <div className="w-full flex flex-wrap justify-around items-center gap-y-2">
          <button
            className="sm:px-6 px-3 sm:py-2 py-1 rounded-lg border-0 bg-[#FF6F61] text-black tracking-wider sm:text-lg text-sm font-bold transition-all duration-250 ease-in-out sm:shadow-[0px_10px_0px_0px_#CC4F43] shadow-[0px_5px_0px_0px_#CC4F43] cursor-pointer sm:hover:shadow-[0px_7px_0px_0px_#CC4F43] hover:shadow-[0px_4px_0px_0px_#CC4F43]  sm:hover:translate-y-[3px] hover:translate-y-[2px] active:bg-[#FF6F61] sm:active:shadow-none active:shadow-none sm:active:translate-y-[10px] active:translate-y-[7px] active:duration-[200ms]"
            onClick={handleExplainCode}
          >
            Explain Code
          </button>
          <button
            className="sm:px-6 px-3 sm:py-2 py-1 rounded-lg border-0 bg-[#5AC8FA] text-black tracking-wider font-bold sm:text-lg text-sm transition-all duration-250 ease-in-out sm:shadow-[0px_10px_0px_0px_#3299C6] shadow-[0px_5px_0px_0px_#3299C6] cursor-pointer sm:hover:shadow-[0px_7px_0px_0px_#3299C6] hover:shadow-[0px_4px_0px_0px_#3299C6] sm:hover:translate-y-[3px] hover:translate-y-[2px] active:bg-[#5AC8FA] sm:active:shadow-none  active:shadow-none sm:active:translate-y-[10px] active:translate-y-[7px] active:duration-[200ms]"
            onClick={handleEnhanceCode}
          >
            Enhance Code
          </button>
        </div>
      </div>

      <div className="right w-[95%] sm:w-[49%] h-[48vh] sm:h-full sm:text-lg bg-gray-900 rounded-xl p-4 overflow-auto text-white shadow-md">
        {loading ? (
          <Loader />
        ) : (
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        )}
      </div>
    </div>
  );
}

export default Home;
