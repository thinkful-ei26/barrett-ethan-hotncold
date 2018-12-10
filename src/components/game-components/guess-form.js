import React from 'react';

export default function GameForm() {
    return(
        <form>
            <input type="number" min="1" max="100" placeholder="Enter Your Guess"></input>

            <button>Guess</button>
        </form>
    )
}