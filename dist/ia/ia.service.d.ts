import { Model } from 'mongoose';
import { Ia } from './interfaces/ia.interface';
import { Create, Update, Delete } from './dto/ia.dto';
export declare class IaService {
    private readonly iaModel;
    constructor(iaModel: Model<Ia>);
    ias(): Promise<any>;
    create(data: Create): Promise<any>;
    update(data: Update): Promise<any>;
    delete(data: Delete): Promise<any>;
}
