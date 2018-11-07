package com.gibranlara.apiboot.model

import com.fasterxml.jackson.annotation.JsonCreator
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.TypeAlias
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "proyectos")
@TypeAlias("proyecto")
data class Proyecto (
        @Id
        var id: String?,
        var nombre: String,
        var area: String,
        var fecha:String
)