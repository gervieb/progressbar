// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import ProgressBar from './ProgressBar.component';

/** @namespace ScandipwaTest/Component/ProgressBar/Container/ProgressBarContainer */
export class ProgressBarContainer extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    containerFunctions = {
        // getData: this.getData.bind(this)
    };

    containerProps = () => {
        // isDisabled: this._getIsDisabled()
    };

    render() {
        return (
            <ProgressBar
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default ProgressBarContainer;
