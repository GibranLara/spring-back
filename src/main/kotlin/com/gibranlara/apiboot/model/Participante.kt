package com.gibranlara.apiboot.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Participante(
        @Id
        val id: String,
        val nombre: String,
        val rol: String?,//Puede ser vacío porqué en la creación también lo pude ser
        val area: String,
        val firma: String
) {}

@Document
data class NewParticipante(
        @Id
        val id: String? = ObjectId().toString(),
        var nombre: String = "",
        var rol: String? = "",
        var area: String = "",
        var firma: String =""
) {}

//data class UpdateParticipante(
//        @Id
//        val id: ObjectId,
//        val nombre: String,
//        val rol: String?,//Puede ser vacío porqué en la creación también lo pude ser
//        val area: String,
//        val firma: String
//) {}