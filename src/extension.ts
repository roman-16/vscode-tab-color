import { commands as vscodeCommands, ExtensionContext, window } from 'vscode';

const changeColorCommands = [
  {
    action: 'white',
    color: '#c5cdd3',
  },
  {
    action: 'yellow',
    color: '#c8a984',
  },
  {
    action: 'red',
    color: '#c08872',
  },
  {
    action: 'magenta',
    color: '#c28097',
  },
  {
    action: 'blue',
    color: '#6196b8',
  },
  {
    action: 'cyan',
    color: '#72b7c0',
  },
  {
    action: 'green',
    color: '#72c09f',
  },
  {
    action: 'black',
    color: '#182a35',
  },
  {
    action: 'reset',
    color: '#000000',
  },
];

const activate = (context: ExtensionContext) => {
  changeColorCommands.forEach(({ action, color }) => {
    const disposable = vscodeCommands.registerCommand(`tab-color.changeColor.${action}`, () => {
      window.showInformationMessage(`${action} - ${color}`);
    });

    context.subscriptions.push(disposable);
  });
};

const deactivate = () => {};

export { activate, deactivate };
