import { IfcState } from '../BaseDefinitions';
export declare class IFCUtils {
    state: IfcState;
    map: {
        [key: string]: number;
    };
    constructor(state: IfcState);
    isA(entity: any, entity_class: string): string | boolean | Promise<string>;
    byId(modelID: number, id: number): Promise<any>;
    idsByType(modelID: number, entity_class: string): Promise<import("web-ifc").Vector<number>>;
    byType(modelID: number, entity_class: string): Promise<number[] | undefined>;
}
