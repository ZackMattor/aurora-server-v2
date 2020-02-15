import program from 'commander';

import { ServerCommand } from './cli/server_command';
import { ReplCommand } from './cli/repl_command';

program
  .command('repl [device_addr]')
  .description('launch the Aurora REPL', {device_addr: 'specific device IP, optional'})
  .action((device_addr) => {
    console.log('Starting the Aurora REPL');
    const repl = new ReplCommand(device_addr);
    repl.run();
  });

program
  .command('server')
  .description('Launch the Aurora Server', {device_addr: 'specific device IP, optional'})
  .action(() => {
    console.log('Starting the Aurora Server');
    const server = new ServerCommand();
    server.start();
  });

program
  .name('npm start')
  .usage('[options] <command>')
  .parse(process.argv);

if(!program.args.length) {
  program.outputHelp();
  process.exit(0);
}
