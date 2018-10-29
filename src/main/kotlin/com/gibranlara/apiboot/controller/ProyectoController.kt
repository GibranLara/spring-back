package com.gibranlara.apiboot.controller

import com.gibranlara.apiboot.model.Proyecto
import com.gibranlara.apiboot.service.ProyectoService
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.util.concurrent.atomic.AtomicLong

@RestController
class  ProyectoController {
    @Autowired
    lateinit var proyectoService : ProyectoService

    @GetMapping("/proyecto/{id}")
    fun getProyectoById(@PathVariable id:ObjectId) : Proyecto = proyectoService.findBy_id(id)
}

// The @RestController annotation combines the @Controller and @ResponseBody annotations.
// GetMapping en la unión de