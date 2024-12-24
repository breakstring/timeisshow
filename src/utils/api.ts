import { ImageResponse } from '../types/api';

const API_BASE_URL = 'https://api.timeis.show';
const IMAGE_BASE_URL = 'https://pics.timeis.show';

export async function fetchTimeImage(timeFlag: string): Promise<ImageResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time_flag: timeFlag }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching image:', error instanceof Error ? error.message : 'Unknown error');
    return { success: false, data: null };
  }
}

export function constructImageUrl(filePath: string, fileName: string): string {
  return `${IMAGE_BASE_URL}/${filePath}/${fileName}`;
}