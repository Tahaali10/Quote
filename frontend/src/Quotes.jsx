  import { Button, Typography } from "@mui/material";
  import { useEffect, useState } from "react";
  import axios from "axios";
  export default function Quotes() {
    
    const [quote, setQuote] = useState("");

    const getQuotes = async () => {
      try {
        console.log("Sending GET request to backend...");
        const response = await axios.get("http://localhost:8000/");
        const quoteBackend = response.data;
        console.log("Response from backend:", response.data);
        const randomIndex = Math.floor(Math.random() * quoteBackend.length);
        const randomQuotes = quoteBackend[randomIndex].Quote;
        setQuote(randomQuotes);
      }  catch (error) {
        console.error("error finding quotes", error);
      }
    };

    const handleClick = () => {
      getQuotes();
    };
    useEffect(() => {
      getQuotes();
    });
    return (
      <div>
        <Typography
          className="head"
          variant="h4"
          component="h3"
          style={{
            marginTop: "20px",
            marginLeft: "30px",
            fontWeight: "700",
            color: " #c31432",
          }}
        >
          Quote{" "}
          <span
            style={{
              color: "#2C5364",
              fontWeight: "600",
              fontSize: "30px",
              background: "none",
            }}
          >
            Of The Day
          </span>
        </Typography>
        <Typography
          variant="body1"
          component="h5"
          style={{
            marginTop: "20px",
            marginLeft: "300px",
            fontWeight: "700",
            color: " #1C5364",
            fontSize: "20px",
          }}
        >
          {quote}
        </Typography>
        <Button
          className="btn"
          onClick={handleClick}
          style={{
            backgroundColor: "#262626",
            marginLeft: "750px",
            marginTop: "30px",
          }}
        >
          Next
        </Button>
      </div>
    );
  }
