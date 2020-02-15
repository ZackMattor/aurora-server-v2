import express from 'express';

const PORT = process.env.REST_API_PORT || 80;

export class RestApi {
  constructor(devices) {

  }

  start() {
    var app = express();

    app.post('/device/activate', this.onActivate.bind(this));

    this.server = app.listen(PORT);
  }

  stop() {
    if(this.server) this.server.close();
  }

  onActivate(req, res) {
    res.status(404).send('Sorry, we cannot find that!');
  }
}
