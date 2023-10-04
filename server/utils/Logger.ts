import chalk from 'chalk';

export default class Logger {
  public static info(args: any) {
    return console.log(
      chalk.blue(
        `[${new Date().toDateString()}]  -  [INFO] - ${chalk.blueBright(args)}`
      )
    );
  }
  public static warn(args: any) {
    return console.log(
      chalk.yellow(
        `[${new Date().toDateString()}]  -  [warn] - ${chalk.yellowBright(
          args
        )}`
      )
    );
  }
  public static error(args: any) {
    return console.log(
      chalk.red(
        `[${new Date().toDateString()}]  -  [ERROR] - ${chalk.redBright(args)}`
      )
    );
  }
}
