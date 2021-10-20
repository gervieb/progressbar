// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ProgressBar.style';

/** @namespace ScandipwaTest/Component/ProgressBar/Component/ProgressBarComponent */
export class ProgressBarComponent extends PureComponent {
    static propTypes = {
        // checkoutStep: PropTypes.string.isRequired
    };

    renderShippingProgress() {
        return (
            <div block="Progressbar">
                <div block="Step" mods={ { isActive: true } }>
                    <div block="Step" elem="Bullet" mods={ { isActive: true } }><span>1</span></div>
                    <div block="Step" elem="Check"><span>✔</span></div>
                    <p block="Step" elem="Title">Shipping</p>
                </div>
                <div block="Step">
                    <div block="Step" elem="Bullet"><span>2</span></div>
                    <div block="Step" elem="Check"><span>✔</span></div>
                    <p block="Step" elem="Title">Review & Payments</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div block="ProgressBar">
                { this.renderShippingProgress() }
            </div>
        );
    }
}

export default ProgressBarComponent;
