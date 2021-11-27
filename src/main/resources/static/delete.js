function del(){
	let data={
		"id": document.querySelector("select").selectedIndex + 1,
	}
	
	var cabecalho = {
        method: "DELETE",
        body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json"
        }
    }

    fetch("http://localhost:8080/deletabaralhos", cabecalho)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("logado",JSON.stringify(res));
			window.location="/baralhos";
            window.alert("Deletado com sucesso! ");
        })
        .catch(err => {
            window.alert("Deu ruim");
        });
}