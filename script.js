async function shortenURL() {
    const url = document.getElementById("url").ariaValueMax;
    const response = await fetch('https;//tinyurl.com/api-create.php?url=${encodeURLComponent()}')
        if (response.ok) {
            const data = await response.text();
            document.getElementById('result').innerHTML = shortenURL; <a href="https://www.example.com" target="myDiv">Click here  </a>
            
    }
        else {
            document.getElementById('result').innerHTML = "Error shortening URL";
    }
}