package com.gibranlara.apiboot.model

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.TypeAlias
import org.springframework.data.mongodb.core.mapping.Document

// Los atributos con tipo de dato val son INMUTABLES, es decir de solo lectura, los de tipo
// Los atributos con tipo de dato var son VARIABLE, ed decir se pueden sobreescribir datos.
@Document(collection = "proyectos")
@TypeAlias("proyecto")
data class Proyecto (
        @Id
        val id: String,
        val nombre: String,
        val area: String,
        val fecha:String,
        val reuniones: List<Reunion>?
){}

@Document(collection = "proyectos")
@TypeAlias("newproyecto")
data class NewProyecto (
        @Id
        val id: String?,//Es posiblemente nulo porqué se crea automáticamente
        var nombre: String,
        var area: String,
        var fecha:String,
        var reuniones: List<NewReunion>?
){}

//@Document(collection = "proyectos")
//@TypeAlias("proyecto")
//data class UpdateProyecto (
//        @Id
//        val id: String,
//        val nombre: String,
//        val area: String,
//        val fecha:String,
//        val reuniones: List<Reunion>?
//){}