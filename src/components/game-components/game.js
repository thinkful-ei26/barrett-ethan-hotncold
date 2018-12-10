import React from 'react';

import Status from './guessStatus';
import Form from './guess-form';
import Counter from './guess-counter';
import Log from './guess-log';

export default function Game(props) {
    return (
        <section>
            <Status />
            <Form />
            <Counter />
            <Log />
        </section>
    )
}