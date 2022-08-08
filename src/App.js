import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer">
          <p className="Footer">
            This project was coded by{" "}
            <a
              href="https://subtle-malabi-26387a.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Alexandra Goilo
            </a>
            👩‍💻 and is {""}
            <a
              href="https://github.com/AlexaSheCodes/Dictionary"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
            {""} and {""}
            <a
              href="https://chimerical-pika-fa25af.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
