import React from 'react';


function ViewQuotes() {
    const { data: posts, loading} = useFetch('http://localhost:9292/authors')

    return(
        <div>
            {loading ? <p>Loading...</p> : null}
            {
                posts.map((post) => (
                    <div>
                        <p>Author{post.author}</p>
                        <h3>Quote{post.quote}</h3>
                    {/* <Link to={`/quotes/${quote.id}`} >
                        <p></p>
                        <p></p>
                    </Link> */}
                    </div>
                ))
            }
        </div>
    )
}

export default ViewQuotes;