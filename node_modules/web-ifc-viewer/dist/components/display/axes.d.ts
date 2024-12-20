import { AxesHelper } from 'three';
import { IfcComponent } from '../../base-types';
import { IfcContext } from '../context';
export declare class IfcAxes extends IfcComponent {
    private context;
    axes?: AxesHelper;
    private enabled;
    constructor(context: IfcContext);
    dispose(): void;
    get active(): boolean;
    set active(state: boolean);
    setAxes(size?: number): void;
}
