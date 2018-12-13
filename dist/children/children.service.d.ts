import { Model } from 'mongoose';
import { Children } from './interfaces/children.interface';
import { Create, Update, Delete } from './dto/children.dto';
export declare class ChildrenService {
    private readonly childrenModel;
    constructor(childrenModel: Model<Children>);
    children(): Promise<any>;
    create(data: Create): Promise<any>;
    update(data: Update): Promise<any>;
    delete(data: Delete): Promise<any>;
}
