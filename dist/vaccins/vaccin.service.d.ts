import { Model } from 'mongoose';
import { Vaccin } from './interfaces/vaccin.interface';
import { Create, Update, Delete } from './dto/vaccin.dto';
export declare class VaccinService {
    private readonly vaccinModel;
    constructor(vaccinModel: Model<Vaccin>);
    vaccins(): Promise<any>;
    create(data: Create): Promise<any>;
    update(data: Update): Promise<any>;
    delete(data: Delete): Promise<any>;
}
