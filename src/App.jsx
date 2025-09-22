import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Alert from "./components/Alert";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";
import './App.css'
const App = () => {
  const [notes, setNotes] = useState(() => {
    try {
      const raw = localStorage.getItem("keeper_notes_v1");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const [alert, setAlert] = useState({ show: false, message: "" });

  useEffect(() => {
    localStorage.setItem("keeper_notes_v1", JSON.stringify(notes));
  }, [notes]);

  const showTemporaryAlert = (message) => {
    setAlert({ show: true, message });
    setTimeout(() => setAlert({ show: false, message: "" }), 2000);
  };

  const addNote = (note) => {
    if (!note.title.trim() && !note.content.trim()) {
      showTemporaryAlert("Please enter a title or some content before adding.");
      return;
    }

    setNotes((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: note.title.trim(),
        content: note.content.trim(),
      },
    ]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50">
      <Header title="Keeper" />

      <main className="pb-12">
        <div className="px-4">
          <CreateArea onAdd={addNote} />

          <section className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {notes.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-500">
                No notes yet — add one above!
              </div>
            ) : (
              notes.map((n) => (
                <Note
                  key={n.id}
                  id={n.id}
                  title={n.title}
                  content={n.content}
                  onDelete={deleteNote}
                />
              ))
            )}
          </section>
        </div>
      </main>

      <Footer />
      <Alert show={alert.show} message={alert.message} />
    </div>
  );
};

export default App;
