import { ResponseService } from '../../utils/response.service';

export abstract class BaseController {
  protected readonly responseService: ResponseService;

  constructor() {
    this.responseService = new ResponseService();
  }
}

