package org.example.rest;

import org.example.model.entity.Cliente;
import org.example.model.entity.ServicoPrestado;
import org.example.model.repository.ClienteRepository;
import org.example.model.repository.ServicoPrestadoRepository;
import org.example.rest.dto.ServicoPrestadoDTO;
import org.example.rest.util.BigDecimalConverter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@RestController
@RequestMapping("/api/servicos-prestados")
public class ServicoPrestadoController {

    private final ClienteRepository clienteRepository;
    private final ServicoPrestadoRepository servicoPrestadoRepository;
    private final BigDecimalConverter bigDecimalConverter;

    public ServicoPrestadoController(ClienteRepository clienteRepository, ServicoPrestadoRepository servicoPrestadoRepository, BigDecimalConverter bigDecimalConverter) {
        this.clienteRepository = clienteRepository;
        this.servicoPrestadoRepository = servicoPrestadoRepository;
        this.bigDecimalConverter = bigDecimalConverter;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServicoPrestado salvar( @RequestBody ServicoPrestadoDTO dto ){
        //LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));


        Integer idCliente = dto.getIdCliente();
        Cliente cliente  =
                clienteRepository
                        .findById(idCliente)
                        .orElseThrow(() ->
                                new ResponseStatusException(
                                        HttpStatus.BAD_REQUEST,"Cliente inexistente"));


        ServicoPrestado servicoPrestado = new ServicoPrestado();
        servicoPrestado.setDescricao(dto.getDescricao());
        servicoPrestado.setData( LocalDate.now() );
        servicoPrestado.setCliente(cliente);
        servicoPrestado.setValor( bigDecimalConverter.converter(dto.getPreco() ));

        return servicoPrestadoRepository.save(servicoPrestado);
    }
}
