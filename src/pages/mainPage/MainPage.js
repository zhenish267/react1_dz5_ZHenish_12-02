import News from "../../components/news/News";
import React, {useState} from "react";

function MainPage () {
    const [showNews, setShowNews] = useState(false);

    function news (e) {
        e.preventDefault();
        setShowNews(!showNews);
    }

    return (
        <div>
            {showNews === true ? <News /> : ""}
            <button onClick={news}>NEWS</button>
        </div>
    )
}





export default MainPage;