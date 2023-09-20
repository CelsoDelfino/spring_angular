package org.example.rest;

import jakarta.validation.Valid;
import org.example.model.entity.Usuario;
import org.example.model.repository.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {
    private final UsuarioRepository repository;
    public UsuarioController(UsuarioRepository repository){
        this.repository = repository;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void salvar(@RequestBody @Valid Usuario usuario){
        repository.save(usuario);
    }
}
