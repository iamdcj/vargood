const format = /^(?:[\$A-Z_a-z])*$/;

interface Keywords {
  [es3: string]:  RegExp;
  es5: RegExp;
  es5Strict:  RegExp;
  es6:  RegExp;
  es6Strict: RegExp;
  warning: RegExp;
}

const keywords: Keywords = {
  es3: /^(?:int|byte|char|goto|long|final|float|short|double|native|throws|boolean|abstract|volatile|transient|synchronized)$/,
  es5: /^(?:do|if|in|for|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|delete|export|import|return|switch|typeof|default|extends|finally|continue|debugger|function|arguments|instanceof)$/, 
  es5Strict:  /^(?:do|if|in|for|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|delete|export|import|return|switch|typeof|default|extends|finally|continue|debugger|function|arguments|instanceof|implements|let|private|public|yield|interface|package|protected|static)$/,
  es6: /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|await|break|catch|class|const|super|throw|while|yield|delete|export|import|return|static|switch|typeof|default|extends|finally|package|continue|debugger|function|arguments|instanceof)$/,
  es6Strict: /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|await|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof|implements|private|public|interface|package|protected)$/,
  warning: /^(?:nan|NaN|undefined|Infinity)$/i
}

const messages = {
  keyword: 'Desired identifier conflicts with a keyword.',
  format:
    'Desired identifier cannot contain spaces. Identifier must start with A-Z, $, or _',
  sketchy: `You can, but you shouldn't, here's why: `,
  valid: 'All Good 👍'
};

export { keywords, format, messages };
