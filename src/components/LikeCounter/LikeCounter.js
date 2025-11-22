import { useState, useEffect } from "react";
import "./LikeCounter.css";

function LikeCounter({title, description, count, color}) {
  const [likes, setLikes] = useState(parseInt(count));
  const counterStyles = {
    color: likes > 5 ? "red" : "black",
  };

  useEffect(() => {
    console.log("use effect odpalony");
    document.title = `${likes} likow dla posta`
  }, [likes])
  
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    if (likes < 1) {
      return;
    }
    setLikes(likes - 1);
  };

  return (
    <div className="post" style={({ BackgroundColor: color})}>
      {console.log(title, description)}
      <p style={counterStyles}>Fajnyyyy post!! Liczba lików {likes}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="actions">
        <button onClick={handleLike}>Polub 👍</button>
        <button onClick={handleDislike}>Dislike 👎</button>
      </div>
    </div>
  );
}

export default LikeCounter;
