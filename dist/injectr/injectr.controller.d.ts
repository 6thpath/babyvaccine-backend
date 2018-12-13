import { InjectrService } from './injectr.service';
import { Create, Update, Delete } from './dto/injectr.dto';
export declare class InjectrController {
    private readonly injectrService;
    constructor(injectrService: InjectrService);
    list(): any;
    create(data: Create): any;
    update(data: Update): any;
    delete(data: Delete): any;
}
