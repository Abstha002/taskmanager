"use client"
import { useRef, useState, useEffect } from "react";
import QuotesCard from "../components/QuotesCard";


export default function Dashboard() {
    const [value, setValue] = useState('');
    const [datas, setDatas] = useState<any[]>([]); // Store the array of quotes
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Fetch data from the API route
        const fetchData = async () => {
            try {
                const response = await fetch('api/dashboard');
                
                // Ensure the response is OK
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                
                // Log the result to understand its structure
                console.log("meow meow")
                console.log(result);
                
                // Assuming the API returns an object with a "data" key containing the quotes array
                
                    setDatas(result.data);
            
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // This effect runs once when the component mounts

    const activate = () => {
        inputRef.current?.focus();  // Focus the input field
    };

    return (
        <>
            <main className="centered-main">
                <h1>Dashboard Page</h1>
                
                <section>           
                    <input
                        ref={inputRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)} 
                        className="border border-amber-500"
                        placeholder="Type something here..."
                    />
                    <div>{value}</div>
                    <button onClick={activate}>Focus</button>
                </section>

                <section>
                    <h2>Quotes:</h2>
                    {datas.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        datas.map((data, index) => (
                            <div key={index}>
                     
                                <QuotesCard author={data.author} quotes={data.content}/>
                            </div>
                        ))
                    )}
                </section>
            </main>
        </>
    );
}
