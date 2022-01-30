const httpRequest = new XMLHttpRequest;
let url = "";
let response = "";

const txtEndereco = document.getElementById("endereco");
const txtBairro = document.getElementById("bairro");
const txtCidade = document.getElementById("cidade");
const txtUf = document.getElementById("uf");

function getDadosPorCep(el) {
    cep = el.value;

    url = "https://viacep.com.br/ws/" + cep + "/json/unicode/";

    httpRequest.open("GET", url);
    
    httpRequest.onreadystatechange = () => {
        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            response = JSON.parse(httpRequest.responseText);
            
            txtEndereco.value = response.logradouro;
            txtBairro.value = response.bairro;
            txtCidade.value = response.localidade;
            txtUf.value = response.uf;
        }
    }

    httpRequest.send();
}