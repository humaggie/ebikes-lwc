import { LightningElement, track , api} from 'lwc';
import getHealthValue from '@salesforce/apex/OrderController.getHealthValue';

export default class HealthIndicator extends LightningElement {
    @track value = "5";
    @track error;

    @api intValue;
    @api green = 5;
    @api yellow = 3;

    get intValue() {
        return parseInt(this.value, 10);
    }

    get style() {
        return (this.intValue >= this.green)?
            "background-color: green;":(this.intValue>=this.yellow)?
             "background-color: yellow;":"background-color: red;";
    }

    handleChange(event) {
        this.value = event.target.value;
    }

        
    handleHealthValue() {
        getHealthValue().then(result => {
            this.value = result;
            this.error = undefined;
        })
        .catch(error => {
            this.value = undefined;
            this.error = error;
        })
    }
}