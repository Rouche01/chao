import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import Header from '../Layout/Header/Header';

const Layout = (props) => (
    <Wrapper>
        <Header />
            <main>
                {props.children}
            </main>
        {/* <div>Footer</div> */}
    </Wrapper>
);

export default Layout;