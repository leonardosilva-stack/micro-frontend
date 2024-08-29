import data from "../config/data.json";
import InputComponent from "./InputComponent";
import { FormData } from "../config/types";
import ButtonComponent from "./ButtonComponent";
import { validatePassword } from "../helpers/validation";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_GET } from "../services/api";

const FormComponent = () => {
  const formData: FormData = data;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Adicione o useEffect para verificar o login
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogin = async () => {
    const passwordError = validatePassword(password);
    if (passwordError) {
      setErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    const { url, options } = USER_GET(username);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.length === 0) {
        console.error('Usuário não encontrado.');
        return;
      }

      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      }

      navigate('/dashboard');
      console.log('Login realizado com sucesso:', data);
    } catch (error) {
      console.error('Erro ao realizar login:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <form
      action=""
      className="max-w-[400px] w-full mx-auto bg-white-200 p-8 px-8 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-4xl font-bold text-orange-500 text-center">
        {formData.title}
      </h2>

      {formData.inputs.map((item, index) => (
        <InputComponent
          key={index}
          style="rounded-lg bg-white mt-2 p-2 w-full text-gray-800"
          placeholder={item.placeholder}
          type={item.type}
          name={item.name}
          value={item.type === 'text' ? username : password}
          label={item.label}
          error={errors[item.name] || ''}
          onChange={(e) => {
            if (item.type === 'text') {
              setUsername(e.target.value);
            } else if (item.type === 'password') {
              setPassword(e.target.value);
            } else if (item.type === 'checkbox') {
              setRememberMe(e.target.checked);
            }
          }}
        />
      ))}

      <ButtonComponent buttonText="Login" style="bg-orange-300 hover:bg-orange-700 rounded-lg px-2 py-4 font-bold text-white" />
    </form>
  );
};

export default FormComponent;
