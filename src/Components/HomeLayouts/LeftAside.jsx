import React, { Suspense } from 'react';
import Catagories from '../Catagories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span class="loading loading-infinity loading-lg"></span>}>
                <Catagories></Catagories>
            </Suspense>
        </div>
    );
};

export default LeftAside;