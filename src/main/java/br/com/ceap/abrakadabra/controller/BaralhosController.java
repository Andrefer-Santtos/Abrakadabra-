package br.com.ceap.abrakadabra.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.ceap.abrakadabra.beans.Baralhos;
import br.com.ceap.abrakadabra.dao.BaralhosDAO;

@Controller
@CrossOrigin("*")
public class BaralhosController {

	@Autowired
	private BaralhosDAO dao;

	@GetMapping("/baralhos")
	public ResponseEntity<List<Baralhos>> getAll(Model model) {

		ArrayList<Baralhos> lista = (ArrayList<Baralhos>) dao.findAll();
		model.addAttribute("baralhos", lista);

		if (lista.size() == 0) {

			return ResponseEntity.status(404).build();
		}
		return ResponseEntity.ok(lista);
	}

	@PostMapping("/adicionabaralhos")
	public ResponseEntity<Baralhos> salvaBaralhos(@RequestBody Baralhos baralhos) {
		try {
			dao.save(baralhos);
			return ResponseEntity.ok(baralhos);
			
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(403).build();
		}
	}
	
	@DeleteMapping("/deletabaralhos")
	public ResponseEntity<Baralhos> deletaBaralhos(@RequestBody Baralhos baralhos) {
		try {
			dao.delete(baralhos);
			return ResponseEntity.ok(baralhos);
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(403).build();
		}
	}

	@PutMapping("/atualizabaralhos")
	public ResponseEntity<Baralhos> atualizaBaralhos(@RequestBody Baralhos baralhos) {
		try {
			dao.save(baralhos);
			return ResponseEntity.ok(baralhos);
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(403).build();
		}
	}
	
	@GetMapping("/")
	public String index(Model model) {
		ArrayList<Baralhos> lista = (ArrayList<Baralhos>) dao.findAll();
		model.addAttribute("baralhos", lista);
		return "index";
	}
	
	@GetMapping("/create")
	public String create() {
		return "create";
	}
	
	@GetMapping("/update")
	public String update(Model model) {
		ArrayList<Baralhos> lista = (ArrayList<Baralhos>) dao.findAll();
		model.addAttribute("baralhos", lista);
		return "update";
	}
	
	@GetMapping("/delete")
	public String delete(Model model) {
		ArrayList<Baralhos> lista = (ArrayList<Baralhos>) dao.findAll();
		model.addAttribute("baralhos", lista);
		return "delete";
	}
	
}
