import React from 'react';

class Page404 extends React.Component {
    render() {
        return (
            <div className="container">
                <article className="content" style={{ textAlign: `center` }}>
                    <h1 className="content-title">Error 404</h1>
                    <section className="content-body">
                        Page not found, <Link to="/">return home</Link> to start over
                    </section>
                </article>
            </div>
        )
    }

}

export default Page404;