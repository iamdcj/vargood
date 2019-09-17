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
  es3: /^(?:break|continue|delete|else|abstract|boolean|byte|case|catch|char|class|const|debugger|default|for|function|if|in|do|double|enum|export|extends|final|finally|float|goto|implements|new|return|this|typeof|import|instanceof|int|interface|long|native|package|private|protected|public|var|void|while|with|short|static|super|switch|synchronized|throw|throws|transient|try|volatile|)$/,
  es5: /^(?:do|if|in|for|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|delete|export|import|return|switch|typeof|default|extends|finally|continue|debugger|function|arguments|instanceof)$/,
  es5Strict: /^(?:break|case|catch|continue|debugger|default|in|extends|import|do|else|finally|for|function|if|try|super|instanceof|new|return|switch|this|throw|class|const|typeof|var|void|while|with|delete|enum|export|implements|interface|yield|let|private|public|package|protected|static)$/,
  es6: /^(?:break|case|catch|class|const|continue|debugger|if|try|do|else|export|extends|finally|for|function|throw|await|in|instanceof|new|return|super|switch|this|delete|typeof|var|void|while|with|yield|default|import)$/,
  es6Strict: /^(?:break|case|catch|class|const|continue|debugger|if|try|do|else|export|extends|finally|for|function|throw|await|in|instanceof|new|return|super|switch|this|delete|typeof|var|void|while|with|yield|default|import|let|implements|package|protected|static|interface|private|public)$/,
  warning: /^(?:nan|NaN|undefined|Infinity)$/i
};

const messages = {
  keyword: 'Desired identifier conflicts with a keyword.',
  format:
    'Desired identifier cannot contain spaces. Identifier must start with A-Z, $, or _',
  sketchy: "⚠️ You can, but you shouldn't",
  valid: 'All Good 👍'
};

export { keywords, format, versions, messages };
