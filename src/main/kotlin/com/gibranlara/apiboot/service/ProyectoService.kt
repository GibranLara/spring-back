package com.gibranlara.apiboot.service

import com.gibranlara.apiboot.model.Proyecto
import com.gibranlara.apiboot.repository.ProyectoRepository
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

interface ProyectoService {
    // Aquí pueden ir las funciones del servicio y abajo en la implementación implementarlas
    fun findBy_id(id: ObjectId) : Proyecto
}

@Service("proyectoService")
class ProyectoServiceImpl : ProyectoService {
    @Autowired
    lateinit var proyectoRepository: ProyectoRepository

    override fun findBy_id(id: ObjectId): Proyecto = proyectoRepository.findBy_id(id)

}