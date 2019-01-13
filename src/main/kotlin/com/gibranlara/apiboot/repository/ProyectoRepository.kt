package com.gibranlara.apiboot.repository

import com.gibranlara.apiboot.model.NewProyecto
import com.gibranlara.apiboot.model.Proyecto
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

interface ProyectoRepository : MongoRepository<Proyecto, String> {
    fun findById(id: ObjectId): Proyecto
    override fun findAll(): List<Proyecto>
    fun insert(proyecto: NewProyecto): NewProyecto
    fun save(proyect: Proyecto): Proyecto
    fun deleteById(id: ObjectId)
}
