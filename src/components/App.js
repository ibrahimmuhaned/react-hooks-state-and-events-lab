// import React from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const appClass = false ? "App dark" : "App light"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button>Dark Mode</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;

// App.js
// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`App ${darkMode ? "dark" : "light"}`}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={toggleDarkMode}>Dark Mode</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setDaekMode] = useState(false);


  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=> setDaekMode((prev)=> !prev)}>{darkMode ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;