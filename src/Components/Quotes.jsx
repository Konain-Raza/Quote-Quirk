import React, { useState, useEffect } from "react";
import "./Quotes.css";
import Loading from "./Loading";

function Quotes() {
  const [category, setCategory] = useState("inspirational");
  const [quote, setQuote] = useState({});
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    getQuotes();
  }, []);

  const copyToClipboard = () => {
    const textToCopy = `${quote.quote} - ${quote.author}`;
    navigator.clipboard.writeText(textToCopy);
  };

  const getQuotes = async () => {
    setIsLoading(true);
    setQuote("");
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    try {
      const data = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": "2MYEMyB6vzt7MZfwvuw59g==4zJsyAtjITt33eSI",
          "Content-Type": "application/json",
        },
      });
      const result = await data.json();
      setQuote(result[0]);
    } catch (error) {
      console.error("Failed to fetch quotes: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="quotesBox">
     <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
  <div className="quote-box p-4 sm:p-8 rounded-3xl shadow-lg max-w-md w-full relative">

          <h1 className="text-4xl font-semibold mb-6 text-center">
            Random Quote's 
          </h1>
          <div id="loadingProgress" className="w-full flex justify-center">
            {loading && <Loading />}
          </div>
          {!loading && (
            <>
              <p className="text-black-1000 mb-4">{quote.quote}</p>
              <div id="btns">
                <button className="copy" onClick={copyToClipboard}>
                  <span
                    data-text-end="Copied!"
                    data-text-initial="Copy to clipboard"
                    className="tooltip"
                  ></span>
                  <span>
                    <svg
                      xmlSpace="preserve"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      viewBox="0 0 6.35 6.35"
                      y="0"
                      x="0"
                      height="20"
                      width="20"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="clipboard"
                    >
                      <g>
                        <path
                          fill="currentColor"
                          d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlSpace="preserve"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      viewBox="0 0 24 24"
                      y="0"
                      x="0"
                      height="18"
                      width="18"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <g>
                        <path
                          data-original="#000000"
                          fill="currentColor"
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
                <p className="author">{quote.author}</p>
              </div>
            </>
          )}
          <div id="buttonsBox" className="w-full flex justify-between mt-10">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="options"
              id="options"
              className="rounded-md border-none w-40 bg-slate-200 pl-4"
            >
              <option value="Inspirational"> Inspirational</option>
              <option value="age">Age</option>
              <option value="alone">Alone</option>
              <option value="amazing">Amazing</option>
              <option value="anger">Anger</option>
              <option value="architecture">Architecture</option>
              <option value="art">Art</option>
              <option value="attitude">Attitude</option>
              <option value="beauty">Beauty</option>
              <option value="best">Best</option>
              <option value="birthday">Birthday</option>
              <option value="business">Business</option>
              <option value="car">Car</option>
              <option value="change">Change</option>
              <option value="communication">Communication</option>
              <option value="computers">Computers</option>
              <option value="cool">Cool</option>
              <option value="courage">Courage</option>
              <option value="dad">Dad</option>
              <option value="dating">Dating</option>
              <option value="death">Death</option>
              <option value="design">Design</option>
              <option value="dreams">Dreams</option>
              <option value="education">Education</option>
              <option value="environmental">Environmental</option>
              <option value="equality">Equality</option>
              <option value="experience">Experience</option>
              <option value="failure">Failure</option>
              <option value="faith">Faith</option>
              <option value="family">Family</option>
              <option value="famous">Famous</option>
              <option value="fear">Fear</option>
              <option value="fitness">Fitness</option>
              <option value="food">Food</option>
              <option value="forgiveness">Forgiveness</option>
              <option value="freedom">Freedom</option>
              <option value="friendship">Friendship</option>
              <option value="funny">Funny</option>
              <option value="future">Future</option>
              <option value="god">God</option>
              <option value="good">Good</option>
              <option value="government">Government</option>
              <option value="graduation">Graduation</option>
              <option value="great">Great</option>
              <option value="happiness">Happiness</option>
              <option value="health">Health</option>
              <option value="history">History</option>
              <option value="home">Home</option>
              <option value="hope">Hope</option>
              <option value="humor">Humor</option>
              <option value="imagination">Imagination</option>
              <option value="inspirational">Inspirational</option>
              <option value="intelligence">Intelligence</option>
              <option value="jealousy">Jealousy</option>
              <option value="knowledge">Knowledge</option>
              <option value="leadership">Leadership</option>
              <option value="learning">Learning</option>
              <option value="legal">Legal</option>
              <option value="life">Life</option>
              <option value="love">Love</option>
              <option value="marriage">Marriage</option>
              <option value="medical">Medical</option>
              <option value="men">Men</option>
              <option value="mom">Mom</option>
              <option value="money">Money</option>
              <option value="morning">Morning</option>
              <option value="movies">Movies</option>
              <option value="success">Success</option>
            </select>
            <button class="btn" onClick={getQuotes}>
              <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                class="sparkle"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>

              <span class="text">Re-Generate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
