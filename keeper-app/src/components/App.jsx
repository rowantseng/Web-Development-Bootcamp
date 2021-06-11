import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import examples from "./examples";

function App() {
  return (
    <div>
      <Header />
      {examples.map((example) => (
        <Note
          key={example.key}
          title={example.title}
          content={example.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
