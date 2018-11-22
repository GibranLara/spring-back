package com.gibranlara.apiboot.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.TypeAlias
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Reunion(
        val objetivo: String,
        val fecha: String,
        val participantes: List<Participante>?
) {}

@Document
data class NewReunion(
        var objetivo: String,
        var fecha: String,
        var participantes: List<NewParticipante>?
) {}