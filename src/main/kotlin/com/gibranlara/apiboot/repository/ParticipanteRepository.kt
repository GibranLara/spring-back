package com.gibranlara.apiboot.repository

import com.gibranlara.apiboot.model.Participante
import org.springframework.data.mongodb.repository.MongoRepository

interface ParticipanteRepository : MongoRepository<Participante, String> {
    fun findByNomina(nomina:Int): Participante
}