import { Devices} from '../devices';
import { RestApi } from '../services/rest_api';

export class ReplCommand {
  constructor(device_addr) {
    this.device_addr = device_addr;
  }

  run() {
    console.log(`Hello from REPL! ${this.device_addr}`);
  }
};
