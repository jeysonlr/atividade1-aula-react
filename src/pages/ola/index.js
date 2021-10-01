import { useHistory } from "react-router";

export default function PagesOla() {
    const history = useHistory();

    function onSubmit() {
        history.push("/calculadora");
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="PagesOla">
                <h1>Olá Usuário</h1>
                <button type="submit">
                    Acessar calculadora
                </button>
            </div>
        </form>
    );
}
