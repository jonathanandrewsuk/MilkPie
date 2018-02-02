import axios from 'axios';

//= =================== localhost ====================
// This isn't being used, the api url in helpers is where it actually calls fro
const DEFAULT_BASE_URL = process.env.BACKEND_HOST || '';

//= =================== staging ====================


//= =================== production ====================

const DEFAULT_TIMEOUT = 10000;

function getErrorMessage(err) {
  if (err && err.response && err.response.data && err.response.data.error) {
    return err.response.data.error;
  }
  return 'An unexpected error occurred' + err;
}

function getResponseData(res) {
  if (res && res.data) {
    return res.data;
  }
  return res;
}

export class HttpServicesClass {
  constructor(host = DEFAULT_BASE_URL) {
    this.host = host;
    this.user = null;
    this.token = null;
    this.cache = {};

    // provide a way to use methods in an async/await manner
    this.async = this.asyncWrapper();
    // this.async.post = this.postAsync.bind(this);
    // this.async = this.async.bind(this);
  }

  createHeaders() {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    //* ******************* How to handle tokens in this app? ********************
    if (this.token) {
      headers['x-user-token'] = this.token;
    }
    return headers;
  }

  makeRequest(url, method, body, callback) {
    const urlToUse = this.host + url;

    axios({
      url: urlToUse,
      method,
      data: body,
      timeout: DEFAULT_TIMEOUT,
      headers: this.createHeaders(),
    })
      .then(result => callback(null, getResponseData(result)))
      .catch(e => callback(getErrorMessage(e)));
  }

  post(url, body, callback, excludeBaseUrl) {
    this.makeRequest(url, 'post', body, callback, excludeBaseUrl);
  }

  delete(url, body, callback, excludeBaseUrl) {
    this.makeRequest(url, 'delete', body, callback, excludeBaseUrl);
  }

  get(url, callback, excludeBaseUrl) {
    this.makeRequest(url, 'get', null, callback, excludeBaseUrl);
  }

  setToken(token) {
    this.token = token;
  }

  clearToken() {
    this.token = null;
  }

  uploadFile(uploadUrl, fileUrl, fileType, callback) {
    const data = new FormData();
    if (fileUrl) {
      data.append(fileType, {
        uri: fileUrl,
        name: fileType,
        type: 'image/jpg',
      });
    }

    const config = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'x-user-token': this.token,
      },
      body: data,
    };

    console.log('Uploading to ', this.host + uploadUrl);

    fetch(this.host + uploadUrl, config)
      .then(res => res.json())
      .then(success =>
        // console.warn(success.media);
        // return back the res success
        callback(null, success))
      .catch(err =>
        // console.warn(err);
        callback(err));
  }

  asyncWrapper() {
    // callback creator: @returns a function (err, res) => any
    const callback = (resolve, reject) => (err, res) => (err ? reject(err) : resolve(res));

    // api function creator: @returns a Promise that
    // rejects if error is returned (i.e. Promise.reject(err)) and
    // resolves otherwise (i.e. Promise.resolve(res))
    const wrapper = wrappedFunction =>
      new Promise((resolve, reject) => wrappedFunction(resolve, reject));

    // return this.get(url, callback, excludeBaseUrl);
    return {
      makeRequest: (url, method, body, excludeBaseUrl) =>
        wrapper((resolve, reject) =>
          (this.makeRequest(url, method, body, callback(resolve, reject), excludeBaseUrl))),
      delete: (url, body, excludeBaseUrl) =>
        wrapper((resolve, reject) =>
          (this.delete(url, body, callback(resolve, reject), excludeBaseUrl))),
      post: (url, body, excludeBaseUrl) =>
        wrapper((resolve, reject) =>
          (this.post(url, body, callback(resolve, reject), excludeBaseUrl))),
      get: (url, excludeBaseUrl) =>
        wrapper((resolve, reject) =>
          (this.get(url, callback(resolve, reject), excludeBaseUrl))),
      uploadFile: (uploadUrl, fileUrl, fileType) =>
        wrapper((resolve, reject) =>
          (this.uploadFile(uploadUrl, fileUrl, fileType, callback(resolve, reject)))),
    };
  }
}

export default new HttpServicesClass();
