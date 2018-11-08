package com.gibranlara.apiboot.service

import com.gibranlara.apiboot.model.NewProyecto
import com.gibranlara.apiboot.model.Proyecto
import com.gibranlara.apiboot.repository.ProyectoRepository
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

interface ProyectoService {
    // Aquí pueden ir las funciones del servicio y abajo en la implementación implementarlas
    fun findById(id: ObjectId) : Proyecto
    fun findAll(): List<Proyecto>
    fun createProyecto(newproyecto: NewProyecto): NewProyecto
    fun updateProyecto(proyecto: Proyecto): Proyecto
    fun deleteProyecto(id: ObjectId)
}

@Service("proyectoService")
class ProyectoServiceImpl : ProyectoService {
    @Autowired
    lateinit var proyectoRepository: ProyectoRepository

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