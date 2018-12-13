import { VaccinService } from './vaccin.service';
import { Create, Update, Delete } from './dto/vaccin.dto';
export declare class VaccinController {
    private readonly vaccinService;
    constructor(vaccinService: VaccinService);
    list(): any;
    create(data: Create): any;
    update(data: Update): any;
    delete(data: Delete): any;
}
