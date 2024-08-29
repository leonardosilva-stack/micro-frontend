export interface InputData {
    type: string;
    placeholder?: string;
    label?: string;      
    name: string;
    value?: string;  
}

export interface FormData {
    img: string;
    title: string;
    inputs: InputData[];
}
