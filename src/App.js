import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent/MainContent";
import TodoItem from "./components/TodoItem/TodoItem";
import ContactCard from "./components/ContactCard/ContactCard";

import "./components/TodoItem/TodoItem.css";

function App() {
  return (
    <div className="body">
      <Header />

      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>

      <ContactCard
        name="Mr. Paw"
        imgUrl="http://placekitten.com/300/200"
        phone="(555) 555-5555"
        email="email@test.com"
      />

      <ContactCard
        name="Mr. Cat"
        imgUrl="http://placekitten.com/300/200"
        phone="(555) 555-5555"
        email="email@test.com"
      />

      <ContactCard
        name="Mrs. Whiskers"
        imgUrl="http://placekitten.com/300/200"
        phone="(555) 555-5555"
        email="email@test.com"
      />

      <ContactCard
        name="Mr. Pink"
        imgUrl="http://placekitten.com/300/200"
        phone="(555) 555-5555"
        email="email@test.com"
      />

      <Footer />
    </div>
  );
}

export default App;
