const { REACT_APP_API_URL } = process.env;

const ERROR_NETWORK_MSG = 'Network Error';

async function handleCommonResponse(response) {
  if (response.ok) {
    try {
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return {
        success: true,
        data: null,
      };
    }
  } else if (response.status === 400) {
    try {
      const result = await response.json();
      return {
        success: false,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
      };
    }
  }
  throw new Error('Network Error');
}

export async function sendUploadRequest(path, data, options = {}) {
  const url = `${REACT_APP_API_URL}/${path}`;
  const headers = options.headers || new Headers();
  const { authToken } = options;
  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }

  const response = await fetch(url, {
    method: 'PUT',
    body: data,
    headers,
    credentials: 'include',
  });

  return handleCommonResponse(response);
}

export async function sendRequest(path, options) {
  const url = `${REACT_APP_API_URL}/${path}`;
  const headers = options.headers || new Headers();
  const { authToken } = options;
  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
    credentials: 'include',
  });
  if (response.ok) {
    try {
      const { data, body, content } = await response.json();
      return {
        success: true,
        data,
        body,
        content,
        response,
      };
    } catch (error) {
      return {
        success: true,
        data: null,
        body: null,
        content: null,
        response,
      };
    }
  }
  throw new Error('Error in request');
}

export async function sendRawRequest(path, options) {
  const url = `${REACT_APP_API_URL}/${path}`;
  const headers = options.headers || new Headers();
  const { authToken } = options;
  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
    credentials: 'include',
  });
  if (response.ok) {
    try {
      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        data: error,
      };
    }
  }
  throw new Error('Error in request');
}

export async function sendPostRequestRaw(path, data, options = {}) {
  const url = `${REACT_APP_API_URL}/${path}`;
  const headers = new Headers();
  headers.append('content-type', 'application/json');
  const { authToken } = options;
  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (response.ok) {
    try {
      const { headers, body } = response;
      return {
        success: true,
        data: {
          headers,
          body,
        },
      };
    } catch (error) {
      return {
        success: true,
        data: null,
      };
    }
  } else if (response.status === 400) {
    return {
      success: false,
      data: null,
    };
  }
  throw new Error('Network Error');
}

export async function sendPostRequest(path, data, options) {
  const url = `${REACT_APP_API_URL}/${path}`;
  const headers = options.headers || new Headers();
  headers.append('content-type', 'application/json');

  const { authToken } = options;
  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (response.ok) {
    try {
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return {
        success: true,
        data: null,
        error,
      };
    }
  } else if (response.status === 400) {
    try {
      const result = await response.json();
      return {
        success: false,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error,
      };
    }
  }
  throw new Error('Network Error');
}

export async function sendFormRequest(path, data, options) {
  const url = `${REACT_APP_API_URL}/${path}`;
  const headers = new Headers();
  const { authToken } = options;
  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: data,
  });

  return handleCommonResponse(response);
}

export async function sendPutRequest(path, data, options) {
  const url = `${REACT_APP_API_URL}/${path}`;
  const headers = options.headers || new Headers();
  headers.append('content-type', 'application/json');
  if (options.authToken) {
    headers.append('authorization', `Bearer ${options.authToken}`);
  }

  const response = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (response.ok) {
    try {
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return {
        success: true,
        data: null,
      };
    }
  } else if (response.status === 400) {
    try {
      const result = await response.json();
      return {
        success: false,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
      };
    }
  }
  return {
    data: null,
    success: false,
  };
}

export async function sendPatchRequest(path, data, options) {
  const url = `${REACT_APP_API_URL}/${path}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: options.headers || new Headers(),
    body: JSON.stringify(data),
    credentials: 'include',
  });

  const headers = options.headers || new Headers();
  headers.append('content-type', 'application/json');
  if (options.authToken) {
    headers.append('authorization', `Bearer ${options.authToken}`);
  }

  return handleCommonResponse(response);
}

export async function sendDeleteRequest(path, options) {
  const headers = options.headers || new Headers();
  headers.append('content-type', 'application/json');
  if (options.authToken) {
    headers.append('authorization', `Bearer ${options.authToken}`);
  }

  const url = `${REACT_APP_API_URL}/${path}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers,
    credentials: 'include',
  });
  if (response.ok) {
    try {
      const { data } = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: true,
        data: null,
      };
    }
  }
  throw new Error('Error in request');
}
export function formatApiUrl(path) {
  return `${REACT_APP_API_URL}/${path}`;
}

export async function sendCustomRequest(path, options, data, method = 'get') {
  const headers = options.headers || new Headers();
  headers.append('content-type', 'application/json');
  if (options.authToken) {
    headers.append('authorization', `Bearer ${options.authToken}`);
  }

  const url = `${REACT_APP_API_URL}/${path}`;
  const response = await fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
    credentials: 'include',
  });

  const json = await response.json();

  return {
    data: json,
    success: response.ok,
    status: response.status,
  };
}
