import React from 'react';
import Card from '../Card/Card';

function ViewQuotes({quotes, id}) {
    const quote_container = quotes.map((item, index) => {
        return <Card key={index} name={item.name} description={item.description} id={id}/>
    })

    return(
        <div>
           {quote_container}
        </div>
    )
}

export default ViewQuotes;