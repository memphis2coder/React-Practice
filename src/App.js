import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem/TodoItem";
import ContactCard from "./components/ContactCard/ContactCard";
import Jokes from "./components/Jokes/Jokes";

import "./components/TodoItem/TodoItem.css";

function App() {
  return (
    <div className="body">
      {/* header */}
      <Header />
      {/* todo-list */}
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      {/* contacts */}
      <div className="Contacts">
        <ContactCard
          contact={{
            name: "Mr. Paw",
            imgUrl: "http://picsum.photos/300/200",
            phone: "(555) 555-5555",
            email: "email@test.com"
          }}
        />

        <ContactCard
          contact={{
            name: "Mr. Random",
            imgUrl: "http://picsum.photos/300/200",
            phone: "(555) 555-5555",
            email: "random@test.com"
          }}
        />

        <ContactCard
          contact={{
            name: "Mr. Phone",
            imgUrl: "http://picsum.photos/300/200",
            phone: "(555) 555-5555",
            email: "phone@test.com"
          }}
        />

        <ContactCard
          contact={{
            name: "Mr. Dog",
            imgUrl: "http://picsum.photos/300/200",
            phone: "(555) 555-5555",
            email: "Dog@test.com"
          }}
        />
      </div>
      {/* joker */}
      <Jokes punchLine="This is only the punchline" />
      <Jokes joke="this is the joke" punchLine="here is the punchline" />
      <Jokes joke="this is the joke" punchLine="here is the punchline" />
      <Jokes joke="this is the joke" punchLine="here is the punchline" />
      <Jokes joke="this is the joke" punchLine="here is the punchline" />
      <Footer joke="this is the joke" punchLine="here is the punchline" />
    </div>
  );
}

export default App;
