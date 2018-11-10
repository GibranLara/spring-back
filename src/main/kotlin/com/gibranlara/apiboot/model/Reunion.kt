package com.gibranlara.apiboot.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.TypeAlias
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Reunion(
        @Id
        val id: String,
        val objetivo: String,
        val fecha: String,
        val participantes: List<Participante>?
) {}

@Document
data class NewReunion(
        @Id
        var id: String? = ObjectId().toHexString(),
        var objetivo: String = "",
        var fecha: String = "",
        var participantes: List<NewParticipante>? = null
) {
}


//data class UpdateReunion(
//        @Id
//        val id: ObjectId,
//        val objetivo: String,
//        val fecha:String,
//        val participantes: List<UpdateParticipante>?
//){}