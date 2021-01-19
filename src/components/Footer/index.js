import React from 'react';
import {Footer} from 'react-materialize';


const Index = () => {
    return (
        <Footer
        className="example  blue darken-3"
        copyrights="&copy 2015 Copyright Text"
        links={<ul>
            <li><a className="grey-text text-lighten-3" href="#!">GitHub</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Email</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
            </ul>}
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
      >
        <h5 className="white-text">
          Footer Content
        </h5>
        <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
        </p>
      </Footer>
    )
}

export default Index;