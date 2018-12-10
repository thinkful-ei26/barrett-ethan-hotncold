import React from 'react';

import Title from './title';
import Game from './game';
import What from './what';
import newGame from './newGame';

export default function GameParent() {
    return (
        <div>
            <div>
                <Title />
            </div>

            {/* <div>
                <Game />
            </div> */}
        </div>
    )
}