import { GridHelper } from 'three';
import { IfcComponent } from '../../base-types';
import { disposeMeshRecursively } from '../../utils/ThreeUtils';
export class IfcGrid extends IfcComponent {
    constructor(context) {
        super(context);
        this.context = context;
        this.enabled = false;
    }
    dispose() {
        if (this.grid) {
            disposeMeshRecursively(this.grid);
        }
        this.grid = null;
    }
    get active() {
        return this.enabled;
    }
    set active(state) {
        var _a;
        if (state && !this.grid) {
            this.setGrid();
            return;
        }
        const scene = this.context.getScene();
        // eslint-disable-next-line
        state ? scene.add(this.grid) : (_a = this.grid) === null || _a === void 0 ? void 0 : _a.removeFromParent();
        this.enabled = state;
    }
    setGrid(size, divisions, colorCenterLine, colorGrid) {
        if (this.grid) {
            if (this.grid.parent)
                this.grid.removeFromParent();
            this.grid.geometry.dispose();
        }
        this.grid = new GridHelper(size, divisions, colorCenterLine, colorGrid);
        this.grid.renderOrder = 0;
        const scene = this.context.getScene();
        scene.add(this.grid);
        this.context.renderer.postProduction.excludedItems.add(this.grid);
        this.enabled = true;
    }
}
//# sourceMappingURL=grid.js.map