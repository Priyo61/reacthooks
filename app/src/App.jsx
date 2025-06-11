import { useState } from "react";

function App() {
  return (
    <div>
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button>Toggle Message</button>
    </div>
  );
};

export default App;
