import { IaService } from './ia.service';
import { Create, Update, Delete } from './dto/ia.dto';
export declare class IaController {
    private readonly iaService;
    constructor(iaService: IaService);
    list(): any;
    create(data: Create): any;
    update(data: Update): any;
    delete(data: Delete): any;
}
