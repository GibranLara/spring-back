package com.gibranlara.apiboot.controller

import com.gibranlara.apiboot.model.NewProyecto
import com.gibranlara.apiboot.model.NewReunion
import com.gibranlara.apiboot.model.Proyecto
import com.gibranlara.apiboot.pojo.FirmaParticipanteRequest
import com.gibranlara.apiboot.service.ProyectoService
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import java.io.File
import java.util.*
import org.springframework.data.repository.support.PageableExecutionUtils
import org.springframework.data.domain.Page
import sun.security.krb5.internal.KDCOptions.with
import org.springframework.data.domain.PageRequest
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Query


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

    // @CrossOrigin(origins = arrayOf("http://localhost:4873"))
    @GetMapping ("/proyectospaginados", params = ["page", "size"])
    fun getProyectosPaginados(@RequestParam("page")page:Int, @RequestParam("size")size:Int): Page<Proyecto> {
        return proyectoService.pagedProyectos(page, size)
    }

    // Retornar todos los proyectos
    @GetMapping("/all")
    fun getProyectos(): List<Proyecto> = proyectoService.findAll();

    // Regresa un proyecto buscado por ID
    @GetMapping("/proyecto/{id}")
    fun getProyectoById(@PathVariable id:ObjectId) : Proyecto = proyectoService.findById(id)

    // Crea un nuevo proyecto
    @PostMapping("/")
    fun createProyecto(@RequestBody newProyecto: NewProyecto): NewProyecto = proyectoService.createProyecto(newProyecto)

    // Actualiza un nuevo proyecto
    @PutMapping("/")
    fun updateProyecto(@RequestBody proyecto: Proyecto) = proyectoService.updateProyecto(proyecto)

    // Borra un nuevo proyecto por ID
    @DeleteMapping("/proyecto/{id}")
    fun deleteProyecto(@PathVariable id: ObjectId) {
        proyectoService.deleteProyecto(id)
    }

    // Actualiza el campo firma de un proyecto
    @PutMapping("/participante/firma")
    fun actualizarFirmaParticipante(@RequestBody firmaRequest: FirmaParticipanteRequest) : Proyecto {
        var proyecto: Proyecto = proyectoService.findById(ObjectId(firmaRequest.IdProyecto))

        var rutaImagen = "C:\\firmas\\" + firmaRequest.NoNomina + ".png"
        var imagenCodificada =  firmaRequest.DataUri.split(",")[1]
        decoder(imagenCodificada, rutaImagen)

        var reunion = proyecto.reuniones!!.find {
            reunion -> reunion.id == firmaRequest.IdReunion
        }

        var participante = reunion!!.participantes!!.find {
            participante -> participante.nomina == firmaRequest.NoNomina
        }

        val indexReunion = proyecto.reuniones!!.indexOf(reunion)
        var indexParticipante = proyecto.reuniones!![indexReunion].participantes!!.indexOf(participante)

        // Originalmente iba a guardar la ruta de la imagen del file system
        // es una idea a mejorar, hasta ahora solo guardo el base64 como tal.
        // La funcionalidad de guardar las imagenes en el una carpeta ya está implementanda.
        proyecto.reuniones!![indexReunion].participantes!![indexParticipante].firma = firmaRequest.DataUri

        return proyectoService.updateProyecto(proyecto)
    }

    // Decodifica un string base64 y lo clo guarda como archivo en el file system
    fun decoder(base64Str: String, pathFile: String): Unit{
        val imageByteArray = Base64.getDecoder().decode(base64Str)
        File( pathFile).writeBytes(imageByteArray)
    }
}

