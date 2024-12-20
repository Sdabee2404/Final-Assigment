import { AxesHelper } from 'three';
import { IfcComponent } from '../../base-types';
import { disposeMeshRecursively } from '../../utils/ThreeUtils';
export class IfcAxes extends IfcComponent {
    constructor(context) {
        super(context);
        this.context = context;
        this.enabled = false;
    }
    dispose() {
        if (this.axes) {
            disposeMeshRecursively(this.axes);
        }
        this.axes = null;
    }
    get active() {
        return this.enabled;
    }
    set active(state) {
        var _a;
        if (state && !this.axes) {
            this.setAxes();
            return;
        }
        const scene = this.context.getScene();
        // eslint-disable-next-line
        state ? scene.add(this.axes) : (_a = this.axes) === null || _a === void 0 ? void 0 : _a.removeFromParent();
        this.enabled = state;
    }
    setAxes(size) {
        if (this.axes) {
            if (this.axes.parent)
                this.axes.removeFromParent();
            this.axes.geometry.dispose();
        }
        this.axes = new AxesHelper(size);
        this.axes.material.depthTest = false;
        this.axes.renderOrder = 2;
        const scene = this.context.getScene();
        scene.add(this.axes);
        this.context.renderer.postProduction.excludedItems.add(this.axes);
        this.enabled = true;
    }
}
//# sourceMappingURL=axes.js.map