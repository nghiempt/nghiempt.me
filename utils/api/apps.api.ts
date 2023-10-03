import {ApiUrl} from '../apiUrl';

export default async function createAppPOST(payload: any) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(ApiUrl.GET_ALL_APPS, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to create');
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
