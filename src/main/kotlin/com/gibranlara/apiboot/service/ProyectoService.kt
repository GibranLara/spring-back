package com.gibranlara.apiboot.service

import com.gibranlara.apiboot.model.NewProyecto
import com.gibranlara.apiboot.model.Proyecto
import com.gibranlara.apiboot.repository.ProyectoRepository
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.repository.support.PageableExecutionUtils
import org.springframework.stereotype.Service

interface ProyectoService {
    // Aquí pueden ir las funciones del servicio y abajo en la implementación implementarlas
    fun findById(id: ObjectId) : Proyecto
    fun findAll(): List<Proyecto>
    fun createProyecto(newproyecto: NewProyecto): NewProyecto
    fun updateProyecto(proyecto: Proyecto): Proyecto
    fun deleteProyecto(id: ObjectId)
    fun pagedProyectos(page:Int, size:Int): List<Proyecto>;
}

@Service("proyectoService")
class ProyectoServiceImpl : ProyectoService {
    @Autowired
    lateinit var proyectoRepository: ProyectoRepository

    @Autowired
    lateinit var mongoTemplate: MongoTemplate

    override fun pagedProyectos(page:Int, size:Int): List<Proyecto> {
        val pageable = PageRequest.of(page, size)

        val proyectosQueryDinamica = Query().with(pageable)
        // Add criteria's according to your wish to patientsDynamicQuery
        val proyectosFiltrados = mongoTemplate.find(proyectosQueryDinamica, Proyecto::class.java, "proyectos")
        val proyectoPagina = PageableExecutionUtils.getPage(
                proyectosFiltrados,
                pageable
        ) { mongoTemplate.count(proyectosQueryDinamica, Proyecto::class.java) }
        return proyectosFiltrados
    }

    //Obtener un proyecto
    override fun findById(id: ObjectId): Proyecto = proyectoRepository.findById(id)

    //Obtener todos los proyectos
    override fun findAll(): List<Proyecto> = proyectoRepository.findAll()

    //Crear un proyecto
    override fun createProyecto(newProyecto: NewProyecto): NewProyecto = proyectoRepository.insert(newProyecto)

    //Actualizar un proyecto
    override fun updateProyecto(proyecto: Proyecto):Proyecto = proyectoRepository.save(proyecto)

    //Eliminar un proyecto
    override fun deleteProyecto(id:ObjectId) = proyectoRepository.deleteById(id)
}