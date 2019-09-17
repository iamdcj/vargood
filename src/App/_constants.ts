const format = /^[$A-Z_][0-9A-Z_$]*$/i;

interface Keywords {
  [es3: string]: RegExp;
  es5: RegExp;
  es5Strict: RegExp;
  es6: RegExp;
  es6Strict: RegExp;
  warning: RegExp;
}

const versions = ['es6', 'es5', 'es3'];

const keywords: Keywords = {
  es3: /^(?:int|byte|char|goto|long|final|float|short|double|native|throws|boolean|abstract|volatile|transient|synchronized)$/,
  es5: /^(?:do|if|in|for|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|delete|export|import|return|switch|typeof|default|extends|finally|continue|debugger|function|arguments|instanceof)$/,
  es5Strict: /^(?:do|if|in|for|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|delete|export|import|return|switch|typeof|default|extends|finally|continue|debugger|function|arguments|instanceof|implements|let|private|public|yield|interface|package|protected|static)$/,
  es6: /^(?:break|case|catch|class|const|continue|debugger|if|try|do|else|export|extends|finally|for|function|throw|await|in|instanceof|new|return|super|switch|this|delete|typeof|var|void|while|with|yield|default|import)$/,
  es6Strict: /^(?:break|case|catch|class|const|continue|debugger|if|try|do|else|export|extends|finally|for|function|throw|await|in|instanceof|new|return|super|switch|this|delete|typeof|var|void|while|with|yield|default|import|let|implements|package|protected|static|interface|private|public)$/,
  warning: /^(?:nan|NaN|undefined|Infinity)$/i
};

const messages = {
  keyword: '🚫 Desired identifier conflicts with a keyword.',
  format:
    '🚫 Desired identifier cannot contain spaces. Identifier must start with A-Z, $, or _',
  sketchy: "⚠️ You can, but you shouldn't",
  valid: 'All Good 👍'
};

export { keywords, format, versions, messages };
