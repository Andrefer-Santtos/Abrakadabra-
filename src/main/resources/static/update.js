function update(){
	let data={
		"select": document.querySelector("select").options[document.querySelector("select").selectedIndex].text,
		"img": document.querySelectorAll("input")[0].value,
		"nome": document.querySelectorAll("input")[1].value,
		"descricao": document.querySelectorAll("input")[2].value
	}
	
	var cabecalho = {
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json"
        }
    }

    fetch("http://localhost:8080/atualizabaralhos", cabecalho)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("logado",JSON.stringify(res));
			window.location="/baralhos";
            window.alert("Salvo com sucesso! ");
        })
        .catch(err => {
            window.alert("Deu ruim");
        });
}