import React from "react";
import Header from "./Header";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-page">
          <div className="error-container">
            <h1>
              Somehow, you managed to get an error on a very simple webpage.
              <br></br>Congrats! Take this sticker!
            </h1>
            <i class="bx bxs-star"></i>
            <a href="/">
              <button>
                Take the Sticker<br></br>and leave.
              </button>
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
