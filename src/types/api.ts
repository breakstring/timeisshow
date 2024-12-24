export interface ImageResponse {
  success: boolean;
  data: ImageData | null;
}

export interface ImageData {
  id: string;
  created_at: number;
  file_path: string;
  file_name: string;
  width: number;
  height: number;
  time_flag: string;
  style_type?: string;
  style_name?: string;
  generate_engine?: string;
  generate_model?: string;
  generate_prompt?: string;
  generate_server?: string;
  disabled?: number;
}