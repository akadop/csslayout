import React, { useState } from 'react';

import DetailsLayout from '../../DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useInterval from '../../hooks/useInterval';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Progress bar');
    const [progress, setProgress] = useState(0);
    useInterval(() => {
        setProgress(v => v === 100 ? 0 : v + 1);
    }, 1 * 100);

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Progress bar</h1>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="h1 w-50 br-pill bg-black-10">
                            <div className="br-pill h-100 bg-blue flex items-center justify-center pa1 white f7" style={{ width: `${progress}%` }}>
                                {progress}%
                            </div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    /* Colors */
    background-color: rgba(0, 0, 0, .1);

    /* Rounded border */
    border-radius: 9999px;
">
    <div style="
        /* Content is centered */
        align-items: center;
        display: flex;
        justify-content: center;

        /* Colors */
        background-color: #357edd;
        color: #fff;

        /* Rounded border */
        border-radius: 9999px;

        /* Width based on the number of percentages */
        width: 40%;
    ">
        <!-- The number of percentages -->
        40%
    </div>
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;