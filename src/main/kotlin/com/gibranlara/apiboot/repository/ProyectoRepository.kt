package com.gibranlara.apiboot.repository

import com.gibranlara.apiboot.model.Proyecto
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

interface ProyectoRepository : MongoRepository<Proyecto, String> {
    fun findBy_id(_id:ObjectId) : Proyecto
}