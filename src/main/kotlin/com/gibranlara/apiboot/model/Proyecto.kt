package com.gibranlara.apiboot.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.TypeAlias
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "proyectos")
@TypeAlias("proyecto")
data class Proyecto (
        @Id
        val _id: ObjectId,
        val nombre: String,
        val area: String,
        val fecha:String
)
{
}