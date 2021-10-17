function fn (obj) {
  const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const uriRegex = /(^[\w.]+$)/;
  const messageTest = /([<>\\&'"])/;

  if (!obj.method || !validMethods.includes(obj.method)) {
    throw new Error('Invalid request header: Invalid Method');

  }

  if (!obj.uri || obj.uri === '' || !uriRegex.test(obj.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (!obj.version || !validVersions.includes(obj.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (obj.message === undefined || messageTest.test(obj.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return obj;

}

console.log(fn({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
}));