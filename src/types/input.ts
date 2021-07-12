export interface InputProps {
  label: string;
  inputType: string;
  errorMessage?: string;
  placeholder: string;
  error?: boolean;
  onChange: (param: any) => void;
}
