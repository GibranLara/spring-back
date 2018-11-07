package com.gibranlara.apiboot.controller

import com.gibranlara.apiboot.model.Proyecto
import com.gibranlara.apiboot.service.ProyectoService
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*


// La anotación @RequestMapping especifica la URL base que el controlador manejará, por lo que cualquier solicitud al host que comience con
// "/proyectos" se dirigirá a este controlador.

// La anotación @Autowired crea una instancia del objeto PetsRepository que nos permitirá acceder y modificar la base de datos de mascotas

// The @RestController annotation combines the @Controller and @ResponseBody annotations.

// GetMapping is a composed annotation that acts as a shortcut for @RequestMapping(method = RequestMethod.GET)

@RestController
@RequestMapping("/proyectos")
class  ProyectoController {
    @Autowired
    lateinit var proyectoService : ProyectoService

    @GetMapping("/all")
    fun getProyectos(): List<Proyecto> = proyectoService.findAll();

    @GetMapping("/proyecto/{id}")
    fun getProyectoById(@PathVariable id:ObjectId) : Proyecto = proyectoService.findById(id)

    @PostMapping("/")
    fun createProyecto(proyecto: Proyecto): Proyecto {
        return proyectoService.createProyecto(proyecto)
    }

    @RequestMapping("/", method = arrayOf(RequestMethod.POST))
    fun createProyeto2(@RequestBody proyecto: Proyecto): Proyecto{
        return proyectoService.createProyecto(proyecto)
    }

    @PutMapping("/")
    fun updateProyecto(proyecto: Proyecto) = proyectoService.updateProyecto(proyecto)

    @DeleteMapping("/proyecto/{id}")
    fun deleteProyecto(@PathVariable id: ObjectId) = proyectoService.deleteProyecto(id)



}

