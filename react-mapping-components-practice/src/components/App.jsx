import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function CreateEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(CreateEntry)}
      </dl>
    </div>
  );
}

export default App;
