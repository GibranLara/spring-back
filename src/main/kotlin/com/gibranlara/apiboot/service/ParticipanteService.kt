package com.gibranlara.apiboot.service

import com.gibranlara.apiboot.model.Participante
import com.gibranlara.apiboot.repository.ParticipanteRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

interface ParticipanteService {
    fun findByNomina (nomina: Int) : Participante
}

@Service ("participanteService")
class ParticipanteServiceImp : ParticipanteService{
    @Autowired
    lateinit var participanteRepository: ParticipanteRepository

    override fun findByNomina(nomina: Int): Participante {
        return participanteRepository.findByNomina(nomina)
    }
}
