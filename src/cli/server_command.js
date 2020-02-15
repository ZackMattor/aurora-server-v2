import { Devices } from '../devices';
import { RestApi } from '../services/rest_api';

export class ServerCommand {
  constructor() {
    this.devices = new Devices();
    this.rest_api = new RestApi(this.devices);
  }

  start() {
    this.rest_api.start();
  }

  stop() {
    this.rest_api.stop();
  }
};
