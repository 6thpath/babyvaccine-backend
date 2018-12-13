import { Model } from 'mongoose';
import { Injectr } from './interfaces/injectr.interface';
import { Create, Update, Delete } from './dto/injectr.dto';
export declare class InjectrService {
    private readonly injectrModel;
    constructor(injectrModel: Model<Injectr>);
    injectrs(): Promise<any>;
    create(data: Create): Promise<any>;
    update(data: Update): Promise<any>;
    delete(data: Delete): Promise<any>;
}
