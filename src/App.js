
import Navbar from "./Components/Navbar";

import ContactList from "./Components/ContactList";


function App() {
  return (
    <div className="h-screen flex flex-col w-full">
      {/* rendering the Navbar */}
      <Navbar />
      {/* render the ContactList */}
      <ContactList />
    </div>
  );
}

export default App;
