import data from "../config/data.json"
import FormComponent from "../components/FormComponent"

const Login = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
            <img
                className="w-full h-screen object-cover hidden lg:block"
                src={data.img}
                alt="Imagem de fundo da tela de login"
            />

            <div className="bg-orange-300 flex flex-col justify-center">
                <FormComponent />
            </div>
        </section>
    )
}

export default Login