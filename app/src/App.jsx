import { useState } from "react";

function App() {
  return (
    <div>
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

export default App;
