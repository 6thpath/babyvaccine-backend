import { ChildrenService } from './children.service';
import { Create, Update, Delete } from './dto/children.dto';
export declare class ChildrenController {
    private readonly childrenService;
    constructor(childrenService: ChildrenService);
    list(): any;
    create(data: Create): any;
    update(data: Update): any;
    delete(data: Delete): any;
}
