import Marquee3k from 'marquee3000';
import React from 'react';

class Marquee extends React.Component {
    componentDidMount () {
        Marquee3k.init();
        Marquee3k.refreshAll();
    }

    render() {
        return (
            <div className="marquee3k"
                data-speed="0.5"
            >
                <h2>The hand which scoops up water is the first vessel. The fingers of both hands intertwined are the first basket. The rich development of all kinds of intertwining, from the game of cat's cradle to weaving, seems to me to have its origin here. One feels that hands live their own life and their own transformations. It is not enough that this or that shape should exist in the surrounding world. Before early man could create it himself, his hands and fingers had to enact it. Empty fruit husks in the shape of cups, like coconut shells, may have existed for a long time, but were thrown away heedlessly. It was the fingers forming a hollow to scoop up water which made the cup real. One could say that objects in our sense, objects which have value because we ourselves have made them, first existed as signs made by hands. There seems to be an immensely important turning point where the nascent sign language for things first comprehends a desire to shape them oneself, long before this is actually attempted.
What man, with the help of his hands, enacted, was only made long afterwards, when it had been enacted often enough. Words and objects are accordingly the emanations and products of a single unified experience: representation by means of the hands. Everything that a man can do, everything that represents his culture, he first incorporated into himself by means of transformation. Hands and face were the instruments of these transformations and their significance, compared with the rest of the body, became increasingly great. The specific life of the hands, in this its earliest sense, still retains its pristine force in gesticulation. </h2>
            </div>
        );
    }
}

export default Marquee;