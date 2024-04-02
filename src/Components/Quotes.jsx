import React, { useState , useEffect} from 'react'
import "./Quotes.css"
import Loading from './Loading'
function Quotes() {
    const [category,setCategory]= useState("inspirational")
    const [quote, setQuote] = useState({})
    const [loading, setIsLoading] = useState(false)
    useEffect(() => {
        getQuotes();
            }, [])
            
            const copyToClipboard = () => {
                const textToCopy = quote.quote + " - " + quote.author;
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        console.log('Copied to clipboard:', textToCopy);
                    })
                    .catch(err => {
                        console.error('Failed to copy: ', err);
                    });
            };
    const getQuotes = async() => {
        setIsLoading(true);
    setCategory(category);
        const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;

        console.log(url)
       const data = await fetch(url, {
           method: 'GET',
        headers: {
            'X-Api-Key': '2MYEMyB6vzt7MZfwvuw59g==4zJsyAtjITt33eSI',
            "Content-Type": "application/json"
        },
        
       });
       const result = await data.json();
       console.log(category);
       setQuote(result[0]);
       setIsLoading(false);
    };
    
    
     
  return (
<div id="quotesBox">

    <div className="min-h-screen flex items-center justify-center e">
        <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md w-full relative">
            <h1 className="text-4xl font-semibold mb-6 text-center flex justify-center w-full ">Random Quote's</h1>
         <div id="loadingProgress" className='w-full justify-center flex'>
         {
            loading?(
 <Loading/> 
               
            ):null
           }
         </div>
            <p className="text-gray-900 mb-4">
           {loading?null:(
                quote.quote)} 
            
 <button type="button" onClick={copyToClipboard} className="absolute ml-2 w-10 bottom-28 right-10 js-clipboard p-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    data-clipboard-target="#hs-clipboard-basic"
    data-clipboard-action="copy"
    data-clipboard-success-text="Copied">
    <svg className="js-clipboard-default size-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>

    <svg className="js-clipboard-success hidden size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </button>
            </p>
            
            <p className='w-full text-gray-900  italic text-sm '>   {loading?null:(
                quote.author 
            )} </p>

           <div id="buttonsBox" className='w-full flex justify-between mt-10'>
           <select value={category} onChange={(e)=>setCategory(e.target.value)}  name="options" id="options" className='rounded-md border-none w-40 bg-slate-200 pl-4  ' >
           <option value="Inspirational" > Inspirational</option>
            
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
            <button onClick={getQuotes} className="w-6/12 bg-[#301934] text-white px-5 py-3 rounded-lg hover:bg-pfocus:outline-none">Re-Generate ✨</button>
        
           </div>
           </div>
    </div>

</div>
  )
}

export default Quotes